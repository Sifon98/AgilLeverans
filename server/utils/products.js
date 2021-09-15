const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere, massa nec malesuada lacinia, tortor arcu feugiat mauris, eu pharetra diam enim nec erat. Integer iaculis magna lorem, mollis pulvinar est egestas egestas. Integer nunc lacus, eleifend sit amet sapien sit amet, malesuada ornare odio. Etiam condimentum leo lectus. Nam vestibulum nunc ligula, eget ullamcorper ligula porttitor id. Nulla eget augue a elit fringilla dictum. Curabitur efficitur est dui, nec tempor odio vestibulum nec. Nunc lacinia est ac efficitur eleifend. Nulla vel enim enim. Sed sodales velit vel augue dapibus placerat."


const tops = [
  {
    name: "hoodie",
    category: 0,
    gender: 0,
    price: 199,
    images: [
      "https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/product_images/attribute_rule_images/19648_zoom_1490232486.jpg",
      "https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/product_images/attribute_rule_images/17423_zoom_1490231902.jpg",
      "https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/product_images/attribute_rule_images/17381_zoom_1490215112.jpg",
      "https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/product_images/attribute_rule_images/17416_zoom_1490231660.jpg",
      "https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/product_images/attribute_rule_images/17405_zoom_1490231390.jpg",
      "https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/product_images/attribute_rule_images/17404_zoom_1490231368.jpg",
      "https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/product_images/attribute_rule_images/17424_zoom_1490231923.jpg",
      "https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/product_images/attribute_rule_images/17411_zoom_1490231542.jpg",
      "https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/product_images/attribute_rule_images/17415_zoom_1490231637.jpg",
      "https://cdn2.bigcommerce.com/n-biq04i/lk0gwzb/product_images/attribute_rule_images/17414_zoom_1490231609.jpg",
    ],
    description,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "White", hex: "#ffffff"},
      {name: "Gray", hex: "#958a7f"},
      {name: "Royal Blue", hex: "#20419a"}, 
      {name: "Navy", hex: "#171c32"},
      {name: "Beige", hex: "#f5f5dc"},
      {name: "Yellow", hex: "#fdeb71"},
      {name: "Green", hex: "#02642e"},
      {name: "Red", hex: "#821d2b"},
      {name: "Purple", hex: "#5e3a8c"},
    ]
    },
    {
    name: "slim fit polo shirt",
    category: 0,
    gender: 0,
    price: 2000,
    images: ["https://ean-images.booztcdn.com/wood-wood/232x303/g/wwd121353115232_cnavy.jpg"],
    description,
    sizes: ["S", "M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "White", hex: "#ffffff"},
      {name: "Royal Blue", hex: "#20419a"}, 
      {name: "Navy", hex: "#171c32"},
      {name: "Green", hex: "#02642e"},
    ]
    },
    {
    name: "big jacket",
    category: 0,
    gender: 0,
    price: 1000,
    images: ["https://ean-images.booztcdn.com/wood-wood/232x303/g/wwd121353115232_cnavy.jpg"],
    description,
    sizes: ["M", "L", "XL"],
    colors: [
      {name: "Black", hex: "#000000"},
    ]
    },
    {
    name: "oversized sweatshirt",
    category: 0,
    gender: 0,
    price: 100,
    images: ["https://ean-images.booztcdn.com/wood-wood/232x303/g/wwd121353115232_cnavy.jpg"],
    description,
    sizes: ["M", "L", "XL"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "White", hex: "#ffffff"},
      {name: "Gray", hex: "#958a7f"},
      {name: "Royal Blue", hex: "#20419a"}, 
      {name: "Navy", hex: "#171c32"},
      {name: "Green", hex: "#02642e"},
      {name: "Red", hex: "#821d2b"},
    ]
    },
    {
    name: "regular white t-shirt",
    category: 0,
    gender: 0,
    price: 50,
    images: ["https://ean-images.booztcdn.com/wood-wood/232x303/g/wwd121353115232_cnavy.jpg"],
    description,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {name: "White", hex: "#ffffff"},
    ]
    },

    {
      name: "hoodie",
      category: 0,
      gender: 1,
      price: 199,
      images: ["https://breadandboxers.se/pub_images/original/634-01_T-shirt_classic_white_3.jpg?extend=copy&width=2368&method=fit&height=2368&type=webp"],
      description,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
        {name: "Gray", hex: "#958a7f"},
        {name: "Royal Blue", hex: "#20419a"}, 
        {name: "Navy", hex: "#171c32"},
        {name: "Beige", hex: "#f5f5dc"},
        {name: "Yellow", hex: "#fdeb71"},
        {name: "Green", hex: "#02642e"},
        {name: "Red", hex: "#821d2b"},
        {name: "Purple", hex: "#5e3a8c"},
      ]
      },
      {
      name: "slim fit polo shirt",
      category: 0,
      gender: 1,
      price: 2000,
      images: ["https://breadandboxers.se/pub_images/original/634-01_T-shirt_classic_white_3.jpg?extend=copy&width=2368&method=fit&height=2368&type=webp"],
      description,
      sizes: ["S", "M", "L"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
        {name: "Royal Blue", hex: "#20419a"}, 
        {name: "Navy", hex: "#171c32"},
        {name: "Green", hex: "#02642e"},
      ]
      },
      {
      name: "big jacket",
      category: 0,
      gender: 1,
      price: 1000,
      images: ["https://breadandboxers.se/pub_images/original/634-01_T-shirt_classic_white_3.jpg?extend=copy&width=2368&method=fit&height=2368&type=webp"],
      description,
      sizes: ["M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
      ]
      },
      {
      name: "oversized sweatshirt",
      category: 0,
      gender: 1,
      price: 100,
      images: ["https://breadandboxers.se/pub_images/original/634-01_T-shirt_classic_white_3.jpg?extend=copy&width=2368&method=fit&height=2368&type=webp"],
      description,
      sizes: ["M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
        {name: "Gray", hex: "#958a7f"},
        {name: "Royal Blue", hex: "#20419a"}, 
        {name: "Navy", hex: "#171c32"},
        {name: "Green", hex: "#02642e"},
        {name: "Red", hex: "#821d2b"},
      ]
      },
      {
      name: "regular white t-shirt",
      category: 0,
      gender: 1,
      price: 50,
      images: ["https://breadandboxers.se/pub_images/original/634-01_T-shirt_classic_white_3.jpg?extend=copy&width=2368&method=fit&height=2368&type=webp"],
      description,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: [
        {name: "White", hex: "#ffffff"},
      ]
      },
]

