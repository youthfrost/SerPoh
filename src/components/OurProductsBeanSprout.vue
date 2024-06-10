<template>
  <div class="products">
    <div class="product" v-for="(product, index) in products" :key="index">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <p>{{ product.weight }}g {{ product.name }}</p>
    </div>
    <div class="product-description">
      <h2>300g Bean Sprout</h2>
      <div class="description-section">
        <h3>Description:</h3>
        <p>
          Weight: 300 grams <br />
          Packaging: Vacuum packed to ensure freshness <br />
          Shelf Life: 4-5 days when refrigerated
        </p>
      </div>
      <div class="description-section">
        <h3>Features:</h3>
        <ul>
          <li>
            <strong>Freshness Guaranteed:</strong> Our bean sprouts are vacuum
            packed immediately after harvesting to maintain maximum freshness
            and crunchiness.
          </li>
          <li>
            <strong>Nutrient-Rich:</strong> High in essential vitamins and
            minerals such as Vitamin C, Vitamin K, and folate. A great source of
            plant-based protein and dietary fiber.
          </li>
          <li>
            <strong>Versatile Ingredient:</strong> Perfect for salads,
            stir-fries, soups, and a variety of Asian dishes. Adds a fresh,
            crunchy texture to any meal.
          </li>
          <li>
            <strong>Convenient:</strong> Ready to use right out of the package.
            No need for additional washing or preparation.
          </li>
          <li>
            <strong>Health Benefits:</strong> Bean sprouts are known for their
            detoxifying properties and are great for digestive health.
          </li>
        </ul>
      </div>
      <div class="description-section">
        <h3>Storage Instructions:</h3>
        <p>
          <strong>Refrigeration:</strong> Keep refrigerated at all times. Once
          opened, consume within 2 days for best quality.<br />
          <strong>Freezing:</strong> Not recommended as it may affect the
          texture and nutritional value.
        </p>
      </div>
      <div class="description-section">
        <h3>Usage Tips:</h3>
        <ul>
          <li>
            <strong>Quick Stir-Fry:</strong> Add to your favorite stir-fry
            recipe for the last few minutes of cooking.
          </li>
          <li>
            <strong>Salads:</strong> Mix with other fresh vegetables and a light
            dressing for a nutritious salad.
          </li>
          <li>
            <strong>Soups:</strong> Toss a handful into your soup just before
            serving for added texture and nutrients.
          </li>
          <li>
            <strong>Sandwiches and Wraps:</strong> Add a crunch to your
            sandwiches and wraps by layering bean sprouts with your favorite
            fillings.
          </li>
        </ul>
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
