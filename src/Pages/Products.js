import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { ProductList } from "../component/Products/ProductList";
import SideFilter from "../component/SideFilters";

export default function Products() {
  return (
    <Flex direction={["column","row"]}>
      <SideFilter />
      <ProductList />
    </Flex>
  );
}
