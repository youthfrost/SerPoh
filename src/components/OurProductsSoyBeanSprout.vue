<template>
  <div class="products">
    <div class="product" v-for="(product, index) in products" :key="index">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <p>{{ product.weight }}g {{ product.name }}</p>
    </div>
    <div class="product-description">
      <p>
        Our vacuum-packed soybean sprouts offer a fresh, crisp, and nutritious
        addition to your meals. Grown from high-quality soybeans, these sprouts
        are meticulously harvested at their peak to ensure maximum flavor and
        crunch. The vacuum packing process locks in freshness, extending shelf
        life and preserving the natural taste and texture without the need for
        preservatives.
      </p>
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
        { name: "Soy Bean Sprout", weight: 300, image: SoyBeanSproutImage },
        { name: "Soy Bean Sprout", weight: 300, image: SoyBeanSproutImage },
      ],
    };
  },
  mounted() {
    this.animateContent();
  },
  methods: {
    animateContent() {
      gsap.from(".product", { duration: 1, y: 50, opacity: 0, stagger: 0.2 });
      gsap.from(".product-description p", {
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
  padding: 0 20px;
}
</style>
