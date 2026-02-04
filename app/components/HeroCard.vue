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
  border: 1px solid #333;
  width: 42px;
  height: 70px;
  overflow: hidden;
    display: flex;
  justify-content: left;
}
.hero__card>video,
.hero__card>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>