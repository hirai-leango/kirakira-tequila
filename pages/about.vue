<script setup lang="ts">
useSeo({
  title: 'ブランドストーリー | キラキラテキーラ',
  description:
    'キラキラテキーラのブランドストーリー。コンセプトカフェの一杯のショットを特別な体験に変えたい——ダイヤモンドを纏ったテキーラが生まれた理由と、私たちのビジョンをご紹介します。',
  path: '/about/',
})

const stats = [
  { icon: '💎', value: '3粒', label: 'ボトルを飾る本物のダイヤモンド' },
  { icon: '✨', value: '57面', label: '宝石カットに着想を得たグラスカット' },
  { icon: '🍾', value: '300ml', label: 'テーブルの主役になるボトル' },
  { icon: '🌵', value: '100%', label: '厳選アガベのプレミアムテキーラ' },
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,95,255,0.22)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,105,180,0.14)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(0,255,255,0.12)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="32" :diamonds="12" :seed="61" />

      <div class="relative z-10 px-6 py-24 text-center">
        <p class="font-display text-sm italic tracking-[0.5em] text-gold md:text-base">BRAND STORY</p>
        <h1 class="text-holo mt-6 text-4xl font-black leading-tight tracking-wider md:text-6xl">
          ダイヤモンドきらめく<br class="md:hidden" />テキーラを、世界に。
        </h1>
        <div class="holo-divider" />
        <p class="mt-8 leading-loose text-white/70 md:text-lg">
          夜の街のいつものショットを、<br class="md:hidden" />一生モノの思い出に変える。<br />
          それが、キラキラテキーラの原点です。
        </p>
      </div>
    </section>

    <!-- ===== 誕生のストーリー ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-24">
      <SparkleBackground :count="16" :seed="72" />
      <div class="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-pink">ORIGIN</p>
            <h2 class="text-holo mt-4 section-title">誕生のストーリー</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>
        <FadeIn :delay="150">
          <div class="glass-card mt-12 p-8 md:p-12">
            <p class="leading-loose text-white/80 md:text-lg">
              きっかけは、あるコンセプトカフェで見た光景でした。
            </p>
            <p class="mt-6 leading-loose text-white/80 md:text-lg">
              お客様とキャストが交わすテキーラショット。盛り上がる瞬間のはずなのに、注がれているのは「何でもいい」テキーラ。せっかくの乾杯なのに、グラスにもボトルにも、特別感はどこにもありませんでした。
            </p>
            <p class="mt-6 leading-loose text-white/80 md:text-lg">
              ——せっかくなら、ただのショットじゃなく、<strong class="font-bold text-gold">「この一杯」を特別な体験にしたい。</strong>
            </p>
            <p class="mt-6 leading-loose text-white/80 md:text-lg">
              その想いから、ダイヤモンドを纏ったテキーラ「キラキラテキーラ」は生まれました。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== アイデンティティ ===== -->
    <section class="relative overflow-hidden py-24">
      <SparkleBackground :count="16" :diamonds="6" :seed="83" />
      <div class="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">IDENTITY</p>
            <h2 class="text-holo mt-4 section-title">ダイヤモンドを纏う</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>
        <FadeIn :delay="150">
          <p class="mx-auto mt-10 max-w-3xl text-center leading-loose text-white/80 md:text-lg">
            メーカーズマークのボトルを見れば、誰もがあの封蝋を思い浮かべるように。<br class="hidden md:block" />
            キラキラテキーラのトレードマークは、ボトルとグラスに輝く<strong class="font-bold text-gold">ダイヤモンド</strong>です。
          </p>
          <p class="mx-auto mt-6 max-w-3xl text-center leading-loose text-white/80 md:text-lg">
            テーブルに置かれた瞬間に視線を集め、掲げれば照明を受けてきらめく。<br class="hidden md:block" />
            この輝きこそが、キラキラテキーラの証であり、ブランドそのものです。
          </p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== ビジョン ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-24">
      <SparkleBackground :count="20" :seed="94" />
      <div class="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-gold">VISION</p>
            <h2 class="text-holo mt-4 section-title">すべての一杯を、思い出に。</h2>
            <div class="holo-divider" />
            <p class="mx-auto mt-10 max-w-3xl leading-loose text-white/80 md:text-lg">
              遊びに行った日のショットが、ふと思い出す記憶になる。<br class="hidden md:block" />
              「あの日のキラキラのやつ、すごかったよね」と語り合える夜になる。<br class="hidden md:block" />
              私たちは、一杯のテキーラを「体験」として記憶に残すブランドを目指しています。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== 数字で見るキラキラ ===== -->
    <section class="relative overflow-hidden py-24">
      <SparkleBackground :count="14" :seed="105" />
      <div class="relative z-10 mx-auto max-w-5xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-purple">BY THE NUMBERS</p>
            <h2 class="text-holo mt-4 section-title">数字で見るキラキラ</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>
        <FadeIn :delay="150">
          <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="stat in stats" :key="stat.label" class="glass-card p-8 text-center">
              <p class="text-3xl" aria-hidden="true">{{ stat.icon }}</p>
              <p class="text-shimmer mt-4 text-4xl font-black tracking-wider">{{ stat.value }}</p>
              <p class="mt-3 text-sm leading-relaxed text-white/70">{{ stat.label }}</p>
            </div>
          </div>
          <p class="mt-6 text-center text-xs text-white/40">※仕様はロット・モデルにより異なる場合があります。</p>
        </FadeIn>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night to-night-deep py-24">
      <SparkleBackground :count="24" :diamonds="8" :seed="116" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 class="text-holo section-title">お店に取り入れてみませんか？</h2>
          <div class="holo-divider" />
          <p class="mt-8 leading-loose text-white/80 md:text-lg">
            キラキラテキーラは、コンセプトカフェ・ガールズバーなど<br class="hidden md:block" />
            夜のお店の「一杯」を特別にしたい店舗様を応援します。
          </p>
          <div class="mt-10">
            <NuxtLink to="/contact/" class="btn-holo hover-sparkle">導入のご相談はこちら</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
