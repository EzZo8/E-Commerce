import React, {useContext, useEffect, useRef} from 'react';

import {ProductContext} from '../contexts/ProductContext';
import {SidebarContext} from '../contexts/SidebarContext';
import Product from '../components/Product';
import Hero from '../components/Hero';


const Home = () => {
  const {isOpen} = useContext(SidebarContext);

  const {products} = useContext(ProductContext);

  


const filteredProducts = products.filter((item) => {
  return item.category === "men's clothing" || item.category === "women's clothing"
})





  return <div className=''>
    <Hero/>
    <section className='py-16'>
      <div className='container mx-auto'>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0 lg:mx-8'>
          {filteredProducts.map((product) => {
            return (
              <Product product={product} key={product.id}/>
            )
          })}
       </div>
      </div>
    </section>

  </div>;
};

export default Home;
