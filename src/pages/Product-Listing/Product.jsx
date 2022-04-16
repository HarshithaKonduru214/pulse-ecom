import "./Product.css";
import "../../components/style.css"
import { useEffect } from "react";
import axios from "axios"
import { Nav, Sidebar, VerticalCard, SocialMedia, Footer } from "../../components";
import { useProducts } from "../../Context/ProductContext";

const Product = () => {
    const { filterData } = useProducts();
    useEffect(() => {
        const { dispatch } = useProducts();
        (async () => {
            const { data: { products } } = await axios.get("/api/products");
            dispatch({type:"FETCH_DATA", payload: products})
        })();
    }, []);
    return (
        <div>
            <Nav />
            <main className="main-content">
                <div className="sidebar flex-column p-2">
                    <Sidebar />
                </div>
                <div className="product-list flex-row p-2">
                    { filterData && filterData.map(({ brand, category, desc, discount, gender, id, inStock, name, price, rating, _id, img, alt }) => {return (
                        <VerticalCard brand={brand} category={category} discount={discount} gender={gender} _id={_id} inStock={inStock} name={name} price={price} rating={rating} img={img} alt={alt} />
                    )})}
                </div>
            </main>
            <SocialMedia />
            <Footer />
        </div>
    )

    
}

export { Product }