const bottoms = [
  {
    name: "slim fit chinos",
    category: 1,
    gender: 0,
    price: 249,
    images: ["https://cdn.shopify.com/s/files/1/2530/3930/products/Relaxed_ChinosNavy_original_3.jpg?v=1560787112"],
    description,
    sizes: ["S", "M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Gray", hex: "#958a7f"},
      {name: "Navy", hex: "#171c32"},
      {name: "Beige", hex: "#f5f5dc"},
    ]
    },
    {
    name: "regular fit jeans",
    category: 1,
    gender: 0,
    price: 999,
    images: ["https://cdn.shopify.com/s/files/1/2530/3930/products/Relaxed_ChinosNavy_original_3.jpg?v=1560787112"],
    description,
    sizes: ["M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Gray", hex: "#958a7f"},
      {name: "Royal Blue", hex: "#20419a"}, 
    ]
    },
    {
    name: "skinny fit chinos",
    category: 1,
    gender: 0,
    price: 599,
    images: ["https://cdn.shopify.com/s/files/1/2530/3930/products/Relaxed_ChinosNavy_original_3.jpg?v=1560787112"],
    description,
    sizes: ["S", "M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Navy", hex: "#171c32"},
      {name: "Beige", hex: "#f5f5dc"},
    ]
    },
    {
    name: "long shorts",
    category: 1,
    gender: 0,
    price: 299,
    images: ["https://cdn.shopify.com/s/files/1/2530/3930/products/Relaxed_ChinosNavy_original_3.jpg?v=1560787112"],
    description,
    sizes: ["XL"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Green", hex: "#02642e"},
    ]
    },
    {
    name: "slim fit shorts",
    category: 1,
    gender: 0,
    price: 10,
    images: ["https://cdn.shopify.com/s/files/1/2530/3930/products/Relaxed_ChinosNavy_original_3.jpg?v=1560787112"],
    description,
    sizes: ["M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "White", hex: "#ffffff"},
      {name: "Gray", hex: "#958a7f"},
      {name: "Royal Blue", hex: "#20419a"}, 
      {name: "Navy", hex: "#171c32"},
      {name: "Green", hex: "#02642e"},
      {name: "Red", hex: "#821d2b"},
    ]
    },

    {
      name: "slim fit chinos",
      category: 1,
      gender: 1,
      price: 249,
      images: ["https://images.beautifulhalo.com/images/392x588/201905/L/womens-new-trendy-solid-color-tied-waist-wide-leg-suit-pants-trousers_1557599599510.jpg"],
      description,
      sizes: ["S", "M", "L"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "Gray", hex: "#958a7f"},
        {name: "Navy", hex: "#171c32"},
        {name: "Beige", hex: "#f5f5dc"},
      ]
      },
      {
      name: "regular fit jeans",
      category: 1,
      gender: 1,
      price: 999,
      images: ["https://images.beautifulhalo.com/images/392x588/201905/L/womens-new-trendy-solid-color-tied-waist-wide-leg-suit-pants-trousers_1557599599510.jpg"],
      description,
      sizes: ["M", "L"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "Gray", hex: "#958a7f"},
        {name: "Royal Blue", hex: "#20419a"}, 
      ]
      },
      {
      name: "skinny fit chinos",
      category: 1,
      gender: 1,
      price: 599,
      images: ["https://images.beautifulhalo.com/images/392x588/201905/L/womens-new-trendy-solid-color-tied-waist-wide-leg-suit-pants-trousers_1557599599510.jpg"],
      description,
      sizes: ["S", "M", "L"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "Navy", hex: "#171c32"},
        {name: "Beige", hex: "#f5f5dc"},
      ]
      },
      {
      name: "long shorts",
      category: 1,
      gender: 1,
      price: 299,
      images: ["https://images.beautifulhalo.com/images/392x588/201905/L/womens-new-trendy-solid-color-tied-waist-wide-leg-suit-pants-trousers_1557599599510.jpg"],
      description,
      sizes: ["XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "Green", hex: "#02642e"},
      ]
      },
      {
      name: "slim fit shorts",
      category: 1,
      gender: 1,
      price: 10,
      images: ["https://images.beautifulhalo.com/images/392x588/201905/L/womens-new-trendy-solid-color-tied-waist-wide-leg-suit-pants-trousers_1557599599510.jpg"],
      description,
      sizes: ["M", "L"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
        {name: "Gray", hex: "#958a7f"},
        {name: "Royal Blue", hex: "#20419a"}, 
        {name: "Navy", hex: "#171c32"},
        {name: "Green", hex: "#02642e"},
        {name: "Red", hex: "#821d2b"},
      ]
      },
]



