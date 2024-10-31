<script setup lang="ts">
import BaseButton from "~/components/dashboard/base-button.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";
import { Form } from 'vee-validate';
import InputCrud from "~/components/dashboard/input-crud.vue";
import {productValidation} from "~/validations/productValidation";
import InputSelect from "~/components/dashboard/input-select.vue";
const productCategory = useProductCategoryStore()
const isLoading = ref(false)
const emit = defineEmits(['actionSuccess'])
const product = useProductStore()
const createData = async (values) => {
  isLoading.value = true
  await product.createProduct(values)
  if (product.isSuccess == true) {
    product.isSuccess = false
    emit('actionSuccess')
  }
  isLoading.value = false
}
</script>

<template>
  <Form @submit="createData" class="bg-white" :validation-schema="productValidation">
    <div class="grid grid-cols-1 gap-4" >
      <input-select
          input-title="Product Category"
          input-name="product_category_id"
          value="value"
          :options="productCategory.productCategoryList"
          option-label="name"
          option-value="id"
          input-placeholder="choose product category..."
      />
      <input-crud
          input-type="text"
          input-title="Product Name"
          input-name="name"
          input-placeholder="input product name..."
      />
      <input-crud
          input-type="number"
          input-title="Price"
          input-name="price"
          input-placeholder="input price..."
      />
      <input-crud
          input-type="number"
          input-title="Stock"
          input-name="stock"
          input-placeholder="input stock..."
      />
    </div>
    <div class="modal-action">
      <div class="flex items-center mt-5 border-gray-200 rounded-b gap-3 justify-end">
        <base-button  custom-class="btn-primary items-center flex gap-2 w-full justify-center py-3" type="submit">
          submit
          <sm-spinner v-if="isLoading" />
        </base-button>
      </div>
    </div>
  </Form>
</template>

<style scoped>

</style>