import Header from "./components/Header";
import Hero from "./components/Hero";
import {CartContextProvider} from "./contexts/CartContext";
import React from "react";
import Cart from "./components/Cart";
import ProductGallery from "./components/ProductGallery";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <div className="">
            <Header />
            <Hero />
            <div className="container mx-auto flex-none lg:flex space-x-8">
              <div className="flex-auto">
                <ProductGallery />
              </div>
              <div className="flex-none">
                <Cart />
              </div>
            </div>
          </div>
        </CartContextProvider>
      </QueryClientProvider>
  );
}

export default App;