const shoes = [
  {
    name: "flim fit shoes",
    category: 2,
    gender: 0,
    price: 199,
    images: ["https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg"],
    description,
    sizes: ["S", "M"],
    colors: [
      {name: "Black", hex: "#000000"},
    ]
    },
    {
    name: "soft slippers",
    category: 2,
    gender: 0,
    price: 2000,
    images: ["https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg"],
    description,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Green", hex: "#02642e"},
      {name: "Red", hex: "#821d2b"},
    ]
    },
    {
    name: "regular shoes",
    category: 2,
    gender: 0,
    price: 1000,
    images: ["https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg"],
    description,
    sizes: ["M", "L", "XL"],
    colors: [
      {name: "Black", hex: "#000000"},
    ]
    },
    {
    name: "big boots",
    category: 2,
    gender: 0,
    price: 100,
    images: ["https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg"],
    description,
    sizes: ["S", "M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
    ]
    },
    {
    name: "super premium crocs",
    category: 2,
    gender: 0,
    price: 50,
    images: ["https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg"],
    description,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "White", hex: "#ffffff"},
      {name: "Royal Blue", hex: "#20419a"}, 
      {name: "Yellow", hex: "#fdeb71"},
      {name: "Green", hex: "#02642e"},
      {name: "Red", hex: "#821d2b"},
      {name: "Purple", hex: "#5e3a8c"},
    ]
    },

    {
      name: "flim fit shoes",
      category: 2,
      gender: 1,
      price: 199,
      images: ["https://media.alissa.se/2020/12/420248-0004_01.jpeg"],
      description,
      sizes: ["S", "M"],
      colors: [
        {name: "Black", hex: "#000000"},
      ]
      },
      {
      name: "soft slippers",
      category: 2,
      gender: 1,
      price: 2000,
      images: ["https://media.alissa.se/2020/12/420248-0004_01.jpeg"],
      description,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "Green", hex: "#02642e"},
        {name: "Red", hex: "#821d2b"},
      ]
      },
      {
      name: "regular shoes",
      category: 2,
      gender: 1,
      price: 1000,
      images: ["https://media.alissa.se/2020/12/420248-0004_01.jpeg"],
      description,
      sizes: ["M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
      ]
      },
      {
      name: "big boots",
      category: 2,
      gender: 1,
      price: 100,
      images: ["https://media.alissa.se/2020/12/420248-0004_01.jpeg"],
      description,
      sizes: ["S", "M", "L"],
      colors: [
        {name: "Black", hex: "#000000"},
      ]
      },
      {
      name: "super premium crocs",
      category: 2,
      gender: 1,
      price: 50,
      images: ["https://media.alissa.se/2020/12/420248-0004_01.jpeg"],
      description,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
        {name: "Royal Blue", hex: "#20419a"}, 
        {name: "Yellow", hex: "#fdeb71"},
        {name: "Green", hex: "#02642e"},
        {name: "Red", hex: "#821d2b"},
        {name: "Purple", hex: "#5e3a8c"},
      ]
      },
]



module.exports.products = [
  ...tops,
  ...bottoms,
  ...shoes,
]