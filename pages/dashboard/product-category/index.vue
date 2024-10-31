<script setup lang="ts">

import BaseButton from "~/components/dashboard/base-button.vue";
import Searchbar from "~/components/dashboard/Searchbar.vue";
import ProductCategoryTable from "~/components/dashboard/tables/product-category-table.vue";
import ProductCategoryModal from "~/components/dashboard/modals/product-category-modal.vue";
definePageMeta({
  layout: 'dashboard-layout',
  name: 'Product Category',
  middleware: 'auth',
})
const productCategory = useProductCategoryStore()
const toast = useToast()
const id = ref(0)
const modalAction = ref('')
const visibleModal = ref(false)
const keyword = ref('')
const isLoading = ref(true)
const getAll = async () => {
  isLoading.value = true
  productCategory.pages = currentPage.value
  try {
    productCategory.keyword = keyword.value
    await productCategory.getAllProductCategory()
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
currentPage.value = 1
const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success', detail: message.value, life: 3000 });
}
const getId = (theId:string) => {
  id.value = theId
}
await getAll()
const handleKeyword = (data:string) => {
  keyword.value = data
}
const viewModal =  (modalType:string) => {
  modalAction.value = modalType
  visibleModal.value = true
}
const modalSuccessAction = () => {
  visibleModal.value = false
  showSuccess()
}
</script>

<template>
  <div class="p-10 bg-white rounded-xl">
    <div class="flex gap-3 items-center">
      <Searchbar  @searchData="handleKeyword" :get-function="getAll"/>
      <base-button @click="viewModal('create')" custom-class="btn-primary flex gap-3 items-center">
        <i class="fa-regular fa-square-plus text-white"></i>
        <div class="w-max">
          Add New
        </div>
      </base-button>
    </div>
    <div class="mt-5">
      <product-category-table
          :get-data="getAll"
          :is-loading="isLoading"
          @get-id="getId"
          @view-delete="viewModal('delete')"
          @view-update="viewModal('update')"
          @view-detail="viewModal('detail')"
      />
    </div>
  </div>
  <product-category-modal v-model:visible="visibleModal" :modalAction="modalAction" @actionSuccess="modalSuccessAction" :id="id"/>
</template>
<style scoped>
</style>