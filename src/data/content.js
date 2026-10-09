import { IMG } from '../assets';

export const BUSINESS = {
  name: 'Amilthu Delight',
  phone: '8098037519',
  whatsapp: 'https://wa.me/918098037519',
  instagram: '_amilthu_delight__',
  instagramUrl: 'https://www.instagram.com/_amilthu_delight__/',
  location: 'Thalavaipuram',
  delivery: 'Courier all over Tamilnadu',
  est: '2025',
};

export const NAV_LINKS = [
  { href: '#story', label: 'Story' },
  { href: '#menu', label: 'Menu' },
  { href: '#order', label: 'Order' },
];

export const MENU = [
  {
    title: 'Brownies', eyebrow: 'Fudgy & glossy', img: IMG.brownie,
    items: [['Classic Brownie', ''], ['Ragi Brownie', 'millet'], ['Chocochip Brownie', ''], ['Oreo Brownie', ''], ['Wheat Brownie', 'wholesome']],
  },
  {
    title: 'Cookies', eyebrow: 'Crisp edges, soft centres', img: IMG.cookies, reverse: true,
    items: [['Ragi Cookies', 'millet'], ['Kambu Cookies', 'pearl millet'], ['Butter Crunch', '']],
  },
  {
    title: 'Chocolates', eyebrow: 'Handcrafted', img: IMG.choc,
    items: [['Dark', ''], ['White', ''], ['Milk', ''], ['Nuts', '']],
  },
  {
    title: 'Celebration cakes', eyebrow: 'Made for your moments', img: IMG.cake, reverse: true,
    items: [['Chocolate drip cake', 'signature'], ['Birthday cakes', 'custom'], ['Cheesecake', ''], ['Cupcakes', '']],
  },
];
