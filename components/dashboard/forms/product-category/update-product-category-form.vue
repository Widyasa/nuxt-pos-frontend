<script setup lang="ts">

import BaseButton from "~/components/dashboard/base-button.vue";
import SmSpinner from "~/components/dashboard/sm-spinner.vue";
import InputCrud from "~/components/dashboard/input-crud.vue";
import {productCategoryValidation} from "~/validations/productCategoryValidation";
import Spinner from "~/components/dashboard/spinner.vue";
const productCategory = useProductCategoryStore()
const isLoading = ref(false)
const props = defineProps(['id', 'isLoading'])
const emit = defineEmits(['actionSuccess'])
const updateData = async (values) => {
  isLoading.value = true
  await productCategory.updateProductCategory(values, props.id)
  if (productCategory.isSuccess == true) {
    productCategory.isSuccess = false
    emit('actionSuccess')
  }
  isLoading.value = false
}
</script>

<template>
  <VeeForm v-if="props.isLoading == false" @submit="updateData" class="bg-white" :validation-schema="productCategoryValidation">
    <div class="grid grid-cols-1 gap-4" >
      <input-crud
          v-model="productCategory.productCategory.name"
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
  </VeeForm>
  <div class="flex justify-center" v-else>
    <spinner />
  </div>
</template>

<style scoped>

</style>