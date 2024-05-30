<template>
  <div class="firstComponent" ref="firstComponent">
    <div class="leftContainer" ref="leftContainer">
      <div class="container">
        <p>logo</p>
        <p class="bigWords">Farming Beansprouts Since 1992</p>
        <p class="description">
          Discover the Power of Fresh, Nutritious Bean Sprouts
        </p>
        <button class="shopButton" @click="link">Shop</button>
      </div>
    </div>
    <div class="rightContainer" ref="rightContainer">
      <p>video</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.playAnimation();
  },
  methods: {
    link() {
      window.location.href =
        "https://www.lazada.sg/products/redmart-bean-sprouts-300g-i2450071595-s14536348516.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Abeansprout%253Bnid%253A2450071595%253Bsrc%253ALazadaMainSrp%253Brn%253Af380071ced439985fd1a8dcbb778cb16%253Bregion%253Asg%253Bsku%253A2450071595_SGAMZ%253Bprice%253A1.15%253Bclient%253Adesktop%253Bsupplier_id%253A1000008313%253Bbiz_source%253Ah5_hp%253Bslot%253A1%253Butlog_bucket_id%253A470687%253Basc_category_id%253A10002571%253Bitem_id%253A2450071595%253Bsku_id%253A14536348516%253Bshop_id%253A99197&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=en&location=Singapore&price=1.15&priceCompare=skuId%3A14536348516%3Bsource%3Alazada-search-voucher%3Bsn%3Af380071ced439985fd1a8dcbb778cb16%3BunionTrace%3Aa3b551a717161755035025647e%3BoriginPrice%3A115%3BvoucherPrice%3A115%3BdisplayPrice%3A115%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A1%3BbuyerId%3A0%3Btimestamp%3A1716175503889&ratingscore=4.856459330143541&request_id=f380071ced439985fd1a8dcbb778cb16&review=418&sale=17491&search=1&source=search&spm=a2o42.searchlist.list.1&stock=1";
    },
    playAnimation() {
      gsap.fromTo(
        this.$refs.leftContainer.querySelectorAll(
          ".bigWords, .description, .shopButton "
        ),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: this.$refs.leftContainer,
            start: "top 75%",
            end: "bottom 25%",
            markers: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        this.$refs.rightContainer.querySelectorAll("p"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          scrollTrigger: {
            trigger: this.$refs.rightContainer,
            start: "top 75%",
            end: "bottom 25%",
            markers: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/maharlika");

.firstComponent {
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  flex-direction: row;
  height: 100vh;
}
.leftContainer {
  background-color: #95a192;
  flex: 0.5;
  display: flex;
  align-items: center;
}
.rightContainer {
  flex: 0.5;
}
.container {
  margin: auto;
  flex: 0.5;
  text-align: center;
}
.shopButton {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding: 18px 90px;
  border: none;
  border-radius: 0px;
  font-size: 1.1em;
  cursor: pointer;
  font-family: "Maharlika", sans-serif;
}
.shopButton:hover {
  background-color: #e0e0e0;
  transform: scale(1.05);
}

.bigWords {
  font-size: 65px;
  margin-bottom: 0;
  color: white;
  font-family: "Maharlika", sans-serif;
}
.description {
  font-size: 22px;
  margin-bottom: 19px;
  color: white;
  font-family: "Maharlika", sans-serif;
}

@media (max-width: 1200px) {
  .bigWords {
    font-size: 60px;
  }
  .description {
    font-size: 22px;
  }
  .shopButton {
    font-size: 1em;
  }
}

@media (max-width: 992px) {
  .bigWords {
    font-size: 50px;
  }
  .description {
    font-size: 20px;
  }
  .shopButton {
    font-size: 0.9em;
    padding: 15px 75px;
  }
}

@media (max-width: 768px) {
  .bigWords {
    font-size: 40px;
  }
  .description {
    font-size: 18px;
  }
  .shopButton {
    font-size: 0.8em;
    padding: 12px 60px;
  }
}

@media (max-width: 576px) {
  .firstComponent {
    flex-direction: column;
  }
  .bigWords {
    font-size: 30px;
  }
  .description {
    font-size: 16px;
  }
  .shopButton {
    font-size: 0.7em;
    padding: 10px 50px;
  }
}
</style>
