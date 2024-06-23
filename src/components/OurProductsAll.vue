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
        { name: "Bean Sprout", weight: 300, image: BeanSproutImage },
      ],
    };
  },
  mounted() {
    this.animateContent();
  },
  methods: {
    animateContent() {
      gsap.from(".product", { duration: 1, y: 50, opacity: 0, stagger: 0.2 });
      gsap.from(".product-description", {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power1",
        delay: 0.5,
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.product {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.product-description {
  max-width: 800px;
  margin: 40px auto;
  font-size: 18px;
  color: #333;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.description-section {
  margin-bottom: 20px;
}

.description-section h3 {
  color: #6e8379;
  margin-bottom: 10px;
  font-size: 22px;
}

.description-section p,
.description-section ul {
  font-size: 16px;
  line-height: 1.5;
}

.description-section ul {
  padding-left: 20px;
}

.description-section ul li {
  margin-bottom: 10px;
}
</style>
