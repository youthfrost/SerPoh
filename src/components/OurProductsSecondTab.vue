<template>
  <div class="bigContainer">
    <div class="products">
      <div class="product" v-for="(product, index) in products" :key="index">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <p>{{ product.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { upcycledProducts } from "@/data/products";
export default {
  data() {
    return {
      products: upcycledProducts,
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

.bigContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}
.products {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  justify-content: center;
}

.product {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 170px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.product p {
  font-size: 15px;
  color: #333;
}

@media (max-width: 576px) {
  .product {
    padding: 10px;
    width: 110px;
  }

  .product p {
    font-size: 12px; /* Further decrease font size */
  }
}
</style>
