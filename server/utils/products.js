const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere, massa nec malesuada lacinia, tortor arcu feugiat mauris, eu pharetra diam enim nec erat. Integer iaculis magna lorem, mollis pulvinar est egestas egestas. Integer nunc lacus, eleifend sit amet sapien sit amet, malesuada ornare odio. Etiam condimentum leo lectus. Nam vestibulum nunc ligula, eget ullamcorper ligula porttitor id. Nulla eget augue a elit fringilla dictum. Curabitur efficitur est dui, nec tempor odio vestibulum nec. Nunc lacinia est ac efficitur eleifend. Nulla vel enim enim. Sed sodales velit vel augue dapibus placerat."


const tops = [
  {
    name: "Soft & Cozy Hoodie",
    category: 0,
    gender: 0,
    price: 21.99,
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
    description: `JOE'S USA MEN'S HOODIES SOFT & COZY HOODED SWEATSHIRTS IN 46 COLORS:SIZES S-4XL

    Crafted for comfort, this Men's Classic Pullover Hooded Sweatshirt is perfect for relaxing and it's a real value.  Cozy sweats and hoodies in our classic weight. Starting At: $12.95
    
    7.8-ounce, 50/50 cotton/poly fleece
    Two-ply hood
    Dyed-to-match drawcord
    Set-in sleeves
    Front pouch pocket
    Adult Sizes: XS - XL`,
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
    name: "Polo Shirt",
    category: 0,
    gender: 0,
    price: 19.99,
    images: [
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F50%2F13%2F50135cc4dce925d17976e116d11b8769bb828eea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_turtleneck%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F42%2F3b%2F423b7dcb520e725a907e8ffad3587d8af1df83d7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_turtleneck%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6e%2Fcd%2F6ecd546298799b5676fea82834a82b34f4b51e39.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_turtleneck%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F82%2F95%2F8295bd51fa65cbc871d079337c1dee2b0818207d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_turtleneck%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F97%2F7e%2F977ed29896ec9ad04a3d39a3afb48fe96fc76d71.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_turtleneck%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5c%2F53%2F5c531c4d61d437c28077c7a463499f01f82f4cfa.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_cardigansjumpers_turtleneck%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    ],
    description: `An American style standard since 1972, the Polo shirt has been imitated but never matched. Over the decades, Ralph Lauren has reimagined his signature style in a wide array of colors and fits, yet all retain the quality and attention to detail of the iconic original. This relaxed version is made from luxe cotton interlock with an ultrasoft finish.`,
    sizes: ["XS", "S", "M", "L"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "White", hex: "#ffffff"},
      {name: "Beige", hex: "#f5f5dc"},
      {name: "Gray", hex: "#958a7f"},
      {name: "Navy", hex: "#171c32"},
      {name: "Royal Blue", hex: "#20419a"}, 
    ]
    },
    {
    name: "Long Sleeve Full Zip",
    category: 0,
    gender: 0,
    price: 189.99,
    images: 
    [
      "https://img01.ztat.net/article/spp-media-p1/12da219723f24bc2a446d3d4ccad0517/12e41587ef6e44e787e82e7d93bb8fbb.jpg?imwidth=1800",
      "https://img01.ztat.net/article/spp-media-p1/9400f173466b4a778e10f5bcaee05edf/7439753a522d4c1990d58f08fef1727b.jpg?imwidth=1800",
      "https://img01.ztat.net/article/spp-media-p1/e94b880743214b9895fe5889867c24f4/e5b397f48dc54d6486fb937cbc43615b.jpg?imwidth=1800",
    ],
    description: `Material: 100% polyester
    Feed thickness: Unlined
    Fabric: Faux fur
    Care instructions: 30 ° C machine wash, gentle wash
    
    Collar: Hood with drawstring
    Closure: Zipper
    Pockets: Sleeve pocket, zippered pockets
    Details: Ice cream pockets, waist elastic
    Article number: PO222T05B-A11
    `,
    sizes: ["S", "M", "L"],
    colors: [
      {name: "Navy", hex: "#171c32"},
      {name: "Black", hex: "#000000"},
      {name: "White", hex: "#ffffff"},
    ]
    },
    {
    name: "Dressshirt Slim Fit",
    category: 0,
    gender: 0,
    price: 29.99,
    images: [
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffb%2Fcc%2Ffbcc724ddf8a622372dc499e0194b4491d96a352.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_longsleeved%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa9%2F37%2Fa9371824e750b3048361f64e0dab24f4f3a7e38b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shirts_longsleeved%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  ],
    description: `A shirt in woven, cotton blended quality with stretch. The shirt has a collar and a classic button placket. Long sleeves with adjustable buttoning at the cuffs and slightly rounded hem. Slim Fit - a slim fit with a narrow shoulder and marked waist. This creates a tailored silhouette.`,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "White", hex: "#ffffff"},
    ]
    },
    {
      name: "Coat in Wool Mix",
      category: 0,
      gender: 0,
      price: 69.99,
      images: [
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F3b%2F2a%2F3b2a09d17c0c8043b371f42d16f547a2d133a0ed.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcb%2F48%2Fcb48b1dd24cb06297b5afc82bdf728033496f4b3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
    ],
      description: `A single-breasted coat in felted, wool blended quality. The coat has a collar and a blunt stroke. Slanted post pocket on each side. Lined sleeves.`,
      sizes: ["M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
      ]
      },
    {
    name: "Crew-Neck T-Shirt",
    category: 0,
    gender: 0,
    price: 9.99,
    images: [
      "https://bananarepublic.gap.com/webcontent/0020/231/689/cn20231689.jpg",
      "https://bananarepublic.gap.com/webcontent/0014/364/854/cn14364854.jpg",
    ],
    description: `This item is part of Wear & Share: A curation of classic Banana Republic pieces for anyone to wear in the modern world.
    Our Soft-Wash shirts undergo a delicate wash cycle for 60 minutes followed by an enzyme wash, giving the shirt a softer and more worn-in finish.
    Crew neck. Short sleeves.
    Straight hem.
    Produced in a facility that runs P.A.C.E. – Gap Inc.'s program to educate and empower women in the communities where our products are made.`,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      {name: "White", hex: "#ffffff"},
      {name: "Black", hex: "#000000"},
    ]
    },

    {
      name: "Knitted Sweatshirt",
      category: 0,
      gender: 1,
      price: 27.99,
      images: [
        "https://img01.ztat.net/article/spp-media-p1/b3a7b5470f443255b6a18bc9590dfe2c/f87f3be4fa0a4c3a8d3d8a7f3b1bc0b2.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/c0447bf0703e372db5ad2fc9553c0da8/e9a1d800cc544731b83a57afbb2a2145.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/17b67023c03d3560bcd450a6ff000c44/ea4e79dac1874b1cbb69aeead459714d.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/9fe74a8d850a3beaa2edaf0c785e3828/189a71b6e8ea407f99d1097e8b0f1d02.jpg?imwidth=1800",
      ],
      description: `Collar: Standing collar
      Transparency: Partly
      Pattern: Solid color
      Article number: MOQ21I018-A11
      
      By buying cotton products from this brand, you support more sustainable cotton production. Products with this label are made from at least 50% cotton, from a retailer or a brand that has committed to buying Better Cotton and investing in BCI farmers. This does not mean that the product is made from physically traceable Better Cotton.
      `,
      sizes: ["XS", "S", "M", "L"],
      colors: [
        {name: "Green", hex: "#02642e"},
        {name: "Black", hex: "#000000"},
        {name: "Beige", hex: "#f5f5dc"},
        {name: "White", hex: "#ffffff"},
      ]
      },
      {
      name: "Hood Jacket",
      category: 0,
      gender: 1,
      price: 37.50,
      images: [
        "https://img01.ztat.net/article/spp-media-p1/7d58c56fba7c39238a550ed7e4563681/7884fbf9f1514ab8a45bd23e42abeca6.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/bbf975624c01315eaa75edd39c30f640/626b79ad8b8d42719ae33739a7dda887.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/c4acf46e6d8f45b1b1e9723ae22810b7/d46665da1ea245a2874a45129b43609e.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/2d87b9d041303f52ad218f4c27c94945/789866bfdfd4457086a37f1e4318a966.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/893636c3a23b307c95dfab4ef916172d/1944fa0e39e44af08529927f6f223076.jpg?imwidth=1800&filter=packshot",
      ],
      description: `Material: 100% nylon
      Foder: 100% polyester
      Foder: 100% polyester
      Fodertjocklek: Varmt foder
      Skötselråd: Torktumlas ej, 30°C maskintvätt`,
      sizes: ["XS", "S", "M", "L"],
      colors: [
        {name: "Yellow", hex: "#fdeb71"},
        {name: "Green", hex: "#02642e"},
        {name: "Black", hex: "#000000"},
        {name: "Navy", hex: "#171c32"},
        {name: "Red", hex: "#821d2b"},
      ]
      },
      {
      name: "Regular Hoodie",
      category: 0,
      gender: 1,
      price: 19.99,
      images: [
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff6%2Fc7%2Ff6c7eea986f6893bb9459892b0355aa43a6d19bc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_hoodiessweatshirts%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5e%2F29%2F5e2955082cad6dee174164794d2bdf37e7620c6d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_cardigansjumpers_hoodiessweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
      ],
      description: `A wide hooded sweater in sweatshirt quality. The sweater has a lined hood with a drawstring and a kangaroo pocket on the front. Cuffs at the cuffs and at the bottom.`,
      sizes: ["S", "M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
      ]
      },
      {
      name: "Polo Raulph Lauren Shirt",
      category: 0,
      gender: 1,
      price: 89.99,
      images: [
        "https://img01.ztat.net/article/spp-media-p1/8823490fbddc39aebe103cbdf5ad8e15/2eec209340f4454d8b4f123f86e8a909.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/269acf5f46a03f42b44359d67c3ac976/1a00f6d3c88643ceb975c7adccb98fac.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/fdc2d5d1cbe83f3cbf2ebb79385c4776/b1a9dc55b8554e7eb7b6926c1e616c6e.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/75fd50f62cbe4a27965a5304d9661dbb/a5b47b7429954455aff394e67f279231.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/6c5e3b68b7be4c98ac0efab678d951f2/0fe5c202c86848efa0026232ef3ed7e6.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/b23919b69cef3b2fb917fd5dd59780cc/a0e3cb50e5df4349b3e590849001836d.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/5081d89fdcde33c98f2f0c931f82fd3a/dbad3b60875a46fca0423063407007a6.jpg?imwidth=1800",
    ],
      description: `Material: 97% cotton, 3% elastane
      Fabric: Pike
      Care instructions: 30 ° C machine wash
      
      Krage: Piké
      Mönster: Enfärgat
      Artikelnummer: PO221D008-A11
      `,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "White", hex: "#ffffff"},
        {name: "Navy", hex: "#171c32"},
        {name: "Royal Blue", hex: "#20419a"}, 
        {name: "Green", hex: "#02642e"},
        {name: "Red", hex: "#821d2b"},
        {name: "Purple", hex: "#5e3a8c"},
      ]
      },
      {
        name: "T-shirt in Wool",
        category: 0,
        gender: 1,
        price: 9.99,
        images: [
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe6%2F79%2Fe67920182cd46dbd8c0ac2fca6b20e4944cc3dfe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F67%2Fe2%2F67e2028ff0301eafe7e1bc7e95407da80c853813.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fec%2Ff0%2Fecf05a3f761b580f6e3adb75af32c2e329fb0448.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb9%2F72%2Fb972801d7a1b7fa940f7c73bf8849f3d59611a35.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2F09%2Ff509e661957c5e8f92c3d1f2f824bf8d73b916b7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      ],
        description: `A straight cut t-shirt in soft cotton knitwear. The t-shirt has a round neckline with a ribbed cuff and a slightly sloping shoulder.`,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
          {name: "Black", hex: "#000000"},
          {name: "White", hex: "#ffffff"},
          {name: "Gray", hex: "#958a7f"},
          {name: "Beige", hex: "#f5f5dc"},
          {name: "Purple", hex: "#5e3a8c"},
        ]
        },
      {
      name: "Turtleneck Sweater",
      category: 0,
      gender: 1,
      price: 14.99,
      images: [
        "https://img01.ztat.net/article/spp-media-p1/f7752e083b1e33ccbd4e65dec7c5a94f/7afd469d596e4e53b0a963ec071dd5f5.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/154a883ffcd930e8bb9f6f4f25671c07/5a838cd7624a4a5787405f641faa238a.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/1d282c40757536969b0e68dd57bcc435/25db3be427664cfd92b45454a348e5d4.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/01af50af617e3b1a94f93e6b565c033b/62950326da904834b5a26a42294cfbdb.jpg?imwidth=1800",
        "https://img01.ztat.net/article/spp-media-p1/b04f66754dd63a0893ab4e98d9284ecd/6e9a815fa4184aa8a41d827f987a2ed7.jpg?imwidth=1800",
      ],
      description: `Material: 95% cotton, 5% elastane
      Fabric: Ribbat
      Care instructions: Do not tumble dry, 30 ° C machine wash, gentle wash
      
      Collar: Polo
      Pattern: Solid color
      Article number: EV421D19K-B11

      By buying cotton products from this brand, you support more sustainable cotton production. Products with this label are made from at least 50% cotton, from a retailer or a brand that has committed to buying Better Cotton and investing in BCI farmers. This does not mean that the product is made from physically traceable Better Cotton.
      `,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "Green", hex: "#02642e"},
        {name: "White", hex: "#ffffff"},
        {name: "Gray", hex: "#958a7f"},
        {name: "Yellow", hex: "#fdeb71"},
      ]
      },
]

