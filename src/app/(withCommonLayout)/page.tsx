import React from 'react';
import Hero from '@/Components/UI/HomePage/Hero/Hero';
import TopCategoriesCard from '@/Components/UI/HomePage/TopCategoriesCard/TopCategoriesCard';
import ProductCard from '@/Components/UI/HomePage/ProductCard/ProductCard';
import PopularProduct from '@/Components/UI/HomePage/PopularProduct/PopularProduct';


const HomePage = async () => {
  const resOne = await fetch('https://grocery-store-backend-olive.vercel.app/flash-sale', {
    next: {
      revalidate: 30
    }
  });
  const flashsaledata = await resOne.json();

  const resTwo = await fetch('https://grocery-store-backend-olive.vercel.app/top-products', {
    next: {
      revalidate: 30
    }
  });
  const populardata = await resTwo.json();
  return (

    <>
      <Hero />
      <ProductCard flashsaledata={flashsaledata} />
      <TopCategoriesCard />
      <PopularProduct populardata={populardata}/>
    </>

  );
}

export default HomePage; // Export Home as the default export