<template>
  <nav class="bg-white shadow">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="isMenuOpened = !isMenuOpened"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              v-show="!isMenuOpened"
              class="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              v-show="isMenuOpened"
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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
        <div
          class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
        >
          <div class="flex items-center flex-shrink-0">
            <nuxt-link
              to="/"
              style="
                border-bottom-width: inherit !important;
                --tw-border-opacity: none !important;
              "
            >
              <img
                class="block w-auto h-8 lg:hidden"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
                height="32"
                width="35"
              />
              <img
                class="hidden w-auto h-8 lg:block"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
                height="143"
                width="32"
              />
            </nuxt-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <nuxt-link
              v-for="(item, index) in mainMenu"
              :key="index"
              :to="item.slug"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              {{ item.title }}
            </nuxt-link>

            <!-- <nuxt-link
              to="/"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Inicio
            </nuxt-link>
            <nuxt-link
              to="/uno/"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Uno
            </nuxt-link>
            <nuxt-link
              to="/dos/"
              href="#"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Dos
            </nuxt-link>
            <nuxt-link
              to="/contacto/"
              href="#"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Contacto
            </nuxt-link> -->
          </div>
        </div>
        <!-- <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="sr-only">View notifications</span>
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <div class="relative ml-3">
            <div>
              <button
                class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="user-menu"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=xJPge9eUtQ&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-show="isMenuOpened" class="sm:hidden" id="mobile-menu">
      <div class="pt-2 pb-4 space-y-1">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <nuxt-link
          v-for="(item, index) in mainMenu"
          :key="index"
          :to="item.slug"
          class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
          >{{ item.title }}</nuxt-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isMenuOpened: false,
      mainMenu: [
        {
          title: 'Inicio',
          slug: '/',
        },
        {
          title: 'Piscinas desmontables',
          slug: '/piscinas-desmontables/piscinas-desmontables/',
        },
        {
          title: 'Contacto',
          slug: '/contacto/',
        },
      ],
    }
  },
  mounted() {
    this.isMenuOpened = false
  },
  methods: {
    clickMenu(to) {
      console.log(to)
      // this.isMenuOpened = false
      return '/' + to + '/'
      // this.$route.push({ name: 'uno' })
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  border-bottom-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(99, 102, 241, var(--tw-border-opacity));
}
</style>
