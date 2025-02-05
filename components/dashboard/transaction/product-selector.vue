<script setup lang="ts">
  import {useCartStore} from "~/stores/cart";

  const product = useProductStore()
  const cart = useCartStore()
  await product.getAllProduct()
  const checkProduct = (id:number) => {
    return cart.products.find((item:any) => item.product_id === id)
  }
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <div class="rounded border p-4" v-for="(item, index) in product.productList" :key="index">
      <h2 class="font-semibold text-lg capitalize">{{item.name}}</h2>
      <div class="flex justify-between items-end">
        <p class="mt-1 text-2xl font-semibold">{{rupiah.format(item.price)}}</p>
        <button @click="cart.addProductToCart(item.id, 1, item.price, item.name);" :disabled="!!checkProduct(item.id)" class="btn btn-primary">
          {{checkProduct(item.id) ? 'Added' : 'Add to Cart'}}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>