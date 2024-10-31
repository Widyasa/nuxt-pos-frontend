<script setup lang="ts">
import {productCategoryValidation} from "~/validations/productCategoryValidation";
import Spinner from "~/components/dashboard/spinner.vue";
import InputCrud from "~/components/dashboard/input-crud.vue";
const productCategory = useProductCategoryStore()
const props = defineProps(['isLoading'])
</script>

<template>
  <VeeForm v-if="props.isLoading == false" class="bg-white" :validation-schema="productCategoryValidation">
    <div class="grid grid-cols-1 gap-4" >
      <input-crud
          read-only
          v-model="productCategory.productCategory.name"
          input-type="text"
          input-title="Car Type"
          input-name="name"
          input-placeholder="input car type..."
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