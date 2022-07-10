import React, { useDispatch } from "react-redux";
import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { addToBasket } from "../slices/basketSlice";
import Iframe from "./Iframe";
import ProductCard from "./ProductCard";
import { height } from "@mui/system";

function Product({ products }) {
  return (
    <div className="relative flex flex-col gap-5 mx-2 product-gradient">
     
      {/* relative grid grid-cols-1 md:grid-cols-4 justify-items-center */}
      {products
        .slice(0, 10)
        .map(({ id, title, price, description, category, image }) => (
          <div className="py-10 border border-8 rounded-xl ">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <Image
                src={image}
                height={350}
                width={300}
                objectFit="center"
                className="mx-5"
              />{" "}
            </div>
            <div
              className=" text-rose-600 font-sans text-xl font-normal leading-none mx-2 my-4 text-center"
            >
              {title}
            </div>
            {/* my-5 px-1 text-center font-sans leading-none text-purple-400 text-lg 
          font-semibold hue-rotate-90 text-start md:text-center h-10 overflow-auto content-center */}
            {/* <div  className ='px-2 max-h-20 overflow-auto'> {description} </div> */}
            <div className='py-3 text-center text-sky-100 font-sans text-xl font-light leading-none'>{"NPR"}{" "}{" "}{price}</div>
          {/* <div className='px-3 text-center'>Link to youtube</div> */}
          </div>
        ))}
    </div>
  );
}

export default Product;

// const MAX_RATING = 5;
// const MIN_RATING = 1;

// function Product({ id, title, price, description, category, image }) {
//   const dispatch = useDispatch();
//   const [rating] = useState(
//     Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
//   );
//   const [hasPrime] = useState(Math.random() < 0.5);
//   const addItemToBasket = () => {
//     const product = {
//       id,
//       title,
//       price,
//       description,
//       category,
//       image,
//       rating,
//       hasPrime,
//     };
//     dispatch(addToBasket(product));
//   };

//   return (
//     <div className="relative flex flex-col m-5 bg-white z-30 p-10">
//       <p className="absolute top-2 right-2 text-xs italic text-gray-400">
//         {category}
//       </p>

//       <Image src="/cover1.png" height={200} width={200} objectFit="contain" />

//       <h4>{title}</h4>

//       {/* <div className="flex">
//         {Array(rating)
//           .fill()
//           .map((_, i) => (
//             <StarIcon className="h-5 text-yellow-500" />
//           ))}
//         <StarIcon className="h-5" />
//       </div> */}

//       <p className="text-xs my-2 line-clamp-2">{description}</p>

//       <div className="mb-5">
//         <Currency quantity={price} />
//       </div>
//       {hasPrime && (
//         <div className="flex items-center space-x-2 -mt-5">
//           <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
//           <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
//         </div>
//       )}

//       {/* <button onClick={addItemToBasket} className="mt-auto button">
//         Add to Basket
//       </button> */}
//       <button onClick={addItemToBasket} className="mt-auto button">
//         Add to Basket
//       </button>
//     </div>
//   );
// }

// export default Product;

{
  /* <div className="App">
  <h1>Youtube Embed</h1>
  <Iframe embedId="rokGy0huYEA" />
</div>; */
}
