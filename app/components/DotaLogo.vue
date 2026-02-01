<template>
  <NuxtLink to="/" class="logo">
    <Icon name="simple-icons:dota2" class="logo__img" style="color: orange" />
  </NuxtLink>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .logo {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: orange;
    text-decoration: none;
    font-size: 24px;
    width: 218px;
    height: 100%;

    // &::before {
    //   content: "";
    //   position: absolute;
    //   border-top: 72px solid #0E0F12;
    //   border-left: 18px solid transparent;
    //   border-right: 18px solid transparent;
    //   height: 0;
    //   width: 100%;
    // }

    // &::after {
    //   content: "";
    //   position: absolute;
    //   border-top: 86px solid #0E0F12;
    //   border-left: 10px solid transparent;
    //   border-right: 10px solid transparent;
    //   height: 0;
    //   width: calc(100% - 50px);
    // }

    // &__img {
    //   position: relative;
    //   font-size: 50px;
    //   margin-top: 12px;
    //   z-index: 1;
    // }
  }
</style>
