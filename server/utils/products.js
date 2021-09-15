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
    name: "Chinos Slim Fit",
    category: 1,
    gender: 0,
    price: 29.99,
    images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb0%2Fad%2Fb0adf9a5dfbf6804f79ec0fdd73978e89d501f42.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_chinos_slim_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd2%2Fac%2Fd2acb78fd0adf36a926e117b68fc672899107283.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_chinos_slim_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faf%2F9f%2Faf9fe68166ce86ecbbef401e9a46a8665679ff1c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6f%2Fd6%2F6fd6516982eb50892a798049c53a691c0c434965.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_chinos_slim_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F33%2F19%2F3319f5e0465ba86a677ee245bd3c4f8ff17c5b89.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
    description: `A pair of chinos in extra stretchy twill of cotton. They have side pockets, a coin pocket and post pockets at the back with a button. Fly with zipper. Slim Fit - a fit that is narrow over the thighs, knees and ankles. This creates a tailored silhouette.
    
    Storlek: Modellen är 185cm/6'1" och har storlek 31/32
    Passform: Slim fit
    Komposition: Fickfoder: Bomull 100%Bomull 98%, Elastan 2%`,
    sizes: ["S", "M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Gray", hex: "#958a7f"},
      {name: "Royal Blue", hex: "#20419a"}, 
      {name: "Navy", hex: "#171c32"},
      {name: "Beige", hex: "#f5f5dc"},
    ]
    },
    {
    name: "Regular Jeans",
    category: 1,
    gender: 0,
    price: 29.99,
    images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa2%2F84%2Fa28400dfce3ae1b497ae864dc644467901400f1b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_regular%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa4%2F92%2Fa492af0d2670a826bb32620f8c3ac22b65901208.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_regular%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0d%2F62%2F0d62a7be3f18c1350c0b81b1fba30b6b6b4e62a3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_regular%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
    description: "A pair of 5-pocket jeans in stretchy denim. The jeans have a normal high waist and straight legs with good range of motion over the thighs and knees. Fly with zipper and button.",
    sizes: ["M", "L"],
    colors: [
      {name: "Royal Blue", hex: "#20419a"}, 
      {name: "Navy", hex: "#171c32"},
      {name: "Black", hex: "#000000"},
    ]
    },
    {
    name: "Joggers Slim Fit",
    category: 1,
    gender: 0,
    price: 24.99,
    images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F13%2F26%2F1326e1063c95a0ddf993ebc52d9a604bbc8334b0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faa%2F46%2Faa46de07013875cd5da01450999cc4e1c2e55ae4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8f%2F5d%2F8f5d2751b96362940979e1fa0b1f3b68f5b45139.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2Fd2%2F49d2ff3ecfbd13061737f33bca7498812db17122.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
    description: "A pair of dressed joggers in woven quality with press creases. They are wearing elastic and a drawstring at the waist. Side pockets and a post pocket at the back. Slim Fit - a fit that is narrow over the thighs, knees and ankles. This creates a tailored silhouette.",
    sizes: ["S", "M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Royal Blue", hex: "#20419a"},
      {name: "Beige", hex: "#f5f5dc"},
      {name: "Gray", hex: "#958a7f"},
    ]
    },
    {
    name: "Cargopants Regular Fit",
    category: 1,
    gender: 0,
    price: 39.99,
    images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fec%2F6b%2Fec6bcd0c106e0be3e9be794bf73486e9d697e730.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F10%2F52%2F1052f306b21bf88f7022e73dd95d117f2e6047a8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
    description: "A pair of trousers in stretchy, woven cotton quality. The trousers have elastic and a drawstring at the waist. Slanted side pockets with lids and hidden push button and cheat pockets with lids at the back. Leg pockets with lids that have hidden push buttons. Fly with zipper and button. Forming seams at the knees for extra mobility. Dressed elastic at the leg ends. Regular Fit - a classic fit with good range of motion over the thighs and knees. This creates a comfortable, straight silhouette.",
    sizes: ["XL"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Gray", hex: "#958a7f"},
    ]
    },
    {
    name: "Chinos Shorts",
    category: 1,
    gender: 0,
    price: 19.99,
    images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa8%2Fd6%2Fa8d6a18b5a8b8c4d94bb87674ca3dff9e1344a51.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0e%2F01%2F0e0157bb61cf7e683ebcc06c463f90b3d924f4d9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc1%2F2a%2Fc12aea8c2815303ce857c5a9ea0a171385e132b4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2Fb5%2Ff8b55c21d272505d5fb2236a622c3df3117ab6c2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7c%2F7f%2F7c7fccbd980d07c40ea052f5ed3960c2dd851962.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"],
    description: "A pair of chinos shorts in stretchy cotton twill. The shorts have a normal high waist with elastic and a hidden drawstring. Slanted side pockets and fitted pockets at the back. Fly with zipper and button.",
    sizes: ["M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Gray", hex: "#958a7f"},
      {name: "Navy", hex: "#171c32"},
      {name: "Green", hex: "#02642e"},
      {name: "Beige", hex: "#f5f5dc"},
    ]
    },

    {
      name: "Vintage Slim Jeans",
      category: 1,
      gender: 1,
      price: 29.99,
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F51%2F9c%2F519c36e775d5456792048f4e9492464976644a4a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_slim%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd5%2Fb3%2Fd5b3c40b20b17e454caa37e6fe343968206b6503.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_slim%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F40%2Fe8%2F40e83e1ce717199a7fd153489b98a37c774a0f43.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_slim%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb4%2F47%2Fb447dd95bfdeda3b82599d8f796fe496614495dd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5e%2F8b%2F5e8bf6f5ff1de29d21e58fb459b01b3707fdcbbc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_slim%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"],
      description: "A pair of ankle-length 5-pocket jeans in washed denim. The jeans have an extra high waist and narrow legs. The jeans are partly made of recycled cotton.",
      sizes: ["S", "M", "L"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "Gray", hex: "#958a7f"},
        {name: "Navy", hex: "#171c32"},
        {name: "White", hex: "#ffffff"},
        {name: "Royal Blue", hex: "#20419a"},
      ]
      },
      {
      name: "Baggy High Jeans",
      category: 1,
      gender: 1,
      price: 34.99,
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbe%2F5a%2Fbe5a02d615b010c9c1f77ea3d81224c233157399.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2F68%2Fbc68deded35079d43d424bb0db9c3d866f3fe4bf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2Fd4%2F7fd4b2682e92e5334f9c5f71e05db9ef65a82c31.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
      description: "A pair of 90s-inspired 5-pocket jeans in sturdy, washed cotton denim. The jeans have a high waist and wide legs with a loose fit. Fly with zipper and button.",
      sizes: ["M", "L"],
      colors: [
        {name: "Navy", hex: "#171c32"},
        {name: "Royal Blue", hex: "#20419a"},
        {name: "Black", hex: "#000000"},
      ]
      },
      {
      name: "Slim Fit Cargopants",
      category: 1,
      gender: 1,
      price: 39.99,
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa9%2F4b%2Fa94b0729f960618fe561f98eb5ca024b624db52c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_cargo%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6c%2F29%2F6c29cf72cdc4e0eb8b2fbfe5e3cc4a2f990d954e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_cargo%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F56%2F8f%2F568f9b27abf2ae0c1e2c9bbf8c8beba58e440338.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
      description: "A pair of ankle-length trousers in stretchy twill with elements of lyocell. The trousers have a normal high waist and narrow legs with seams at the knees. Slanted side pockets, leg pockets with lids and cheat pockets with lids at the back. Fly with zipper and button.",
      sizes: ["S", "M", "L"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "Beige", hex: "#f5f5dc"},
        {name: "Green", hex: "#02642e"},
      ]
      },
      {
      name: "Slacks",
      category: 1,
      gender: 1,
      price: 24.99,
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fba%2F26%2Fba2661ecfda3a1e89863f497ce249f2c08eb335c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F85%2F31%2F8531b16964fc6b73e6131b642cd035bb8a1f2dee.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F93%2F0c%2F930c788e09e598541b7c6c8217dc49356a846bd3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd8%2Fba%2Fd8ba340172215666ccf215f1ccf47b1834bcbacd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
      description: "A pair of trousers in a stretchy, woven viscose blend. The trousers have a high waist with narrow, dressed elastic and narrow legs with press creases. Side pockets and cheat pockets at the back. Fly with zipper and hook and hook.",
      sizes: ["XL"],
      colors: [
        {name: "Beige", hex: "#f5f5dc"},
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
        {name: "Gray", hex: "#958a7f"},
      ]
      },
      {
      name: "Ribbed Leggings",
      category: 1,
      gender: 1,
      price: 14.99,
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8b%2Fd4%2F8bd494150e2bbf6c6c2ad8e2698e26d11f71205f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd9%2F35%2Fd935a8e42d349d7d515267ebc415fc3d7579152a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F97%2Fe2%2F97e2bb4983c1d4505592309a334894b6ef1f0aec.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffc%2F0c%2Ffc0c0d7c0f0f51acf2b5f974b6d7bd71b854990e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"],
      description: "A pair of leggings in soft, ribbed LENZING ™ ECOVERO ™ viscose that are displayed from the knee. They have a high waist with hidden elastic.",
      sizes: ["M", "L"],
      colors: [
        {name: "Red", hex: "#821d2b"},
        {name: "Black", hex: "#000000"},
        {name: "Gray", hex: "#958a7f"},
        {name: "Beige", hex: "#f5f5dc"},
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