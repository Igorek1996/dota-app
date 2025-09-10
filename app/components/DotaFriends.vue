<template>
  <div class="friends">
    <ul class="friends__list">
      <li class="friends__list-item" v-for="friend in 5" :key="friend" role="button">
        <Icon name="ooui:user-avatar" style="color: black" />
      </li>
    </ul>
    <DotaTrainer />
    <DotaGuild />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.friends {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid black;
  padding: 12px;

  &__list {
    display: flex;
    gap: 2px;
  }

  &__list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 45px;
    aspect-ratio: 1/1;
  }
}
</style>