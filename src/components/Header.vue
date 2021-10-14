<template>
  <div class="container">
    <div
      class="content"
      :style="{
        backgroundColor: '#' + colors[family]
      }"
    >
      <div class="category">
        {{category}}
      </div>
      <div class="family">
        {{families[family]}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import { families, colors } from '../data/arrays'
import { Book } from '../data/types'

export default defineComponent({
  props: {
    book: Object as () => Book,
  },
  data () {
    return {
      families,
      colors,
      family: 1,
      category:'',
      i:0,
    }
  },
  methods: {},
  mounted () {
    if (this.book) {
      this.family = parseInt(this.book.family)
      this.category = this.book.category
    }
  }
})
</script>


<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.container {
  width:700px;
  max-width: 98vw;
  padding:10px;
  padding-bottom:0;
  transform: translateX(-40px);
  @media (max-width: 950px) {
    transform: translateX(0);
    width: 100%;
    margin: auto;
    padding: 10px 0 0 0;
  }
}
.content {
  padding:10px;
  border-radius:7px;
  width:100%;
  color:#e3e3e3;
  text-align:center;

}
.category {
  font-weight:500;
  font-size:24px;
  @media (max-width: 600px) {
    font-size:18px;
  }
}
.family {
  font-size:18px;
  @media (max-width: 600px) {
    font-size:15px;
  }
}
</style>