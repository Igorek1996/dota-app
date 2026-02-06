<script setup lang="ts">
import  {computed} from 'vue'

const props = defineProps({
  heroName: {
    type: String,

  },
  localizedName: {
    type: String,
    required: true,
  },
  primaryAttr: {
    type: String,
    required: true,
  }
})
const videos = import.meta.glob('../assets/img/heroes/*.webm', { eager: true, as: 'url' })
const videoRef = ref(null)


const heroImage = computed(() => {
  const key = `../assets/img/heroes/${props.heroName}.webm`
  return (videos[key] as string) || 'https://placehold.co/40x70'
})


function playVideo() {
  videoRef.value?.play()
}

function pauseVideo() {
  if (!videoRef.value) return
  videoRef.value.pause()
  videoRef.value.currentTime = 0
}

</script>

<template>
<div class="hero__card">
  <video
      muted
      loop
      playsinline
      @mouseenter="playVideo"
      @mouseleave="pauseVideo"
      ref="videoRef"
      width="42"
      height="70"
  >
    <source :src="heroImage" type="video/webm" />
  </video>
<!--  <img :src="heroImage" :alt="props.localizedName">-->

  <div class="hero__info">
    <div class="hero__name">{{props.localizedName}}</div>
    <div class="herro__attribute">{{props.primaryAttr}}</div>
  </div>

</div>
</template>

<style scoped>
.hero__card {
  width: 42px;
  height: 70px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* важливо для абсолютного позиціонування імені */
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, z-index 0.3s ease;
  z-index: 1;
}

.hero__name {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 8px;
  text-align: center;
  padding: 1px 0;
  opacity: 0; /* сховано за замовчуванням */
  transition: opacity 0.3s ease;
}

.hero__card:hover {
  transform: scale(3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.hero__card:hover .hero__name {
  opacity: 1;
}

.hero__card>video,
.hero__card>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


</style>