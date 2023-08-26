import {
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  thumbnailBackground,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
} from "../assets/images";

import {
  truckFast,
  support,
  shieldTick,
  facebook,
  twitter,
  instagram,
} from "../assets/icons";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const shoes = [
  { bigShoeURL: bigShoe1, smallShoeURL: thumbnailShoe1 },
  { bigShoeURL: bigShoe2, smallShoeURL: thumbnailShoe2 },
  { bigShoeURL: bigShoe3, smallShoeURL: thumbnailShoe3 },
];

export const popularProducts = [
  { name: "Nike Air Jordan-01", rate: 4.5, price: "$200.20", imgURL: shoe4 },
  { name: "Nike Air Jordan-10", rate: 4.5, price: "$210.20", imgURL: shoe5 },
  { name: "Nike Air Jordan-100", rate: 4.5, price: "$220.20", imgURL: shoe6 },
  { name: "Nike Air Jordan-001", rate: 4.5, price: "$230.20", imgURL: shoe7 },
];

export const services = [
  {
    iconURL: truckFast,
    title: "Free shipping",
    caption: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    iconURL: shieldTick,
    title: "Secure payment",
    caption:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    iconURL: support,
    title: "Love to help you",
    caption: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const customers = [
  {
    imgURL: customer1,
    comment:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
    name: "Morich Brown",
  },
  {
    imgURL: customer2,
    comment:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
    name: "Lota Mongeskar",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Corterz ", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "/" },
      { name: "+92554862354", link: "/" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
