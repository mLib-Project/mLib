<template>
  <div :style="{background: '#' + colors[family]}">
    <img :src="getImgUrl(img)">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { colors } from '../../data/arrays'
import { getImgUrl } from '../../scripts/methods'

export default defineComponent({
  props:{
    img: String,
    family: Number
  },
  data () {
    return {
      colors
    }
  },
  methods: {
    getImgUrl
  }
})
</script>


<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

div {
    display:inline-flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height:50px;
    min-width:50px;
    min-height:50px;
    background: $main;
    border-radius:10px;
    margin:0 10px;
    @media (max-width:600px) {
      margin-left:0;
    }
}

img {
    width:75%;
    filter: invert(0.5) brightness(100);
}
</style>