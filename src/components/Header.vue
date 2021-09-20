<template>
  <header>
    <h1>Shopping List</h1>
    <button type="Button" @click="deleteProducts()" class="button-del">
      Delete
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    deleteProducts() {
      this.$emit("productDeleted");
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(0, 64, 128, 0.05%);
  display: flex;
  align-self: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  box-sizing: border-box;
  h1 {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
  }
  button {
    background-color: rgb(139, 20, 60);
    border: none;
    border-radius: 8px;
    padding: 0 1rem;
    color: #fff;
  }
}
</style>
