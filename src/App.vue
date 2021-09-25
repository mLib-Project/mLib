<template>
  <div class="allcontent">
    <Navbar/>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  components: {
    Navbar
  }
})
</script>


<style lang="scss">
@import './assets/styles/main.scss';

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #ebebeb;
  font-family: "Rubik", sans-serif;
}

.allcontent {
  position: relative;
  overflow-X: hidden;
}

.allcontent > div {
  margin-top:$height;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
