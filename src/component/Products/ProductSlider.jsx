import React from "react";
import { Stack, Center, Flex } from "@chakra-ui/react";
import {
  Box,
} from "@chakra-ui/react";
import { products } from "./_data";
import ProductSimple from "./Product";
import Slider from "react-slick";
import { useState } from "react";

let settings = {
  className: "center",
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 4,
  speed: 500,
  dots: true,
  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function ProductSlider() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [, setSlider] = useState(null);
  return (
    <Center pb="20">
      <Box height={"400px"} width={{ base: "100%", md: "90%" }}>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          
            {products.map((product,index) => (
               <Flex
               display="inline-list-item"
               p={2}
               spacing="10rem"
               key={index}
               backgroundPosition="center"
             >
               <Stack m="auto" align="center" p={2} justify="space-around">
              <ProductSimple key={product.id} product={product} />
              </Stack></Flex>
            ))}
        </Slider>
      </Box>
    </Center>
  );
}
