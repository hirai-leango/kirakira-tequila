<script setup lang="ts">
type VoiceCategory = 'store' | 'customer'

interface Voice {
  id: number
  category: VoiceCategory
  name: string
  role: string
  avatar: string
  rating: number
  title: string
  body: string
  date: string
}

const voices: Voice[] = [
  {
    id: 1,
    category: 'store',
    name: '東京都・コンカフェ店長 Aさん',
    role: 'コンセプトカフェ',
    avatar: '👑',
    rating: 5,
    title: 'ショット売上が目に見えて伸びました',
    body: '導入した月からショットの注文数が約1.5倍に。ボトルを見せるだけで「なにそれ！」と盛り上がるので、キャストからも「すすめやすい」と好評です。',
    date: '2026-05-18',
  },
  {
    id: 2,
    category: 'customer',
    name: '20代・コンカフェ好き Cさん',
    role: 'お客さま',
    avatar: '🎀',
    rating: 5,
    title: '推しとのショットが特別な思い出に',
    body: '推しキャストと初めてキラキラテキーラで乾杯しました。グラスまでキラキラで、写真を見返すたびにあの日を思い出せます。もう普通のショットには戻れません。',
    date: '2026-06-02',
  },
  {
    id: 3,
    category: 'store',
    name: '大阪・ガールズバーマネージャー Bさん',
    role: 'ガールズバー',
    avatar: '🍸',
    rating: 5,
    title: '他店との差別化に成功',
    body: '近隣に競合が多いエリアですが、「ダイヤモンドボトルのある店」として覚えてもらえるように。イベント日の目玉として欠かせない存在になっています。',
    date: '2026-04-27',
  },
  {
    id: 4,
    category: 'customer',
    name: '20代・常連の方',
    role: 'お客さま',
    avatar: '💖',
    rating: 5,
    title: '誕生日サプライズで登場して感動',
    body: '誕生日にお店へ行ったら、キラキラのボトルがサプライズで登場。店内の照明に反射してすごくきれいで、一生忘れられないバースデーになりました。',
    date: '2026-05-30',
  },
  {
    id: 5,
    category: 'store',
    name: '名古屋・コンカフェオーナー Dさん',
    role: 'コンセプトカフェ',
    avatar: '💼',
    rating: 4,
    title: 'お客様が自然と写真を撮ってくれる',
    body: 'ボトルとグラスを出すと、ほぼ全員がスマホを取り出します。SNSにあげてくれるお客様も多く、宣伝費をかけずに新規のご来店につながっています。',
    date: '2026-03-14',
  },
  {
    id: 6,
    category: 'customer',
    name: '30代・ガールズバー常連 Eさん',
    role: 'お客さま',
    avatar: '🥂',
    rating: 4,
    title: 'とにかく映える。テンションが上がる',
    body: '暗めの店内でスポットライトに当たると、ボトルがミラーボールみたいに輝きます。友達と行くと必ず頼む定番になりました。',
    date: '2026-04-09',
  },
  {
    id: 7,
    category: 'store',
    name: '福岡・コンカフェ店長 Fさん',
    role: 'コンセプトカフェ',
    avatar: '🌟',
    rating: 5,
    title: '取引がスムーズで助かっています',
    body: '発注から納品までのやり取りがスピーディーで、急なイベント前の追加注文にも柔軟に対応してもらえました。小さなお店でも取り扱いやすいです。',
    date: '2026-06-11',
  },
  {
    id: 8,
    category: 'customer',
    name: '20代・メイドカフェ好き Gさん',
    role: 'お客さま',
    avatar: '🍓',
    rating: 5,
    title: 'キラキラでテンション爆上がり',
    body: 'グラスに注ぐ瞬間からずっとキラキラしていて、その場にいる全員のテンションが上がりました。「乾杯」の掛け声がいつもより大きくなるお酒です。',
    date: '2026-05-05',
  },
  {
    id: 9,
    category: 'store',
    name: '札幌・ガールズバーオーナー Hさん',
    role: 'ガールズバー',
    avatar: '🏢',
    rating: 4,
    title: 'イベント日の単価アップに貢献',
    body: '周年イベントで「全員キラキラショット」を企画したところ、過去最高の売上に。シャンパンより頼みやすい価格帯なのに、演出のインパクトは負けていません。',
    date: '2026-02-21',
  },
  {
    id: 10,
    category: 'customer',
    name: '20代・推し活中の方',
    role: 'お客さま',
    avatar: '💎',
    rating: 5,
    title: '推しに入れる一杯として最高',
    body: '推しに飲んでもらうならせっかくなら特別なものを、と思って選びました。「かわいい！」と喜んでもらえて、入れたこちらまで嬉しくなりました。',
    date: '2026-06-20',
  },
  {
    id: 11,
    category: 'store',
    name: '横浜・コンカフェ店長 Iさん',
    role: 'コンセプトカフェ',
    avatar: '🎩',
    rating: 5,
    title: 'キャストのモチベーションも上がった',
    body: '「キラキラショットください」の一言で店内が沸くので、キャストも接客が楽しそうです。指名のきっかけになることも多く、良い循環が生まれています。',
    date: '2026-05-08',
  },
  {
    id: 12,
    category: 'customer',
    name: '30代・お酒好き Jさん',
    role: 'お客さま',
    avatar: '🍹',
    rating: 4,
    title: '見た目だけじゃなく飲みやすい',
    body: '正直「映え重視のお酒かな」と思っていましたが、口当たりがまろやかでショットでもスッと飲めました。見た目と味の両方で楽しめます。',
    date: '2026-03-29',
  },
  {
    id: 13,
    category: 'store',
    name: '仙台・ガールズバー店長 Kさん',
    role: 'ガールズバー',
    avatar: '🗼',
    rating: 4,
    title: 'カウンターに置くだけで映える',
    body: '注文が入っていない時間帯でも、カウンターに置いたボトルが照明を反射してお店の雰囲気づくりに一役買っています。インテリアとしても優秀です。',
    date: '2026-04-16',
  },
  {
    id: 14,
    category: 'customer',
    name: '20代・誕生日で利用した方',
    role: 'お客さま',
    avatar: '🎂',
    rating: 5,
    title: '誕生日にぴったりの一本',
    body: '友達の誕生日祝いでボトルを入れました。キャンドル代わりにスポットライトで照らしてもらった演出が最高で、主役の友達も大喜びでした。',
    date: '2026-06-27',
  },
]

