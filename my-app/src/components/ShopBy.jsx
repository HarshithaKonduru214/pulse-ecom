import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";


const ShopBy = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const shopByCategory = async () => {
            try {
                const response = await axios.get("/api/categories");
                setData([...data, response.data.categories])
            } catch(err) {
                console.log("Data not fetched")
            }
        }
        shopByCategory();
    },[])
    return (
        <div>
            { data.map((d) => <div>{d.categoryName}</div>)}
        </div>
        
    );
}

export { ShopBy };