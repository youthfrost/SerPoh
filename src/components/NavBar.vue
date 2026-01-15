<template>
  <div :class="['navbar', { scrolling: isScrolling }]"
   :style="{ top: hasEventsBar ? '40px' : '0px' }"
  >
    <nav class="nav">
      <ul>
        <li>
          <router-link
            class="nav-button"
            :style="{ color: textColor }"
            to="/"
            @mouseenter="animateUnderline($event, true)"
            @mouseleave="animateUnderline($event, false)"
          >
            HOME
            <span
              class="underline"
              :style="{ backgroundColor: textColor }"
            ></span>
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-button"
            :style="{ color: textColor }"
            to="/OurProducts"
            @mouseenter="animateUnderline($event, true)"
            @mouseleave="animateUnderline($event, false)"
          >
            CATALOGUE
            <span
              class="underline"
              :style="{ backgroundColor: textColor }"
            ></span>
          </router-link>
          
        </li>
        <li>
          <router-link
            class="nav-button"
            :style="{ color: textColor }"
            to="/ContactUs"
            
            @mouseenter="animateUnderline($event, true)"
            @mouseleave="animateUnderline($event, false)"
          >
            CONTACT US
            <span
              class="underline"
              :style="{ backgroundColor: textColor }"
            ></span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "NavBar",
  props: {
    isScrolling: {
      type: Boolean,
      default: false,
    },
    whichComponent: {
      type: Number,
      default: 0,
    },
    hasEventsBar: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    textColor() {
      if (this.isScrolling) {
        return "white";
      }
      switch (this.whichComponent) {
        case 0:
          return "white";
        case 1:
          return "#818b7e";
        case 2:
          return "#818b7e";
        case 3:
          return "#818b7e";
        case 4:
          return "white";
        default:
          return "white"; // Default color
      }
    },
  },
  methods: {
    smoothScrollToTop() {
      const scrollStep = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 0) {
          window.scrollTo(0, currentScroll - currentScroll / 10); // Smooth easing
          requestAnimationFrame(scrollStep);
        }
      };
      requestAnimationFrame(scrollStep);
    },
    smoothScrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    navigateTo(sectionId, index) {
      // Emit different events based on the button clicked
      switch (sectionId) {
        case "landing":
          if (this.$route.path === "/") {
            setTimeout(() => {
              this.smoothScrollToTop(); // Call smooth scrolling function
              this.$emit("update:whichComponent", 0);
            }, 500);
          } else {
            this.$router.push("/");
            this.$emit("update:isScrolling", true);
            this.$emit("update:whichComponent", 0);
          }
          break;
        case "ourproducts":
          if (this.$route.path === "/OurProducts") {
            setTimeout(() => {
              this.smoothScrollToTop();
              this.$emit("update:whichComponent", 1);
            }, 300);
          } else {
            this.$router.push("/OurProducts");
            this.$emit("update:whichComponent", 1);
          }
          break;
        case "contactus":
          if (this.$route.path === "/ContactUs") {
            setTimeout(() => {
              this.smoothScrollToTop();
              this.$emit("update:whichComponent", 6);
            }, 300);
          } else {
            this.$router.push("/ContactUs");
            this.$emit("update:whichComponent", 6);
          }
          break;
        default:
          break;
      }
    },
    animateUnderline(event, isEntering) {
      const underline = event.currentTarget.querySelector(".underline");
      if (isEntering) {
        gsap.to(underline, {
          duration: 0.3,
          scaleX: 1,
          transformOrigin: "left",
          opacity: 1,
        });
      } else {
        gsap.to(underline, {
          duration: 0.3,
          scaleX: 0,
          transformOrigin: "right",
          opacity: 0,
        });
      }
    },
  },
};
</script>

<style scoped>
/*@import url("https://fonts.cdnfonts.com/css/maharlika");*/

.navbar {
  position: fixed;
  /*top: 0;*/
  top: 35px; 
  width: 100%;
  background: transparent; /* Slightly transparent background */
  z-index: 1001;
  display: flex;
  height: 50px;
  align-items: center;
  transition: background-color 0.3s ease;
  pointer-events: auto;
}

.navbar.scrolling {
  background-color: rgba(124, 133, 121, 0.5);
}

nav {
  display: flex;
  flex: 0.25;
  min-width: 300px;
}

ul {
  list-style: none;
  flex: 1;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 10px 0;
  justify-content: space-evenly;
}

li {
  margin: 0;
}

button {
  background: none;
  border: none;
  /*font-family: "Maharlika", sans-serif;*/
  font-family: "Bauhaus Std", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: white;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative; /* Relative positioning for the button */
}

.nav-button {
  position: relative;
  overflow: hidden; /* Add overflow hidden to hide the part of the underline that goes outside the button */
}
.nav-button {
  background: none;
  border: none;
  font-family: "Bauhaus Std", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: white;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative;
  text-decoration: none; /* Remove underline from links */
  outline: none;
}
.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px; /* Height of the underline */
  width: 100%;
  opacity: 0; /* Initially hidden */
  transform: scaleX(0); /* Initially scaled to 0 width */
  transform-origin: left; /* Set the transform origin to the left edge */
}

@media (max-width: 576px) {
  .navbar {
    justify-content: center;
  }
  nav {
    display: flex;
    flex: 1;
    padding: 0px 10px;
    white-space: nowrap;
  }
}
</style>
