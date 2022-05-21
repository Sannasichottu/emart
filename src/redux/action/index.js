//For Add Item to Cart
export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload : product
    }
}

//For Delete Item from Cart
export const delItem = (product) => {
    return {
        type: "DELITEM",
        payload : product
    }
}