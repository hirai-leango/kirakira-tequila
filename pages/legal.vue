<script setup lang="ts">
useSeo({
  title: '特定商取引法に基づく表記 | キラキラテキーラ',
  description:
    'キラキラテキーラ（株式会社キラキラテキーラ）の特定商取引法に基づく表記。販売業者、運営責任者、お問い合わせ先、販売価格、返品・交換などについて記載しています。',
  path: '/legal/',
})

const items = [
  { label: '販売業者', value: '株式会社キラキラテキーラ' },
  { label: '運営責任者', value: '平井' },
  { label: '所在地', value: '東京都（詳細はお問い合わせにて開示いたします）' },
  { label: '電話番号', value: 'お問い合わせにて開示いたします' },
  { label: 'メールアドレス', value: 'info@kirakira-tequila.com', mail: true },
  { label: '販売価格', value: 'お問い合わせにより個別にご案内いたします' },
  { label: '商品代金以外の必要料金', value: '送料・振込手数料（詳細はお見積り時にご案内いたします）' },
  { label: '支払方法', value: 'お問い合わせ後、ご案内する方法によります' },
  { label: '支払時期', value: 'お問い合わせ後、ご説明する内容に従ってお支払いいただきます' },
  { label: '商品の引き渡し時期', value: 'ご注文確定後、別途ご案内する納期に従いお届けいたします' },
  { label: '返品・交換', value: '商品の性質上、返品・交換はお受けできません。不良品の場合は個別にご対応いたします。' },
  { label: '未成年者の利用制限', value: '20歳未満の方のご購入はお断りしております' },
]
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-night py-24">
    <SparkleBackground :count="18" :seed="53" />
    <div class="relative z-10 mx-auto max-w-3xl px-6">
      <FadeIn>
        <div class="text-center">
          <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">LEGAL NOTICE</p>
          <h1 class="text-holo mt-4 section-title">特定商取引法に基づく表記</h1>
          <div class="holo-divider" />
        </div>
      </FadeIn>

      <FadeIn :delay="150">
        <div class="glass-card mt-12 overflow-hidden">
          <dl>
            <div
              v-for="(item, i) in items"
              :key="item.label"
              class="flex flex-col gap-1 px-6 py-5 md:flex-row md:gap-6 md:px-10"
              :class="{ 'border-t border-white/10': i > 0 }"
            >
              <dt class="shrink-0 text-sm font-bold tracking-wider text-gold md:w-48 md:pt-0.5">
                {{ item.label }}
              </dt>
              <dd class="leading-relaxed text-white/80">
                <a
                  v-if="item.mail"
                  :href="`mailto:${item.value}`"
                  class="font-bold text-gold transition-colors hover:text-gold-light"
                >
                  {{ item.value }}
                </a>
                <template v-else>{{ item.value }}</template>
              </dd>
            </div>
          </dl>
        </div>
      </FadeIn>

      <FadeIn :delay="250">
        <p class="mt-8 text-center text-sm leading-relaxed text-white/50">
          未成年者の飲酒は法律で禁止されています。お酒は20歳を過ぎてから。
        </p>
        <div class="mt-8 text-center">
          <NuxtLink to="/contact/" class="btn-outline-holo">お問い合わせはこちら</NuxtLink>
        </div>
      </FadeIn>
    </div>
  </div>
</template>
