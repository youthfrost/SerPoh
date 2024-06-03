<template>
  <div>
    <NavBar
      :isScrolling="isScrolling"
      :whichComponent="whichComponent"
      @update:isScrolling="isScrolling = $event"
      @update:whichComponent="whichComponent = $event"
    />
    <div class="pageDisplay">
      <div class="component" id="first">
        <FirstComponent />
      </div>
      <div class="component" id="second">
        <SecondComponent />
      </div>
      <div class="component" id="whatwedo">
        <WhatWeDoComponent />
      </div>
      <div class="component" id="themission">
        <TheMissionComponent />
      </div>
      <div class="component" id="didyouknow">
        <DidYouKnowComponent />
      </div>
      <div class="component" id="contactus">
        <ContactUsComponent />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "@/components/NavBar.vue";
import FirstComponent from "@/components/FirstComponent.vue";
import SecondComponent from "@/components/SecondComponent.vue";
import ContactUsComponent from "@/components/ContactUsComponent.vue";
import WhatWeDoComponent from "@/components/WhatWeDoComponent.vue";
import TheMissionComponent from "@/components/TheMissionComponent.vue";
import DidYouKnowComponent from "@/components/DidYouKnowComponent.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    NavBar,
    FirstComponent,
    SecondComponent,

    ContactUsComponent,
    WhatWeDoComponent,
    TheMissionComponent,
    DidYouKnowComponent,
  },
  data() {
    return {
      isMobile: false,
      whichComponent: 0,
      isScrolling: false,
      shouldSnapBoolean: false,
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
    this.initScrollTrigger();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    initScrollTrigger() {
      if (!this.isMobile) {
        let components = Array.from(document.querySelectorAll(".component"));
        let tops = components.map((component, index) =>
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
              let componentStarts = tops.map((st) => st.start);

              if (!this.shouldSnap(progress, self, componentStarts)) {
                this.shouldSnapBoolean = false;
                return gsap.utils.normalize(
                  self.start,
                  self.end,
                  self.scroll()
                );
              }
              this.shouldSnapBoolean = true;
              let snapScroll = gsap.utils.snap(componentStarts, self.scroll());
              let normalizedValue = gsap.utils.normalize(
                self.start,
                self.end,
                snapScroll
              );
              return normalizedValue;
            },
            duration: 0.5,
            ease: "power1.out",
          },

          onUpdate: () => {
            this.isScrolling = true;
            clearTimeout(this.scrollTimeout); // Clear previous timeout
            this.scrollTimeout = setTimeout(() => {
              this.isScrolling = false;
            }, 500);
          },
          onSnapComplete: (self) => {
            if (this.shouldSnapBoolean) {
              console.log("onSnap");
              let componentStarts = tops.map((st) => st.start),
                snapScroll = gsap.utils.snap(componentStarts, self.scroll());
              let activeComponentIndex = componentStarts.findIndex(
                (start) => start === snapScroll
              );
              this.whichComponent = activeComponentIndex;
              this.isScrolling = false;
              console.log(this.whichComponent);
            }
          },
        });
      }
    },
    shouldSnap(progress, self, componentStarts) {
      const nearestComponents = [null, null]; // Initialize array to store nearest component start positions
      // Find the nearest components
      componentStarts.forEach((start, index) => {
        if (start <= self.scroll()) {
          if (!nearestComponents[0] || nearestComponents[0] < start) {
            nearestComponents[0] = start;
          }
        } else {
          if (!nearestComponents[1] || nearestComponents[1] > start) {
            nearestComponents[1] = start;
          }
        }
      });
      const thresholdLow =
        nearestComponents[0] +
        (nearestComponents[1] - nearestComponents[0]) * 0.5;
      const thresholdHigh =
        nearestComponents[0] +
        (nearestComponents[1] - nearestComponents[0]) * 0.5;

      // Check if self.scroll is within the threshold range
      return self.scroll() < thresholdLow || self.scroll() > thresholdHigh;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.pageDisplay {
  margin: 0;
  padding: 0;
  font-family: "Maharlika", sans-serif;
  margin-top: 3px;
  /* Ensure the content does not overlap the navbar */
}

.component {
  height: 100vh; /* Full viewport height */
}

@media (max-width: 576px) {
  .component {
    height: auto; /* Change height to auto on mobile */
  }
}
</style>
