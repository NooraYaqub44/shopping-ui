import React from "react";
import { Avatar, Stack, Tag, Center, Link, Flex } from "@chakra-ui/react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons

// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { useState } from "react";

// Settings for the slider
let settings = {
  className: "center",
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  slidesToScroll: 5,
  speed: 500,
  dots: true,
  lazyLoad: true,
  afterChange: function(index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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

const CatagoriesData = [
  {
    id: 1,
    name: "Dan Abrahmov",
    img: "https://bit.ly/dan-abramov",
    tag: "tags",
  },
  {
    id: 2,
    name: "Dan Abrahmov",
    img: "https://bit.ly/dan-abramov",
    tag: "tags",
  },
  {
    id: 3,
    name: "Dan Abrahmov",
    img: "https://bit.ly/dan-abramov",
    tag: "tags",
  },
  {
    id: 4,
    name: "Dan Abrahmov",
    img: "https://bit.ly/dan-abramov",
    tag: "tags",
  },
  {
    id: 5,
    name: "Dan Abrahmov",
    img: "https://bit.ly/dan-abramov",
    tag: "tags",
  },
  {
    id: 6,
    name: "Dan Abrahmov",
    img: "https://bit.ly/dan-abramov",
    tag: "tags",
  },
  {
    id: 7,
    name: "Dan Abrahmov",
    img: "https://bit.ly/dan-abramov",
    tag: "tags",
  },
  {
    id: 8,
    name: "Dan Abrahmov",
    img: "https://bit.ly/dan-abramov",
    tag: "tags",
  },
];

export default function Categories() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  return (
    <Center pt="16">
      <Box
        position={"relative"}
        height={"250px"}
        width={{ base: "90%", md: "90%" }}
      >
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
          {CatagoriesData.map((data, index) => (
            <Flex
              display="inline-list-item"
              p={2}
              spacing="10rem"
              key={index}
              backgroundPosition="center"
            >
              <Stack m="auto" align="center" p={2} justify="space-around">
                <Link href="./Shop">
                  <Avatar size="2xl" name={data.name} src={data.img} />
                </Link>
                <Tag size="lg" variant="solid" colorScheme="pink">
                  {data.tag}
                </Tag>
              </Stack>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Center>
  );
}
