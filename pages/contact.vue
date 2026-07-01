<script setup lang="ts">
useHead({
  title: 'お問い合わせ | キラキラテキーラ',
  meta: [
    {
      name: 'description',
      content:
        'キラキラテキーラの導入・卸に関するお問い合わせはこちら。コンセプトカフェ・ガールズバー店舗様向けの導入プランをご案内します。',
    },
  ],
})
</script>

<template>
  <div class="relative min-h-[70vh] overflow-hidden bg-night py-24">
    <SparkleBackground :count="30" :diamonds="8" :seed="17" />
    <div class="relative z-10 mx-auto max-w-3xl px-6 text-center">
      <FadeIn>
        <p class="font-display text-sm italic tracking-[0.4em] text-kira-cyan">CONTACT</p>
        <h1 class="text-holo mt-4 section-title">お問い合わせ</h1>
        <div class="holo-divider" />
        <p class="mt-10 leading-loose text-white/80 md:text-lg">
          キラキラテキーラの導入をご検討中の店舗様へ。<br class="hidden md:block" />
          卸価格・導入プラン・サンプルのご相談など、お気軽にご連絡ください。
        </p>
      </FadeIn>
      <FadeIn :delay="150">
        <div class="glass-card mx-auto mt-12 max-w-xl p-8 md:p-10">
          <p class="text-sm tracking-widest text-white/60">メールでのお問い合わせ</p>
          <p class="mt-3 text-xl font-bold text-gold md:text-2xl">info@kirakira-tequila.com</p>
          <p class="mt-6 text-sm leading-relaxed text-white/60">
            店舗名・ご担当者名・ご希望内容（ボトル／グラス／両方）を添えてお送りいただくと、ご案内がスムーズです。
          </p>
          <div class="mt-8">
            <a href="mailto:info@kirakira-tequila.com" class="btn-holo hover-sparkle">メールを送る</a>
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
</template>
