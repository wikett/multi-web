<template>
  <div>
    <TheHeader />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '~/components/common/TheHeader'
import TheFooter from '~/components/common/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
