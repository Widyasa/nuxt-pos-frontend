import * as yup from "yup";

export const productCategoryValidation = yup.object().shape({
    name: yup.string().required()
})