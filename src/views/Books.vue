<template>
  <div class="cont">
    <Header
      :book="books.find(book => book.category === toCapitalCase(id))"
      :key="books.find(book => book.category === toCapitalCase(id))"
    />
    <Group 
      v-for="group in [...new Set(
          books
          .filter(name => name.category == toCapitalCase(id))
          .map(book => book.subcategory)
        )]"
      :key="group"
      :family="books.filter(book => book.category === toCapitalCase(this.id) && book.subcategory === group)"
      :group="group"
      :books="books"
      :category="id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '../components/Header.vue'
import Group from '../components/Group.vue'
import { toCapitalCase, fetchBooks } from '../scripts/methods'
import { Book } from '../data/types'



export default defineComponent({
  name: "Books",
  props: ["id"],
  components: {
    Header,
    Group
  },
  data() {
    return {
      books:[] as Book[]
    }
  },
  methods: {
    toCapitalCase,
    fetchBooks
  },
  mounted () {
    this.fetchBooks().then(
      res => this.books = res
    )
  },
  updated () {
    document.title = toCapitalCase(this.id)
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.cont {
  width: 1000px;
  max-width: 92vw;
  margin: 0 auto;
}

</style>
