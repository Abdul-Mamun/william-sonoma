<template>
  <div class="home">
<Header></Header>
    <div class="body">
      <div id="prod-rows" class="row">
        <div id="prod-body" v-for="prod in products" :key="prod.name" class="col-sm-4">
          <img
            v-if="prod.hero"
            :src="prod.hero.href"
            v-b-modal.modal-img
            class="img-hero"
            @click="setImages(prod)"
          />
          <br />
          <p class="prod-name">
            <a v-if="prod.links" :href="prod.links.www" target="_blank">{{prod.name}}</a>
          </p>
          <p
            class="prod-price"
            v-if="prod.priceRange && prod.priceRange.selling"
          >Price Range: ${{prod.priceRange.selling.low + ' - $' + prod.priceRange.selling.high}}</p>
          <div class="prod-price" v-if="prod.price">
            <p>Regular Price: ${{prod.price.regular}}</p>
            <p>Selling Price: ${{prod.price.selling}}</p>
          </div>
          <div class="prod-reviews" v-if="prod.reviews">
            <p>Rating: {{prod.reviews.averageRating}}</p>
            <p>No of Reviews: {{prod.reviews.reviewCount}}</p>
            <p>No of Recommendations: {{prod.reviews.recommendationCount}}</p>
            <p>No of Likelihood: {{prod.reviews.likelihood}}</p>
          </div>          
        </div>
      </div>
      <b-modal id="modal-img" hide-footer hide-header size="lg" centered>
        <div class="modal-body">
          <div v-if="prodImages && prodImages.length">
            <lingallery :width="740" :height="400" :items="prodImages" />
          </div>
          <div class="no-images" v-else>
            There is no other image to show for this product
          </div>
        </div>
      </b-modal>
    </div>
<Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Lingallery from "lingallery";
const fetch = require("node-fetch");
export default {
  name: "",
  props: {
    msg: String
  },
  data() {
    return {
      currentDate: new Date(),
      products: [],
      prodImages: []
    };
  },
  methods: {
    setImages(prod) {
      let tempImages = prod.images.map(img => {
        return { src: img.href, thumbnail: img.href };
      });
      this.prodImages.splice(0, this.prodImages.length, ...tempImages);
    },
    fetchData(){
    let vm = this;
    fetch(
      "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json"
    )
      .then(response => response.json())
      .then(data => (vm.products = data.groups));
    }
  },
  mounted() {
   this.fetchData();
  },
  components: {
    Header,
    Lingallery,
    Footer
  }
};
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  height: auto;
  width: 100%;
  font-size: 16px;
  text-align: center;
  font-family: "Segoe UI";
  line-height: 10px;
}
.modal-body {
  height: 500px;
}
.img-hero {
  height: 350px;
  width: 350px;
}
.no-images{
  color: #6f4e06;
  font-size: 22px;
  padding-top: 200px;
  text-align: center;
  font-family: "Segoe UI";
}
.prod-name {
  text-align: center;
  margin-top: 20px;
}
#prod-body {
  margin: 25px 0px;
}
#prod-rows{
  margin: 0px;
}
.prod-price {
  color: #505050;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 5px;
}
.prod-reviews {
  color: #505050;
  font-weight: 500;
  line-height: 5px;
}
</style>
