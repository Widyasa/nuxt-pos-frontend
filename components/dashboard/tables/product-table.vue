<script setup lang="ts">

import Spinner from "~/components/dashboard/spinner.vue";
import TableComponent from "~/components/dashboard/table-component.vue";
const product = useProductStore()
const props = defineProps(['isLoading', 'getData'])
const emit = defineEmits(['getId', 'viewDetail', 'viewUpdate', 'viewDelete', ])
const thead = ['code', 'name', 'price per item', 'stock', 'action']
</script>

<template>

  <div class="mt-5">
    <table-component :table-head="thead" :total-items="product.totalData" @getData="props.getData">
      <tr v-if="props.isLoading">
        <td colspan="6" class="text-center">
          <spinner class="flex justify-center w-full translate-x-[50%]" />
        </td>
      </tr>
      <tr v-if="product.productList.length > 0 && !props.isLoading" v-for="(item, index) in product.productList" :key="index">
        <td class="pl-4">{{ item.code }}</td>
        <td class="">{{ item.name }}</td>
        <td class="">{{ rupiah.format(item.price) }}</td>
        <td class="">{{ item.stock }}</td>
        <td class="flex gap-3">
          <button @click="emit('viewDetail'); emit('getId', item.id)" class="bg-[#547DE2] bg-opacity-20 w-8 h-8 flex justify-center items-center rounded">
            <i class="fa-regular fa-eye text-[#547DE2]"></i>
          </button>
          <button @click="emit('viewUpdate'); emit('getId', item.id)"  class="bg-[#F6C46A] bg-opacity-20 w-8 h-8 flex justify-center items-center rounded">
            <i class="fa-regular fa-pen-to-square text-[#F6C46A]"></i>
          </button>
          <button  @click="emit('viewDelete'); emit('getId', item.id)" class="bg-red-500 bg-opacity-20 w-8 h-8 flex justify-center items-center rounded">
            <i class="fa-solid fa-trash text-red-500"></i>
          </button>
        </td>
      </tr>
      <tr v-if="!props.isLoading && product.productList.length <= 0">
        <td colspan="6">
          <div class="text-center w-full">DATA EMPTY</div>
        </td>
      </tr>
    </table-component>
  </div>
</template>

<style scoped>

</style>