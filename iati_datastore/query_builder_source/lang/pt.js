export default {
  codeForIATIProject: 'Um projeto de Code for IATI',
  datastoreDowntimeNotice: `Você está usando o Datastore Classic durante o <a href="https://iatistandard.org/en/news/technical-notice-2-iatis-datastore-to-be-integrated-in-new-unified-single-platform/">
    tempo de inatividade do IATI Datastore oficial</a>? 
    Gostariamos de ouvir de você, para entender melhor os nossos usuários e as suas necessidades.<br />Por favor entre em contacto com nós através <a href="mailto:hello@codeforiati.org">hello@codeforiati.org</a>`,
  datastoreClassic: {
    heading: 'IATI Datastore Classico',
    strapline: 'A versão classica do IATI Datastore, reinventada.',
  },
  accessText: 'Acessar <code>{activities}</code> atividades e <code>{transactions}</code> transações.',
  viewDocumentation: 'Ver documentação',
  viewAPI: 'Ver API',
  health: {
    checkingDatastoreStatus: "Verificando o status do Datastore",
    datastoreOperational: 'Datastore totalmente operacional',
    datastoreProblems: 'Datastore tem alguns problemas',
    lastUpdated: 'Ultima actualização:',
    unknown: 'desconhecido',
    queueData: `{itemsOnQueue} conjuntos de dados estão aguardando a atualização, dum total de {NumDatasets} conjuntos. Avançe e usa os dados, ou espere um pouco até que as atualizações de hoje se tornam disponíveis.`,
    updatePctComplete: `Atualização diária {parsingComplete}% concluída`,
    timing: {
      hoursAgo: 'à uma hora | {hours} horas atrás',
      minutesAgo: 'à um minuto | {minutes} minutos atrás',
      secondsAgo: 'à um segundo | {seconds} secondos atrás'
    }
  },
  getTheData: {
    heading: 'Obtenha os dados',
    para1: 'Pode obter dados do IATI datastore classico em vários formatos.',
    para2: "Pode filtrar com base da organização que publica a informação, do lugar onde a atividade está acontecendo e do setor da atividade. Você pode escolher extrair atividades, transações ou orçamentos individuais.",
    chooseFilters: {
      heading: 'Escolha seus filtros',
      text: 'Essas opções permitem filtrar dados em IATI, dependendo do que você está procurando. Filtros adicionais <a href="{baseURL}/docs/api/#filtering"> estão disponíveis </a> consultando o Datastore diretamente.'
    }
  },
  howToView: {
    heading: 'Como gostaria de ver essa informação?',
    text: 'Essas opções lhe permitem configurar a forma como seus dados serão desagregados, para tornar possível diferentes tipos de análise.'
  },
  downloadData: {
    buttons: {
      download: 'Download/baixar',
      reset: 'Redefinir',
    },
    yourLink: 'Seu link:',
    copy: 'Copiar',
    copied: 'Copiado!'
  },
  footer: {
    sourceCode: '<a href="https://github.com/codeforIATI/iati-datastore">IATI Datastore Classico no GitHub</a>, software gratuito licenciado sob a GNU Affero General Public License v3.',
    credits: 'IATI Datastore Classico é um projeto de <a href="https://codeforiati.org"> Code for IATI </a>',
    privacyPolicy: 'Política de Privacidade'
  },
  outputFormat: {
    chooseFormat: 'Escolha o formato',
    chooseSampleSize: {
      label: 'Escolha o tamanho da amostra',
      options: [
        {
          'value': '1',
          'text': '1a linha',
          'description': "Visualiza sua selecão, mostrando apanas a primeira linha."
        },
        {
          'value': '50',
          'text': '50 linhas',
          'description': "Visualiza sua selecão, mostrando as primeiras 50 linhas."
        },
        {
          'value': 'stream/fluxo',
          'text': 'Seleção inteira',
          'description': "Obtem todos os resultado que correspondem aos seus critérios de busca/pesquisa."
        }
      ]
    },
    csvOptions: {
      label: 'Opções CSV',
      csvOnlyNote: 'Opções somente disponíveis para extrato em CSV.',
      chooseBreakdown: {
        label: 'Escolha os detalhes/breakdown',
        options: [
          {
            'value': 'activity',
            'text': 'Uma atividade por linha',
            'description': "Cada linha contém uma atividade única. Informações financeiras são agregadas. Informações de orçamento são excluídas. Outros campos potencialmente repetitivos (como setores) são relatados em uma única célula, delimitada por ponto e vírgula."
          },
          {
            'value': 'transaction',
            'text': 'Uma transação por linha',
            'description': "Cada linha contém uma transação financeira única. O identificador de atividade parente e outros campos de nível de atividade são repetidos para cada transação. <br/> Se você deseja analisar as finanças da atividade por ano, precisa selecionar “Transações” e calcular o ano a partir da data da transação."
          },
          {
            'value': 'budget',
            'text': 'Um orçamento por linha',
            'description': "Cada linha contem o valor dum periodo do orçamento. Os dados de transação não estão incluídos. O identificador de atividade parente e outros campos de nível de atividade são repetidos para cada linha de orçamento."
          }
        ],
      },
      repeatRows: {
        label: 'Repete limhas',
        options: [
          {
            'value': '',
            'text': 'Não',
            'description': "Informação não desagregada."
          },
          {
            'value': '/by_sector',
            'text': 'Expansão Multi-setor',
            'description': "Cada linha de atividade, transação ou orçamento é repetida separadamente por cada setor relatado. A percentagem correspondente para a divisão do setor é relatada em uma coluna separada. Isso permite que você adicione facilmente aritmética à sua planilha para calcular os valores proporcionalmente."
          },
          {
            'value': '/by_country',
            'text': 'Expansão multi-país',
            'description': "Cada linha de atividade, transação ou orçamento é repetida separadamente por cada país relatado. A percentagem correspondente para a divisão do setor é relatada numa coluna separada. Isso permite que você adicione facilmente aritmética à sua planilha para calcular os valores proporcionalmente."
          }
        ]
      }
    }
  },
  fields: {
    specificActivities: {
      label: 'Atividades específicas',
      description: 'Busca uma atividade específica usando seu identifidor IATI, título ou sua descrição.'
    },
    iatiIdentifier: {
      label: 'Identificador IATI',
      description: 'Busca uma atividade que contem um identificador IATI específico (similar a um código do projecto).',
      placeholder: 'Todos os identificadores IATI'
    },
    title: {
      label: 'Título',
      description: 'Busca duma atividade com título que contêm o texto específicado.',
      placeholder: 'Todos títulos'
    },
    description: {
      label: 'Descrição',
      description: 'Busca duma atividade com descrição que contêm texto especificado.',
      placeholder: 'Todas descrições'
    },
    activityStatus: {
      label: 'Status da atividade',
      description: 'Busca de atividades com o status especificado.',
      placeholder: 'Todos tipos de status de atividade'
    },
    reportingOrganisation: {
      label: 'Organição Relatora',
      description: 'A organização relatora é a que publica/editora dos dados IATI.',
      type: {
        label: 'Tipo da organização relatora',
        description: 'Seleciona somente um tipo de organiçao relatora.',
        placeholder: 'Todos os típos de editoras (por exemplo Governos).'
      },
      ref: {
        label: 'Organização Relatora',
        description: 'Seleciona apenas os dados duma editora (por exemplo O Banco Mundial).',
        placeholder: 'Todas as organizações relatoras'
      }
    },
    sector: {
      label: 'Setor',
      description: 'Escolha o setor ou setores que procura.',
      placeholder: 'Todos os setores',
      note: 'Para obter mais detalhes sobre os setores, consulte a lista de códigos <a href="https://codelists.codeforiati.org/Sector" rel="noopener noreferrer" target="_blank"> Setor de 5 dígitos DAC </a> codelist.'
    },
    policyMarker: {
      label: 'Marcador de política',
      description: 'A política ou tema abordade pela atividade, de acordo com is marcadores de política OECD DAC CRS.',
      code: {
        label: 'Marcador de política',
        description: '',
        placeholder: 'Todos os marcadores de política'
      },
      significance: {
        label: 'Importância da Política',
        placeholder: 'Todas as importâncias da política'
      }
    },
    recipientLocation: {
      label: 'País ou região destinatário',
      country: {
        label: 'País destinatário',
        description: '',
        placeholder: 'Todos países destinatários'
      },
      region: {
        label: 'Região destinatário',
        placeholder: 'Todas regiões destinários'
      },
      note: 'Escolher ambos, região e país, provavelmente não retornará dados, já que a maioria dos editors publicam ou região ou país.'
    },
    dates: {
      label: 'Datas',
      startDateAfter: 'Data do início (após)',
      startDateBefore: 'Data do início (antes)',
      endDateAfter: 'Data do fim (após)',
      endDateBefore: 'Data do fim (antes)',
      datePickerLabels: {
        labelPrevDecade: 'Década anterior',
        labelPrevYear: 'Ano anterior',
        labelPrevMonth: 'Mês anterior',
        labelCurrentMonth: 'Mês atual',
        labelNextMonth: 'Próximo mês',
        labelNextYear: 'Próximo ano',
        labelNextDecade: 'Proxima década',
        labelToday: 'Hoje',
        labelSelected: 'Data selecionada',
        labelNoDateSelected: 'Nenhuma data selecionada',
        labelCalendar: 'Calendário',
        labelNav: 'Navegação no calendário',
        labelHelp: 'Usa teclas do cursor para navegar as datas do calendário'
      },
    }
  }
}