<template>
  <div>
    <b-navbar type="light" variant="light">
      <b-container>
        <b-navbar-brand href="https://codeforiati.org">
          <img
            width="100px"
            src="https://codeforiati.org/assets/img/logo.png"
            :title="$t('codeForIATIProject')" />
        </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="switchLocalePath('en')">EN</b-nav-item>
          <b-nav-item :to="switchLocalePath('fr')">FR</b-nav-item>
        </b-navbar-nav>
        <b-navbar-toggle
          target="none"
          data-c4i-toggle="sidebar"
          type="button"
          aria-controls="c4i-sidebar"
          aria-expanded="false"
          aria-label="Toggle Code for IATI sidebar"
          class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </b-navbar-toggle>
      </b-container>
    </b-navbar>
    <b-alert show dismissible fade class="mb-0 text-md-center">
      <b-nav-text v-html="$t('datastoreDowntimeNotice')">
      </b-nav-text>
    </b-alert>
    <nuxt />
    <footer class="bg-light p-4">
      <b-container>
        <b-row>
          <b-col md="6">
            <p v-html="$t('footer.sourceCode')"></p>
          </b-col>
          <b-col class="text-md-right" md="6">
            <span v-html="$t('footer.credits')"></span><br />
            <a href="https://codeforiati.org/privacy-policy/">{{ $t('footer.privacyPolicy') }}</a>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<style>
body {
  background-color: #ececec;
}
a.nuxt-link-exact-active {
  color: #000000 !important;
}
.navbar-expand .navbar-toggler {
  margin-left: 10px;
  display: inherit;
}
</style>
<script>
export default {
  head: {
    script: [
      {
        src: 'https://codeforiati.org/sidebar/sidebar-rhs.min.js'
      }
    ]
  },
};
</script>
