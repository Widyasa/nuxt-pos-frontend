<script setup lang="ts">
import BaseButton from "~/components/dashboard/base-button.vue";
import DeleteText from "~/components/dashboard/delete-text.vue";

const productCategory = useProductCategoryStore()
const emit = defineEmits(['actionSuccess'])
const props = defineProps(['id'])
const deleteData = async () => {
  await productCategory.deleteProductCategory(props.id);
  emit('actionSuccess')
}
</script>

<template>
  <delete-text module="product category" />
  <div class="flex justify-end gap-2 w-full mt-3">
    <base-button custom-class="btn-primary"  @click="deleteData">Delete Product Category</base-button>
  </div>
</template>

<style scoped>

</style>