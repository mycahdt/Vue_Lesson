const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: [
                { id: 901, size: 'XS'},
                { id: 902, size: 'S'},
                { id: 903, size: 'M'},
                { id: 904, size: 'L'},
                { id: 905, size: 'XL'},
            ]
            inventory: 8        }
    }
})
