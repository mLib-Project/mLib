<template>
  <nav>
    <router-link to="/">
      <img src="../assets/logo.png">
    </router-link>
    <Hamburger />
    <div class="site-menu">
      <ul>
        <li 
          v-for="(category, index) in categories[0]" 
          :key="index"
          :style="{
              backgroundColor: '#' + colors[categories[1][index]]
          }"
        >
          <router-link 
            :to="'/' + category.toLowerCase()"
          >
            {{category}}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hamburger from './navbar/Hamburger.vue'
import { colors } from '../data/arrays'
import { fetchCategories } from '../scripts/methods'

export default defineComponent({
  data () {
    return {
      books: {},
      categories:{},
      colors
    }
  },
  components: {
      Hamburger
  },
  methods: {
    fetchCategories
  },
  mounted () {
    this.fetchCategories().then(
      data => this.categories = data
    )
    
  },
})
</script>

<style lang="scss" scoped>

@import '../assets/styles/main.scss';

nav {
    position: fixed;
    width:100%;
    background:$main;
    height: $height;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.185);
    z-index: 1;
}

.site-menu {
    display: flex;
    position: absolute;
    top: $height;
    right:0;
    height: calc(100vh - $height);
    width: calc(200px + 20vw);
    background:#e3e3e3;
    border-left:5px solid $main;
    transform: translateX(100%);
    transition:.3s transform ease-in-out;
}

ul {
    margin:10px;
    padding:0;
    width:100%;
    list-style-type: none;
    display:flex;
    flex-wrap:wrap;
    align-content: flex-start;
}

li {
    background: #307182;
    margin-top:10px;
    border-radius:5px;
    flex-basis:100%;
    height:40px;
    box-shadow: inset 2px 2px 15px rgba(0, 42, 53, 0.245);
}

a { 
    display:block;
    height:100%;
}

.site-menu a {
    display:flex;
    padding:10px;
    text-decoration: none;
    align-items: center;
    height:100%;
    width:100%;
    color:#fff;
}

button:focus ~ .site-menu, .site-menu:hover {
    transform: translateX(0);
    @media (max-width:600px) {
      box-shadow: -15px 0 15px rgba(0, 0, 0, 0.585);
    }
}

img {
    height:100%;
    filter: invert(.5) brightness(100);
}

</style>