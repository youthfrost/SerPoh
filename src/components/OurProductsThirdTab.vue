<template>
  <div class="bigContainer">
    <div class="content">
      <p>
        Start your journey to cultivating fresh and nutritious beansprouts at home.
        It's easy, fun, and rewarding! 
      </p>
      
      <div class="content-link-qr">
        <ul style="list-style-type: disc; padding-left: 20px;">
          <p>Get started now!</p>
          <li>
            Buy Seeds:
            <a href="https://form.jotform.com/serpoh1992/serious-sprout-order-form" target="_blank" rel="noopener noreferrer">
              Click here to explore our seed collection.
            </a>
          </li>
          <li>Or scan the QR code on the right.</li>
        </ul>
      
        <img src="@/assets/qr-code-serious.png" alt="QR Code" class="qr-code" />
      </div>
    </div>
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
import OtherProductImage from "@/assets/leaf.png"; // Update this path to your uploaded image

export default {
  data() {
    return {
      products: [
        { name: "Mason Jar Sprouting Kit", image: OtherProductImage },
        { name: "Organic Broccoli Sprouting Seeds", image: OtherProductImage },
        { name: "Organic Alfafa Sprouting Seeds", image: OtherProductImage },
        { name: "Organic Crimson Clover Sprouting Seeds", image: OtherProductImage },
        { name: "Organic Radish (Daikon Minowase) Sprouting Seeds", image: OtherProductImage },
        { name: "Organic Radish (Red Vulcano) Sprouting Seeds", image: OtherProductImage },
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
  flex-direction: column;
  align-items: center;
}

.content {
  text-align: left;
  margin-bottom: 20px;
  padding: 20px;
  font-family: "Maharlika";
  width: 55%;
  display: flex;
  flex-direction: column; 
  font-size: 17px;
  font-weight: 1000;
}
.content-link-qr {
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
}

.content p {

  color: #333;
  margin: 0;
}

.content ul {
  list-style-type: none;
  padding: 0;
}

.content ul li {
  margin: 5px 0;
}

.qr-code {
  width: 80px; /* Set the desired width */
  max-height: 100%; /* Prevent it from exceeding the container's height */
  object-fit: contain; /* Ensures it respects its aspect ratio */
  margin-top: 10px;
  margin-left: 5px;
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
  .content {
    width: 70%;
  }
}

@media (max-width: 768px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .content {
    width: 95%;
    font-size: 13px;
  }
  .qr-code {
  width: 60px; /* Set the desired width */
  max-height: 100%; /* Prevent it from exceeding the container's height */
  object-fit: contain; /* Ensures it respects its aspect ratio */
  margin-top: 10px;
}

  .product {
    width: 200px;
  }

  .product-image {
    height: auto;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .product p {
    font-size: 16px;
    margin-bottom: 5px;
  }
}

@media (max-width: 576px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    gap: 10px;
  }
  .content {
    width: 90%;
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
