<template>
  <div v-if="group.length > 0" class="name">
    <Image
      :img="group"
      :family="parseInt(family)"
    />
    {{group}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Image from './Image.vue'

export default defineComponent({
  props:['group', 'family'],
  components: {
    Image
  }
})
</script>


<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.name {
  font-size: 30px;
  font-weight: 500;
  padding:10px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  position: relative;
  @media (max-width:600px) {
    font-size:22px;
    padding:10px 0;
  }
}
</style>