const bottoms = [
  {
    name: "Chinos Slim Fit",
    category: 1,
    gender: 0,
    price: 29.99,
    images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb0%2Fad%2Fb0adf9a5dfbf6804f79ec0fdd73978e89d501f42.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_chinos_slim_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd2%2Fac%2Fd2acb78fd0adf36a926e117b68fc672899107283.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_chinos_slim_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faf%2F9f%2Faf9fe68166ce86ecbbef401e9a46a8665679ff1c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6f%2Fd6%2F6fd6516982eb50892a798049c53a691c0c434965.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_chinos_slim_all%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F33%2F19%2F3319f5e0465ba86a677ee245bd3c4f8ff17c5b89.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
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
    images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa2%2F84%2Fa28400dfce3ae1b497ae864dc644467901400f1b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_regular%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa4%2F92%2Fa492af0d2670a826bb32620f8c3ac22b65901208.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_regular%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0d%2F62%2F0d62a7be3f18c1350c0b81b1fba30b6b6b4e62a3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jeans_regular%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
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
    images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F13%2F26%2F1326e1063c95a0ddf993ebc52d9a604bbc8334b0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faa%2F46%2Faa46de07013875cd5da01450999cc4e1c2e55ae4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8f%2F5d%2F8f5d2751b96362940979e1fa0b1f3b68f5b45139.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F49%2Fd2%2F49d2ff3ecfbd13061737f33bca7498812db17122.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
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
    images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fec%2F6b%2Fec6bcd0c106e0be3e9be794bf73486e9d697e730.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F10%2F52%2F1052f306b21bf88f7022e73dd95d117f2e6047a8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
    description: "A pair of trousers in stretchy, woven cotton quality. The trousers have elastic and a drawstring at the waist. Slanted side pockets with lids and hidden push button and cheat pockets with lids at the back. Leg pockets with lids that have hidden push buttons. Fly with zipper and button. Forming seams at the knees for extra mobility. Dressed elastic at the leg ends. Regular Fit - a classic fit with good range of motion over the thighs and knees. This creates a comfortable, straight silhouette.",
    sizes: ["XL"],
    colors: [
      {name: "Black", hex: "#000000"},
      {name: "Gray", hex: "#958a7f"},
    ]
    },
    {
      name: "Cropped Slacks Slim Fit",
      category: 1,
      gender: 0,
      price: 29.99,
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F64%2F1b%2F641b717334e92a4fa0474777b8e40613bfef35f4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4f%2F6e%2F4f6e33481e4eea31421276d7f76fa656e60cec99.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2Fc2%2F73c20f5af6bd24b083f9ef51a6e86b837224c94e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
      description: "A pair of cropped slacks in woven quality with press creases. The slack has a hidden husk, hook and button in the waistband. Side pockets and post pockets with button at the back. Fly with zipper. Slim Fit - a fit that is narrow over the thighs and knees. This creates a tailored silhouette.",
      sizes: ["S", "M", "L", "XL"],
      colors: [
        {name: "Gray", hex: "#958a7f"},
        {name: "Black", hex: "#000000"},
        {name: "Beige", hex: "#f5f5dc"},
      ]
      },
    {
    name: "Chinos Shorts",
    category: 1,
    gender: 0,
    price: 19.99,
    images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa8%2Fd6%2Fa8d6a18b5a8b8c4d94bb87674ca3dff9e1344a51.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0e%2F01%2F0e0157bb61cf7e683ebcc06c463f90b3d924f4d9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc1%2F2a%2Fc12aea8c2815303ce857c5a9ea0a171385e132b4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", 
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2Fb5%2Ff8b55c21d272505d5fb2236a622c3df3117ab6c2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
            "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7c%2F7f%2F7c7fccbd980d07c40ea052f5ed3960c2dd851962.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"],
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
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F51%2F9c%2F519c36e775d5456792048f4e9492464976644a4a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_slim%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd5%2Fb3%2Fd5b3c40b20b17e454caa37e6fe343968206b6503.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_slim%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F40%2Fe8%2F40e83e1ce717199a7fd153489b98a37c774a0f43.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_slim%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb4%2F47%2Fb447dd95bfdeda3b82599d8f796fe496614495dd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5e%2F8b%2F5e8bf6f5ff1de29d21e58fb459b01b3707fdcbbc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_slim%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"],
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
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbe%2F5a%2Fbe5a02d615b010c9c1f77ea3d81224c233157399.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2F68%2Fbc68deded35079d43d424bb0db9c3d866f3fe4bf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7f%2Fd4%2F7fd4b2682e92e5334f9c5f71e05db9ef65a82c31.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
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
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa9%2F4b%2Fa94b0729f960618fe561f98eb5ca024b624db52c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_cargo%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6c%2F29%2F6c29cf72cdc4e0eb8b2fbfe5e3cc4a2f990d954e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_trousers_cargo%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F56%2F8f%2F568f9b27abf2ae0c1e2c9bbf8c8beba58e440338.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"],
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
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fba%2F26%2Fba2661ecfda3a1e89863f497ce249f2c08eb335c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F85%2F31%2F8531b16964fc6b73e6131b642cd035bb8a1f2dee.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd8%2Fba%2Fd8ba340172215666ccf215f1ccf47b1834bcbacd.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F93%2F0c%2F930c788e09e598541b7c6c8217dc49356a846bd3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"], 
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
        name: "Wide Twill Pants",
        category: 1,
        gender: 1,
        price: 24.99,
        images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F12%2F42%2F1242cccdc6abd22d6489add9f6da04b798416e05.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F39%2Fd4%2F39d49e14dbe0ebff6f9af15a97803464b257da05.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff2%2F2a%2Ff22af37d808c299525f50e700edd6eeae638b772.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd5%2F1c%2Fd51cb30cdc6b5a7527bb9116155865d72a70f0bf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
                "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F38%2Fe1%2F38e1ca601aecea1c31e3c4303177d2147014fc91.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"], 
        description: "A pair of long 5-pocket trousers in stretchy cotton twill. The trousers have a high waist and wide, straight legs. Fly with zipper and button.",
        sizes: ["S", "M", "L", "XL"],
        colors: [
          {name: "Royal Blue", hex: "#20419a"},
          {name: "Red", hex: "#821d2b"},
          {name: "Black", hex: "#000000"},
          {name: "Beige", hex: "#f5f5dc"},
          {name: "White", hex: "#ffffff"},
        ]
        },
      {
      name: "Ribbed Leggings",
      category: 1,
      gender: 1,
      price: 14.99,
      images: ["https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8b%2Fd4%2F8bd494150e2bbf6c6c2ad8e2698e26d11f71205f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd9%2F35%2Fd935a8e42d349d7d515267ebc415fc3d7579152a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F97%2Fe2%2F97e2bb4983c1d4505592309a334894b6ef1f0aec.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", 
              "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffc%2F0c%2Ffc0c0d7c0f0f51acf2b5f974b6d7bd71b854990e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"],
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
    name: "NMD R1 Sneakers",
      category: 2,
      gender: 0,
      price: 139.99,
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
    price: 17.99,
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
    price: 99.99,
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
      {name: "Royal Blue", hex: "#20419a"},
      {name: "Red", hex: "#821d2b"},
      {name: "Purple", hex: "#5e3a8c"},
    ]
    },
    {
    name: "Boots",
    category: 2,
    gender: 0,
    price: 209.99,
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
      name: "Ankle boots",
      category: 2,
      gender: 0,
      price: 399.99,
      images: [
        "https://img01.ztat.net/article/spp-media-p1/ce15537ba89738cdaa2af72c0d149dff/9cac2ab3d5474a94837164e99a8ee6ce.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/e51951d2185739e883d0cfe8fb5c1e67/61ec87969e134350ac5b45c2179bd27b.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/5ec24f65d8333afe9f1b8ebce10ae8d6/7dd53f14900d4793a02f5d533d07d540.jpg?imwidth=1800&filter=packshot",
        "https://img01.ztat.net/article/spp-media-p1/6c19e22bccc73f76a72daf752a8ac738/37af61e31142452d9a188224e0cdaaba.jpg?imwidth=1800&filter=packshot"
      ],
      description: `Toe: Round
      Closing: Open
      Pattern: Solid color
      Details: Elastic insert
      Outer material: Textile
      Lining: Imitation leather / textile
      Insole: Imitation leather
      Sole: Art material
      Feed thickness: Thin feed
      Fabric: Imitation leather`,
      sizes: ["S", "M", "L", "XL"],
      colors: [
        {name: "Black", hex: "#000000"},
        {name: "Beige", hex: "#f5f5dc"},
        {name: "Navy", hex: "#171c32"},
        {name: "Gray", hex: "#958a7f"},
      ]
      },
    {
    name: "Classic Crocs",
    category: 2,
    gender: 0,
    price: 39.99,
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
      name: "NMD R1 Sneakers",
      category: 2,
      gender: 1,
      price: 139.99,
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
      price: 19.99,
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
      price: 89.99,
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
      name: "Big Boots",
      category: 2,
      gender: 1,
      price: 89.99,
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
        name: "Nike Sportswear",
        category: 2,
        gender: 1,
        price: 1199.99,
        images: [
          "https://img01.ztat.net/article/spp-media-p1/ad0a8ed9cd264baea11cb56b8b3e7b52/4d9e903bc5b24fc39c8251b4d85b156c.jpg?imwidth=1800&filter=packshot",
          "https://img01.ztat.net/article/spp-media-p1/a6c4037c874c4acbb3a71d75c825c9aa/1a4e2553c5484929b68c8949de774d75.jpg?imwidth=1800&filter=packshot"
        ],
        description: `Toe: Round
        Heel / sole: Flat
        Closure: Lacing
        Closing: Lacing
        Pattern: Solid color
        Details: Cut-outs`,
        sizes: ["S", "M", "L"],
        colors: [
          {name: "White", hex: "#ffffff"},
          {name: "Black", hex: "#000000"},
        ]
        },
      {
      name: "Classic Crocs",
      category: 2,
      gender: 1,
      price: 39.99,
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