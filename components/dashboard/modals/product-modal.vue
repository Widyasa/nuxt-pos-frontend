<script setup lang="ts">

import CreateProductForm from "~/components/dashboard/forms/product/create-product-form.vue";
import DetailProductForm from "~/components/dashboard/forms/product/detail-product-form.vue";
import UpdateProductForm from "~/components/dashboard/forms/product/update-product-form.vue";
import DeleteProductForm from "~/components/dashboard/forms/product/delete-product-form.vue";
const productCategory = useProductCategoryStore()
const product = useProductStore()
const emit = defineEmits(['actionSuccess'])
const props = defineProps(['modalAction', 'id'])
const processLoad = ref(true)
watch(() => props.id, async (newValue, oldValue) => {
  if (newValue) {
    processLoad.value = true
    await product.getProductById(props.id);
    processLoad.value = false
  }
})
await productCategory.getAllProductCategory()
</script>

<template>
    <Dialog modal :header=" props.modalAction + ' Product'" class="w-[600px] capitalize" :draggable=false>
      <div v-if="modalAction == 'create'">
        <create-product-form @actionSuccess="emit('action-success')" />
      </div>
      <div v-if="modalAction == 'detail'">
        <detail-product-form :is-loading="processLoad"/>
      </div>
      <div v-if="modalAction == 'update'">
        <update-product-form @actionSuccess="emit('action-success')" :id="id" :is-loading="processLoad"/>
      </div>
      <div v-if="modalAction == 'delete'">
        <delete-product-form @actionSuccess="emit('action-success')" :id="id"/>
      </div>
    </Dialog>
</template>

<style scoped>

</style>