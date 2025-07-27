import React from 'react';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import MillionsJob from '../components/MillionsJob';
import ArticleNews from '../components/ArticleNews';
import Recruiting from '../components/Recruiting';
import HomeJob from '../components/HomeJob';
import ImageCard from '../components/ImageCard';
import ContactJob from '../components/ContactJob';


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Categories></Categories>
      <div className='divider py-16 '></div>
      <HomeJob></HomeJob>
      <Testimonials></Testimonials>
      <ImageCard></ImageCard>
      <MillionsJob></MillionsJob>
      <ArticleNews></ArticleNews>
      <ContactJob></ContactJob>
      <Recruiting></Recruiting>
    </div>
  );
};

export default Home;