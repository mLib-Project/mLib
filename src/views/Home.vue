<template>
  <div class="cont">
    <div v-for="group in Object.keys(books)" :key="group" :group="group" class="group">
      <div class="groupname">{{group}}</div>
      <router-link :to="item.ID" v-for="item in books[group]" :key="item" class="item" :style="'background: #' + item.Color">
        {{item.Name}}
        <div class="author">{{item.Author}}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { books } from "../data/books";

export default defineComponent({
  name: "Home",
  components: {},
  data() {
    return {
      books,
    };
  },
});
</script>

<style lang="scss" scoped>
.cont {
  width: 100vw;
  background: #ebebeb;
}

.group {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.groupname {
  font-size: 48px;
  font-weight: 500;
}

.item {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background: darkslategray;
  width: 500px;
  max-width: 85vw;
  text-align: center;
  font-size: 20px;
  color: #ebebeb;
  cursor: pointer;
  text-decoration: none;
}

.author {
  font-weight: 300;
  font-size:15px;
}
</style>
