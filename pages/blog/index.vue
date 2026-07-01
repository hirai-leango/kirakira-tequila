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
  {
    to: '/blog/tequila-entertainment',
    category: 'エンタメテキーラ',
    title: 'テキーラ観覧車・クライナー——エンタメテキーラの世界',
    description:
      'テキーラ観覧車、クライナーファイグリング、そしてキラキラテキーラへ。「飲む」を「遊ぶ」に変えるエンタメショットの最前線を紹介します。',
    date: '2026-07-01',
  },
]
</script>

<template>
  <div class="bg-night">
    <!-- Page Header -->
    <section class="relative overflow-hidden py-24 text-center">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,95,255,0.2)_0%,transparent_55%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="20" :diamonds="6" :seed="37" />
      <div class="relative z-10 px-6">
        <p class="font-display text-sm italic tracking-[0.5em] text-kira-cyan">BLOG</p>
        <h1 class="text-holo mt-4 section-title">ブログ</h1>
        <div class="holo-divider" />
        <p class="mt-8 leading-loose text-white/80">
          テキーラの歴史から、夜のお店での楽しみ方まで。
        </p>
      </div>
    </section>

    <!-- Article List -->
    <section class="pb-24">
      <div class="mx-auto max-w-4xl space-y-8 px-6">
        <FadeIn v-for="(article, i) in articles" :key="article.to" :delay="i * 120">
          <NuxtLink
            :to="article.to"
            class="glass-card group block p-8"
          >
            <div class="flex flex-wrap items-center gap-3 text-xs">
              <span class="rounded-full border border-gold/50 px-3 py-1 font-bold tracking-widest text-gold">
                {{ article.category }}
              </span>
              <time :datetime="article.date" class="text-white/50">{{ article.date }}</time>
            </div>
            <h2 class="mt-4 text-2xl font-black tracking-wider text-white transition-colors duration-300 group-hover:text-gold">
              {{ article.title }}
            </h2>
            <p class="mt-3 leading-relaxed text-white/70">
              {{ article.description }}
            </p>
            <span class="mt-4 inline-block text-sm font-bold tracking-widest text-gold">
              続きを読む →
            </span>
          </NuxtLink>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
