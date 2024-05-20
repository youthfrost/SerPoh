<template>
  <div class="firstComponent">
    <div class="leftContainer">
      <div class="container">
        <p>logo</p>
        <p id="bigWords">Farming Beansprouts Since 1992</p>
        <p id="description">
          Based in an Science-Based Skin Care That's Tailored to You
        </p>
        <button class="shopButton" @click="link">Shop</button>
      </div>
    </div>
    <div class="rightContainer">
      <p>video</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    link() {
      window.location.href =
        "https://www.lazada.sg/products/redmart-bean-sprouts-300g-i2450071595-s14536348516.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253Abeansprout%253Bnid%253A2450071595%253Bsrc%253ALazadaMainSrp%253Brn%253Af380071ced439985fd1a8dcbb778cb16%253Bregion%253Asg%253Bsku%253A2450071595_SGAMZ%253Bprice%253A1.15%253Bclient%253Adesktop%253Bsupplier_id%253A1000008313%253Bbiz_source%253Ah5_hp%253Bslot%253A1%253Butlog_bucket_id%253A470687%253Basc_category_id%253A10002571%253Bitem_id%253A2450071595%253Bsku_id%253A14536348516%253Bshop_id%253A99197&fastshipping=0&freeshipping=0&fs_ab=2&fuse_fs=&lang=en&location=Singapore&price=1.15&priceCompare=skuId%3A14536348516%3Bsource%3Alazada-search-voucher%3Bsn%3Af380071ced439985fd1a8dcbb778cb16%3BunionTrace%3Aa3b551a717161755035025647e%3BoriginPrice%3A115%3BvoucherPrice%3A115%3BdisplayPrice%3A115%3BsinglePromotionId%3A-1%3BsingleToolCode%3A-1%3BvoucherPricePlugin%3A1%3BbuyerId%3A0%3Btimestamp%3A1716175503889&ratingscore=4.856459330143541&request_id=f380071ced439985fd1a8dcbb778cb16&review=418&sale=17491&search=1&source=search&spm=a2o42.searchlist.list.1&stock=1";
    },
  },
};
</script>
<style scoped>
.firstComponent {
  display: flex;
  flex: 1;
  padding: 0;
  margin: 0;
  flex-direction: row;
  height: 100vh;
}
.leftContainer {
  background-color: #8aaa97;
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
  font-size: 1.2em;
  cursor: pointer;
}

#bigWords {
  font-size: 70px;
  margin-bottom: 0;
  color: white;
}
#description {
  font-size: 25px;
  margin-bottom: 19px;
  color: white;
}
</style>
