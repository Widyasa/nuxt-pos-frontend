<script setup lang="ts">


import SidebarNav from "~/components/dashboard/sidebar-nav.vue";
</script>

<template>
  <div class="bg-white min-h-screen h-full">
    <div class="px-8">
      <div class="pt-5 flex-col flex items-center">
        <div class="flex gap-3 items-center">
          <i class="fa-solid fa-cash-register text-5xl text-primary"></i>
          <h1 class="text-2xl font-semibold text-primary">Musang Cashier</h1>
        </div>
        <div class="mt-10 flex flex-col gap-4 self-start w-full">
            <sidebar-nav nav-route="/dashboard" nav-name="Dashboard">
              <i class="fa-solid fa-table-columns"></i>
            </sidebar-nav>
            <sidebar-nav nav-route="/dashboard/product-category" nav-name="Product Category">
              <i class="fa-solid fa-inbox"></i>
            </sidebar-nav>
            <sidebar-nav nav-route="/dashboard/product" nav-name="Products">
              <i class="fa-solid fa-inbox"></i>
            </sidebar-nav>
            <sidebar-nav nav-route="/dashboard/transaction" nav-name="Transaction">
              <i class="fa-solid fa-money-bill"></i>
            </sidebar-nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>