export interface Product {
    id: number
    name: string
    code: string
    price: number
    stock: number
    product_category_id: number
    product_category : {
        name: string
    }
}