import React from "react";
import Product from "./Product";
import Banner from "./Banner";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {isMobile, deviceType} from 'react-device-detect';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function ProductFeed({ products }) {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={isMobile ? true : false}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {products
        .slice(0, 6)
        .map(({ id, title, price, description, category, image }) => (
          <ProductCard
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </Carousel>

    /* 
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))} */
    //<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto"></div>
  );
}

export default ProductFeed;
