import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { brands } from "../data"
import axios from "axios";
import "./style.css";

export const ShopBy = () => {
	const [categoryList, setCategorList] = useState([]);
    const price = [1000, 2000, 3000, 4000];
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
                        <Link to="" key={ id } className="category-item flex-column no-style-link">
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
                        <div className="brand-item flex-row">
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
                            <div className="price-item flex-row">
                                <div className="price-content">Under ₹{p}</div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>

		
	);
};