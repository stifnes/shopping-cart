<template>
  <div class="home">
    <div class="container">
      <ProductList />
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductList,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1.5rem;
}
</style>
