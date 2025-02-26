<template>
  <div class="container">
    <div class="loader">
      <div class="box" v-for="n in 4" :key="n"></div>
    </div>
    <div class="loading-text">{{ loadingText }}</div>
  </div>
</template>

<script setup>
const loadingText = ref("Loading.");

onMounted(() => {
  let count = 0;
  setInterval(() => {
    count = (count + 1) % 4;
    loadingText.value = "Loading" + ".".repeat(count);
  }, 200);
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.loader {
  display: flex;
  justify-content: space-around;
  width: 100px;
  perspective: 1000px;
}
.box {
  width: 20px;
  height: 20px;
  background: #935936;
  transform-style: preserve-3d;
  animation: rotate 1.5s infinite linear;
}
.box:nth-child(1) {
  animation-delay: 0s;
}
.box:nth-child(2) {
  animation-delay: 0.3s;
}
.box:nth-child(3) {
  animation-delay: 0.6s;
}
.box:nth-child(4) {
  animation-delay: 0.9s;
}
@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
.loading-text {
  margin-top: 20px;
  font-size: 1.2em;
  color: #34d399;
}
</style>
