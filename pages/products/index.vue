<script setup lang="ts">
useSeo({
  title: '商品紹介 | キラキラテキーラ',
  description:
    'キラキラテキーラの300mlボトルとショットグラスをご紹介。キラキラカットガラスとダイヤモンド装飾が生み出す、プレミアムな輝きをお届けします。',
  path: '/products',
})

const bottleSpecs = [
  { label: '容量', value: '300ml' },
  { label: '種類', value: 'プレミアムテキーラ' },
  { label: '原料', value: '厳選アガベ100%' },
  { label: '装飾', value: '外装ダイヤモンド付き' },
]

const glassSpecs = [
  { label: 'タイプ', value: 'ショットグラス' },
  { label: 'ガラス', value: '特殊キラキラカット' },
  { label: '装飾', value: '外装ダイヤモンド付き' },
  { label: '用途', value: 'テキーラショット・乾杯演出' },
]

const secrets = [
  {
    icon: '💎',
    title: 'ダイヤモンドの装飾',
    description:
      'ボトルとグラスの外側に、小さな本物のダイヤモンドをひと粒ずつ丁寧にセット。メーカーズマークの封蝋がそうであるように、このダイヤモンドこそが「本物のキラキラテキーラ」の証明。ひと目で特別な一杯だと分かるブランドアイコンです。',
  },
  {
    icon: '✨',
    title: '特殊キラキラカット',
    description:
      '宝石のブリリアントカットに着想を得た、多面体のガラスカッティング。光を受けるたびにファセットが乱反射を起こし、グラスの中に無数の光の粒が舞います。照明が絞られたコンセプトカフェやガールズバーの空間でこそ、輝きは最大化します。',
  },
  {
    icon: '📸',
    title: '映えるために設計',
    description:
      'スマホのカメラで撮ったときに一番きらめいて見える反射角を計算してデザイン。フラッシュなしでも光の粒がしっかり写るから、ストーリーでもリールでも「盛れる」一枚が撮れます。',
  },
]
</script>

