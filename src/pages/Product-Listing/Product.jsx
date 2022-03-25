import "./Product.css";
import "../../components/style.css"
import { Nav, Sidebar, VerticalCard, SocialMedia, Footer } from "../../components/index";
import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        (async () => {
            const { data : { products }} = await axios.get("/api/products");
            setProductList(products)
        })();
    },[])
    return (
        <div>
            <Nav />
            <main class="main-content">
                <div class="sidebar flex-column p-2">
                    <Sidebar />
                </div>
                <div class="product-list flex-row p-2">
                    { productList.map(({ brand, category, desc, discount, gender, id, inStock, name, price, rating, _id, img, alt }) => {return (
                        <VerticalCard brand={brand} category={category} discount={discount} gender={gender} key={_id} inStock={inStock} name={name} price={price} rating={rating} img={img} alt={alt} />
                    )})}
                </div>
            </main>
            <SocialMedia />
            <Footer />
        </div>
    )
}

export { Product }