
const sortData = (products, sortBy) => {
    switch(sortBy) {
        case "HIGH_TO_LOW": return products.sort((a,b) => (b.price - (b.discount*b.price/100)) - (a.price - (a.discount*a.price/100)));
        case "LOW_TO_HIGH": return products.sort((a,b) => (a.price - (a.discount*a.price/100)) - (b.price - (b.discount*b.price/100)));
        case "DISCOUNT": return products.sort((a,b) => b.discount - a.discount)
        default: return products;
    }
}

export { sortData };