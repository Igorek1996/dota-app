<template>
  <div id="heroes">
    {{ heroes.localized_name }}
  </div>
</template>

<script setup>
  const heroes = useMyHeroesStore();

  await callOnce(heroes.fetchHeroes);
</script>

<style></style>
