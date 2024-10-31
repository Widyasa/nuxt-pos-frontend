import type {ProductCategory} from "~/types/productCategory";

export const useProductCategoryStore = defineStore('useProductCategoryStore', {
    state: () => ({
        productCategoryList : [] as ProductCategory[],
        productCategory : {} as ProductCategory,
        status_code : 0,
        pages : ref(1),
        keyword: ref(''),
        totalData : 0,
        isSuccess: ref(false)
    }),
    actions : {
        async getAllProductCategory() {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const data:any = await $fetch(config.public.apiUrl + `product-categories`, {
                    method: 'GET',
                    params : {
                        'page' : this.pages,
                        'search' : this.keyword,
                    },
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.productCategoryList = data.data[0].data
                this.totalData = data.data[0].total
            } catch (e) {
                console.error(e)
            }
        },
        async getProductCategoryById(id: number) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const {data}:any = await $fetch(config.public.apiUrl + `product-categories/${id}`, {
                    method: 'GET',
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.productCategory = data[0]
            } catch (e) {
                console.error(e)
            }
        },
        async createProductCategory(data: any) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + 'product-categories', {
                    method: 'POST',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.isSuccess = response.success
                message.value = response.message
                this.getAllProductCategory()
            } catch (e) {
                console.error(e)
            }
        },
        async updateProductCategory(data: any, id: number) {
            console.log(data)
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `product-categories/${id}`, {
                    method: 'patch',
                    body: data,
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.isSuccess = response.success
                message.value = response.message
                this.getAllProductCategory()
            } catch (e) {
                console.error(e)
            }
        },
        async deleteProductCategory(id: any) {
            const config = useRuntimeConfig()
            const auth = useAuthStore()
            try {
                const response:any = await $fetch(config.public.apiUrl + `product-categories/${id}`, {
                    method: 'delete',
                    headers: {'Authorization': `Bearer ${auth.loginOutput.data.data.token}`}
                })
                this.isSuccess = response.success
                message.value = response.message
                this.getAllProductCategory()
            } catch (e) {
                console.error(e)
            }
        }
    }

})