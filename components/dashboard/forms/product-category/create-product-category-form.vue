<script setup lang="ts">
import BaseButton from "~/components/dashboard/base-button.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";
import { Form } from 'vee-validate';
import InputCrud from "~/components/dashboard/input-crud.vue";
import {productCategoryValidation} from "~/validations/productCategoryValidation";
const isLoading = ref(false)

const emit = defineEmits(['actionSuccess'])
const productCategory = useProductCategoryStore()
const createData = async (values) => {
  isLoading.value = true
  await productCategory.createProductCategory(values)
  if (productCategory.isSuccess == true) {
    productCategory.isSuccess = false
    emit('actionSuccess')
  }
  isLoading.value = false
}
</script>

<template>
  <Form @submit="createData" class="bg-white" :validation-schema="productCategoryValidation">
    <div class="grid grid-cols-1 gap-4" >
      <input-crud
          input-type="text"
          input-title="Product Category"
          input-name="name"
          input-placeholder="input product category..."
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