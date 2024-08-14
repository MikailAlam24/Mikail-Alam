<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" @click="goHome">Fruitables</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" :class="{ active: currentPage === 'home' }">
          <a class="nav-link" href="#" @click.prevent="goHome">Home <span class="sr-only"></span></a>
        </li>
        <li class="nav-item" :class="{ active: currentPage === 'shop' }">
          <a class="nav-link" href="#" @click.prevent="goShop">Shop</a>
        </li>
      </ul>
      <div class="navbar-icons">
        <a href="#" class="nav-link"><i class="fas fa-search"></i></a>
        <a href="#" class="nav-link"><i class="fas fa-shopping-bag"></i></a>
        <a href="#" class="nav-link"><i class="fas fa-user"></i></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['currentPage'],
  methods: {
    goHome() {
      this.$emit('changePage', 'home');
    },
    goShop() {
      this.$emit('changePage', 'shop');
    },
  },
};
</script>

<style scoped>
.navbar-brand {
    font-size: 1.5rem;
}

@media (max-width: 768px) {
    .navbar-brand {
        font-size: 1.5rem;
    }
}
</style>
