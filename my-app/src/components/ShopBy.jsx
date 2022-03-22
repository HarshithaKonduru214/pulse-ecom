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
            <div class="category flex-column m-2">
                <div class="heading align-self-center mb-1">SHOP BY CATEGORY</div>
                <div class="category-container flex-row gap mr-1 justify-content-even">
                    { 
				    	categoryList &&
				    	categoryList.map(({_id, categoryName, img, id}, index) => (
                        <Link to="" key={ id } class="category-item flex-column no-style-link">
                            <img class="image-res" src={ img } alt="category" />
                            <div class="category-content mt-1 gray-text">{ categoryName }</div>
                        </Link>		))
				    }
                </div>
            </div>
            
            <div class="brand flex-column m-2">
            <div class="heading align-self-center">SHOP BY BRANDS</div>
                <div class="brand-container flex-row gap p-2 justify-content-even">
                { brands.map((brand) => {
                    return (
                        <div class="brand-item flex-row">
                            <div class="brand-content">{ brand.toUpperCase() }</div>
                        </div>
                    )
                })}
                </div>
				
		    </div>

            <div class="price flex-column gap p-2 m-2">
                <div class="heading align-self-center">SHOP BY PRICE</div>
                <div class="price-item-container flex-row gap justify-content-even">
                    { price.map((p) => {
                        return (
                            <div class="price-item flex-row">
                                <div class="price-content">Under ₹{p}</div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>

		
	);
};