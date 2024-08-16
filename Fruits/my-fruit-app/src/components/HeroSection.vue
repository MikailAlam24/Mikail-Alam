<template>
  <section class="hero-section text-white d-flex align-items-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 text-left">
          <h2 class="text-warning">100% Organic Foods</h2>
          <h1 class="display-4 font-weight-bold text-success">Organic Veggies & Fruits Foods</h1>
          <form @submit.prevent="searchFruits">
            <div class="input-group my-4">
              <input
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
                v-model="searchQuery"
                @input="filterSuggestions"
              />
              <div class="input-group-append">
                <button class="btn btn-success" type="submit" id="button-addon2">Submit Now</button>
              </div>
            </div>
            <ul class="suggestions-list" v-if="suggestions.length">
                <li v-for="(suggestion, index) in suggestions" :key="index" @click="selectSuggestion(suggestion)">
                    {{ suggestion.name }}
                </li>
            </ul>
          </form>
        </div>
        <div class="col-lg-6">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/fruits1.png" class="d-block w-100" alt="Fruit 1">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Fruits</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/fruits2.png" class="d-block w-100" alt="Fruit 2">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Vegetables</h5>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      suggestions: [],
    };
  },
  props: ['fruits'],
  methods: {
    searchFruits() {
      this.$emit('search', this.searchQuery);
    },
    filterSuggestions() {
      this.suggestions = this.fruits.filter(fruit => fruit.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion.name;
      this.suggestions = [];
      this.searchFruits();
    },
  },
};
</script>

<style scoped>
.hero-section {
    background: url('@/assets/fruitsbackground.png') no-repeat center center;
    background-size: cover;
    height: 80vh;
    display: flex;
    align-items: center;
    position: relative;
    padding: 50px 0;
    color: #fff;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
}

.hero-section .container {
    position: relative;
    z-index: 2;
}

.input-group .form-control {
    border-radius: 30px 0 0 30px;
}

.input-group .btn {
    border-radius: 0 30px 30px 0;
}

.suggestions-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-height: 150px;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    background: white;
    z-index: 3;
    border: 1px solid #ccc;
    border-radius: 0 0 5px 5px;
}

.suggestions-list li {
    padding: 10px;
    color: #343a40;
    cursor: pointer;
}

.suggestions-list li:hover {
    background: #f0f0f0;
}

@media (max-width: 768px) {
    .hero-section {
        height: auto;
        padding: 20px 0;
    }
    .hero-section h1 {
        font-size: 2rem;
    }
    .hero-section h2 {
        font-size: 1.5rem;
    }
    .input-group {
        flex-direction: column;
        align-items: stretch;
    }
    .input-group .form-control {
        border-radius: 5px;
        margin-bottom: 5px;
        width: 100%;
        height: 50px; 
        font-size: 1rem; 
    }
    .input-group .btn {
        border-radius: 5px;
        width: 100%;
        height: 50px; 
        font-size: 1rem;
    }
}
.carousel-item {
    position: relative;
    height: 300px;
}

.carousel-item img {
    height: 100%;
    object-fit: cover;
}

.carousel-caption {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
}

@media (max-width: 768px) {
    .carousel-item {
        height: auto;
    }
    .carousel-caption {
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        padding: 5px;
        font-size: 0.8rem;
    }
}

</style>
