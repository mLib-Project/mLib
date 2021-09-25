<template>
  <div class="container">
    <iframe :src="'lib/pdfjs-2.9.359-dist/web/viewer.html' + '?file=' + id + '.pdf'" class="pdf"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Book } from '../data/types'

export default defineComponent({
  name: "Home",
  props: ["id"],
  components: {},
  data () {
    return {
      // thisBook: Object.values(books[this.id]).flat(1).find((element: Book) => element.ID === this.id)
    }
  },
  mounted () {
    // if (this.thisBook) {
    //   document.title = this.thisBook.Name
    // }
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
