<template>
	<div id="confirmationModal" :class="['modal', {'show' : showModal}]">
			<div class="modal-content">
			<span class="close" @click="showModal = false">&times;</span>
			<p>Are you sure you want to Delete</p>
			<button @click="deleteProducts()">Delete</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	props: {
		showModal: {
			type: Boolean,
			default: true
		}
	},
	methods: {
    deleteProducts() {
      this.$emit("productDeleted");
    },
  },
}
</script>

<style scoped>
.modal {
  display: none; 
  position: fixed;  
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4)
}
.modal.show {
	display: block;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
button {
	background-color: rgb(139, 20, 60);
	border: none;
	border-radius: 8px;
	padding: 0.5rem;
	color: #fff;
}
</style>