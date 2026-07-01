<script setup lang="ts">
defineProps<{
  category: string
  title: string
  date: string
  lead?: string
}>()
</script>

<template>
  <article class="bg-brand-black">
    <!-- Article Header -->
    <header class="relative overflow-hidden py-20 text-center md:py-24">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <SparkleField :count="12" />
      <div class="relative z-10 mx-auto max-w-3xl px-6">
        <div class="flex items-center justify-center gap-3 text-xs">
          <span class="rounded-full border border-gold/50 px-3 py-1 tracking-widest text-gold">
            {{ category }}
          </span>
          <time :datetime="date" class="text-gray-500">{{ date }}</time>
        </div>
        <h1 class="mt-6 font-serif text-3xl font-bold leading-snug tracking-wider text-gold md:text-4xl">
          {{ title }}
        </h1>
        <div class="gold-divider" />
        <p v-if="lead" class="mt-8 text-left leading-loose text-gray-300">
          {{ lead }}
        </p>
      </div>
    </header>

    <!-- Article Body -->
    <div class="article-body mx-auto max-w-3xl px-6 pb-16">
      <slot />
    </div>

    <!-- Article Footer CTA -->
    <footer class="relative overflow-hidden border-t border-gold/20 bg-gradient-to-b from-brand-black via-[#1a1503] to-brand-black py-16">
      <SparkleField :count="8" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p class="font-serif text-xl tracking-widest text-gold">キラキラテキーラ</p>
        <p class="mt-4 leading-loose text-gray-300">
          ダイヤモンドを纏ったプレミアムテキーラで、<br class="hidden md:block" />
          お店の一杯を特別な体験に。取り扱いをご希望の店舗様はお気軽にご相談ください。
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <NuxtLink to="/products" class="btn-gold">商品を見る</NuxtLink>
          <NuxtLink to="/blog" class="inline-block rounded-full border border-gray-600 px-8 py-3 tracking-widest text-gray-300 transition-colors duration-300 hover:border-gold hover:text-gold">
            ブログ一覧へ
          </NuxtLink>
        </div>
      </div>
    </footer>
  </article>
</template>
