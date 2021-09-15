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
    name: "NMD R1 primeblue sneakers",
      category: 2,
      gender: 0,
      price: 139.00,
      images: [
        "https://img01.ztat.net/article/spp-media-p1/b26827568a234187b7e182c1c87466de/fe507c79501643d0aae96fbbc15d358e.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/f4a80a45f47b4d21b4d137c8281be703/7b5ffb52b7374efa921d1b05556093c8.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/a92d2545ab0247478ac2aee9d6f128d9/1c967c073bc144f09e0b3443357dc81d.jpg?imwidth=1800&filter=packshot"
      ],
      description: "Pack your bag, lace up your shoes and go out. The city adventure calls when you have these NMD_R1 shoes on your feet. These modern sneakers are an update of an acclaimed 80s running shoe from the adidas archive, with a soft and stretchy knitted upper and energy-reproducing Boost cushioning for comfort throughout the day. The strong colors and distinctive plugs in the midsole work as a statement and maximize the style level wherever you go.",
      sizes: ["S", "M"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
        {name: "Red", hex: "#821d2b"},
    ]
    },
    {
    name: "Loafers",
    category: 2,
    gender: 0,
    price: 17.90,
    images: [
      "https://img01.ztat.net/article/spp-media-p1/72ba635d3de448e8810fabebe1112236/d537e1ff27c44c0e94d28d174648cd77.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/b610b26084864068a80e7b1ac55d7a03/79bbb5f233b845ab8f7e0aa5d09eaa0e.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/de6f1a0d11014439b16d2be02a3aa9a1/72f579dcea894a34aca5df0a2db147bf.jpg?imwidth=1800&filter=packshot"
    ],
    description: "Slip-on med ovandel i mjuk och följsam mörkblå canvas. Innersulan är i skinn med memoryfoam och hålfotsstöd för bästa komfort. Skons foder är i slitstark textil, vadderad tunga och runt insteg för bra komfort. Sobert loggad, och med fina detaljer. Mjuk yttersula i gummi för bra slitstyrka.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "White", hex: "#ffffff"},
      {name: "Navy", hex: "#171c32"},
    ]
    },
    {
    name: "Vans",
    category: 2,
    gender: 0,
    price: 99.00,
    images: [
      "https://img01.ztat.net/article/spp-media-p1/78c03b3b9d584dc9864517f8a9cb0706/bf1d30d38ab94ae2bf13ec8046ef8e57.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/de1954590b4248d9a8aea7fb7d69a4b9/119c9fdfd942487f8cb37265c16f73cf.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/850c878a8282429abe94af75b5d1bdd8/c443c946d4154887b2258fe352d05c2c.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/c3801844838448fea72c69c9088e4ca6/33a30432f2fd474a9cc9aefe57b77463.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/328ac7292b4b4a6e8d429517cffd8b54/2444be9a5d404cc8bdf684808473e256.jpg?imwidth=1800&filter=packshot"
    ],
    description: "The first to bear the iconic side stripe, the Vans Old Skool is a low top, lace-up shoe. It is lined, has padded collars for support and flexibility, re-enforced toecaps to withstand repeated wear, and features the Vans signature waffle outsole for a firmer grip.",
    sizes: ["M", "L", "XL"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Yellow", hex: "#fdeb71"},
      {name: "Green", hex: "#02642e"},
      {name: "Red", hex: "#821d2b"},
      {name: "Purple", hex: "#5e3a8c"},
    ]
    },
    {
    name: "Boots",
    category: 2,
    gender: 0,
    price: 209.00,
    images: [
      "https://img01.ztat.net/article/spp-media-p1/3d720db3de56370f97a25d40da3079c9/127a6c1aa3744fa4a7748953425cd996.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/20a93df5e9a64670acf906a8d009b0e0/90686a0db10d4c5a8ebf7be692a09c39.jpg?imwidth=1800&filter=packshot"
    ],
    description: `All-weather, waterproof 6-inch boots with Gripstick™ rubber outsoles for traction and SensorFlex™ technology for support and comfort. Plus, they're made with materials that respect the planet as much as you do, including responsibly-sourced Better Leather and ReBOTL™ fabric made from recycled plastic bottles. Made with premium nubuck Better Leather from a sustainable tannery rated Silver for its water, energy, and waste management practices. Durable ReBOTL™ fabric lining made with at least 50% recycled plastic. Waterproof seam-sealed construction. Padded collar for a comfortable fit. Durable 100% nylon laces. SensorFlex™ three-layer system offers support, suspension and flexibility. EVA-blend foam midsole for cushioning. Gripstick™ rubber for traction.`,
    sizes: ["S", "M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Yellow", hex: "#fdeb71"},
    ]
    },
    {
    name: "Classic crocs",
    category: 2,
    gender: 0,
    price: 40.00,
    images: [
      "https://img01.ztat.net/article/spp-media-p1/5ebd7d2b52c030b5ab83ed8a16568b32/7e1c03c9122e406784b210d56f62be7a.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/e3d63ebd1c0931feaa5c0af9cf41dbc2/aacdf70afcb941c4acb414f96c98decb.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/5d7f1ae7958e3306b46c14edb75abfa3/a88606339da84b5481cf254d55630212.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/0b091a0b3888359597087eb7d8c463d3/91a11fb9d0ff4e10bcfb636ede3f4712.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/e15adf5db3bd32daa373a8a20008a2c6/fd4648dcdd15482cbb372c602f8c51a8.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/00bdc1309977366eaaba9d33d45d7c72/03b550d9be4b436cb513ecebc45eab36.jpg?imwidth=1800&filter=packshot",
      "https://img01.ztat.net/article/spp-media-p1/308033e6dd4a38c0af7abca382edc3a9/2f4654c1cf114dfd839eb1624ada36e7.jpg?imwidth=1800&filter=packshot"
    ],
    description: "Original. Versatile. Comfortable.It’s the iconic clog that started a comfort revolution around the world! The irreverent go-to comfort shoe that you’re sure to fall deeper in love with day after day. Crocs Classic Clogs offer lightweight Iconic Crocs Comfort™, a color for every personality, and an ongoing invitation to be comfortable in your own shoes.",
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
      name: "NMD R1 sneakers",
      category: 2,
      gender: 1,
      price: 139.00,
      images: [
        "https://img01.ztat.net/article/spp-media-p1/b26827568a234187b7e182c1c87466de/fe507c79501643d0aae96fbbc15d358e.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/f4a80a45f47b4d21b4d137c8281be703/7b5ffb52b7374efa921d1b05556093c8.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/a92d2545ab0247478ac2aee9d6f128d9/1c967c073bc144f09e0b3443357dc81d.jpg?imwidth=1800&filter=packshot"
      ],
      description: "Pack your bag, lace up your shoes and go out. The city adventure calls when you have these NMD_R1 shoes on your feet. These modern sneakers are an update of an acclaimed 80s running shoe from the adidas archive, with a soft and stretchy knitted upper and energy-reproducing Boost cushioning for comfort throughout the day. The strong colors and distinctive plugs in the midsole work as a statement and maximize the style level wherever you go.",
      sizes: ["S", "M"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
        {name: "Red", hex: "#821d2b"},
      ]
      },
      {
      name: "Slingbacks",
      category: 2,
      gender: 1,
      price: 20.00,
      images: [
        "https://lp2.hm.com/hmgoepprod?set=source[/89/96/8996962a604a31a305f04d7f6ae9b35bc445d7c4.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fac%2Ffb%2Facfbea5a8c442a23fe5799e721a4c6ec5e0f873e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
      ],
      description: "A pair of suede imitation slingbacks with heel and narrow ankle strap. They have pointed toes and angular heels. Lining in satin and insole in imitation leather. Heel height 6.5 cm.",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "Beige", hex: "#f5f5dc"},
      ]
      },
      {
      name: "Converse",
      category: 2,
      gender: 1,
      price: 90.00,
      images: [
        "https://img01.ztat.net/article/spp-media-p1/9aa9c9ba096d3354b10a5c5951ecba7f/e2e1adc2eb584046b2126c4d6a8eb92f.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/f9dbfb58c7f93caa8f628eb38cb1ac21/102f2c7164d04192a224820eb6270302.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/43bbd25fe14f40e1ac291b863914734f/d90792d3f7ca45b49891e589c9b47188.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/91f71af6ae0e33ca86495061654c7815/ad0dc05a2b9c447dbe2ae0de2ac35d98.jpg?imwidth=762&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/07b326e386524f788592b8b22f9d16ac/ab71951994a845e697ab7402ced4ccf0.jpg?imwidth=1800&filter=packshot"
      ],
      description: "The Chuck Taylor All Star high top is the most iconic sneaker in the world, recognised for its unmistakable silhouette, star-centred ankle patch and cultural authenticity. And like the best paradigms, it only gets better with time. For generations, these classic colours and the quality rubber vulcanised sole have defined an icon. Born on the court but adopted by rebels, rockers, rappers, artists, dreamers, thinkers and originals, the Chuck Taylor All Star continues to celebrate personal style and individual self-expression.",
      sizes: ["M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
        {name: "Royal Blue", hex: "#20419a"}, 
        {name: "Yellow", hex: "#fdeb71"},
        {name: "Purple", hex: "#5e3a8c"},
      ]
      },
      {
      name: "big boots",
      category: 2,
      gender: 1,
      price: 90.00,
      images: [
        "https://lp2.hm.com/hmgoepprod?set=source[/55/cf/55cf9d92a8b4989e6adeb3c614b6a8557c490128.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]"
    ],
      description: "A pair of imitation leather boots with a rough outsole. The boots have an ankle-high shaft with lacing at the front and pouring at the back. Lining in satin and insole in imitation leather. Heel height 3 cm.",
      sizes: ["S", "M", "L"],
      colors: [
        {name: "Black", hex: "#000000"},
      ]
      },
      {
      name: "Classic crocs",
      category: 2,
      gender: 1,
      price: 40.00,
      images: [
        "https://img01.ztat.net/article/spp-media-p1/5ebd7d2b52c030b5ab83ed8a16568b32/7e1c03c9122e406784b210d56f62be7a.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/e3d63ebd1c0931feaa5c0af9cf41dbc2/aacdf70afcb941c4acb414f96c98decb.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/5d7f1ae7958e3306b46c14edb75abfa3/a88606339da84b5481cf254d55630212.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/0b091a0b3888359597087eb7d8c463d3/91a11fb9d0ff4e10bcfb636ede3f4712.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/e15adf5db3bd32daa373a8a20008a2c6/fd4648dcdd15482cbb372c602f8c51a8.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/00bdc1309977366eaaba9d33d45d7c72/03b550d9be4b436cb513ecebc45eab36.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/308033e6dd4a38c0af7abca382edc3a9/2f4654c1cf114dfd839eb1624ada36e7.jpg?imwidth=1800&filter=packshot"
      ],
      description: "Original. Versatile. Comfortable.It’s the iconic clog that started a comfort revolution around the world! The irreverent go-to comfort shoe that you’re sure to fall deeper in love with day after day. Crocs Classic Clogs offer lightweight Iconic Crocs Comfort™, a color for every personality, and an ongoing invitation to be comfortable in your own shoes.",
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