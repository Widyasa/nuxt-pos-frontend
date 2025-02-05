<script setup lang="ts">
import BaseButton from "~/components/dashboard/base-button.vue";
import Searchbar from "~/components/dashboard/Searchbar.vue";
import ProductCategoryTable from "~/components/dashboard/tables/product-category-table.vue";
import Cart from "~/components/dashboard/transaction/cart.vue";
import ProductSelector from "~/components/dashboard/transaction/product-selector.vue";

definePageMeta({
  layout: 'dashboard-layout',
  name: 'Transaction',
  middleware: 'auth',
})
</script>

<template>
  <div class="p-8 bg-white rounded-xl">
    <div class="grid grid-cols-12 gap-10">
      <div class="col-span-3 border-r pr-4">
        <cart />
      </div>
      <div class="col-span-9">
        <product-selector />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>