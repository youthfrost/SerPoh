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
            :class="{ active: activeTab === 'first' }"
            @click="activeTab = 'first'"
          >
            Fresh Produce
          </button>
          <button
            class="tab"
            :class="{ active: activeTab === 'second' }"
            @click="activeTab = 'second'"
          >
            Upcycled Product
          </button>
          <button
            class="tab"
            :class="{ active: activeTab === 'third' }"
            @click="activeTab = 'third'"
          >
            Grow Your Own Sprouts
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
import OurProductsFirstTab from "@/components/OurProductsFirstTab.vue";
import OurProductsSecondTab from "@/components/OurProductsSecondTab.vue";
import OurProductsThirdTab from "@/components/OurProductsThirdTab.vue";
import OurProductsAll from "@/components/OurProductsAll.vue"; // Import the new component
import { useHead } from '@vueuse/head'
export default {
  components: {
    NavBar,
    OurProductsFirstTab,
    OurProductsSecondTab,
    OurProductsThirdTab,
    OurProductsAll, // Register the new component
  },
    setup() {
    useHead({
      title: 'Ser Poh Farming Products | Singapore Beansprouts Since 1992',
      meta: [
        {
          name: 'description',
          content: 'Discover Ser Poh Farming’s fresh bean sprouts and premium nutritious sprouts, including alfalfa and broccoli. Also explore upcycled products and sprouting seeds, locally grown in Singapore.'
        }
      ]
    });
    return {};
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
        case "first":
          return "OurProductsFirstTab";
        case "second":
          return "OurProductsSecondTab";
        case "third":
          return "OurProductsThirdTab";
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
      gsap.from("#bannerImage", {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "power2.out",
      });

      gsap.from(".tab", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power2.out",
        stagger: 0.2,
      });
    },
    handleScroll() {
      this.isScrolling = window.scrollY > 0;
    },
  },
};
</script>

<style scoped>
/*@import url("https://fonts.cdnfonts.com/css/maharlika");*/

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
  font-family: "Bauhaus Std", sans-serif;
  font-size: 16px;
  font-weight: 300;
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
  font-family: "Bauhaus Std", sans-serif;
  font-size: 16px;
  font-weight: 300;
}

.tab.active {
  background-color: #6e8379;
  color: #fff;
}

.tab:hover {
  background-color: #6e8379;
  color: #fff;
}

#bannerImage {
  width: 100%; /* Adjusted to fill the container */
  max-width: 100vw; /* Ensures image doesn't exceed viewport width */
  height: 250px; /* Adjust the height as needed */
  object-fit: cover; /* Maintain aspect ratio and cover container */
  object-position: center; /* Center the image */
}

/* Media query for screens with max-width of 576px */
@media (max-width: 576px) {
  #bannerImage {
    height: 200px; /* Reduced height for smaller screens */
    margin-bottom: 15px;
  }

  .product-tabs {
    gap: 5px;
  }

  .tab {
    padding: 8px 10px; /* Adjust padding for smaller screens */
    font-size: 10px; /* Smaller font size for the tabs */
  }
}
</style>
