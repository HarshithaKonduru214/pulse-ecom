import { v4 as uuid } from "uuid";
import perfume from "../../images/perfume.jpg";
import deodorant from "../../images/deodorant.jpg";
import mists from "../../images/mists.jpg";
import men from "../../images/men.jpg";
import women from "../../images/women.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Perfumes",
    img: perfume,
  },
  {
    _id: uuid(),
    categoryName: "Deodorants",
    img: deodorant,
  },
  {
    _id: uuid(),
    categoryName: "Body Mists and Sprays",
    img: mists,
  },
  {
    _id: uuid(),
    categoryName: "Women",
    img: women,
  },
  {
    _id: uuid(),
    categoryName: "Men",
    img: men,
  },
];
