<template>
  <div class="allContainer">
    <div class="bigContainer">
      <div class="products">
        <div class="product" v-for="(product, index) in products" :key="index">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <p>{{ product.name }}</p>
        </div>
      </div>
    </div>
    <p class="coming-soon">MORE COMING SOON....</p>
  </div>
</template>

<script>
import { gsap } from "gsap";
import BeanSproutImage from "@/assets/leaf.png"; // Update this path to your uploaded image

import CatalogueBeansproutsImage from "@/assets/Catalogue_Beansprouts.png";
import CatalogueSoybeanSproutImage from "@/assets/Catalogue_SoybeanSprouts.png";
export default {
  data() {
    return {
      products: [
        { name: "Beansprout", image: CatalogueBeansproutsImage },
        { name: "Soybean Sprout", image: CatalogueSoybeanSproutImage },
      ],
    };
  },
  mounted() {
    this.animateContent();
    this.animateComingSoon();
  },
  methods: {
    animateContent() {
      gsap.from(".product", { duration: 1, y: 50, opacity: 0, stagger: 0.2 });
    },
    animateComingSoon() {
      gsap.to(".coming-soon", {
        opacity: 0.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
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
  grid-template-columns: repeat(2, 1fr);
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

.coming-soon {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #ff6600;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .product {
    width: 200px;
  }
}

@media (max-width: 576px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 10px;
  }
  .product {
    padding: 18px;
    width: 100px;
  }
  .product p {
    font-size: 12px;
  }
}
</style>
