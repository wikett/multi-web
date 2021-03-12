<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <!--
    Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
    your content from being obscured when the user scrolls to the bottom of the page.
  -->
  <div
    v-if="isOpen"
    v-click-outside="accept"
    class="fixed inset-x-0 bottom-0 z-1002"
  >
    <div class="bg-indigo-600">
      <div class="max-w-screen-xl px-3 py-3 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center flex-1 w-0">
            <!-- <span class="flex p-2 bg-indigo-800 rounded-lg">
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span> -->
            <div class="ml-3 font-medium text-white">
              <span class=""> Esta web usa cookies: </span>
              <span class="text-xs">
                En Subexpuesta.com utilizamos cookies propias y de terceros para
                el análisis de tus hábitos de navegación, mostrarte publicidad
                relacionada con tus gustos e intereses e interactuar en redes
                sociales.<br />
                + INFO en nuestra Política de Cookies.
              </span>
              <br />
              <span class="text-xs">
                Si continúas navegando, estás aceptando la instalación de
                cookies para las finalidades expresadas.
              </span>
              <div v-if="manageCookies">
                <span class="text-xs">
                  <br />
                  <strong>Cookies necesarias:</strong> <br />
                  Son cookies cuya única finalidad es posibilitar la navegación
                  a través del Sitio Web o utilizar elementos de seguridad. Son
                  las llamadas "cookies exceptuadas", por cuanto no se requiere
                  el consentimiento del usuario para su uso.
                </span>

                <span class="text-xs">
                  <br />
                  <strong
                    >Cookies analíticas, de redes sociales y
                    publicitarias:</strong
                  >
                  <br />
                  Son cookies cuya finalidad es analizar tu comportamiento en la
                  web, mostrarte publicidad relacionada con tu comportamiento y
                  para interactuar con redes sociales.
                </span>
                <br />
                <div class="flex">
                  <button
                    class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-gray-200 transition duration-150 ease-in-out bg-gray-600 border border-gray-700 rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline"
                    @click="deny()"
                  >
                    Desactivar Cookies
                  </button>
                  <button
                    href="#"
                    class="flex items-center justify-center px-4 py-2 ml-4 text-sm font-medium leading-5 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline"
                    @click="accept()"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex-shrink-0 order-3 w-full pl-2 mt-2 sm:order-2 sm:mt-0 sm:w-auto"
          >
            <div class="rounded-md shadow-sm">
              <button
                class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-gray-200 transition duration-150 ease-in-out bg-gray-600 border border-gray-700 rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline"
                @click="manageCookies = true"
              >
                Configurar Cookies
              </button>
            </div>
          </div>
          <div
            class="flex-shrink-0 order-3 w-full mt-2 ml-2 sm:order-2 sm:mt-0 sm:w-auto"
          >
            <div class="rounded-md shadow-sm">
              <button
                href="#"
                class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline"
                @click="accept()"
              >
                Aceptar
              </button>
            </div>
          </div>
          <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <button
              type="button"
              class="flex p-2 -mr-1 transition duration-150 ease-in-out rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 sm:-mr-2"
              aria-label="Dismiss"
              @click="accept()"
            >
              <!-- Heroicon name: x -->
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'OBanner',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      isBannerOpened: true,
      manageCookies: false,
      isOpen: false,
    }
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },

  methods: {
    getGDPR() {
      if (process.client) {
        return this.$cookies.get('gpdr')
      }
    },
    accept() {
      if (process.client) {
        this.$gtm.init('GTM-T7WLXS6')
        this.isOpen = false
        this.$cookies.set('gpdr', true, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7 * 200,
        })
      }
    },
    deny() {
      if (process.client) {
        this.isOpen = false
        this.$cookies.set('gpdr', false, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7 * 5,
        })
      }
    },
  },
}
</script>
