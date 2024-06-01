<template>
  <div>
    <NavBar :isScrolling="isScrolling" :whichComponent="whichComponent" />
    <div class="thirdComponent">
      <p id="bigWords">Our Products</p>
      <!-- Add the rest of your content for the OurProductsPage here -->
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      // Ensure you have these properties defined if needed
      isScrolling: false,
      whichComponent: 2,
    };
  },
};
</script>

<style scoped>
.thirdComponent {
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  flex-direction: row;
  height: 100vh;
  background-color: #ffffff;
  justify-content: center;
}

#bigWords {
  font-size: 50px;
  color: #6e8379;
}

.text-container {
  font-size: 25px;
  margin-bottom: 19px;
  color: white;
  flex: 0.8;
}
</style>
