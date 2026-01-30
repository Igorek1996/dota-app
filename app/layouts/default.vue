<template>
  <div class="app">
    <div class="app__bg">
      <img src="" alt="bg" />
    </div>
    <DotaHeader />
    <main class="main container">
      <DotaBreadcrumbs>
        <RouterLink to="/heroes">Герои</RouterLink> /
        <RouterLink to="/manuals">Руководства</RouterLink> /
        <RouterLink to="/trends">
          <Icon name="material-symbols:add-diamond-outline-sharp" style="color: black" />
          Тренды
        </RouterLink>
      </DotaBreadcrumbs>
      <div class="main__wrapper">
        <slot />
      </div>
    </main>
    <DotaFooter />
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>