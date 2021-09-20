<template>
    <article>
        <b>Uwaga!</b> Niektóre pliki ważą bardzo dużo i ich ładowanie może potrwać nawet kilka minut.
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  Name: 'Logo'
})
</script>


<style lang="scss" scoped>
article {
  text-align: center;
  margin:20px auto;
  width:800px;
  max-width: 90vw;
  font-size:20px;
}
b {
  color: #3EA08B;
}
</style>