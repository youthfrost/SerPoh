<template>
  <div class="bigContainer">
    <div class="products">
      <div class="product" v-for="(product, index) in products" :key="index">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <p>{{ product.weight }}g {{ product.name }}</p>
      </div>
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
        { name: "Soy Bean Sprout", weight: 1000, image: BeanSproutImage },
        { name: "Soy Bean Sprout", weight: 1000, image: BeanSproutImage },
        { name: "Soy Bean Sprout", weight: 1000, image: BeanSproutImage },
        { name: "Soy Bean Sprout", weight: 1000, image: BeanSproutImage },

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

.bigContainer {
  width: 100%;

  display: flex;
  justify-content: center;
}

.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

@media (max-width: 1200px) {
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
    width: 200px; /* Full width for 2 columns */ /* Limit maximum width */
  }

  .product-image {
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
    grid-template-columns: repeat(2, 1fr);
    justify-content: center; /* Center items horizontally */
    gap: 10px; /* Adjust gap for smaller screens */
  }

  .product {
    padding: 18px;
    width: 100px;
  }

  .product p {
    font-size: 12px; /* Further decrease font size */
  }
}
</style>
