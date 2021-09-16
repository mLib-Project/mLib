<template>
  <object :data="'/books/' + id + '.pdf'" class="pdf">
    <p>Oops! Your browser doesn't support PDFs!</p>
    <p><a :href="'/books/' + id + '.pdf'">Download Instead</a></p>
  </object>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  props: ["id"],
  components: {},
});
</script>

<style lang="scss" scoped>
.pdf {
  width: 100vw;
  height: 100vh;
}
</style>
