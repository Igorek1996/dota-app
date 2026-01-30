<template>
  <footer class="footer container">
    <DotaFriends />
    <DotaChat />
    <DotaBtn variant="primary">Играть</DotaBtn>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: 400px 1fr 400px;
  gap: 20px;
  padding-block: 20px;

  .btn {
    align-self: flex-end;
  }
}
</style>