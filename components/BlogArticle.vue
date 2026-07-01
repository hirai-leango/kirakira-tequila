<script setup lang="ts">
defineProps<{
  category: string
  title: string
  date: string
  lead?: string
}>()
</script>

<template>
  <article class="bg-night">
    <!-- Article Header -->
    <header class="relative overflow-hidden py-20 text-center md:py-24">
      <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,95,255,0.2)_0%,transparent_55%)]"
        aria-hidden="true"
      />
      <SparkleBackground :count="16" :seed="13" />
      <div class="relative z-10 mx-auto max-w-3xl px-6">
        <div class="flex items-center justify-center gap-3 text-xs">
          <span class="rounded-full border border-gold/50 px-3 py-1 font-bold tracking-widest text-gold">
            {{ category }}
          </span>
          <time :datetime="date" class="text-white/50">{{ date }}</time>
        </div>
        <h1 class="text-holo mt-6 text-3xl font-black leading-snug tracking-wider md:text-4xl">
          {{ title }}
        </h1>
        <div class="holo-divider" />
        <p v-if="lead" class="mt-8 text-left leading-loose text-white/80">
          {{ lead }}
        </p>
      </div>
    </header>

    <!-- Article Body -->
    <div class="article-body mx-auto max-w-3xl px-6 pb-16">
      <slot />
    </div>

    <!-- Article Footer CTA -->
    <footer class="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-night via-night-soft to-night py-16">
      <SparkleBackground :count="12" :diamonds="4" :seed="29" />
      <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p class="text-shimmer text-xl font-black tracking-widest">キラキラテキーラ</p>
        <p class="mt-4 leading-loose text-white/80">
          ダイヤモンドを纏ったプレミアムテキーラで、<br class="hidden md:block" />
          お店の一杯を特別な体験に。取り扱いをご希望の店舗様はお気軽にご相談ください。
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <NuxtLink to="/contact" class="btn-holo hover-sparkle">導入のご相談</NuxtLink>
          <NuxtLink to="/blog" class="btn-outline-holo">ブログ一覧へ</NuxtLink>
        </div>
      </div>
    </footer>
  </article>
</template>
