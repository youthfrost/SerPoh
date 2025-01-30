<template>
  <div class="bigContainer">
    <div class="products">
      <div class="product" v-for="(product, index) in products" :key="index">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <p v-if="product.weight">{{ product.weight }}g {{ product.name }}</p>
        <p v-else>{{ product.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import BeanSproutImage from "@/assets/leaf.png"; // Update this path to your uploaded image
import SoyBeanSproutImage from "@/assets/leaf.png";
import OtherProductImage from "@/assets/leaf.png";
import CatalogueBeansproutsImage from "@/assets/Catalogue_Beansprouts.png";
import CatalogueSoybeanSproutImage from "@/assets/Catalogue_SoybeanSprouts.png";
import CatalogueDriedBeanSproutHusk from "@/assets/Catalogue_BeansproutHusks.png";
import CatalogueMasonJarSproutingKit from "@/assets/Catalogue_Beansprouts.png";
import CatalogueOrganicBroccoliSproutingSeeds from "@/assets/Catalogue_Beansprouts.png";
import CatalogueOrganicAlfafaSproutingSeeds from "@/assets/Catalogue_Beansprouts.png";
import CatalogueOrganicCrimsonCloverSproutingSeeds from "@/assets/Catalogue_Beansprouts.png";

export default {
  data() {
    return {
      products: [
        { name: "Beansprout", image: CatalogueBeansproutsImage },
        { name: "Soybean Sprout", image: CatalogueSoybeanSproutImage },
        { name: "Dried Bean Sprout Husk", image: CatalogueDriedBeanSproutHusk },

        { name: "Mason Jar Sprouting Kit", image: CatalogueBeansproutsImage },

        {
          name: "Organic Broccoli Sprouting Seeds",
          image: CatalogueBeansproutsImage,
        },
        { name: "Organic Alfafa Sprouting Seeds", image: OtherProductImage },
        {
          name: "Organic Crimson Clover Sprouting Seeds",
          image: OtherProductImage,
        },
        {
          name: "Organic Radish (Daikon Minowase) Sprouting Seeds",
          image: OtherProductImage,
        },
        {
          name: "Organic Radish (Red Vulcano) Sprouting Seeds",
          image: OtherProductImage,
        },
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
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.product p {
  font-size: 15px;
  color: #333;
}
.product {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 170px;
}

@media (max-width: 1200px) {
  .products {
    grid-template-columns: repeat(3, 1fr);
  }
  .product {
    width: 180px; /* Full width for 2 columns */ /* Limit maximum width */
    /* Reduce padding */
  }
}

@media (max-width: 768px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px; /* Adjust gap for smaller screens */
  }

  .product {
    width: 170px; /* Full width for 2 columns */ /* Limit maximum width */
    /* Reduce padding */
  }

  .product-image {
    height: auto;
    border-radius: 10px;
    margin-bottom: 5px;
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