const averageRating =
  Math.round((voices.reduce((sum, v) => sum + v.rating, 0) / voices.length) * 10) / 10

useSeo({
  title: '口コミ・応援の声 | キラキラテキーラ',
  description:
    'キラキラテキーラに寄せられた口コミ・応援の声一覧。導入いただいたコンセプトカフェ・ガールズバーの店舗さまの声と、実際に飲んだお客さまの声をカテゴリ別にご紹介します。',
  path: '/voices/',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: SITE_NAME,
    description:
      'ダイヤモンドカットボトルが輝く、コンセプトカフェ・ガールズバー向けのキラキラテキーラ。',
    brand: { '@type': 'Brand', name: SITE_NAME },
    image: DEFAULT_OG_IMAGE,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      reviewCount: voices.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: voices.slice(0, 5).map((voice) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: voice.name },
      datePublished: voice.date,
      name: voice.title,
      reviewBody: voice.body,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: voice.rating,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  },
})

const categories = [
  { key: 'all', label: 'すべて' },
  { key: 'store', label: '取扱店舗の声' },
  { key: 'customer', label: 'お客さまの声' },
] as const

type CategoryKey = (typeof categories)[number]['key']

const selectedCategory = ref<CategoryKey>('all')

const filteredVoices = computed(() =>
  selectedCategory.value === 'all'
    ? voices
    : voices.filter((voice) => voice.category === selectedCategory.value),
)

function formatDate(date: string) {
  const [year, month] = date.split('-')
  return `${year}年${Number(month)}月`
}
</script>

