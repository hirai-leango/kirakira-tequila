<script setup lang="ts">
useHead({
  title: 'ブログ | キラキラテキーラ',
  meta: [
    {
      name: 'description',
      content:
        'テキーラの歴史や文化、コンセプトカフェ・ガールズバーでのテキーラの楽しみ方など、キラキラテキーラがお届けするコラム一覧です。',
    },
  ],
})

const articles = [
  {
    to: '/blog/history-of-tequila',
    category: 'テキーラの知識',
    title: 'テキーラの歴史と文化',
    description:
      'メキシコの大地が育んだ蒸留酒・テキーラ。アガベとともに歩んだ数百年の歴史、原産地呼称制度、そして日本での広がりまでを徹底解説します。',
    date: '2026-06-01',
  },
  {
    to: '/blog/concept-cafe-tequila',
    category: 'お店での楽しみ方',
    title: 'コンセプトカフェで楽しむテキーラ',
    description:
      'コンセプトカフェの定番ドリンクとなったテキーラショット。人気の理由と注文の流れ、お店とお客様の双方が楽しむためのポイントを紹介します。',
    date: '2026-06-10',
  },
  {
    to: '/blog/girls-bar-tequila',
    category: 'お店での楽しみ方',
    title: 'ガールズバーで人気のテキーラショット',
    description:
      'ガールズバーの乾杯シーンに欠かせないテキーラショット。人気の背景、スマートな頼み方、お店選びのコツまで詳しく解説します。',
    date: '2026-06-20',
  },
]
</script>

<template>
  <div class="bg-brand-black">
    <!-- Page Header -->
    <section class="relative overflow-hidden py-24 text-center">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <SparkleField :count="14" />
      <div class="relative z-10 px-6">
        <p class="text-sm tracking-[0.5em] text-gold-light">BLOG</p>
        <h1 class="mt-4 font-serif text-4xl font-bold tracking-widest text-gold md:text-5xl">
          ブログ
        </h1>
        <div class="gold-divider" />
        <p class="mt-8 leading-loose text-gray-300">
          テキーラの歴史から、夜のお店での楽しみ方まで。
        </p>
      </div>
    </section>

    <!-- Article List -->
    <section class="pb-24">
      <div class="mx-auto max-w-4xl space-y-8 px-6">
        <NuxtLink
          v-for="article in articles"
          :key="article.to"
          :to="article.to"
          class="group block rounded-lg border border-gold/20 bg-white/[0.02] p-8 transition-all duration-300 hover:border-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
        >
          <div class="flex flex-wrap items-center gap-3 text-xs">
            <span class="rounded-full border border-gold/50 px-3 py-1 tracking-widest text-gold">
              {{ article.category }}
            </span>
            <time :datetime="article.date" class="text-gray-500">{{ article.date }}</time>
          </div>
          <h2 class="mt-4 font-serif text-2xl font-bold tracking-wider text-brand-white transition-colors duration-300 group-hover:text-gold">
            {{ article.title }}
          </h2>
          <p class="mt-3 leading-relaxed text-gray-400">
            {{ article.description }}
          </p>
          <span class="mt-4 inline-block text-sm tracking-widest text-gold">
            続きを読む →
          </span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
