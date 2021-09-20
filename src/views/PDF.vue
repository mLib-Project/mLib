<template>
  <WebViewer :initialDoc="'/books/' + id + '.pdf'"/>
</template>

<script lang="ts">
import WebViewer from "@/components/WebViewer.vue";
import { defineComponent } from "vue";
import { books } from '../data/books'
import { Book } from '../data/types'

export default defineComponent({
  name: "Home",
  props: ["id"],
  components: {WebViewer},
  data () {
    return {
      books,
      thisBook: Object.values(books).flat(1).find((element: Book) => element.ID === this.id)
    }
  },
  mounted () {
    if (this.thisBook) {
      document.title = this.thisBook.Name
    }
  }
});
</script>

<style lang="scss" scoped>
.pdf {
  height: 100vh;
  width:100%; 
  border: none;
}
</style>
