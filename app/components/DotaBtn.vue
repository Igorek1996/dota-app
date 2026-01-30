<template>
  <button :class="['btn', `btn--${variant}`, `btn--${size}`, { 'btn--block': block }]">
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  variant?: 'default' | 'primary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
}>()
</script>

<style lang="scss" scoped>
.btn {
  font-weight: 700;
  padding: 15px 20px;
  border: none;
  color: black;
  border: 2px solid black;
  background: transparent;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  text-transform: uppercase;
  transition: 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
}
</style>