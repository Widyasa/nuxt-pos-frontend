import type {CartProduct} from "~/types/Cart";

export const useCartStore = defineStore('useCartStore', {
    state: () => ({
        products: [] as CartProduct[],
        total_payment: 0 as Number,
        total_exchange: 0 as Number,
        total_price: 0 as Number
    }),
    actions: {
        addProductToCart(productId: number, quantity = 1, price: number, productName:string) {
            try {
                this.products.push({
                    product_id: productId,
                    quantity: quantity,
                    price: price,
                    total_price: price,
                    productName: productName
                })
            } catch (e) {
                console.error(e)
            }
        },
        deleteProductFromCart(index:number) {
            try {
                this.products.splice(index, 1)
            } catch (e) {
                console.error(e)
            }
        }
    }
})