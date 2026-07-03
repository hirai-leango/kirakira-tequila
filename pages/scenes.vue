<script setup lang="ts">
useSeo({
  title: '演出アイデア | キラキラテキーラ',
  description:
    'キラキラテキーラの使用シーン・演出アイデア集。誕生日ショット、指名ショット、イベントショットなど、コンセプトカフェ・ガールズバーでショットを盛り上げる演出をご紹介します。',
  path: '/scenes/',
})

const scenes = [
  {
    icon: '🎉',
    title: '誕生日ショット',
    description:
      'ダイヤモンドボトルがサプライズで登場。キャストと交わすバースデーショットが、一年に一度の記憶に残る瞬間になります。',
    glow: 'hover:shadow-glow-pink',
  },
  {
    icon: '💎',
    title: '指名ショット',
    description:
      '推しのキャストと、キラキラグラスで一緒に乾杯。「特別な一杯」が指名の嬉しさをさらに引き立てます。',
    glow: 'hover:shadow-glow-purple',
  },
  {
    icon: '🏆',
    title: 'イベントショット',
    description:
      '周年記念日やイベント日に、店内全員で一斉に乾杯。きらめくグラスが揃う光景は、お店の名物シーンになります。',
    glow: 'hover:shadow-glow-gold',
  },
  {
    icon: '📸',
    title: '映えるショット',
    description:
      'キラキラボトルを持った一枚は、それだけでインスタ映え。お客様の投稿がSNSで拡散され、お店の宣伝にもつながります。',
    glow: 'hover:shadow-glow-cyan',
  },
  {
    icon: '🍷',
    title: 'カウンター演出',
    description:
      'スポットライトでボトルを照らせば、カットガラスが光を乱反射。置いておくだけで、カウンターがきらめくステージに変わります。',
    glow: 'hover:shadow-glow-gold',
  },
  {
    icon: '🕴',
    title: 'VIPショット',
    description:
      'シャンパンなど高単価商品と組み合わせて、プレミアム感を演出。特別なお客様への「最上級の一杯」としてご提案できます。',
    glow: 'hover:shadow-glow-purple',
  },
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,105,180,0.2)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(191,95,255,0.15)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="30" :diamonds="10" :seed="127" />

      <div class="relative z-10 px-6 py-24 text-center">
        <p class="font-display text-sm italic tracking-[0.5em] text-gold md:text-base">SCENE IDEAS</p>
        <h1 class="text-holo mt-6 text-4xl font-black leading-tight tracking-wider md:text-6xl">
          ショットを、<br class="md:hidden" />イベントに。
        </h1>
        <div class="holo-divider" />
        <p class="mt-8 leading-loose text-white/70 md:text-lg">
          キラキラテキーラは、注ぐだけで「演出」になる。<br class="hidden md:block" />
          お店で使えるシーン別アイデアをご紹介します。
        </p>
      </div>
    </section>

    <!-- ===== シーン別演出アイデア ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-24">
      <SparkleBackground :count="18" :seed="138" />
      <div class="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-pink">IDEAS</p>
            <h2 class="text-holo mt-4 section-title">シーン別演出アイデア</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>
        <div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FadeIn v-for="(scene, i) in scenes" :key="scene.title" :delay="i * 100">
            <div class="glass-card h-full p-8" :class="scene.glow">
              <p class="text-4xl" aria-hidden="true">{{ scene.icon }}</p>
              <h3 class="mt-5 text-xl font-black tracking-wider text-gold">{{ scene.title }}</h3>
              <p class="mt-4 text-sm leading-loose text-white/70">{{ scene.description }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== お店側のメリット ===== -->
    <section class="relative overflow-hidden py-24">
      <SparkleBackground :count="16" :diamonds="6" :seed="149" />
      <div class="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">MERIT</p>
            <h2 class="text-holo mt-4 section-title">お店側のメリット</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>
        <FadeIn :delay="150">
          <div class="glass-card mt-12 p-8 text-center md:p-12">
            <p class="text-shimmer text-xl font-black leading-relaxed tracking-wider md:text-2xl">
              「どこのテキーラか」は関係ない。<br />キラキラだから、選ばれる。
            </p>
            <p class="mt-8 leading-loose text-white/80">
              ショットを注文するお客様が見ているのは、銘柄ではなく「その場の盛り上がり」。<br class="hidden md:block" />
              ダイヤモンドが輝くボトルとグラスは、それ自体が指名される理由になります。<br class="hidden md:block" />
              演出の目玉として、客単価アップとSNSでの拡散を同時に狙えます。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night to-night-deep py-24">
      <SparkleBackground :count="24" :diamonds="8" :seed="160" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 class="text-holo section-title">この演出をお店に導入する</h2>
          <div class="holo-divider" />
          <p class="mt-8 leading-loose text-white/80 md:text-lg">
            導入プラン・卸価格・サンプルのご相談など、<br class="hidden md:block" />
            お気軽にお問い合わせください。
          </p>
          <div class="mt-10">
            <NuxtLink to="/contact/" class="btn-holo hover-sparkle">お問い合わせはこちら</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
