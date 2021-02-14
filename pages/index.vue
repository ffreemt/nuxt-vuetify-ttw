<template>
  <div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to Transtoolweb (TTW)
        </v-card-title>
        <v-card-text>
          <p>
            Interactive search for mobile and desktop browser: 
            <a
              href="https://query.ttw.workers.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://query.ttw.workers.dev 
            </a>.
          </p>
          <p>
            uncor (en-zh):
            <a
              href="https://corpus.ttw.workers.dev/uncor/?phrase=test"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://query.ttw.workers.dev/uncor/?phrase=test
            </a>
          </p>
          <p>
            dictcor (en-zh):
            <a
              href="https://corpus.ttw.workers.dev/dictcor/?phrase=test"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://query.ttw.workers.dev/dictcor/?phrase=test
            </a>
          </p>
          <p>
            europarl (en-de):
            <a
              href="https://corpus.ttw.workers.dev/europarl/?phrase=test"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://query.ttw.workers.dev/europarl/?phrase=test
            </a>
          </p>

          <p>
            If you have questions, please 
                contact mu@qq41947782.
          </p>
          <br>
             Github repo
          <a
            href="https://github.com/ffreemt/nuxt-vuetify-ttw"
            target="_blank"
            rel="noopener noreferrer"
          >
           https://github.com/ffreemt/nuxt-vuetify-ttw
          </a>, a bit messy, will clean it up later.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <!---v-row>
    <v-img
      src="/vuetify-logo.svg"
    > 
  </v-img>
  </v-row--->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
