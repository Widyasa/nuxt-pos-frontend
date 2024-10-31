// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import {definePreset} from "@primeuix/styled";

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{lime.50}',
      100: '{lime.100}',
      200: '{lime.200}',
      300: '{lime.300}',
      400: '{lime.400}',
      500: '{lime.500}',
      600: '{lime.600}',
      700: '{lime.700}',
      800: '{lime.800}',
      900: '{lime.900}',
      950: '{lime.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{lime.700}',
          inverseColor: '#ffffff',
          hoverColor: '{lime.700}',
          activeColor: '{lime.700}'
        },
        highlight: {
          background: '{lime.700}',
          focusBackground: '{lime.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{lime.50}',
          inverseColor: '{lime.700}',
          hoverColor: '{lime.100}',
          activeColor: '{lime.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
});

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig : {
    public : {
      apiUrl: process.env.API_ENDPOINT
    }
  },
  modules :['@primevue/nuxt-module', '@pinia/nuxt','@pinia-plugin-persistedstate/nuxt', '@vee-validate/nuxt',],
  css: ['~/assets/css/main.css'],
  app:{
    head:{
      script:[
        {
          src:"https://kit.fontawesome.com/f1a55980af.js",
          crossorigin:"anonymous",
        },
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Noir,
        options: {
          prefix: 'p',
          darkModeSelector: '.p-dark',
          cssLayer: false
        }
      }
    }
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})