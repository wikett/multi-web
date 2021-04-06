<template>
  <div
    class="bg-opacity-50 border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm"
    :class="label !== '' ? 'bg-green-100' : 'bg-blue-100'"
  >
    <div class="static p-6">
      <h2
        class="h-10 text-lg font-medium leading-6 text-gray-900 md:text-lg lg:text-sm"
      >
        {{ title }}
      </h2>
      <div class="static">
        <a :href="link">
          <div class="my-5 aspect-w-3 aspect-h-2">
            <img
              class="object-cover rounded-lg shadow-lg"
              :src="img"
              loading="lazy"
              :alt="keyword"
            />
          </div>
        </a>
        <span
          v-if="label !== ''"
          class="inline-flex absolute -mt-12 ml-4 mb-3 items-center px-4 py-0.5 rounded-full text-xl font-medium lg:text-sm bg-red-300 text-green-900"
        >
          {{ label }}
        </span>
      </div>

      <p class="h-8 mt-4 text-sm text-gray-500">
        {{ desc }}
      </p>

      <!-- <p class="mt-8">
            <span class="text-4xl font-extrabold text-gray-900">$24</span>
            <span class="text-base font-medium text-gray-500">/mo</span>
          </p> -->
      <a
        :href="link"
        class="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-700"
        >Ver precio</a
      >
    </div>
    <div class="px-6 pt-6 pb-8">
      <h3 class="text-xs font-medium tracking-wide text-gray-900 uppercase">
        Características
      </h3>
      <ul class="mt-6 space-y-4">
        <li v-for="(item, index) in info" :key="index" class="flex space-x-3">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-sm text-gray-500">{{ item }} </span>
        </li>
      </ul>
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
    link: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    info: {
      type: Array,
      required: true,
    },
    keyword: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
