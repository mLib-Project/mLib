<template>
  <WebViewer :initialDoc="'/books/' + id + '.pdf'"/>
</template>

<script lang="ts">
import WebViewer from "@/components/WebViewer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  props: ["id"],
  components: {WebViewer},
});
</script>

<style lang="scss" scoped>
.pdf {
  height: 100vh;
  width:100%; 
  border: none;
}
</style>
