<template>
  <div>
    <div id="heroes"></div>
  </div>
</template>

<script setup>
async function getHeroes() {
  const url = `https://api.opendota.com/api/heroes`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  const heroesList = document.getElementById("heroes");
  if (heroesList) {
    data.forEach((hero) => {
      const listItem = document.createElement("li");
      listItem.textContent = hero.localized_name;
      heroesList.appendChild(listItem);
    })
  }
}

getHeroes();
</script>


<style></style>