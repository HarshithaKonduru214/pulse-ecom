const filterInStock = (products, inStock) => {
    if(inStock) {
        return products.filter(({inStock}) => inStock)
    } else return products
}

export { filterInStock }