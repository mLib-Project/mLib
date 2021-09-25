<template>
  <div class="container">
    <iframe :src="'/lib/pdfjs-2.9.359-dist/web/viewer.html' + '?file=' + booksURL + id + '.pdf'" class="pdf"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Book } from '../data/types'
import { booksURL } from '../data/static'
import { fetchBooks } from '../scripts/methods'

export default defineComponent({
  name: "Home",
  props: ["id"],
  components: {},
  data () {
    return {
      thisBook: {} as Book,
      booksURL
    }
  },
  mounted () {
    this.fetchBooks().then(
      res => {
        const thisBook = res.find(book => book.ID === this.id)
        if (thisBook) {
          this.thisBook = thisBook
        }
      })
  },
  methods: {
    fetchBooks
  }
});
</script>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.container {
  height: calc(100vh - $height);
  width:100vw;
}

.pdf {
  height: 100%;
  width:100%; 
  border: none;
  padding: 0;
}
</style>
