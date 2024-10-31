<script setup lang="ts">
import {productCategoryValidation} from "~/validations/productCategoryValidation";
import Spinner from "~/components/dashboard/spinner.vue";
import InputCrud from "~/components/dashboard/input-crud.vue";
const product = useProductStore()
const props = defineProps(['isLoading'])
const productprice = rupiah.format(product.product.price)
</script>

<template>
  <VeeForm v-if="props.isLoading == false" class="bg-white">
    <div class="grid grid-cols-1 gap-4" >
      <input-crud
          read-only
          v-model="product.product.product_category.name"
          input-type="text"
          input-title="Category"
          input-name="product category"
          input-placeholder="input product name..."
      />
      <input-crud
          read-only
          v-model="product.product.name"
          input-type="text"
          input-title="Product Name"
          input-name="name"
          input-placeholder="input product name..."
      />
      <input-crud
          v-model="productprice"
          read-only
          input-type="text"
          input-title="Price"
          input-name="price"
          input-placeholder="input price..."
      />
      <input-crud
          v-model="product.product.stock"
          read-only
          input-type="number"
          input-title="Stock"
          input-name="stock"
          input-placeholder="input stock..."
      />
    </div>
    <div class="modal-action">
      <div class="flex items-center mt-5 border-gray-200 rounded-b gap-3 justify-end">
      </div>
    </div>
  </VeeForm>
  <div class="flex justify-center" v-else>
    <spinner />
  </div>
</template>

<style scoped>

</style>