<template>
  <div class="products">
    <div class="product" v-for="(product, index) in products" :key="index">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <p>{{ product.weight }}g {{ product.name }}</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import BeanSproutImage from "@/assets/leaf.png"; // Update this path to your uploaded image

export default {
  data() {
    return {
      products: [
        { name: "Bean Sprout", weight: 200, image: BeanSproutImage },
        { name: "Bean Sprout", weight: 300, image: BeanSproutImage },
        { name: "Bean Sprout", weight: 500, image: BeanSproutImage },
        { name: "Bean Sprout", weight: 1000, image: BeanSproutImage },
      ],
    };
  },
  mounted() {
    this.animateContent();
  },
  methods: {
    animateContent() {
      gsap.from(".product", { duration: 1, y: 50, opacity: 0, stagger: 0.2 });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

@media (max-width: 1200px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}

.product {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.product-image {
  width: 200px; /* Adjust the width as needed */
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.product p {
  font-size: 18px;
  color: #333;
}
</style>
