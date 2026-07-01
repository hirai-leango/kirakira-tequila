<script setup lang="ts">
useHead({
  title: 'キラキラテキーラ | 一杯が、特別な体験になる',
  meta: [
    {
      name: 'description',
      content:
        'キラキラテキーラは、ダイヤモンドを纏ったプレミアムテキーラ。コンセプトカフェ・ガールズバーの一杯のショットを、忘れられない特別な体験へと変えます。',
    },
  ],
})

const features = [
  {
    title: 'キラキラカットガラス',
    description:
      '特殊カットを施したガラスが光を乱反射し、グラスを掲げるたびに宝石のような輝きを放ちます。',
    icon: '✦',
  },
  {
    title: 'ダイヤモンド装飾',
    description:
      'ボトルとグラスの外側に小さなダイヤモンドをあしらいました。この輝きこそが、キラキラテキーラの証です。',
    icon: '◆',
  },
  {
    title: 'プレミアムテキーラ',
    description:
      '厳選されたアガベから造られる本格プレミアムテキーラ。味わいも輝きも、一切の妥協はありません。',
    icon: '🥃',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-black">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <SparkleField :count="28" />
      <div class="relative z-10 px-6 text-center">
        <p class="mb-6 text-sm tracking-[0.5em] text-gold-light md:text-base">
          PREMIUM TEQUILA
        </p>
        <h1 class="text-shimmer font-serif text-5xl font-bold leading-tight tracking-widest md:text-7xl">
          キラキラテキーラ
        </h1>
        <p class="animate-glow mt-8 font-serif text-xl tracking-[0.3em] text-gold md:text-2xl">
          一杯が、特別な体験になる
        </p>
        <div class="gold-divider" />
        <div class="mt-12">
          <a href="#contact" class="btn-gold">お問い合わせはこちら</a>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold" aria-hidden="true">
        <span class="block animate-bounce text-2xl">▾</span>
      </div>
    </section>

    <!-- Brand Story -->
    <section class="relative bg-gradient-to-b from-brand-black via-[#141008] to-brand-black py-24">
      <SparkleField :count="10" />
      <div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 class="section-title">ダイヤモンドを纏ったテキーラ</h2>
        <div class="gold-divider" />
        <p class="mt-10 leading-loose text-gray-300 md:text-lg">
          夜の街で交わされる、数えきれないテキーラショット。<br class="hidden md:block" />
          その一杯を、忘れられない輝きに変えたい——。
        </p>
        <p class="mt-6 leading-loose text-gray-300 md:text-lg">
          キラキラテキーラのボトルとグラスには、本物の小さなダイヤモンドがあしらわれています。<br class="hidden md:block" />
          特殊カットのガラスが店内の光を受けて煌めき、<br class="hidden md:block" />
          グラスを掲げた瞬間、そこにいる全員の視線を集めます。
        </p>
        <p class="mt-6 leading-loose text-gray-300 md:text-lg">
          ダイヤモンドの輝きは、私たちのブランドの証。<br class="hidden md:block" />
          ただのショットではなく、<span class="font-semibold text-gold">「特別な体験」</span>をお届けします。
        </p>
      </div>
    </section>

    <!-- Product Preview -->
    <section class="bg-brand-black py-24">
      <div class="mx-auto max-w-6xl px-6">
        <div class="text-center">
          <h2 class="section-title">PRODUCTS</h2>
          <p class="mt-4 tracking-widest text-gray-400">ボトル &amp; ショットグラス</p>
          <div class="gold-divider" />
        </div>

        <div class="mt-16 grid gap-10 md:grid-cols-2">
          <!-- Bottle -->
          <div
            class="group relative overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-b from-[#1a1503] to-brand-black p-10 text-center transition-all duration-500 hover:border-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
          >
            <SparkleField :count="8" />
            <div class="animate-float-slow relative z-10 mx-auto flex h-48 w-24 items-end justify-center">
              <div class="relative h-full w-16">
                <div class="absolute bottom-0 h-36 w-full rounded-b-lg rounded-t-sm border border-gold/60 bg-gradient-to-b from-gold/20 to-gold/5" />
                <div class="absolute left-1/2 top-2 h-12 w-5 -translate-x-1/2 rounded-t-md border border-gold/60 bg-gold/10" />
                <div class="absolute left-1/2 top-0 h-3 w-6 -translate-x-1/2 rounded-sm bg-gold" />
                <span class="absolute left-1/2 top-20 -translate-x-1/2 text-xl text-gold">◆</span>
              </div>
            </div>
            <h3 class="relative z-10 mt-8 font-serif text-2xl font-bold tracking-widest text-gold">
              300ml ボトル
            </h3>
            <p class="relative z-10 mt-4 leading-relaxed text-gray-400">
              ダイヤモンドをあしらった特別なボトル。卓上に置くだけで、テーブルが華やぐ存在感。
            </p>
          </div>

          <!-- Shot Glass -->
          <div
            class="group relative overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-b from-[#1a1503] to-brand-black p-10 text-center transition-all duration-500 hover:border-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
          >
            <SparkleField :count="8" />
            <div class="animate-float-slow relative z-10 mx-auto flex h-48 w-24 items-end justify-center">
              <div class="relative h-20 w-14">
                <div class="absolute bottom-0 h-full w-full rounded-b-md border border-gold/60 bg-gradient-to-b from-gold/25 to-gold/5 [clip-path:polygon(10%_0,90%_0,80%_100%,20%_100%)]" />
                <span class="absolute left-1/2 top-7 -translate-x-1/2 text-sm text-gold">◆</span>
              </div>
            </div>
            <h3 class="relative z-10 mt-8 font-serif text-2xl font-bold tracking-widest text-gold">
              ショットグラス
            </h3>
            <p class="relative z-10 mt-4 leading-relaxed text-gray-400">
              特殊キラキラカットのグラス。光を受けて煌めく一杯が、乾杯の瞬間を演出します。
            </p>
          </div>
        </div>

        <!-- Features -->
        <div class="mt-16 grid gap-8 md:grid-cols-3">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="rounded-lg border border-gold/20 bg-white/[0.02] p-8 text-center transition-colors duration-300 hover:border-gold/60"
          >
            <span class="text-3xl text-gold">{{ feature.icon }}</span>
            <h3 class="mt-4 font-serif text-lg font-bold tracking-wider text-gold">
              {{ feature.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-400">
              {{ feature.description }}
            </p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <NuxtLink to="/products" class="btn-gold">商品の詳細を見る</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section
      id="contact"
      class="relative overflow-hidden bg-gradient-to-b from-brand-black via-[#1a1503] to-brand-black py-24"
    >
      <SparkleField :count="14" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 class="section-title">お店に、輝きを。</h2>
        <div class="gold-divider" />
        <p class="mt-8 leading-loose text-gray-300 md:text-lg">
          コンセプトカフェ・ガールズバー様向けに、キラキラテキーラの卸販売を行っております。<br />
          お客様に「特別な一杯」を提供したい店舗様は、ぜひお気軽にご相談ください。
        </p>
        <p class="mt-10 font-serif text-lg tracking-wider text-gold md:text-xl">
          取り扱いをご希望の方はお問い合わせください
        </p>
        <div class="mt-8">
          <a
            href="mailto:info@kirakira-tequila.com"
            class="btn-gold"
          >お問い合わせ</a>
        </div>
      </div>
    </section>
  </div>
</template>
