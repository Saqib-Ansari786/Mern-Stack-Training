import axios from "axios";
import React, { useEffect } from "react";
import RestaurentCard from "../components/RestaurentCard";

export default function RestaurentScreen() {
  const [restaurents, setRestaurents] = React.useState([]);

  const restaurentData = async () => {
    const { data } = await axios.get("/restaurents");

    setRestaurents(data.restaurents);
  };

  useEffect(() => {
    restaurentData();
  }, []);

  return (
    <>
      <div className='bg-[url("https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")]  h-[70vh] bg-no-repeat bg-cover bg-center '>
        <div className="bg-black bg-opacity-60 w-full h-[70vh] flex items-center flex-wrap overflow-hidden">
          <h1 className="text-white font-serif text-4xl  sm:text-5xl md:text-7xl tracking-widest font-bold px-5">
            Best Restaurents <br></br> waiting for you!
          </h1>
        </div>
      </div>
      <div className="bg-black container-fluid bg-opacity-70 p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {restaurents.map((item) => (
          <RestaurentCard
            title={item.name}
            location={item.location}
            phone={item.phone}
            catogrey={item.category}
            image="assets/images/image-1.jpg"
          />
        ))}
      </div>
    </>
  );
}
