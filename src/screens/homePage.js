import React from 'react';
import HeaderComponent from '../components/header';
import SliderComponent from '../components/slider';
import CategoryComponent from '../components/category';
import HighestPurchaseComponent from '../components/highestPurchase';
import OfficialStoreComponent from '../components/officialStore';
import StickyCategoriesComponent from '../components/stickyCategories';
import ContentComponent from '../components/content';
import FooterComponent from '../components/footer';
function HomePage() {
  return (
    <div className="App">
      <HeaderComponent/>
      <SliderComponent/>
      <CategoryComponent/>
      <HighestPurchaseComponent/>
      <OfficialStoreComponent/>
      <StickyCategoriesComponent/>
      <ContentComponent/>
      {/* <FooterComponent/> */}
    </div>
  );
}

export default HomePage;
