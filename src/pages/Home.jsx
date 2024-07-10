import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import {products} from '../data'
import Accordian from "../components/comman/Accordian";
import QuadGallery from "../components/comman/QuadGallery";
import HeroSection from "../components/comman/HeroSection";
import Android from "../components/comman/Android";
import GridGallery from "../components/comman/GridGallery";
import SingleProduct from "../components/SingleProduct";

const Home = () => {
  // const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1000);
    setPosts(products);
  },[]);

  // async function fetchProductData() {
  //   setLoading(true);

  //   try{
  //     const res = await fetch(API_URL);
  //     const data = await res.json();

  //     setPosts(data);
  //   }
  //   catch(error) {
  //     console.log("Error aagya ji");
  //     setPosts([]);
  //   }
  //   setLoading(false);
  // }

  // useEffect( () => {
  //   fetchProductData();
  // },[])
  
  return (
    <div>
      <HeroSection/>
      <QuadGallery/>
      <SingleProduct/>
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
      <GridGallery/>
      <Android/>
      <Accordian/>
    </div>
  );
};

export default Home;
