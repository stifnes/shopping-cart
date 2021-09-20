<template>
  <div class="product-card" @click="selectProduct">
    <label>
      <img :src="product.imageURL || returnImage()" alt="" />
      <h2>{{ product.title }}</h2>
      <input type="checkbox" v-model="product.selected" />
    </label>
  </div>
</template>

<script>
import fallbackImage from "@/assets/fallback.png";

export default {
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    returnImage() {
      return fallbackImage;
    },
    selectProduct() {
      return (this.product.selected = true);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  label {
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    transition: all 0.3s;
    cursor: pointer;
    img {
      width: 100px;
    }
    h2 {
      flex: 1;
      font-size: 16px;
      font-weight: normal;
    }
    &:hover {
      box-shadow: 0 5px 20px 0 rgba(54, 54, 54, 0.15);
      transform: translateY(-5px);
    }
    input {
      cursor: pointer;
    }
  }
}
</style>
