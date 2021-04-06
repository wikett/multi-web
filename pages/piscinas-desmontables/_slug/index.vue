<template>
  <article>
    <h1 class="text-5xl font-extrabold text-gray-700 sm:text-center">
      {{ article.keyword }}
    </h1>
    <!-- <p class="mt-5 text-xl text-gray-500 sm:text-center">
      Start building for free, then add a site plan to go live. Account plans
      unlock additional features.
    </p> -->
    <div
      class="my-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4"
    >
      <product-thumb
        :title="article.product1_title"
        :desc="article.product1_desc"
        :link="article.product1_link"
        :img="article.product1_img"
        :info="article.product1_info"
        :keyword="article.keyword"
        label="El más vendido"
      ></product-thumb>

      <product-thumb
        :title="article.product2_title"
        :desc="article.product2_desc"
        :link="article.product2_link"
        :img="article.product2_img"
        :info="article.product2_info"
        :keyword="article.keyword"
        label=""
      ></product-thumb>

      <product-thumb
        :title="article.product3_title"
        :desc="article.product3_desc"
        :link="article.product3_link"
        :img="article.product3_img"
        :info="article.product3_info"
        :keyword="article.keyword"
        label=""
      ></product-thumb>

      <product-thumb
        :title="article.product4_title"
        :desc="article.product4_desc"
        :link="article.product4_link"
        :img="article.product4_img"
        :info="article.product4_info"
        :keyword="article.keyword"
        label=""
      ></product-thumb>
    </div>

    <div class="mx-auto prose-xl text-gray-600 post-content">
      <nuxt-content :document="article" />
    </div>
  </article>
</template>
<script>
import ProductThumb from '~/components/common/ProductThumb'

export default {
  components: {
    ProductThumb,
  },
  async asyncData({ $content, params }) {
    const article = await $content('piscinas-desmontables', params.slug).fetch()

    article.product1_info = article.product1_info.split(',')
    article.product2_info = article.product2_info.split(',')
    article.product3_info = article.product3_info.split(',')
    article.product4_info = article.product4_info.split(',')

    return { article }
  },
  computed: {
    ceo() {
      return process.env.ceo
    },
    websiteName() {
      return process.env.websiteName
    },
  },
  methods: {},
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'es_ES',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.article.web,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://${this.article.web.toLowerCase()}${
            this.$route.path
          }`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.article.picture}`,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://${this.article.web.toLowerCase()}${this.$route.path}`,
        },
      ],
    }
  },

  jsonld() {
    return {
      // https://developers.google.com/search/docs/data-types/article
      '@context': 'http://schema.org',
      '@type': 'NewsArticle',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://${this.article.web.toLowerCase()}${this.$route.path}`,
      },
      headline: this.article.title,
      image: [`${this.article.picture}`],
      datePublished: new Date(),
      dateModified: new Date(),
      author: {
        '@type': 'Person',
        name: this.ceo,
      },
      publisher: {
        '@type': 'Organization',
        name: this.nombreWeb,
      },
    }
  },
}
</script>
