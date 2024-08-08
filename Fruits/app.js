new Vue({
    el: '#app',
    data: {
        currentPage: 'home', // Default page
        searchQuery: '',
        selectedCategory: 'All',
        sortOption: '',
        fruits: [
            { name: 'Apples', description: 'Crisp and sweet apples.', image: 'assets/apple.png', price: 1.99, color: 'red' },
            { name: 'Oranges', description: 'Juicy and tangy oranges.', image: 'assets/orange.png', price: 2.49, color: 'orange' },
            { name: 'Bananas', description: 'Ripe and delicious bananas.', image: 'assets/banana.png', price: 0.89, color: 'yellow' },
            { name: 'Broccoli', description: 'Fresh and healthy broccoli.', image: 'assets/broccoli.png', price: 1.29, color: 'green' },
            { name: 'Blueberries', description: 'Sweet and juicy blueberries.', image: 'assets/blueberries.png', price: 3.99, color: 'blue' },
            { name: 'Eggplants', description: 'Versatile eggplants for your dishes.', image: 'assets/eggplant.png', price: 2.79, color: 'purple' }
        ],
        suggestions: [],
        colorOrder: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
    },
    computed: {
        filteredFruits() {
            let fruits = this.fruits;
            
            if (this.selectedCategory !== 'All') {
                fruits = fruits.filter(fruit => fruit.name === this.selectedCategory);
            }
            
            if (this.searchQuery) {
                fruits = fruits.filter(fruit => fruit.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
            }

            return fruits;
        },
        sortedFruits() {
            let fruits = this.filteredFruits;

            switch (this.sortOption) {
                case 'priceDesc':
                    return fruits.sort((a, b) => b.price - a.price);
                case 'nameAsc':
                    return fruits.sort((a, b) => a.name.localeCompare(b.name));
                case 'nameDesc':
                    return fruits.sort((a, b) => b.name.localeCompare(a.name));
                default:
                    // Default sorting by color
                    return fruits.sort((a, b) => this.colorOrder.indexOf(a.color) - this.colorOrder.indexOf(b.color));
            }
        }
    },
    methods: {
        filterFruits(category) {
            this.selectedCategory = category;
        },
        searchFruits() {
            if (this.searchQuery) {
                const fruit = this.fruits.find(fruit => fruit.name.toLowerCase() === this.searchQuery.toLowerCase());
                if (fruit) {
                    this.filterFruits(fruit.name);
                    this.currentPage = 'shop';
                } else {
                    alert('Fruit not found in the shop.');
                }
            }
        },
        filterSuggestions() {
            if (this.searchQuery) {
                this.suggestions = this.fruits.filter(fruit => fruit.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
            } else {
                this.suggestions = [];
            }
        },
        selectSuggestion(suggestion) {
            this.searchQuery = suggestion.name;
            this.suggestions = [];
            this.searchFruits();
        }
    }
});
