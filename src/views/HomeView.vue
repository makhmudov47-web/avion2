<template>
  <div class="home">
    <HeroBlock />
    <BrandBlock />
    <CeramicsBlock />
    <PopularBlock />
    <ReceptionBlock />
    <AboutBlock />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutBlock from "@/components/AboutBlock.vue";
import BrandBlock from "@/components/BrandBlock.vue";
import CeramicsBlock from "@/components/CeramicsBlock.vue";
import HeroBlock from "@/components/HeroBlock.vue";
import PopularBlock from "@/components/PopularBlock.vue";
import ReceptionBlock from "@/components/ReceptionBlock.vue";

export default {
  name: "HomeView",
  components: {
    HeroBlock,
    BrandBlock,
    CeramicsBlock,
    PopularBlock,
    ReceptionBlock,
    AboutBlock,
  },
};
</script>
