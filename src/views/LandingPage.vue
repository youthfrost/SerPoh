<template>
  <div class="pageDisplay">
    <div class="component">
      <FirstComponent :inView="currentComponent === 0" />
    </div>
    <div class="component">
      <SecondComponent :inView="currentComponent === 1" />
    </div>
    <div class="component">
      <ThirdComponent :inView="currentComponent === 2" />
    </div>
    <div class="component">
      <FourthComponent :inView="currentComponent === 3" />
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FirstComponent from "@/components/FirstComponent.vue";
import SecondComponent from "@/components/SecondComponent.vue";
import ThirdComponent from "@/components/ThirdComponent.vue";
import FourthComponent from "@/components/FourthComponent.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
  },
  data() {
    return {
      currentComponent: 0,
    };
  },
  mounted() {
    this.initScrollTrigger();
    window.addEventListener("scroll", this.updateCurrentComponent);
  },
  destroyed() {
    window.removeEventListener("scroll", this.updateCurrentComponent);
  },
  methods: {
    initScrollTrigger() {
      let component = Array.from(document.querySelectorAll(".component"));
      let tops = component.map((component, index) =>
        ScrollTrigger.create({
          id: `component_${index}`,
          trigger: component,
          markers: false,
          start: "top top",
        })
      );

      let container = document.querySelector(".pageDisplay");

      ScrollTrigger.create({
        id: "snapper",
        trigger: container,
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
        snap: {
          snapTo: (progress, self) => {
            let componentStarts = tops.map((st) => st.start),
              snapScroll = gsap.utils.snap(componentStarts, self.scroll()),
              normalizedValue = gsap.utils.normalize(
                self.start,
                self.end,
                snapScroll
              );
            return normalizedValue;
          },
          duration: 0.5,
          ease: "power1.out",
        },
      });
    },
    updateCurrentComponent() {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const components = document.querySelectorAll(".component");

      // Iterate through each component to find which one is more than 50% visible on the screen
      for (let i = 0; i < components.length; i++) {
        const component = components[i];
        const componentTop = component.offsetTop;
        const componentBottom = componentTop + component.offsetHeight;

        // Check if the component is more than 50% visible
        if (
          componentTop < scrollPosition + windowHeight / 2 &&
          componentBottom > scrollPosition + windowHeight / 2
        ) {
          // Update currentComponent if it's different from the index of the component
          if (this.currentComponent !== i) {
            this.currentComponent = i;
          }
          break; // Break the loop once we find the component in view
        }
      }
      console.log(this.currentComponent);
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
