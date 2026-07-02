// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
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
        { property: 'og:site_name', content: 'キラキラテキーラ' },
        { name: 'theme-color', content: '#0d0020' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'キラキラテキーラ',
            url: 'https://kirakira-tequila.jp',
            description:
              'ダイヤモンドを纏ったキラキラテキーラ。コンセプトカフェ・ガールズバーに特別な体験を。',
          }),
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'キラキラテキーラ',
            url: 'https://kirakira-tequila.jp',
            logo: 'https://kirakira-tequila.jp/logo.png',
          }),
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap',
        },
      ],
    },
  },
})
