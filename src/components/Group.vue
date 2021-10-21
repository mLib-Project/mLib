<template>
  <div class="group">
    <Name 
      :group="group"
      :family="family[0].family"
    />
    <Book
    v-for="item in family" 
    :key="item"
    :item="item"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { toCapitalCase } from '../scripts/methods'
import Name from './group/Name.vue'
import Book from './books/Book.vue'

export default defineComponent({
  props:['group', 'books', 'category', 'family'],
  components: {
    Name,
    Book
  },
  methods: {
    toCapitalCase
  }
})
</script>


<style lang="scss" scoped>
@import '../assets/styles/main.scss';
.group {
  padding: 10px;
  width: 600px;
  max-width: 85vw;
  @media (max-width:950px) {
    width:100%;
    margin:auto;
    padding:10px 0;
  }
}
</style>