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
import SoyBeanSproutImage from "@/assets/leaf.png"; // Update this path to your uploaded image

export default {
  data() {
    return {
      products: [
        { name: "Soy Bean Sprout", weight: 200, image: SoyBeanSproutImage },
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
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
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
