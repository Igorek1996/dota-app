<template>
  <div class="home">
    <div></div>
    <div class="content">
      <ul id="heroes"></ul>
    </div>
    <DotaEvent />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .home {
    display: grid;
    grid-template-columns: 400px 1fr 400px;
    gap: 20px;
  }
</style>
