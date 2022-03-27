const filteredBrands = (products, newData) => {
    return products.filter(({brand}) => {
        return Object.keys(newData).some((brand) => newData[brand])
            ? newData[brand]
            : true;
    })
}

export { filteredBrands }