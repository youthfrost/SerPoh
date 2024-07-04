<template>
  <div class="products">
    <div class="product" v-for="(product, index) in products" :key="index">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <p v-if="product.weight">{{ product.weight }}g {{ product.name }}</p>
      <p v-else>{{ product.name }}</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import BeanSproutImage from "@/assets/leaf.png"; // Update this path to your uploaded image
import SoyBeanSproutImage from "@/assets/leaf.png";
import OtherProductImage from "@/assets/leaf.png";

export default {
  data() {
    return {
      products: [
        { name: "Bean Sprout", weight: 200, image: BeanSproutImage },
        { name: "Bean Sprout", weight: 300, image: BeanSproutImage },
        { name: "Bean Sprout", weight: 300, image: BeanSproutImage },
        { name: "Bean Sprout", weight: 1000, image: BeanSproutImage },
        { name: "Soy Bean Sprout", weight: 200, image: SoyBeanSproutImage },
        { name: "Bean Sprout Husk", weight: 200, image: OtherProductImage },
        { name: "Bean Sprout pen", image: OtherProductImage },
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

.product-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.product p {
  font-size: 18px;
  color: #333;
}

@media (max-width: 1200px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 992px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px; /* Adjust gap for smaller screens */
  }

  .product {
    width: 100%; /* Full width for 2 columns */
    max-width: 250px; /* Limit maximum width */
    padding: 10px; /* Reduce padding */
  }

  .product-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .product p {
    font-size: 16px; /* Decrease font size */
    margin-bottom: 5px; /* Adjust spacing */
  }
}

@media (max-width: 576px) {
  .products {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .product {
    width: 100%; /* Full width for single column */
    max-width: 100%; /* Limit maximum width */
    padding: 10px; /* Adjust padding */
  }

  .product p {
    font-size: 14px; /* Further decrease font size */
  }
}
.product {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px; /* Maintain constant width */
}
</style>
