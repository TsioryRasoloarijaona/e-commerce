import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';

function Home() {
  const products = [
    { name: "Nos Produits", contenu: null },
    { name: null, contenu: "Toyota" },
    { name: null, contenu: "Ford" },
    { name: null, contenu: "BMW" },
    { name: null, contenu: "Mercedes-Benz" },
    { name: null, contenu: "Honda" },
    { name: null, contenu: "Chevrolet" },
  ];

  return (
    <Box bg="white" h="100vh">
      <Grid
        h="100%"
        templateRows="1fr"
        templateColumns="1fr 1fr"
        gap={4}
        padding={8}
      >
        <GridItem>
          <Box mt="20vh">
            {products.map((product, index) => (
              <Box key={index} p={2} color="black" ml="20" >
                {product.name && (
                  <Heading fontSize="xl" mb={2}>{product.name}</Heading>
                )}
                {product.contenu && (
                  <Box fontSize="sm" color="black" mb={2} 
                  _hover={{ transform: "translateX(4px)", transition: "all 0.5s ease"  }}>{product.contenu}</Box>
                )}
              </Box>
            ))}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Home;
