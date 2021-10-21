<template>
    <footer>
      Żaden plik nie jest przechowywany na serwerze. Wszelkie linki stanowią jedynie przekierowanie na inne witryny, z których pliki są pobierane. Autor strony nie ponosi odpowiedzialności za naruzenia praw autorskich popełnione przez osoby trzecie.
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  Name: 'Law'
})
</script>


<style lang="scss" scoped>
footer {
  display: block;
  text-align: justify;
  margin: auto;
  padding: 10px;
  width:800px;
  max-width: 90vw;
  font-size:15px;
}

a {
  color: #3EA08B;
  text-decoration: none;
}
</style>