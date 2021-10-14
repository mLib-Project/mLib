<template>
  <div class="cont">
    <Logo/>
    <Warning/>
    <Law/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from '../components/Logo.vue'
import Warning from '../components/Warning.vue'
import Law from '../components/Law.vue'

export default defineComponent({
  name: "Home",
  components: {
    Logo,
    Warning,
    Law
  },
  mounted () {
    document.title = 'mLib'
  }
});
</script>

<style lang="scss" scoped>
.cont {
  width: 100vw;
  background: #ebebeb;
}
</style>
