import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name:"DIOR Sauvage Eau De Parfum",
    desc: "Francois Demachy, Dior Perfumer-Creator, drew inspiration from the desert at the magical twilight hour. Mixed with the coolness of the night, the burning desert air exudes profound scents. A moment tinted with a thick blue that unleashes the wildest instincts. At the hour when the wolves come out and the sky is set ablaze, a new magic unfolds.",
    brand: "dior",
    img: "https://images-static.nykaa.com/media/catalog/product/4/c/4c9fe6b3348901368254_a.jpg",
    alt: "perfume-image",
    price: 7600,
    rating: 4.6,
    inStock: true,
    discount: Math.floor(Math.random() * 30),
    category: "perfumes",
    gender: "unisex"
  },
  {
    _id: uuid(),
    name:"Davidoff Cool Water Eau De Toilette",
    desc: "The quintessential ocean fragrance, for men who forge their masculinity on the waves of action. Davidoff Cool Water has the power to refresh and invigorate. This iconic masculine scent with Mossy Woods notes has a crisp edge and features fresh citrus notes and a woody dry down. While top notes evoke the intense freshness of peppermint and lavender, the spicy coriander, jasmine, oakmoss and geranium form the heart. The warm and sensual flow of amber and musk are at the base. The Cool Water man enjoys a life of exhilaration, invigoration, and pure refreshment!",
    brand: "davidoff",
    img: "https://images-static.nykaa.com/media/catalog/product/3/4/3414202000565_2.jpg",
    alt: "perfume-image",
    price: 3600,
    rating: 4.4,
    inStock: true,
    discount: Math.floor(Math.random() * 30),
    category: "perfumes",
    gender: "men"
  },
  {
    _id: uuid(),
    name:"Versace Bright Crystal Eau De Toilette",
    desc: "An enthralling and voluptuous fragrance, for the Versace woman who is strong and confident yet feminine, sensual, and always glamorous, who loves to be enveloped in a fragrance that delicately tastes of colorful and juicy pomegranate grains, iced freshness, and shining yuzu. A scent that then flows into the beauty of magnolia, peony, and lotus flowers in a mixture of voluptuousness and transparency, and delights you with its subtle sensuality and the enticing presence of plant amber, acajou and musk. It's packaging, a dress as sumptuous as it is elegant, in a very tender pink with silver hints, recalls the floral freshness of Versace Bright Crystal.",
    brand: "versace",
    img: "https://images-static.nykaa.com/media/catalog/product/8/0/8011003993802.jpg",
    alt: "perfume-image",
    price: 3400,
    rating: 4.4,
    inStock: true,
    discount: Math.floor(Math.random() * 30),
    category: "perfumes",
    gender: "women"
  },
  {
    _id: uuid(),
    name:"Calvin Klein CK One",
    desc: "This unique Calvin Klein unisex fragrance is for all those who devout a clean and contemporary scent. Lovers of green tea will treasure this timely creation that comes undulated with notes of mandarin orange, bergamot, cardamom, violet and the Orris root. Layered in further are notes of jasmine, lily-of-the-valley, amber, must, cedar and oakmoss.",
    brand: "calvin klien",
    img: "https://images-static.nykaa.com/media/catalog/product/6/5/65107430000_1.jpg",
    alt: "perfume-image",
    price: 3600,
    rating: 4.3,
    inStock: true,
    discount: Math.floor(Math.random() * 30),
    category: "perfumes",
    gender: "women"
  },
  {
    _id: uuid(),
    name:"Gucci Bloom Eau De Parfum For Her",
    desc: "Debuting the first fragrance developed wholly under Alessandro Michele’s creative vision: a scent designed to celebrate the authenticity, vitality and diversity of women—flourishing in a natural, expressive and individual way. Blended by master perfumer Alberto Morillas under the direction of the House’s Creative Director, Gucci Bloom is created to unfold like its name, capturing the rich scent of a thriving garden filled with an abundance of flowers. Tuberose and jasmine combine with rangoon creeper—a unique flower discovered in south India that is being used for the first time in perfumery to create a rich fragrance that transports the wearer to an imaginary garden.",
    brand: "gucci",
    img: "https://images-static.nykaa.com/media/catalog/product/a/4/a4334ac8005610481005_2.jpg",
    alt: "perfume-image",
    price: 9900,
    rating: 4.5,
    inStock: true,
    discount: Math.floor(Math.random() * 30),
    category: "perfumes",
    gender: "women"
  },
  {
    _id: uuid(),
    name:"NIVEA Pearl & Beauty Deodorant",
    desc: "When you think of your favourite travel escapade what comes to mind? Perhaps exquisite food, flowers, fragrances that have stayed with you long after you have returned from those unforgettable journeys. To take you back to that time and place we have bottled up those travel experiences in our Nykaa Wanderlust Bath & Body Range. Let's unleash some memories and travel the globe together.",
    brand: "nivea",
    img: "https://images-static.nykaa.com/media/catalog/product/e/f/ef02fec42333005_1.jpg",
    alt: "deo-image",
    price: 279,
    rating: 4.2,
    inStock: true,
    discount: Math.floor(Math.random() * 30),
    category: "deodorant",
    gender: "women"
  },
  {
    _id: uuid(),
    name:"Engage Drizzle Deodorant",
    desc: "Engage presents a range of fresh and irresistible fragrances that keep the chemistry between him and her sizzling for 24 hours. Engage Drizzle is a rich lavender fragrance for a modern woman. Its fresh aromatic top notes bring memories of the luxury and comfort reminiscent of a spa, ?making a strong statement for the contemporary woman.",
    brand: "engage",
    img: "https://images-static.nykaa.com/media/catalog/product/a/0/a01db45pendo0010new1.jpg",
    alt: "deo-image",
    price: 210,
    rating: 4.5,
    inStock: false,
    discount: Math.floor(Math.random() * 100),
    category: "deodorant",
    gender: "women"
  },
  {
    _id: uuid(),
    name:"Park Avenue Original Deo",
    desc: "There is a special joy in bringing alive every day and every minute.",
    brand: "engage",
    img: "https://images-static.nykaa.com/media/catalog/product/8/3/83fb1408901277007087apr.jpg",
    alt: "deo-image",
    price: 199,
    rating: 4.4,
    inStock: false,
    discount: Math.floor(Math.random() * 100),
    category: "deodorant",
    gender: "men"
  },
  {
    _id: uuid(),
    name:"Nykaa Wanderlust Fragrance",
    desc: "Nykaa Wanderlust Bath & Body Collection, bottles up all your travel experiences with fragrances that still linger at the back of you head. Lets revisit those lands and fill your heart with memories with our floral fragrances and treat your skin to the comfort and well-being it deserves!",
    brand: "nykaa",
    img: "https://images-static.nykaa.com/media/catalog/product/8/9/8904245706586_1_2.jpg",
    alt: "mist-image",
    price: 500,
    rating: 4.1,
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    category: "deodorant",
    gender: "women"
  },
  {
    _id: uuid(),
    name:"Plum BodyLovin' Vanilla Vibes",
    desc: "",
    brand: "plum",
    img: "https://images-static.nykaa.com/media/catalog/product/9/8/98671448906118410682_1.jpg",
    alt: "mist-image",
    price: 9900,
    rating: 4.5,
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    category: "mist",
    gender: "women"
  },
];
