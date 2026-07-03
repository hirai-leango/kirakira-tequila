<script setup lang="ts">
useSeo({
  title: 'キラキラテキーラ | 一杯が、特別な体験になる',
  description:
    'キラキラテキーラは、ダイヤモンドを纏ったプレミアムテキーラ。コンセプトカフェ・ガールズバーの一杯のショットを、忘れられない特別な体験へと変えます。',
  path: '/',
})

const storyPoints = [
  {
    icon: '💎',
    title: '本物のダイヤモンド',
    description:
      'ボトルとグラスの外側に、小さな本物のダイヤモンドをオン。メーカーズマークの封蝋のように、この輝きこそがキラキラテキーラの証です。',
  },
  {
    icon: '✨',
    title: 'キラキラカットガラス',
    description:
      '宝石のカッティングに着想を得た特殊カット。店内の照明を浴びるたびに光が乱反射して、グラスの中に小さなミラーボールが生まれます。',
  },
  {
    icon: '🥃',
    title: 'プレミアムな味わい',
    description:
      '見た目だけじゃない。厳選アガベのプレミアムテキーラだから、ショットでそのまま美味しい。輝きも味も、一切妥協なし。',
  },
]

const teaserProducts = [
  {
    emoji: '🍾',
    en: 'BOTTLE',
    name: '300ml ボトル',
    description:
      'テーブルに置いた瞬間、その場の主役に。ダイヤモンドが光るボトルは、推しと乾杯する夜のベストアイテム。',
    glow: 'hover:shadow-glow-pink',
    accent: 'text-kira-pink',
  },
  {
    emoji: '🥂',
    en: 'SHOT GLASS',
    name: 'ショットグラス',
    description:
      '掲げるたびにきらめく特殊カットグラス。「そのグラスなに！？」から会話が生まれる、飲むためのジュエリー。',
    glow: 'hover:shadow-glow-cyan',
    accent: 'text-kira-cyan',
  },
]

