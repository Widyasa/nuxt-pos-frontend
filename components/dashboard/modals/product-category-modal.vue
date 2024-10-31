<script setup lang="ts">

import CreateProductCategoryForm from "~/components/dashboard/forms/product-category/create-product-category-form.vue";
import DetailProductCategoryForm from "~/components/dashboard/forms/product-category/detail-product-category-form.vue";
import UpdateProductCategoryForm from "~/components/dashboard/forms/product-category/update-product-category-form.vue";
import DeleteProductCategoryForm from "~/components/dashboard/forms/product-category/delete-product-category-form.vue";

const productCategory = useProductCategoryStore()
const emit = defineEmits(['actionSuccess'])
const props = defineProps(['modalAction', 'id'])
const processLoad = ref(true)
watch(() => props.id, async (newValue, oldValue) => {
  if (newValue) {
    processLoad.value = true
    await productCategory.getProductCategoryById(props.id);
    processLoad.value = false
  }
})
</script>

<template>
  <Dialog modal :header=" props.modalAction + ' Product Category'" class="w-[600px] capitalize" :draggable=false>
    <div v-if="modalAction == 'create'">
      <create-product-category-form @actionSuccess="emit('action-success')" />
    </div>
    <div v-if="modalAction == 'detail'">
      <detail-product-category-form :is-loading="processLoad"/>
    </div>
    <div v-if="modalAction == 'update'">
      <update-product-category-form @actionSuccess="emit('action-success')" :id="id" :is-loading="processLoad"/>
    </div>
    <div v-if="modalAction == 'delete'">
      <delete-product-category-form @actionSuccess="emit('action-success')" :id="id"/>
    </div>
  </Dialog>
</template>

<style scoped>

</style>