import type {Product} from "~/types/product";

export const useProductStore = defineStore('useProductStore', {
    state: () => ({
        productList : [] as Product[],
        product : {} as Product,
        status_code : 0,
        pages : ref(1),
        keyword: ref(''),
        totalData : 0,
        isSuccess: ref(false)
    }),
    actions : {
        async getAllProduct() {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const data:any = await $fetch(config.public.apiUrl + `products`, {
                    method: 'GET',
                    params : {
                        'page' : this.pages,
                        'search' : this.keyword,
                    },
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.productList = data.data[0].data
                this.totalData = data.data[0].total
            } catch (e) {
                console.error(e)
            }
        },
        async getProductById(id: number) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const {data}:any = await $fetch(config.public.apiUrl + `products/${id}`, {
                    method: 'GET',
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.product = data[0]
            } catch (e) {
                console.error(e)
            }
        },
        async createProduct(data: any) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + 'products', {
                    method: 'POST',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.isSuccess = response.success
                message.value = response.message
                this.getAllProduct()
            } catch (e) {
                console.error(e)
            }
        },
        async updateProduct(data: any, id: number) {
            console.log(data)
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `products/${id}`, {
                    method: 'patch',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.isSuccess = response.success
                message.value = response.message
                this.getAllProduct()
            } catch (e) {
                console.error(e)
            }
        },
        async deleteProduct(id: any) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `products/${id}`, {
                    method: 'delete',
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.isSuccess = response.success
                message.value = response.message
                this.getAllProduct()
            } catch (e) {
                console.error(e)
            }
        }
    }

})