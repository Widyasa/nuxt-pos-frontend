import * as yup from "yup";

export const productValidation = yup.object().shape({
    name: yup.string().required(),
    product_category_id: yup.string().required('Product Category is Required'),
    price: yup.number().required().moreThan(0),
    stock: yup.number().required().moreThan(0),
})