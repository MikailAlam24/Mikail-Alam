<template>
  <section class="container my-5">
    <h2 class="text-center mb-4">Fresh Fruits Shop</h2>
    <div class="row">
      <div class="col-md-3">
        <div class="list-group">
          <a 
            href="#" 
            class="list-group-item list-group-item-action active" 
            @click.prevent="filterFruits('All')"
          >
            All
          </a>
          <a 
            href="#" 
            class="list-group-item list-group-item-action" 
            v-for="fruit in fruits" 
            :key="fruit.name" 
            @click.prevent="filterFruits(fruit.name)"
          >
            {{ fruit.name }}
          </a>
        </div>
      </div>
      <div class="col-md-9">
        <div class="d-flex justify-content-between mb-3">
          <input 
            type="text" 
            class="form-control" 
            placeholder="keywords" 
            style="width: 200px;" 
            :value="searchQuery" 
            @input="$emit('update:searchQuery', $event.target.value)"
          >
          <select 
            class="form-control" 
            style="width: 200px;" 
            :value="sortOption" 
            @change="$emit('update:sortOption', $event.target.value)"
          >
            <option value="">Sort by Color</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="nameAsc">Name: A-Z</option>
            <option value="nameDesc">Name: Z-A</option>
          </select>
        </div>
        <div class="row">
          <div 
            class="col-md-4 mb-4" 
            v-for="fruit in sortedFruits" 
            :key="fruit.name">
            <div class="card h-100">
              <img :src="fruit.image" class="card-img-top" alt="Fruit image">
              <div class="card-body">
                <h5 class="card-title">{{ fruit.name }}</h5>
                <p class="card-text">{{ fruit.description }}</p>
                <p class="card-text font-weight-bold">$ {{ fruit.price.toFixed(2) }}</p>
                <button class="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['fruits', 'searchQuery', 'sortOption', 'selectedCategory'],
  computed: {
    sortedFruits() {
      let fruits = this.filteredFruits;

      switch (this.sortOption) {
        //price sort
        case 'priceDesc':
          return fruits.sort((a, b) => b.price - a.price);
          //name sort
        case 'nameAsc':
          return fruits.sort((a, b) => a.name.localeCompare(b.name));
        case 'nameDesc':
          return fruits.sort((a, b) => b.name.localeCompare(a.name));
        default:
          // color sort
          return fruits.sort((a, b) => this.$root.colorOrder.indexOf(a.color) - this.$root.colorOrder.indexOf(b.color));
      }
    },
    filteredFruits() {
      let fruits = this.fruits;

      if (this.selectedCategory !== 'All') {
        fruits = fruits.filter(fruit => fruit.name === this.selectedCategory);
      }

      if (this.searchQuery) {
        fruits = fruits.filter(fruit => fruit.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }

      return fruits;
    }
  },
  methods: {
  filterFruits(category) {
    this.$emit('update:searchQuery', '');
    this.$emit('filterFruits', category);  
  }
}

};
</script>

<style scoped>

</style>
