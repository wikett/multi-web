<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="bg-gray-800 mt-52">
    <div class="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <nav
        class="flex flex-wrap justify-center -mx-5 -my-2"
        aria-label="Footer"
      >
        <div class="px-5 py-2">
          <nuxt-link
            to="/contacto/"
            class="text-base text-gray-400 hover:text-gray-200"
          >
            Contacto
          </nuxt-link>
        </div>

        <div class="px-5 py-2">
          <nuxt-link
            to="/afiliacion/"
            class="text-base text-gray-400 hover:text-gray-200"
          >
            Afiliación
          </nuxt-link>
        </div>

        <div class="px-5 py-2">
          <nuxt-link
            to="/aviso-legal/"
            class="text-base text-gray-400 hover:text-gray-200"
          >
            Aviso Legal
          </nuxt-link>
        </div>

        <div class="px-5 py-2">
          <nuxt-link
            to="/politica-de-cookies/"
            class="text-base text-gray-400 hover:text-gray-200"
          >
            Política de Cookies
          </nuxt-link>
        </div>

        <div class="px-5 py-2">
          <nuxt-link
            to="/politica-de-privacidad/"
            class="text-base text-gray-400 hover:text-gray-200"
          >
            Política de Privacidad
          </nuxt-link>
        </div>

        <div class="px-5 py-2">
          <nuxt-link
            to="/quienes-somos/"
            class="text-base text-gray-400 hover:text-gray-200"
          >
            ¿Quiénes somos?
          </nuxt-link>
        </div>
      </nav>
      <p class="mt-8 text-base text-center text-gray-400">
        &copy; {{ year.getFullYear() }} {{ websiteName }}. Todos los derechos
        reservados
      </p>
      <p class="text-xs text-center text-gray-500">
        Participamos en el Programa de Afiliados de Amazon Product Advertising
        Api 5.0, este programa nos permite obtener comisiones de los productos
        que ofrecemos en nuestro sitio web.
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      year: new Date(),
    }
  },
  computed: {
    websiteName() {
      return process.env.websiteName
    },
  },
}
</script>
