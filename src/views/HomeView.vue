<template>
  <div class="home">
    <HeroBlock />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroBlock from "@/components/HeroBlock.vue";

export default {
  name: "HomeView",
  components: {
    HeroBlock,
  },
};
</script>
