<template>
  <div class="relative py-16 bg-white">
    <div
      class="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
      aria-hidden="true"
    ></div>
    <div class="mx-auto bg-indigo-600 max-w-7xl lg:bg-transparent lg:px-8">
      <div class="lg:grid lg:grid-cols-12">
        <div
          class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent"
        >
          <div
            class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
            aria-hidden="true"
          ></div>
          <div
            class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0"
          >
            <div
              class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1"
            >
              <img
                class="object-cover object-center shadow-2xl rounded-3xl"
                :src="img"
                :alt="title"
              />
            </div>
          </div>
        </div>

        <div
          class="relative bg-indigo-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center"
        >
          <div
            class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
            aria-hidden="true"
          >
            <svg
              class="absolute transform bottom-full left-full translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-indigo-500"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
            <svg
              class="absolute transform top-full -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-indigo-500"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div
            class="relative max-w-md px-4 py-12 mx-auto space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6"
          >
            <h2 class="text-black">
              La mejor piscina desmontable para este 2021
            </h2>
            <p
              class="text-3xl font-extrabold text-white capitalize"
              id="join-heading"
            >
              {{ title }}
            </p>
            <p class="text-lg text-white">
              {{ desc }}
            </p>
            <a
              class="block w-full px-5 py-3 text-base font-medium text-center text-indigo-700 bg-white border border-transparent rounded-md shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
              :href="link"
              >Ver precio</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductThumb',
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
