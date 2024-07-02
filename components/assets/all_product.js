import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from './product_3.png';
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p12_img from "./product_12.png";
import p13_img from './product_13.png';
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Women jacket",
    category: "women",
    image: p1_img,
    new_price: 900,
    old_price: 800,
  },
  {
    id: 2,
    name: "Women top",
    category: "women",
    image: p2_img,
    new_price: 500,
    old_price: 300,
  },
  {
    id: 3,
    name: "Women crop top",
    category: "women",
    image: p3_img,
    new_price: 600,
    old_price: 500,
  },
  {
    id: 4,
    name: "Women oversized top",
    category: "women",
    image: p4_img,
    new_price: 800,
    old_price: 700,
  },
  {
    id: 5,
    name: "Women crop top",
    category: "women",
    image: p5_img,
    new_price: 800,
    old_price: 600,
  },
  {
    id: 6,
    name: "Women Full sleeve top",
    category: "women",
    image: p6_img,
    new_price: 800,
    old_price: 600,
  },
  {
    id: 7,
    name: "Women sweatshirt",
    category: "women",
    image: p7_img,
    new_price: 900,
    old_price: 800,
  },
  {
    id: 8,
    name: "Women black top",
    category: "women",
    image: p8_img,
    new_price: 700,
    old_price: 600,
  },
  {
    id: 9,
    name: "Women Full sleeve top",
    category: "women",
    image: p9_img,
    new_price: 800,
    old_price: 700,
  },
  {
    id: 10,
    name: "Women Full sleeve crop top",
    category: "women",
    image: p10_img,
    new_price: 600,
    old_price: 500,
  },
  {
    id: 12,
    name: "Women winter wear",
    category: "women",
    image: p12_img,
    new_price: 700,
    old_price: 600,
  },
  {
    id: 13,
    name: "Men sweatshirt",
    category: "men",
    image: p13_img,
    new_price: 700,
    old_price: 600,
  },
  {
    id: 14,
    name: "Men Full-sleeve Slim Fit Jacket",
    category: "men",
    image: p14_img,
    new_price: 900,
    old_price: 800,
  },
  {
    id: 15,
    name: "Men Solid Zippered Jacket",
    category: "men",
    image: p15_img,
    new_price: 1300,
    old_price: 1200,
  },
  {
    id: 16,
    name: "Men Red jacket",
    category: "men",
    image: p16_img,
    new_price: 1250,
    old_price: 1150,
  },
  {
    id: 17,
    name: "Men Full sleeve shirt",
    category: "men",
    image: p17_img,
    new_price: 1200,
    old_price: 1100,
  },
  {
    id: 18,
    name: "Men sports Jacket",
    category: "men",
    image: p18_img,
    new_price: 1500,
    old_price: 1400,
  },
  {
    id: 19,
    name: "Men sport full sleeve jacket",
    category: "men",
    image: p19_img,
    new_price: 900,
    old_price: 800,
  },
  {
    id: 20,
    name: "Men winter jacket",
    category: "men",
    image: p20_img,
    new_price: 800,
    old_price: 700,
  },
  {
    id: 21,
    name: "Men rain coat Jacket",
    category: "men",
    image: p21_img,
    new_price: 1100,
    old_price: 1000,
  },
  {
    id: 22,
    name: "Men sweatshirt",
    category: "men",
    image: p22_img,
    new_price: 900,
    old_price: 800,
  },
  {
    id: 23,
    name: "Men t-shirt jacket",
    category: "men",
    image: p23_img,
    new_price: 700,
    old_price: 600,
  },
  {
    id: 24,
    name: "Men leather Jacket",
    category: "men",
    image: p24_img,
    new_price: 1000,
    old_price: 900,
  },
  {
    id: 25,
    name: "Kids Hoddie",
    category: "kid",
    image: p25_img,
    new_price: 500,
    old_price: 200,
  },
  {
    id: 26,
    name: "Kids Sweatshirt",
    category: "kid",
    image: p26_img,
    new_price: 600,
    old_price: 400,
  },
  {
    id: 27,
    name: "Kids Black Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 500,
    old_price: 300,
  },
  {
    id: 28,
    name: "Kids T-Shirt",
    category: "kid",
    image: p28_img,
    new_price: 300,
    old_price: 200,
  },
  {
    id: 29,
    name: "Kids Jacket",
    category: "kid",
    image: p29_img,
    new_price: 300,
    old_price: 200,
  },
  {
    id: 30,
    name: "Kids Winter wear",
    category: "kid",
    image: p30_img,
    new_price: 800,
    old_price: 600,
  },
  {
    id: 31,
    name: "Kids Jacket",
    category: "kid",
    image: p31_img,
    new_price: 300,
    old_price: 200,
  },
  {
    id: 32,
    name: "Kids Full sleeve t-shirt",
    category: "kid",
    image: p32_img,
    new_price: 900,
    old_price: 800,
  },
  {
    id: 33,
    name: "Kid full sleeve t-shirt",
    category: "kid",
    image: p33_img,
    new_price: 800,
    old_price: 700,
  },
  {
    id: 34,
    name: "Kids winter jacket",
    category: "kid",
    image: p34_img,
    new_price: 1000,
    old_price: 800,
  },
  {
    id: 35,
    name: "Kids winter full sleeve jacket",
    category: "kid",
    image: p35_img,
    new_price: 900,
    old_price: 800,
  },
  {
    id: 36,
    name: "Kids t-shirt jacket",
    category: "kid",
    image: p36_img,
    new_price: 700,
    old_price: 600,
  },
];

export default all_product;
