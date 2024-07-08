<template>
  <div>
    <NavBar :isScrolling="isScrolling" :whichComponent="whichComponent" />
    <div class="ourProducts">
      <div class="content">
        <img src="@/assets/Title.png" alt="Banner" id="bannerImage" />

        <div class="product-tabs">
          <button
            class="tab"
            :class="{ active: activeTab === 'all' }"
            @click="activeTab = 'all'"
          >
            All Products
          </button>
          <button
            class="tab"
            :class="{ active: activeTab === 'bean' }"
            @click="activeTab = 'bean'"
          >
            Bean Sprout
          </button>
          <button
            class="tab"
            :class="{ active: activeTab === 'soybean' }"
            @click="activeTab = 'soybean'"
          >
            Soy Bean Sprout
          </button>
          <button
            class="tab"
            :class="{ active: activeTab === 'other' }"
            @click="activeTab = 'other'"
          >
            Others
          </button>
        </div>
      </div>
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import NavBar from "@/components/NavBar.vue";
import OurProductsBeanSprout from "@/components/OurProductsBeanSprout.vue";
import OurProductsSoyBeanSprout from "@/components/OurProductsSoyBeanSprout.vue";
import OurProductsOtherProducts from "@/components/OurProductsOtherProducts.vue";
import OurProductsAll from "@/components/OurProductsAll.vue"; // Import the new component

export default {
  components: {
    NavBar,
    OurProductsBeanSprout,
    OurProductsSoyBeanSprout,
    OurProductsOtherProducts,
    OurProductsAll, // Register the new component
  },
  data() {
    return {
      isScrolling: false,
      whichComponent: 2,
      activeTab: "all", // Default to "all" to show the new component
    };
  },
  computed: {
    activeComponent() {
      switch (this.activeTab) {
        case "soybean":
          return "OurProductsSoyBeanSprout";
        case "other":
          return "OurProductsOtherProducts";
        case "bean":
          return "OurProductsBeanSprout";
        case "all":
        default:
          return "OurProductsAll"; // Default to the new component
      }
    },
  },
  mounted() {
    this.animateContent();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    animateContent() {
      gsap.from("#bigWords", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "bounce",
      });
    },
    handleScroll() {
      this.isScrolling = window.scrollY > 0;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.ourProducts {
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 100px;
  z-index: 1000;
  pointer-events: auto;
}

.content {
  padding: 15px;
}

#bigWords {
  font-size: 36px;
  color: #6e8379;
  margin-bottom: 20px;
}

.product-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
  justify-content: center;
  z-index: 1000;
  pointer-events: auto;
}

.tab {
  padding: 10px 20px;
  border: 2px solid #6e8379;
  background-color: #fff;
  color: #6e8379;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.tab.active {
  background-color: #6e8379;
  color: #fff;
}

.tab:hover {
  background-color: #6e8379;
  color: #fff;
}

/* Media query for screens with max-width of 576px */
@media (max-width: 576px) {
  .thirdComponent {
    height: auto; /* Adjust height for smaller screens */
    padding-top: 20px;
  }

  #bigWords {
    font-size: 28px; /* Smaller font size for the heading */
    margin-bottom: 15px;
  }

  .product-tabs {
    gap: 5px;
  }

  .tab {
    padding: 8px 10px; /* Adjust padding for smaller screens */
    font-size: 14px; /* Smaller font size for the tabs */
  }
}
</style>
