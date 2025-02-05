<script setup lang="ts">
  import {useCartStore} from "~/stores/cart";
  import {rupiah} from "~/utils/moneyFormat";

  const cart = useCartStore()
  const increaseQuantity = (index:number) => {
    const item = cart.products[index];
    item.quantity++
    item.total_price = item.price * item.quantity;
  };

  const decreaseQuantity = (index:number) => {
    const item = cart.products[index];
    if (item.quantity > 1) {
      item.quantity--
      item.total_price = item.price * item.quantity
    }
  };
</script>

<template>
  <div v-for="(item, index) in cart.products">
    <div class="flex justify-between items-center">
      <p>{{item.productName}}</p>
      <div class="flex gap-2 items-center">
        <button @click="decreaseQuantity(index)" class="size-6 rounded-full flex items-center justify-center btn-primary">-</button>
        <p>{{item.quantity}}</p>
        <button @click="increaseQuantity(index)" class="size-6 rounded-full flex items-center justify-center btn-primary">+</button>
      </div>
      <p>{{rupiah.format(item.total_price)}}</p>
      <button @click="cart.deleteProductFromCart(index)" class="text-red-500 text-xl">x</button>
    </div>
  </div>
</template>

<style scoped>

</style>