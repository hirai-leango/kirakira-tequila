// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      // generate /path/index.html so trailing-slash URLs resolve on static hosting
      autoSubfolderIndex: true,
    },
  },
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
          src: 'https://www.googletagmanager.com/gtag/js?id=G-1H6VK7LEJV',
          async: true,
        },
        {
          innerHTML:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1H6VK7LEJV', { send_page_view: false });",
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'キラキラテキーラ',
            url: 'https://kirakira-tequila.com/',
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
            url: 'https://kirakira-tequila.com/',
            logo: 'https://kirakira-tequila.com/logo.png',
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
