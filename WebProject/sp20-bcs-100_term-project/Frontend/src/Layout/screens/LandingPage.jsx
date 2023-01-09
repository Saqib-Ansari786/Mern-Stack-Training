import React from "react";
import AboutContainer from "../components/AboutContainer";
import BasicCard from "../components/BasicCard";
import BasicCard1 from "../components/BasicCard1";
import BlogCard from "../components/BasicCard2";
import CardGroup from "../components/CardGroup";
import TitlebarImageList from "../components/imageGallery";
import MainComp from "../components/MainComp";

export default function LandingPage() {
  const cardData = [
    {
      title: "Restaurents",
      description:
        "This is the first card. lorem ajsdk ksadma asdnaknd asdnakd asdanksd sdjansdkansd ajsdnaskdnaaa kasdnsadnadjnaskd asdjkasndka daskdnaskds aksdnaksdna dkasdnakd akndknadskd aksdnkasn",
      img: "assets/images/image-4.jpg",
      link: "/Restaurents",
    },
    {
      title: "Recipies",
      description:
        "This is the second card. lorem ajsdk ksadma asdnaknd asdnakd asdanksd sdjansdkansd ajsdnaskdnaaa kasdnsadnadjnaskd asdjkasndka daskdnaskds aksdnaksdna dkasdnakd akndknadskd aksdnkasn",
      img: "assets/images/image-5.jpg",
      link: "/Recipies",
    },
    {
      title: "Events",
      description:
        "This is the third card. lorem ajsdk ksadma asdnaknd asdnakd asdanksd sdjansdkansd ajsdnaskdnaaa kasdnsadnadjnaskd asdjkasndka daskdnaskds aksdnaksdna dkasdnakd akndknadskd aksdnkasn",
      img: "assets/images/image-6.jpg",
      link: "/Events",
    },
  ];

  const itemData = [
    {
      img: "assets/images/image-1.jpg",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "assets/images/image-2.jpg",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "assets/images/image-3.jpg",
      title: "Camera",
      author: "@helloimnik",
    },
  ];

  return (
    <>
      <MainComp />
      <div className="grid   md:grid-cols-3 gap-5 p-2 ">
        {itemData.map((item) => (
          <TitlebarImageList />
        ))}
      </div>
      <div className="container mx-auto my-10 flex flex-col justify-center items-center text-slate-400">
        <h1 className="text-3xl font-bold text-center my-2 font-mono">
          Foodies Guide
        </h1>
        <h2 className="text-center text-5xl font-semibold my-2 font-serif">
          Discover the scrumptious world of food
        </h2>
        <p className="text-center my-2 font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem quos voluptatum quas quidem. Quisquam, quae. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem quos voluptatum quas quidem. Quisquam, quae.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {cardData.map((card) => (
            <div className="">
              <BasicCard
                title={card.title}
                description={card.description}
                img={card.img}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ------------------------------------- */}

      <CardGroup bgColorClass="bg-black bg-opacity-30" title="Blog Posts">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </CardGroup>
      <AboutContainer />
    </>
  );
}
