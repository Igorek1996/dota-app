<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";

  // cursor Size for settings (future)
  const cursorSize = ref<number>(32);

  // custom context menu
  type Position = {
    x: number;
    y: number;
  };

  const isOpen = ref<boolean>(false);
  const position = ref<Position>({ x: 0, y: 0 });

  const openCustomMenu = (x: number, y: number): void => {
    position.value = { x, y };
    isOpen.value = true;
  };

  const closeCustomMenu = (): void => {
    isOpen.value = false;
  };

  const onContextMenu = (e: MouseEvent): void => {
    e.preventDefault();
    openCustomMenu(e.clientX, e.clientY);
  };

  onMounted(() => {
    window.addEventListener("contextmenu", onContextMenu);
    window.addEventListener("click", closeCustomMenu);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeCustomMenu();
    });
  });

  onUnmounted(() => {
    window.removeEventListener("contextmenu", onContextMenu);
    window.removeEventListener("click", closeCustomMenu);
  });
</script>

<template>
  <div class="app">
    <div class="app__bg">
      <!-- <img src="~/assets/img/main-banner.webp" alt="" /> -->
    </div>
    <div
      v-if="isOpen"
      class="context-menu"
      :style="{
        left: position.x + 'px',
        top: position.y + 'px',
      }"
    >
      <div class="context-menu__title">Хуй тебе,а не инспектор браузера =)</div>
      <div class="context-menu__item context-menu__item_danger">Понял</div>
    </div>
    <DotaCursor :size="cursorSize" />
    <DotaHeader />
    <main class="main container">
      <DotaBreadcrumbs>
        <NuxtLink to="/heroes">Герои</NuxtLink> / <NuxtLink to="/manuals">Руководства</NuxtLink> /
        <NuxtLink to="/trends">
          <Icon name="material-symbols:add-diamond-outline-sharp" style="color: black" />
          Тренды
        </NuxtLink>
      </DotaBreadcrumbs>
      <div class="main__wrapper">
        <slot />
      </div>
    </main>
    <DotaFooter />
  </div>
</template>

<style lang="scss" scoped>
  .context-menu {
    position: fixed;
    min-width: 180px;
    background: #111;
    border-radius: 10px;
    padding: 6px 0;
    z-index: 9998;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);

    &__title {
      color: #fff;
      padding: 10px 14px;
    }

    &__item {
      padding: 10px 14px;
      color: #fff;
      cursor: none;

      &:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      &_danger {
        color: #ff5c5c;
      }
    }
  }
</style>
