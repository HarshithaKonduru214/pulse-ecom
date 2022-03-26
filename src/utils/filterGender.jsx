const filterGender = (data, gender) => {
    switch(gender) {
        case "female": return data.filter((product) => product.gender === "women");
        case "male": return data.filter((product) => product.gender === "men");
        case "unisex": return data.filter((product) => product.gender === "unisex");
        default: return data;
    }
}

export { filterGender }