import { ChakraProvider, Box } from "@chakra-ui/react";
import Hero from "@components/Hero";
import Statistics from "@components/Statistics";
import HeroTwo from "@components/HeroTwo";
import Service from "@components/Service";
import Footer from "@components/Footer"
// import NavBar from "@components/NavBar";

import ThreeTierPricing from "@components/Pricing";
import theme from "./theme";
import Fonts from "./Fonts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Hero />
      <Service />
      <Statistics />
      <ThreeTierPricing />
      <HeroTwo />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
