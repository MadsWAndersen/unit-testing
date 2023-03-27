<script setup>
import Converter from '../components/Converter.vue'
</script>


<template>
  <div class="about">

    <Converter />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
