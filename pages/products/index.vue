<script setup lang="ts">
useHead({
  title: '商品紹介 | キラキラテキーラ',
  meta: [
    {
      name: 'description',
      content:
        'キラキラテキーラの300mlボトルとショットグラスをご紹介。キラキラカットガラスとダイヤモンド装飾が生み出す、プレミアムな輝きをお届けします。',
    },
  ],
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

const features = [
  {
    icon: '✦',
    title: 'キラキラカットガラス',
    description:
      '宝石のカッティング技術に着想を得た特殊カットガラス。店内の照明を受けて光を乱反射し、グラスを掲げるたびにきらめきが生まれます。暗めの照明のコンセプトカフェやガールズバーでこそ、その輝きは最大限に引き立ちます。',
  },
  {
    icon: '◆',
    title: 'ダイヤモンド装飾',
    description:
      'ボトルとグラスの外側に、小さな本物のダイヤモンドをあしらいました。メーカーズマークの封蝋のように、このダイヤモンドこそがキラキラテキーラの証。ひと目で「特別な一杯」だと分かるアイコンです。',
  },
  {
    icon: '🥃',
    title: 'プレミアム品質',
    description:
      '見た目だけではありません。厳選されたアガベを使用した本格プレミアムテキーラを採用。ショットでそのまま楽しめる、なめらかで豊かな味わいをお約束します。',
  },
]
</script>

<template>
  <div class="bg-brand-black">
    <!-- Page Header -->
    <section class="relative overflow-hidden py-24 text-center md:py-32">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <SparkleField :count="18" />
      <div class="relative z-10 px-6">
        <p class="text-sm tracking-[0.5em] text-gold-light">PRODUCTS</p>
        <h1 class="mt-4 font-serif text-4xl font-bold tracking-widest text-gold md:text-5xl">
          商品紹介
        </h1>
        <div class="gold-divider" />
        <p class="mt-8 leading-loose text-gray-300">
          ダイヤモンドを纏ったボトルとグラスが、<br class="md:hidden" />一杯を特別な体験に変えます。
        </p>
      </div>
    </section>

    <!-- 300ml Bottle -->
    <section class="py-20">
      <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div
          class="relative order-1 overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-b from-[#1a1503] to-brand-black p-12"
        >
          <SparkleField :count="12" />
          <div class="animate-float-slow relative z-10 mx-auto flex h-72 w-32 items-end justify-center">
            <div class="relative h-full w-24">
              <div class="absolute bottom-0 h-56 w-full rounded-b-xl rounded-t-md border border-gold/60 bg-gradient-to-b from-gold/25 via-gold/10 to-gold/5 shadow-[0_0_40px_rgba(212,175,55,0.2)]" />
              <div class="absolute left-1/2 top-4 h-16 w-7 -translate-x-1/2 rounded-t-lg border border-gold/60 bg-gold/10" />
              <div class="absolute left-1/2 top-0 h-5 w-9 -translate-x-1/2 rounded-sm bg-gold" />
              <div class="absolute left-1/2 top-32 w-16 -translate-x-1/2 border border-gold/40 bg-brand-black/60 py-2 text-center">
                <span class="block text-[10px] tracking-widest text-gold">KIRAKIRA</span>
                <span class="mt-1 block text-xl text-gold">◆</span>
              </div>
            </div>
          </div>
        </div>
        <div class="order-2">
          <p class="text-sm tracking-[0.4em] text-gold-light">BOTTLE</p>
          <h2 class="mt-3 font-serif text-3xl font-bold tracking-widest text-gold">
            300ml ボトル
          </h2>
          <p class="mt-6 leading-loose text-gray-300">
            卓上に置いた瞬間、テーブルの主役になるボトル。外側にあしらわれたダイヤモンドと、光を受けて煌めくガラスボディが、お客様の「写真に撮りたくなる」気持ちを引き出します。
          </p>
          <p class="mt-4 leading-loose text-gray-300">
            300mlというサイズは、コンセプトカフェやガールズバーでのボトル導入にぴったり。数人で分け合うショットにも、特別なお祝いの一本にも最適です。
          </p>
          <dl class="mt-8 divide-y divide-gold/20 border-y border-gold/20">
            <div v-for="spec in bottleSpecs" :key="spec.label" class="flex justify-between py-3 text-sm">
              <dt class="tracking-widest text-gold">{{ spec.label }}</dt>
              <dd class="text-gray-300">{{ spec.value }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Shot Glass -->
    <section class="bg-gradient-to-b from-brand-black via-[#141008] to-brand-black py-20">
      <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div class="order-2 md:order-1">
          <p class="text-sm tracking-[0.4em] text-gold-light">SHOT GLASS</p>
          <h2 class="mt-3 font-serif text-3xl font-bold tracking-widest text-gold">
            ショットグラス
          </h2>
          <p class="mt-6 leading-loose text-gray-300">
            特殊なキラキラカットを施したショットグラス。グラスを掲げて乾杯した瞬間、カットガラスが照明を反射してきらめき、その場の空気が一段と華やぎます。
          </p>
          <p class="mt-4 leading-loose text-gray-300">
            グラスにも小さなダイヤモンドを装飾。「このグラスで飲むショットは特別」という体験そのものが、お店の思い出になります。
          </p>
          <dl class="mt-8 divide-y divide-gold/20 border-y border-gold/20">
            <div v-for="spec in glassSpecs" :key="spec.label" class="flex justify-between py-3 text-sm">
              <dt class="tracking-widest text-gold">{{ spec.label }}</dt>
              <dd class="text-gray-300">{{ spec.value }}</dd>
            </div>
          </dl>
        </div>
        <div
          class="relative order-1 overflow-hidden rounded-lg border border-gold/30 bg-gradient-to-b from-[#1a1503] to-brand-black p-12 md:order-2"
        >
          <SparkleField :count="12" />
          <div class="animate-float-slow relative z-10 mx-auto flex h-72 w-40 items-end justify-center pb-8">
            <div class="relative h-32 w-24">
              <div class="absolute bottom-0 h-full w-full rounded-b-lg border border-gold/60 bg-gradient-to-b from-gold/30 via-gold/10 to-gold/5 shadow-[0_0_40px_rgba(212,175,55,0.2)] [clip-path:polygon(8%_0,92%_0,82%_100%,18%_100%)]" />
              <div class="absolute inset-x-6 top-4 h-px bg-gold/40" />
              <div class="absolute inset-x-8 top-8 h-px bg-gold/30" />
              <span class="absolute left-1/2 top-12 -translate-x-1/2 text-lg text-gold">◆</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20">
      <div class="mx-auto max-w-6xl px-6">
        <div class="text-center">
          <h2 class="section-title">3つのこだわり</h2>
          <div class="gold-divider" />
        </div>
        <div class="mt-14 grid gap-8 md:grid-cols-3">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="rounded-lg border border-gold/20 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-gold/60"
          >
            <span class="text-3xl text-gold">{{ feature.icon }}</span>
            <h3 class="mt-4 font-serif text-xl font-bold tracking-wider text-gold">
              {{ feature.title }}
            </h3>
            <p class="mt-4 text-sm leading-loose text-gray-400">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-gradient-to-b from-brand-black via-[#1a1503] to-brand-black py-20">
      <SparkleField :count="10" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 class="section-title">導入のご相談</h2>
        <div class="gold-divider" />
        <p class="mt-8 leading-loose text-gray-300">
          店舗様向けの卸価格・導入プランをご用意しております。<br />
          取り扱いをご希望の方はお問い合わせください。
        </p>
        <div class="mt-8">
          <a href="mailto:info@kirakira-tequila.com" class="btn-gold">お問い合わせ</a>
        </div>
      </div>
    </section>
  </div>
</template>
