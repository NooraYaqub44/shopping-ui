import { Flex } from "@chakra-ui/react";
import React from "react";
import { ShopList } from "../component/Shopping/Shoplist";
import SideFilter from "../component/SideFilters";

export default function Shopping() {
  return (
    <Flex direction={["column" ,"row"]} >
      <SideFilter/>
      <ShopList/>
    </Flex>
  );
}
