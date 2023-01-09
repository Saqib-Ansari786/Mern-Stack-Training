import React from "react";

export default function AboutContainer() {
  function ImageContainer({ children }) {
    return (
      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
        {children}
      </div>
    );
  }

  function TextContainer({ image }) {
    return (
      <div class="h-64 w-44 overflow-hidden rounded-lg">
        <img
          src={image}
          alt=""
          class="h-full w-full object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div class="relative overflow-hidden bg-slate-700 bg-opacity-20">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="font text-3xl font-bold tracking-tight text-gray-500 sm:text-5xl font-mono">
              You can add Restaurents, Food Items and review other Restaurents
            </h1>
            <p class="mt-4 text-xl text-gray-200">
              This year, Bringing Pakistan's first food discovery platform for
              real foodies. Search your favorite food, give reviews, check out
              amazing recipes of top chefs and a lot more.
            </p>
          </div>
          <div>
            <div class="mt-10">
              {/* <!-- Decorative image grid --> */}
              <div
                aria-hidden="true"
                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <ImageContainer>
                      <TextContainer image="assets/images/food1.avif" />
                      <TextContainer image="assets/images/food2.avif" />
                    </ImageContainer>

                    <ImageContainer>
                      <TextContainer image="assets/images/food2.avif" />
                      <TextContainer image="assets/images/food3.avif" />
                      <TextContainer image="assets/images/food4.avif" />
                    </ImageContainer>

                    <ImageContainer>
                      <TextContainer image="assets/images/food5.avif" />
                      <TextContainer image="assets/images/food6.avif" />
                    </ImageContainer>
                  </div>
                </div>
              </div>

              <button class="inline-block rounded-md border border-transparent bg-gradient-to-r from-red-600 to-slate-800 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">
                Discover more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
