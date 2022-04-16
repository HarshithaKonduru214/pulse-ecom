import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { brands } from "../data"
import axios from "axios";
import "./style.css";
import { useProducts } from "../Context/ProductContext";

export const ShopBy = () => {
	const [categoryList, setCategorList] = useState([]);
    const price = [2000, 4000, 6000, 8000];
    const { dispatch } = useProducts();
    const navigate = useNavigate()
	useEffect(() => {
		(async () => {
			try {
				const {
					data: { categories },
				} = await axios.get("/api/categories");
				setCategorList(categories);
			} catch (error) {
				console.log("Cannot fetch categories");
			}
		})();
	}, []);

	return (
        <div>
            <div className="category flex-column m-2">
                <div className="heading align-self-center mb-1">SHOP BY CATEGORY</div>
                <div className="category-container flex-row gap mr-1 justify-content-even">
                    { 
				    	categoryList &&
				    	categoryList.map(({_id, categoryName, img, id}, index) => (
                        <Link to="/product-listing" key={ id } className="category-item flex-column no-style-link">
                            <img className="image-res" src={ img } alt="category" />
                            <div className="category-content mt-1 gray-text">{ categoryName }</div>
                        </Link>		))
				    }
                </div>
            </div>
            
            <div className="brand flex-column m-2">
            <div className="heading align-self-center">SHOP BY BRANDS</div>
                <div className="brand-container flex-row gap p-2 justify-content-even">
                { brands.map((brand) => {
                    return (
                        <div className="brand-item flex-row" key={ brand } onClick={() => {
                            navigate("/product-listing")
                            dispatch({type:"RESET", payload:"reset"})
                            dispatch({type:"FILTER_BY_BRAND", payload: brand})}}>
                            <div className="brand-content">{ brand.toUpperCase() }</div>
                        </div>
                    )
                })}
                </div>
				
		    </div>

            <div className="price flex-column gap p-2 m-2">
                <div className="heading align-self-center">SHOP BY PRICE</div>
                <div className="price-item-container flex-row gap justify-content-even">
                    { price.map((p) => {
                        return (
                            <div className="price-item flex-row" key={p} onClick={() => {
                                navigate("/product-listing")
                                dispatch({type:"RESET", payload:"reset"})
                                dispatch({type:"FILTER_BY_PRICE", payload: p})} }>
                                <div className="price-content">Under ₹{p}</div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>

		
	);
};