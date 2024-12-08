import React from "react";
import { Text, Container, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
const HomePage = () => {
  const {  products,fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  return (
    <Container maxW="container.xl" PY={12}>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize={{ base: "22", sm: "28" }}
        fontWeight="extrabold"
        textAlign={"center"}
      >
      Current Products
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        w={"full"}
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </SimpleGrid>
      {products.length === 0 &&
      (
        <Text
        fontSize="xl"
        textAlign={"center"}
        fontWeight={"bold"}
        color={"gray.600"}
      >
        No Product found
        <br />
        <Link to="/create">
          <Text
            as={"span"}
            color="blue.500"
            _hover={{ textDecoration: "underline" }}
            textAlign={"center"}
          >
            Create Product
          </Text>
        </Link>
      </Text>
      )}
      
    </Container>
  );
};

export default HomePage;
