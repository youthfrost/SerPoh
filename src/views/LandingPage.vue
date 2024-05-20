<template>
  <div class="pageDisplay">
    <div class="component"><FirstComponent /></div>
    <div class="component"><SecondComponent /></div>
    <div class="component"><ThirdComponent /></div>
    <div class="component"><FourthComponent /></div>
  </div>
</template>

<script>
import FirstComponent from "@/components/FirstComponent.vue";
import SecondComponent from "@/components/SecondComponent.vue";
import ThirdComponent from "@/components/ThirdComponent.vue";
import FourthComponent from "@/components/FourthComponent.vue";

export default {
  components: {
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
  },
  data() {
    return {
      isScrolling: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.isScrolling) return;
      this.isScrolling = true;

      setTimeout(() => {
        const scrollTop = document.documentElement.scrollTop;
        const components = document.querySelectorAll(".component");

        for (let i = 0; i < components.length; i++) {
          const component = components[i];
          const componentTop = component.offsetTop;
          const componentHeight = component.offsetHeight;
          const halfwayPoint = componentTop + componentHeight / 2;

          if (
            scrollTop >= halfwayPoint &&
            scrollTop < halfwayPoint + window.innerHeight
          ) {
            if (i + 1 < components.length) {
              components[i + 1].scrollIntoView({ behavior: "smooth" });
            }
            break;
          }

          // If scrolling up and not yet passing the halfway point of the previous component
          if (
            scrollTop < halfwayPoint &&
            i > 1 &&
            scrollTop >=
              components[i - 1].offsetTop + components[i - 1].offsetHeight / 2
          ) {
            components[i - 1].scrollIntoView({ behavior: "smooth" });
            break;
          }
        }

        this.isScrolling = false;
      }, 600); // Adjust the delay as needed
    },
  },
};
</script>

<style scoped>
.pageDisplay {
  margin: 0;
  padding: 0;
}
.component {
  height: 100vh; /* Full viewport height */
}
</style>
