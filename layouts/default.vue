<template>
  <div>
    <TheHeader />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-12 lg:py-12">
        <div class="space-y-12">
          <div
            class="space-y-5 sm:space-y-4 md:max-w-none lg:max-w-none xl:max-w-none"
          >
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
    <client-only>
      <TheCookieConsent />
    </client-only>
  </div>
</template>
<script>
import TheHeader from '~/components/common/TheHeader'
import TheFooter from '~/components/common/TheFooter'
import TheCookieConsent from '~/components/common/TheCookieConsent'

export default {
  components: {
    TheHeader,
    TheFooter,
    TheCookieConsent,
  },
}
</script>
