const filterPrice = (products, priceFilter) => {
    return products.filter((product) => product.price <= priceFilter)
}

export { filterPrice }