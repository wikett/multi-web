<template>
  <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-12">
    <div class="space-y-12">
      <div
        class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
      >
        <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
          ¿Quiénes somos?
        </h1>
        <div class="pt-16 bg-white lg:py-24">
          <div class="pb-16 bg-gray-600 lg:pb-0 lg:z-10 lg:relative">
            <div
              class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8"
            >
              <div class="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  class="absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden"
                ></div>
                <div
                  class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full"
                >
                  <div
                    class="overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
                  >
                    <img
                      class="object-cover lg:h-full lg:w-full"
                      src="https://images.unsplash.com/photo-1545901478-6fd3d475dad1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=60"
                      alt="quienes-somos"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div
                  class="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none"
                >
                  <blockquote>
                    <div>
                      <svg
                        class="w-12 h-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path
                          d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                        />
                      </svg>
                      <p class="mt-6 text-2xl font-medium text-white">
                        Hola! soy Julián García y son un fanático piscinas.
                        Desde pequeño en verano nos ibamos a la casa de campo
                        que tenían mis abuelos y ahí pasamos por todos los tipos
                        de piscinas. Ahora que ya gasto casi los 40 y con un par
                        de crios, he seguido investigando sobre el mundo de las
                        piscinas y en concreto sobre las piscinas desmontables.
                        Cualquier duda aquí estoy para vosotros!
                      </p>
                    </div>
                    <footer class="mt-6">
                      <p class="text-base font-medium text-white">
                        {{ ceo }}
                      </p>
                      <p class="text-base font-medium text-indigo-100">
                        Colaborador en {{ websiteName }}
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'QuienesSomos',
  computed: {
    ceo() {
      return process.env.ceo
    },
    websiteName() {
      return process.env.websiteName
    },
  },
  head: {
    title: '¿Quiénes somos?',
  },
}
</script>
