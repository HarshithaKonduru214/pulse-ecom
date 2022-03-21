import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Perfumes",
    img: "https://images-static.nykaa.com/media/catalog/product/8/0/8011003993802.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Deodorants",
    img: "https://images-static.nykaa.com/media/catalog/product/8/9/8904245713829_1_1.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Body Mists and Sprays",
    img: "https://images-static.nykaa.com/media/catalog/product/a/4/a4334ac8005610481005_2.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Women",
    img: "https://images-static.nykaa.com/media/catalog/product/a/4/a4334ac8005610481005_2.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Men",
    img: "https://images-static.nykaa.com/media/catalog/product/3/4/3414202000565_2.jpg"
  },
];
