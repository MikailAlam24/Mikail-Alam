<template>
  <div id="app">
    <SiteHeader :currentPage="currentPage" @changePage="changePage" />
    <HeroSection v-if="currentPage === 'home'" :fruits="fruits" @search="searchFruits" />
    <ShopPage v-if="currentPage === 'shop'" :fruits="fruits" :searchQuery="searchQuery" :sortOption="sortOption" :selectedCategory="selectedCategory" @filterFruits="filterFruits" />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import HeroSection from './components/HeroSection.vue';
import ShopPage from './components/ShopPage.vue';
import SiteFooter from './components/SiteFooter.vue';

export default {
  name: 'App',
  components: {
    SiteHeader,
    HeroSection,
    ShopPage,
    SiteFooter,
  },
  data() {
    return {
      currentPage: 'home', // Default page
      searchQuery: '',
      selectedCategory: 'All',
      sortOption: '',
      fruits: [
          { name: 'Apples', description: 'Crisp and sweet apples.', image: require('@/assets/apple.png'), price: 1.99, color: 'red' },
          { name: 'Oranges', description: 'Juicy and tangy oranges.', image: require('@/assets/orange.png'), price: 2.49, color: 'orange' },
          { name: 'Bananas', description: 'Ripe and delicious bananas.', image: require('@/assets/banana.png'), price: 0.89, color: 'yellow' },
          { name: 'Broccoli', description: 'Fresh and healthy broccoli.', image: require('@/assets/broccoli.png'), price: 1.29, color: 'green' },
          { name: 'Blueberries', description: 'Sweet and juicy blueberries.', image: require('@/assets/blueberries.png'), price: 3.99, color: 'blue' },
          { name: 'Eggplants', description: 'Versatile eggplants for your dishes.', image: require('@/assets/eggplant.png'), price: 2.79, color: 'purple' },
        ],
      colorOrder: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    searchFruits(query) {
      this.searchQuery = query;
      this.currentPage = 'shop';
    },
    filterFruits(category) {
      this.selectedCategory = category;
    }
  }
};
</script>

<style>
body {
    font-family: 'Arial', sans-serif;
}

.text-warning {
    color: #ffc107;
}

.text-success {
    color: #88cc44;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

@media (max-width: 768px) {
    .navbar-brand {
        font-size: 1.5rem;
    }
}

</style>