const baeSteps = [
  {
    step: '01',
    title: 'ボトルが届いた瞬間',
    description: 'キラキラのボトルがテーブルへ。店内の視線を独り占めして、その場のテンションが一気に上がる。',
  },
  {
    step: '02',
    title: 'グラスを掲げて乾杯',
    description: 'カットガラスが照明を反射してきらめく。動画で撮れば、光の粒が舞うベストシーンに。',
  },
  {
    step: '03',
    title: 'SNSでシェア',
    description: 'ダイヤモンド付きのショットはここだけの体験。ストーリーに上げたくなる一枚が必ず撮れる。',
  },
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      <!-- 背景グロー -->
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,95,255,0.22)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,105,180,0.14)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,255,255,0.12)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <!-- 落ちるダイヤ＋きらめき -->
      <SparkleBackground :count="36" :diamonds="14" :seed="7" />

      <div class="relative z-10 px-6 py-20 text-center">
        <p class="font-display text-sm italic tracking-[0.5em] text-gold md:text-base">
          PREMIUM SPARKLING TEQUILA
        </p>
        <h1 class="text-holo mt-6 text-5xl font-black leading-tight tracking-wider md:text-8xl">
          キラキラ<br class="md:hidden" />テキーラ
        </h1>
        <p class="text-shimmer mt-8 text-xl font-black tracking-[0.25em] md:text-3xl">
          一杯が、特別な体験になる
        </p>
        <p class="mt-6 leading-loose text-white/70 md:text-lg">
          ダイヤモンドを纏ったボトルとグラスで、<br class="md:hidden" />
          いつものショットが最高の思い出に。
        </p>
        <div class="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <NuxtLink to="/products/" class="btn-holo hover-sparkle">商品を見る</NuxtLink>
          <NuxtLink to="/contact/" class="btn-outline-holo">導入のご相談</NuxtLink>
        </div>
      </div>

      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold" aria-hidden="true">
        <span class="block animate-bounce text-2xl">▾</span>
      </div>
    </section>

    <!-- ===== Brand Story ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-24">
      <SparkleBackground :count="16" :seed="21" />
      <div class="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-pink">BRAND STORY</p>
            <h2 class="text-holo mt-4 section-title">ダイヤモンド入りのテキーラ</h2>
            <div class="holo-divider" />
            <p class="mx-auto mt-10 max-w-3xl leading-loose text-white/80 md:text-lg">
              夜の街で交わされる、数えきれないテキーラショット。<br class="hidden md:block" />
              その一杯を、忘れられない輝きに変えたい——。<br class="hidden md:block" />
              キラキラテキーラは、「飲む」を「魅せる」に変えるパーティーテキーラです。
            </p>
          </div>
        </FadeIn>

        <div class="mt-16 grid gap-8 md:grid-cols-3">
          <FadeIn v-for="(point, i) in storyPoints" :key="point.title" :delay="i * 120">
            <div class="glass-card hover-sparkle h-full p-8 text-center">
              <span class="text-4xl" aria-hidden="true">{{ point.icon }}</span>
              <h3 class="mt-5 text-xl font-black tracking-wider text-gold">{{ point.title }}</h3>
              <p class="mt-4 text-sm leading-loose text-white/70">{{ point.description }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== Product Teaser ===== -->
    <section class="relative overflow-hidden py-24">
      <div class="mx-auto max-w-5xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">LINE UP</p>
            <h2 class="text-holo mt-4 section-title">輝く2つのプロダクト</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>

        <div class="mt-16 grid gap-8 md:grid-cols-2">
          <FadeIn v-for="(product, i) in teaserProducts" :key="product.name" :delay="i * 150">
            <NuxtLink
              to="/products/"
              class="glass-card group relative block overflow-hidden p-10 text-center"
              :class="product.glow"
            >
              <SparkleBackground :count="10" :seed="i * 31 + 3" />
              <div class="relative z-10">
                <span
                  class="inline-block text-6xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                  aria-hidden="true"
                >
                  {{ product.emoji }}
                </span>
                <p class="mt-6 font-display text-xs italic tracking-[0.4em]" :class="product.accent">
                  {{ product.en }}
                </p>
                <h3 class="mt-2 text-2xl font-black tracking-widest text-white">{{ product.name }}</h3>
                <p class="mt-4 text-sm leading-loose text-white/70">{{ product.description }}</p>
                <span class="mt-6 inline-block text-sm font-bold tracking-widest text-gold">
                  詳しく見る →
                </span>
              </div>
            </NuxtLink>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== 映える Section ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-[#1c0033] to-night py-24">
      <SparkleBackground :count="24" :diamonds="8" :seed="55" />
      <div class="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-gold">INSTAGRAMMABLE</p>
            <h2 class="text-holo mt-4 section-title">ショットを、イベントに。</h2>
            <div class="holo-divider" />
            <p class="mx-auto mt-10 max-w-3xl leading-loose text-white/80 md:text-lg">
              テキーラ観覧車が「飲む」を遊びに変えたように、<br class="hidden md:block" />
              キラキラテキーラは一杯のショットを「撮りたくなる瞬間」に変えます。
            </p>
          </div>
        </FadeIn>

        <div class="mt-16 grid gap-8 md:grid-cols-3">
          <FadeIn v-for="(item, i) in baeSteps" :key="item.step" :delay="i * 120">
            <div class="glass-card h-full p-8">
              <p class="text-holo font-display text-4xl font-bold italic">{{ item.step }}</p>
              <h3 class="mt-4 text-lg font-black tracking-wider text-white">{{ item.title }}</h3>
              <p class="mt-3 text-sm leading-loose text-white/70">{{ item.description }}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn :delay="200">
          <div class="mt-16 text-center">
            <p class="text-lg font-black tracking-widest text-white md:text-xl">
              「映える！」「飲みたい！」を、あなたのお店に。
            </p>
            <div class="mt-8">
              <NuxtLink to="/contact/" class="btn-holo hover-sparkle">導入について問い合わせる</NuxtLink>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