<template>
  <div class="bg-night">
    <!-- ===== Page Header ===== -->
    <section class="relative overflow-hidden py-24 text-center md:py-32">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,95,255,0.2)_0%,transparent_55%),radial-gradient(ellipse_at_bottom,rgba(255,105,180,0.1)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="28" :diamonds="10" :seed="11" />
      <div class="relative z-10 px-6">
        <p class="font-display text-sm italic tracking-[0.5em] text-kira-cyan">PRODUCTS</p>
        <h1 class="text-holo mt-4 section-title">商品紹介</h1>
        <div class="holo-divider" />
        <p class="mt-8 leading-loose text-white/80 md:text-lg">
          ダイヤモンドを纏ったボトルとグラスが、<br class="md:hidden" />一杯を特別な体験に変えます。
        </p>
      </div>
    </section>

    <!-- ===== 300ml Bottle ===== -->
    <section class="py-20">
      <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <FadeIn>
          <div
            class="glass-card hover:shadow-glow-pink relative order-1 overflow-hidden p-12"
          >
            <SparkleBackground :count="14" :seed="31" />
            <!-- CSSで描くボトル -->
            <div class="animate-float-slow relative z-10 mx-auto flex h-72 w-32 items-end justify-center">
              <div class="relative h-full w-24">
                <div
                  class="absolute bottom-0 h-56 w-full rounded-b-xl rounded-t-md border border-kira-pink/60 bg-gradient-to-b from-kira-pink/25 via-kira-purple/15 to-kira-cyan/10 shadow-glow-pink"
                />
                <div class="absolute left-1/2 top-4 h-16 w-7 -translate-x-1/2 rounded-t-lg border border-kira-pink/60 bg-kira-pink/10" />
                <div class="absolute left-1/2 top-0 h-5 w-9 -translate-x-1/2 rounded-sm bg-gold" />
                <div class="absolute left-1/2 top-32 w-16 -translate-x-1/2 rounded border border-gold/50 bg-night/70 py-2 text-center backdrop-blur-sm">
                  <span class="text-shimmer block text-[10px] font-black tracking-widest">KIRAKIRA</span>
                  <span class="mt-1 block animate-twinkle text-xl text-gold">◆</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn :delay="120">
          <div class="order-2">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-pink">BOTTLE</p>
            <h2 class="text-holo mt-3 text-3xl font-black tracking-widest md:text-4xl">300ml ボトル</h2>
            <p class="mt-6 leading-loose text-white/80">
              卓上に置いた瞬間、テーブルの主役になるボトル。外側にあしらわれたダイヤモンドと、光を受けて煌めくカットガラスのボディが、お客様の「写真に撮りたい！」を引き出します。
            </p>
            <p class="mt-4 leading-loose text-white/80">
              300mlというサイズは、コンセプトカフェやガールズバーでのボトル導入にぴったり。推しとの乾杯、記念日のお祝い、イベントの盛り上げ役として活躍します。
            </p>
            <dl class="mt-8 divide-y divide-white/10 border-y border-white/10">
              <div v-for="spec in bottleSpecs" :key="spec.label" class="flex justify-between py-3 text-sm">
                <dt class="font-bold tracking-widest text-gold">{{ spec.label }}</dt>
                <dd class="text-white/80">{{ spec.value }}</dd>
              </div>
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== Shot Glass ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-20">
      <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <FadeIn :delay="120">
          <div class="order-2 md:order-1">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">SHOT GLASS</p>
            <h2 class="text-holo mt-3 text-3xl font-black tracking-widest md:text-4xl">ショットグラス</h2>
            <p class="mt-6 leading-loose text-white/80">
              特殊なキラキラカットを施したショットグラス。掲げて乾杯した瞬間、カットガラスが照明を反射してきらめき、その場の空気が一段と華やぎます。まるで飲むためのジュエリー。
            </p>
            <p class="mt-4 leading-loose text-white/80">
              グラスにも小さなダイヤモンドを装飾。「このグラスで飲むショットは特別」という体験そのものが、お店の思い出になり、リピートのきっかけになります。
            </p>
            <dl class="mt-8 divide-y divide-white/10 border-y border-white/10">
              <div v-for="spec in glassSpecs" :key="spec.label" class="flex justify-between py-3 text-sm">
                <dt class="font-bold tracking-widest text-gold">{{ spec.label }}</dt>
                <dd class="text-white/80">{{ spec.value }}</dd>
              </div>
            </dl>
          </div>
        </FadeIn>
        <FadeIn>
          <div
            class="glass-card hover:shadow-glow-cyan relative order-1 overflow-hidden p-12 md:order-2"
          >
            <SparkleBackground :count="14" :seed="47" />
            <!-- CSSで描くショットグラス -->
            <div class="animate-float-slow relative z-10 mx-auto flex h-72 w-40 items-end justify-center pb-8">
              <div class="relative h-32 w-24">
                <div
                  class="absolute bottom-0 h-full w-full rounded-b-lg border border-kira-cyan/60 bg-gradient-to-b from-kira-cyan/30 via-kira-purple/15 to-kira-pink/10 shadow-glow-cyan [clip-path:polygon(8%_0,92%_0,82%_100%,18%_100%)]"
                />
                <div class="absolute inset-x-6 top-4 h-px bg-kira-cyan/40" />
                <div class="absolute inset-x-8 top-8 h-px bg-kira-cyan/30" />
                <span class="absolute left-1/2 top-12 -translate-x-1/2 animate-twinkle text-lg text-gold">◆</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>

    <!-- ===== キラキラの秘密 ===== -->
    <section class="relative overflow-hidden py-24">
      <SparkleBackground :count="18" :seed="63" />
      <div class="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-gold">SECRET OF SPARKLE</p>
            <h2 class="text-holo mt-4 section-title">キラキラの秘密</h2>
            <div class="holo-divider" />
            <p class="mx-auto mt-8 max-w-2xl leading-loose text-white/80">
              なぜキラキラテキーラは、こんなに輝くのか。<br class="hidden md:block" />
              その理由は3つのこだわりにあります。
            </p>
          </div>
        </FadeIn>
        <div class="mt-14 grid gap-8 md:grid-cols-3">
          <FadeIn v-for="(secret, i) in secrets" :key="secret.title" :delay="i * 120">
            <div class="glass-card hover-sparkle h-full p-8">
              <span class="text-4xl" aria-hidden="true">{{ secret.icon }}</span>
              <h3 class="mt-4 text-xl font-black tracking-wider text-gold">{{ secret.title }}</h3>
              <p class="mt-4 text-sm leading-loose text-white/70">{{ secret.description }}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-[#1c0033] to-night py-20">
      <SparkleBackground :count="16" :diamonds="6" :seed="77" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 class="text-holo section-title">導入のご相談</h2>
          <div class="holo-divider" />
          <p class="mt-8 leading-loose text-white/80">
            店舗様向けの卸価格・導入プランをご用意しております。<br />
            取り扱いをご希望の方はお気軽にお問い合わせください。
          </p>
          <div class="mt-8">
            <NuxtLink to="/contact" class="btn-holo hover-sparkle">お問い合わせ</NuxtLink>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
</template>
