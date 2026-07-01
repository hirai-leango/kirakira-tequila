<script setup lang="ts">
const props = withDefaults(defineProps<{ count?: number }>(), { count: 20 })

// 疑似乱数（シード固定）で SSR とクライアントの描画位置を一致させる
const sparkles = computed(() => {
  let seed = 42
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  return Array.from({ length: props.count }, (_, i) => ({
    id: i,
    top: `${Math.round(rand() * 100)}%`,
    left: `${Math.round(rand() * 100)}%`,
    delay: `${(rand() * 3).toFixed(2)}s`,
    duration: `${(2 + rand() * 3).toFixed(2)}s`,
    scale: (0.6 + rand() * 1.4).toFixed(2),
  }))
})
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <span
      v-for="s in sparkles"
      :key="s.id"
      class="sparkle"
      :style="{
        top: s.top,
        left: s.left,
        animationDelay: s.delay,
        animationDuration: s.duration,
        transform: `scale(${s.scale})`,
      }"
    />
  </div>
</template>
