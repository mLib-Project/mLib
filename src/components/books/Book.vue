<template>
  <a :style="{backgroundColor: '#' + colors[item.family]}" :href="item.source">
    <div>
      {{item.name}}
      <span>
        {{item.author}}
      </span>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { colors } from '../../data/arrays'

export default defineComponent({
  props:['item'],
  data () {
    return {
      colors
    }
  },
  methods: {
    hrefMe () {
      console.log('a')
    }
  }
  
})
</script>


<style lang="scss" scoped>
@import '../../assets/styles/main.scss';
a {
  display: block;
  position: relative;
  margin: 10px 0;
  border-radius: 10px;
  background: darkslategray;
  width:100%;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: #ebebeb;
  overflow: hidden;
  @media (max-width:600px) {
    font-size:14px;
  }
}

div {
  backdrop-filter: grayscale(0.7) brightness(0.5);
  width:100%;
  height:100%;
  padding: 10px;
}

span {
  display: block;
  font-weight: 300;
  font-size:15px;
  @media (max-width:600px) {
    font-size:12px;
  }
}
</style>