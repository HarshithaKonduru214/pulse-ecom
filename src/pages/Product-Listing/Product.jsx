import "./Product.css";
import "../../components/style.css"
import { Nav, Sidebar, VerticalCard, SocialMedia, Footer } from "../../components/index";


const Product = () => {
    return (
        <div>
            <Nav />
            <main className="main-content">
                <div className="sidebar flex-column p-2">
                    <Sidebar />
                </div>
                <div className="product-list flex-row p-2">
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