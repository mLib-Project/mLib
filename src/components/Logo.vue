<template>
    <img src="../assets/logo.png">
    <header>
        Witaj na mojej osobistej bibliotece. Możesz korzystać do woli ze zgromadzonych na niej źródeł. Baw się dobrze!
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  Name: 'Logo'
})
</script>


<style lang="scss" scoped>
img {
  display: block;
  margin: auto;
  max-width: 80vw;
  width:500px;
}
header {
  text-align: center;
  margin:10px auto;
  width:800px;
  max-width: 90vw;
  font-size:25px;
}
</style>