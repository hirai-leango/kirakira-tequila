// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'キラキラテキーラ | 一杯が、特別な体験になる',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'キラキラテキーラは、ダイヤモンドを纏ったプレミアムテキーラ。コンセプトカフェ・ガールズバー向けに、一杯のショットを特別な体験へと変えるブランドです。',
        },
        { property: 'og:title', content: 'キラキラテキーラ | 一杯が、特別な体験になる' },
        {
          property: 'og:description',
          content:
            'ダイヤモンドを纏ったプレミアムテキーラ。コンセプトカフェ・ガールズバーの一杯を、忘れられない特別な体験に。',
        },
        { property: 'og:type', content: 'website' },
      ],
    },
  },
})
