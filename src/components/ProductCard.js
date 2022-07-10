import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const currency ='NPR';


export default function ProductCard({title, price, image}) {
  
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-5 ">  
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="flex mt-4 mb-8 font-sans text-center text-purple-400 text-lg font-normal hue-rotate-90 space-x-0 h-20">
       {title}
      </div>
      <div className='py-2'>{currency}{" "}{price}</div>
      {/* <div>Link to youtube</div> */}
    </div>
  );
}

