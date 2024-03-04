// contain the function to update and add to cart

export function compareAddtoCartAndUpdateCart(addToCart, updateCart){
    let finalCartProducts = [];
    if(Array.isArray(updateCart) && updateCart.length > 0){
        finalCartProducts = updateCart;
    }
    else if(Array.isArray(addToCart) && addToCart.length > 0){
        finalCartProducts = addToCart;
    }
    return finalCartProducts;
}
