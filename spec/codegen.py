import json
import re
import argparse
from datetime import datetime

def _fieldname(x):
    name = x['xml'].strip()
    valid = name.split('/')[-1]
    assert valid.startswith('@') or valid=='text()', 'XPath is neither an attribute nor a text() field: %s' % name
    assert not '_' in name
    name = name.replace('xml:lang','lang')
    name = name.replace('-','_')
    name = name.replace('/','__')
    name = name.replace('@','')
    name = name.replace('()','')
    assert re.match(r'^[A-Za-z0-9_]+$',name),name
    assert len(name), x
    return name

def _typename(x):
    typenames = {
            '' : 'UnicodeText',
            'mixed' : 'UnicodeText',
            'Text' : 'UnicodeText',
            'Decimal'  : 'Float',
            'Integer'  : 'Float',
            'xsd:int'  : 'Float',
            'xsd:integer'  : 'Float',
            'xsd:NMTOKEN'  : 'UnicodeText',
            'Boolean'  : 'Boolean',
            'xsd:anyURI'  : 'UnicodeText',
            'DateTime'  : 'DateTime',
            }
    return typenames[ x['format'] ]

def _nav(x):
    path = x['xml'].strip().split('/')
    pathcode = ','.join( '\'%s\''%x for x in path[:-1] )
    typename = _typename(x)
    typeparser = ''
    if typename=='DateTime': typeparser = ', parser=_parse_datetime'
    if typename=='Float': typeparser = ', parser=_parse_float'
    if typename=='Boolean': typeparser = ', parser=_parse_boolean'
    if path[-1]=='text()':
        return '_nav(logger, xml, [%s], text=True%s)' % ( pathcode, typeparser )
    elif path[-1].startswith('@'):
        attrib = path[-1][1:]
        return '_nav(logger, xml, [%s], attrib=\'%s\'%s)' % ( pathcode, attrib, typeparser )
    assert False,'I can\'t process this path: %s' % x['xml']

def _parser_fields(filename):
    with open(filename,'r') as f:
        data = json.load(f)
    out = []
    for x in data:
        name = _fieldname(x)
        typename = _typename(x)
        nav = _nav(x)
        out.append('# '+x['xml'])
        out.append('data[\'%s\'] = %s' % (name,nav))
    return out

def _model_fields(filename):
    with open(filename,'r') as f:
        data = json.load(f)
    out = []
    for x in data:
        name = _fieldname(x)
        typename = _typename(x)
        xpath = x['xml']
        out.append('%s = Column(%s)\t# %s' % (name,typename,xpath))
    return out

def generate_parser():
    print 'def _parse_activity(logger,xml):'
    print '    data = {}'
    for x in _parser_fields('spec/spec-activity.json'): print '    '+x
    print '    return Activity(**data)'
    print ''
    print 'def _parse_transaction(logger,xml):'
    print '    data = {}'
    for x in _parser_fields('spec/spec-transaction.json'): print '    '+x
    print '    return Transaction(**data)'

def generate_models():
    print '# These classes to be pasted into model.py'
    print '# Autogenerated on %s' % (datetime.now())
    print 'class Activity(Base):'
    print '    __tablename__ = \'activity\''
    print '    id = Column(Integer, primary_key=True)'
    print '    parent_resource = Column(UnicodeText, ForeignKey(\'indexed_resource.id\'), nullable=False)'
    for x in _model_fields('spec/spec-activity.json'): print '    '+x
    print ''
    print 'class Transaction(Base):'
    print '    __tablename__ = \'transaction\''
    print '    id = Column(Integer, primary_key=True)'
    print '    parent_resource = Column(UnicodeText, ForeignKey(\'indexed_resource.id\'), nullable=False)'
    for x in _model_fields('spec/spec-transaction.json'): print '    '+x
    print ''

if __name__=='__main__':
    parser = argparse.ArgumentParser(description='Scrape the buddypress user DB into our activity DB')
    parser.add_argument('mode', choices=['parser','model'], help='Code to generate. Either the parser code for each object, or the model.')
    #parser.add_argument('-v', '--verbose', action='store_true', dest='verbose', help='Verbose mode')
    arg = parser.parse_args()
    if arg.mode=='parser':
        generate_parser()
    elif arg.mode=='model':
        generate_models()

