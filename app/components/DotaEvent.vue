<template>
  <NuxtLink to="/event" class="event">
    <div class="event__bg">
      <img src="" alt="banner" />
    </div>
    <div class="event__content">
      <h2 class="event__title">Диковинки Квортеро</h2>
      <h3 class="event__subtitle">Играйте в Доту и получайте буплатные аксессуары!</h3>
      <div class="event__level">1</div>
      <div class="event__text">
        <p>Окончание события: Среда, 5 ноября 2025</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .event {
    position: relative;

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      padding: 10px;
      z-index: 1;
      text-align: center;
      min-height: 200px;
    }

    &__title {
      font-size: 18px;
      text-transform: uppercase;
    }

    &__subtitle {
      font-size: 14px;
    }

    &__text {
      font-size: 12px;
      margin-top: auto;
    }

    &__level {
      font-size: 40px;
    }
  }
</style>
