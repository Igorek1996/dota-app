<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";

  const props = defineProps<{
    size: number;
  }>();

  const targetX = ref<number>(0);
  const targetY = ref<number>(0);

  const x = ref<number>(0);
  const y = ref<number>(0);

  let rafId: number | null = null;

  const onMove = (e: MouseEvent): void => {
    targetX.value = e.clientX;
    targetY.value = e.clientY;
  };

  const animate = (): void => {
    x.value = targetX.value;
    y.value = targetY.value;
    rafId = requestAnimationFrame(animate);
  };

  onMounted(() => {
    window.addEventListener("mousemove", onMove);
    animate();
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", onMove);
    if (rafId) cancelAnimationFrame(rafId);
  });
</script>

<template>
  <div
    class="cursor"
    :style="{
      width: props.size + 'px',
      height: props.size + 'px',
      transform: `translate(${x}px, ${y}px)`,
    }"
  />
</template>

<style scoped>
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    background: url("~/assets/img/cursor_db_default_vsz2.webp") center / contain no-repeat;
    will-change: transform;
  }
</style>
