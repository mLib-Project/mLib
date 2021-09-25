<template>
  <div class="cont">
    <div v-for="group in [...new Set(books.filter(name => name.category == toCapitalCase(id)).map(book => book.subcategory))]" :key="group" :group="group" class="group">
      <div v-if="group.length > 0" class="groupname">
          <div class="groupimg">
              <img :src="getImgUrl(group)">
          </div>
          {{group}}
      </div>
      <router-link 
        :to="'/books/' + item.ID" 
        v-for="item in books.filter(book => book.category === toCapitalCase(id) && book.subcategory === group)" 
        :key="item" 
        class="item"
      >
        {{item.name}}
        <div class="author">
          {{item.author}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import { formatStrings, toCapitalCase, getImgUrl, fetchBooks } from '../scripts/methods'
import { Book } from '../data/types'

export default defineComponent({
  name: "Books",
  props: ["id"],
  components: {},
  data() {
    return {
      books:[] as Book[],
      subcategories:{}
    };
  },
  methods: {
    toCapitalCase,
    getImgUrl,
    fetchBooks
  },
  mounted () {
    this.fetchBooks().then(
      res => {this.books = res}
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
  max-width: 90vw;
  margin: 0 auto;
}

.group {
  padding: 10px;
  width: 600px;
  max-width: 85vw;
}

.groupname {
  font-size: 30px;
  font-weight: 500;
  padding:10px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  position: relative;
}

.groupimg {
    display:inline-flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height:50px;
    background: $main;
    border-radius:10px;
    margin:0 10px;
}

.groupimg img {
    width:75%;
    filter: invert(0.5) brightness(100);
}

.item {
  display: block;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  background: darkslategray;
  width:100%;
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