<template>
  <div class="bg-night">
    <!-- ===== Hero ===== -->
    <section class="relative flex min-h-[55vh] items-center justify-center overflow-hidden">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.18)_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,105,180,0.15)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="30" :diamonds="10" :seed="171" />

      <div class="relative z-10 px-6 py-24 text-center">
        <p class="font-display text-sm italic tracking-[0.5em] text-gold md:text-base">VOICES</p>
        <h1 class="text-holo mt-6 text-4xl font-black leading-tight tracking-wider md:text-6xl">
          みんなの声
        </h1>
        <div class="holo-divider" />
        <p class="mt-8 leading-loose text-white/70 md:text-lg">
          導入店舗・お客さまから寄せられた<br class="md:hidden" />キラキラな声をお届けします。
        </p>
      </div>
    </section>

    <!-- ===== 口コミ・応援一覧 ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night via-night-soft to-night py-24">
      <SparkleBackground :count="18" :seed="182" />
      <div class="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div class="text-center">
            <p class="font-display text-sm italic tracking-[0.4em] text-kira-pink">REVIEWS</p>
            <h2 class="text-holo mt-4 section-title">口コミ・応援一覧</h2>
            <div class="holo-divider" />
          </div>
        </FadeIn>

        <!-- カテゴリフィルタ -->
        <FadeIn :delay="100">
          <div class="mt-12 flex flex-wrap justify-center gap-3" role="tablist" aria-label="声のカテゴリ">
            <button
              v-for="category in categories"
              :key="category.key"
              type="button"
              role="tab"
              :aria-selected="selectedCategory === category.key"
              class="rounded-full border px-6 py-2.5 text-sm font-bold tracking-widest transition-all duration-300"
              :class="
                selectedCategory === category.key
                  ? 'border-gold bg-gold/15 text-gold shadow-glow-gold'
                  : 'border-white/20 bg-white/5 text-white/60 hover:border-gold/50 hover:text-gold'
              "
              @click="selectedCategory = category.key"
            >
              {{ category.label }}
            </button>
          </div>
        </FadeIn>

        <!-- 声カード -->
        <div class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="voice in filteredVoices"
            :key="voice.id"
            class="glass-card hover-sparkle flex h-full flex-col p-7"
            :class="voice.category === 'store' ? 'hover:shadow-glow-gold' : 'hover:shadow-glow-pink'"
          >
            <div class="flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <span
                  class="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-2xl"
                  aria-hidden="true"
                >
                  {{ voice.avatar }}
                </span>
                <div>
                  <p class="text-sm font-bold leading-snug text-white/90">{{ voice.name }}</p>
                  <span
                    class="mt-1 inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-wider"
                    :class="
                      voice.category === 'store'
                        ? 'border-gold/50 bg-gold/10 text-gold'
                        : 'border-kira-pink/50 bg-kira-pink/10 text-kira-pink'
                    "
                  >
                    {{ voice.role }}
                  </span>
                </div>
              </div>
            </div>

            <p class="mt-4 text-sm tracking-[0.2em] text-gold" :aria-label="`評価 5点満点中${voice.rating}点`">
              <span aria-hidden="true">{{ '★'.repeat(voice.rating) }}<span class="text-white/20">{{ '★'.repeat(5 - voice.rating) }}</span></span>
            </p>

            <h3 class="mt-3 text-base font-black leading-relaxed tracking-wider text-white">
              {{ voice.title }}
            </h3>
            <p class="mt-3 flex-1 text-sm leading-loose text-white/70">{{ voice.body }}</p>
            <p class="mt-5 text-xs text-white/40">{{ formatDate(voice.date) }}</p>
          </div>
        </div>

        <p class="mt-12 text-center text-xs text-white/40">※掲載の声はイメージです。</p>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="relative overflow-hidden bg-gradient-to-b from-night to-night-deep py-24">
      <SparkleBackground :count="24" :diamonds="8" :seed="193" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 class="text-holo section-title">あなたのお店でも導入しませんか？</h2>
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
