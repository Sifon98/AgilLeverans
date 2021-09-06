const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere, massa nec malesuada lacinia, tortor arcu feugiat mauris, eu pharetra diam enim nec erat. Integer iaculis magna lorem, mollis pulvinar est egestas egestas. Integer nunc lacus, eleifend sit amet sapien sit amet, malesuada ornare odio. Etiam condimentum leo lectus. Nam vestibulum nunc ligula, eget ullamcorper ligula porttitor id. Nulla eget augue a elit fringilla dictum. Curabitur efficitur est dui, nec tempor odio vestibulum nec. Nunc lacinia est ac efficitur eleifend. Nulla vel enim enim. Sed sodales velit vel augue dapibus placerat."


const tops = [
  {
    name: "hoodie",
    category: 0,
    price: 199,
    image: "https://ean-images.booztcdn.com/wood-wood/232x303/g/wwd121353115232_cnavy.jpg",
    description,
    },
    {
    name: "slim fit polo shirt",
    category: 0,
    price: 2000,
    image: "https://ean-images.booztcdn.com/wood-wood/232x303/g/wwd121353115232_cnavy.jpg",
    description,
    },
    {
    name: "big jacket",
    category: 0,
    price: 1000,
    image: "https://ean-images.booztcdn.com/wood-wood/232x303/g/wwd121353115232_cnavy.jpg",
    description,
    },
    {
    name: "oversized sweatshirt",
    category: 0,
    price: 100,
    image: "https://ean-images.booztcdn.com/wood-wood/232x303/g/wwd121353115232_cnavy.jpg",
    description,
    },
    {
    name: "regular white t-shirt",
    category: 0,
    price: 50,
    image: "https://ean-images.booztcdn.com/wood-wood/232x303/g/wwd121353115232_cnavy.jpg",
    description,
    },
]

const bottoms = [
  {
    name: "slim fit chinos",
    category: 1,
    price: 249,
    image: "https://cdn.shopify.com/s/files/1/2530/3930/products/Relaxed_ChinosNavy_original_3.jpg?v=1560787112",
    description,
    },
    {
    name: "regular fit jeans",
    category: 1,
    price: 999,
    image: "https://cdn.shopify.com/s/files/1/2530/3930/products/Relaxed_ChinosNavy_original_3.jpg?v=1560787112",
    description,
    },
    {
    name: "skinny fit chinos",
    category: 1,
    price: 599,
    image: "https://cdn.shopify.com/s/files/1/2530/3930/products/Relaxed_ChinosNavy_original_3.jpg?v=1560787112",
    description,
    },
    {
    name: "long shorts",
    category: 1,
    price: 299,
    image: "https://cdn.shopify.com/s/files/1/2530/3930/products/Relaxed_ChinosNavy_original_3.jpg?v=1560787112",
    description,
    },
    {
    name: "slim fit shorts",
    category: 1,
    price: 10,
    image: "https://cdn.shopify.com/s/files/1/2530/3930/products/Relaxed_ChinosNavy_original_3.jpg?v=1560787112",
    description,
    },
]



const shoes = [
  {
    name: "flim fit shoes",
    category: 2,
    price: 199,
    image: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    description,
    },
    {
    name: "soft slippers",
    category: 2,
    price: 2000,
    image: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    description,
    },
    {
    name: "regular shoes",
    category: 2,
    price: 1000,
    image: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    description,
    },
    {
    name: "big boots",
    category: 2,
    price: 100,
    image: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    description,
    },
    {
    name: "super premium crocs",
    category: 2,
    price: 50,
    image: "https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    description,
    },
]


module.exports.products = [
  ...tops,
  ...bottoms,
  ...shoes,
]




