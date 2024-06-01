<template>
  <div :class="['navbar', { scrolling: isScrolling }]">
    <nav class="nav">
      <ul>
        <li>
          <!-- Change Home button to navigate to the landing page -->
          <button
            :style="{ color: textColor }"
            @click="navigateTo('landing', 0)"
          >
            Home
          </button>
        </li>
        <li>
          <!-- Change Shop button to navigate to the OurProducts page -->
          <button
            :style="{ color: textColor }"
            @click="navigateTo('ourproducts', 1)"
          >
            Shop
          </button>
        </li>
        <li>
          <button
            :style="{ color: textColor }"
            @click="navigateTo('contactus', 6)"
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
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
          return "#818b7e";
        default:
          return "white"; // Default color
      }
    },
  },
  methods: {
    navigateTo(sectionId, index) {
      // Emit different events based on the button clicked
      switch (sectionId) {
        case "landing":
          if (this.$route.path === "/") {
            // If already in landing page, scroll to the top
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            // Route to the landing page
            this.$router.push("/");
            // Emit events for scrolling and component update
            this.$emit("update:isScrolling", true);
            this.$emit("update:whichComponent", 0);
          }
          break;
        case "ourproducts":
          // Route to the OurProducts page
          this.$router.push("/OurProducts");
          break;
        case "contactus":
          // Do something else for the Contact Us button if needed
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent; /* Slightly transparent background */
  z-index: 1000;
  display: flex;
  height: 50px;
  align-items: center;
  transition: background-color 0.3s ease;
}

.navbar.scrolling {
  background-color: rgba(149, 161, 146, 0.5);
}

nav {
  display: flex;
  flex: 0.3;
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
  font-family: "Maharlika", sans-serif;
  font-size: 18px;
  color: white;
  transition: color 0.3s ease;
  cursor: pointer;
}

button:focus {
  outline: none;
}
</style>
