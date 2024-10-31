<script setup lang="ts">
import BaseButton from "~/components/dashboard/base-button.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";
import { Form } from 'vee-validate';
import InputCrud from "~/components/dashboard/input-crud.vue";
import {productValidation} from "~/validations/productValidation";
import InputSelect from "~/components/dashboard/input-select.vue";
import Spinner from "~/components/dashboard/spinner.vue";
const props = defineProps(['id', 'isLoading'])
const productCategory = useProductCategoryStore()
const isLoading = ref(false)
const emit = defineEmits(['actionSuccess'])
const product = useProductStore()
const updateData = async (values) => {
  values.product_category_id = product.product.product_category_id
  isLoading.value = true
  await product.updateProduct(values, props.id)
  if (product.isSuccess == true) {
    product.isSuccess = false
    emit('actionSuccess')
  }
  isLoading.value = false
}
</script>

<template>
  <Form v-if="props.isLoading == false" @submit="updateData" class="bg-white" :validation-schema="productValidation">
    <div class="grid grid-cols-1 gap-4" >
      <input-select
          input-title="Product Category"
          input-name="product_category_id"
          v-model="product.product.product_category_id"
          value="value"
          :options="productCategory.productCategoryList"
          option-label="name"
          option-value="id"
          input-placeholder="choose product category..."
      />
      <input-crud
          v-model="product.product.name"
          input-type="text"
          input-title="Product Name"
          input-name="name"
          input-placeholder="input product name..."
      />
      <input-crud
          v-model="product.product.price"
          input-type="number"
          input-title="Price"
          input-name="price"
          input-placeholder="input price..."
      />
      <input-crud
          v-model="product.product.stock"
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
  <div class="flex justify-center" v-else>
    <spinner />
  </div>
</template>

<style scoped>

</style>