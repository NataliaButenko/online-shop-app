import { ADD_PRODUCR_TO_BASKET } from "../actions/basketAction/addProductToBasket";
import { EMPTY_BASKET } from "../actions/basketAction/emptyBasket";
import { REMOVE_CARD } from "../actions/basketAction/removeCard";
import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/basketAction/chengeProductCounter";


const initialState = [{
  api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/114/original/open-uri20171223-4-fqgm96?1514062257",
  brand: "covergirl",
  category: "lipstick",
  created_at: "2016-10-01T18:25:52.547Z",
  currency: null,
  description: "With CoverGirl Outlast Longwear Lipstick you get both moisture and colour! No need to choose!This long lasting lipstick doesn’t flake or ↵crumble because it’s super-powered with moisture. It'll stays super fresh and ↵super flexible all day, leaving you with a light weight but very pigmented lip look.",
  id: 114,
  image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png",
  name: "CoverGirl Outlast Longwear Lipstick",
  price: "10.99",
  price_sign: null,
  product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/114.json",
  product_colors: [{hex_value: "#C5777E", colour_name: "Phantom Pink"},
    {hex_value: "#A1211C", colour_name: "Red Siren"},
    {hex_value: "#783E49", colour_name: "Brazen Raisin"},
    {hex_value: "#744144", colour_name: "Cinnamon Stick"},
  ],
  product_link: "https://well.ca/products/covergirl-outlast-longwear-lipstick_105803.html",
  product_type: "lipstick",
  rating: null,
  tag_list: [],
  updated_at: "2017-12-27T01:50:37.669Z",
  website_link: "https://well.ca"
}];

export const basketReducer = (state = [], action) => {
 switch (action.type) {
   case ADD_PRODUCR_TO_BASKET: {
     if(state.length === 0) {
       return [...state, action.payload]
     } else {
       let rrr = state.some(product => product.id === action.payload.id);
       let ddd = state.some(product => product.selectColor === action.payload.selectColor);
       if(rrr && ddd) {
         return state.map( product => {
           if(product.id === action.payload.id) {
             if(product.selectColor === undefined) {
               return { ...product, counter: product.counter + 1 }
             } else if(product.selectColor === action.payload.selectColor) {
               return { ...product, counter: product.counter + 1 }
             } else {
               return product;
             }
           } else {
             return product;
           }
         });
       } else {
         return [...state, action.payload]
       }
     }
   }
   case EMPTY_BASKET: {
     return action.payload
   }
   case REMOVE_CARD: {
     return state.reduce((done, product) => {
       if(product.id !== action.payload.id){
         done.push(product);
       } else if(product.selectColor !== action.payload.selectColor) {
         done.push(product);
       }
       return done;
     }, []);
   }
   case INCREASE_COUNTER: {
     return state.map(product => {
       if(product.id === action.payload.id && product.selectColor === action.payload.selectColor) {
         return action.payload
       } else {
         return product
       }
     })
   }
   case DECREASE_COUNTER: {
     return state.map(product => {
       if(product.id === action.payload.id && product.selectColor === action.payload.selectColor) {
         return action.payload
       } else {
         return product
       }
     })
   }
   default: {
     return state
   }
 }
};
