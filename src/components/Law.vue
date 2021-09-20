<template>
    <footer>
      Wszelkie materiały pochodzą ze strony <a href="https://docer.pl">Docer.pl</a> lub darmowych źródeł. Na podstawie punktu 6.3 regulaminu tej strony, wszelkie treści publikowane na tej platformie są wolne od jakichkolwiek roszczeń podmiotów trzecich oraz, a publicystom przysługują majątkowe prawa autorskie do treści, które nie są ograniczone na rzecz żadnej osoby trzeciej.
      Linki do źródeł dostępne są w plikach źródłowych wszystkich książek (Github) lub wchodząc w ten <a href="/sources.txt">link</a>.
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