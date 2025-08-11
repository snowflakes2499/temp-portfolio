"use client";
import React, { useState } from "react";
import Image from "next/image";

type Card = {
  id: number;
  url: string;
};

const cardData: Card[] = [
  { id: 1, url: "/test3.png" },
  { id: 2, url: "/test3.png" },
  { id: 3, url: "/test1.png" },
];

export default function SwipeCards() {
  const [current, setCurrent] = useState(1);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#40352F] py-16 px-4 text-center text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-10">
        <span className="font-sans">/letters</span> from clients
      </h2>

      {/* Mobile: vertical stack */}
      {/* Mobile: vertical stack */}
      <div className="relative flex flex-col items-center justify-center lg:hidden">
        <button 
          onClick={prev}
          className="mb-4 z-10 p-2 hover:scale-105 transition cursor-pointer"
        >
          <Image src="/arrowupmobile.png" alt="up" width={24} height={24} />
        </button>

        <div className="relative h-[420px] w-[90vw] max-w-[340px] flex items-center justify-center overflow-visible">
          {cardData.map((card, i) => {
            const position = (i - current + cardData.length) % cardData.length;

            const styles: { [key: number]: string } = {
              0: "rotate-[0deg] -translate-y-[120px] scale-[0.95] z-0",
              1: "rotate-0 translate-y-0 scale-100 z-10",
              2: "rotate-[-12deg] translate-y-[90px] scale-[0.95] z-0",
            };

            return (
              <div
                key={card.id}
                className={`absolute top- left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out transform ${
                  styles[position] || "opacity-0 scale-90"
                } ${position === 1 ? "brightness-100" : "brightness-65"}`}
              >
                <Image
                  src={card.url}
                  alt={`Card ${card.id}`}
                  width={340}
                  height={400}
                  className="w-full h-auto "
                />
              </div>
            );
          })}
        </div>

        <button 
          onClick={next}
          className="mt-4 z-10 p-2 hover:scale-105 transition cursor-pointer"
        >
          <Image src="/arrowdownmobile.png" alt="down" width={24} height={24} />
        </button>
      </div>

      {/* Desktop: horizontal cards (your existing layout) */}
      <div className="hidden lg:flex items-center justify-center gap-4 w-full max-w-6xl mx-auto">
        <button
          onClick={prev}
          className="text-white p-2 hover:scale-105 transition z-10 cursor-pointer"
        >
          <Image src="/arrow.png" alt="slider" width={30} height={30} />
        </button>

        <div className="relative h-[500px] w-full flex items-center justify-center">
          {cardData.map((card, i) => {
            const position = (i - current + cardData.length) % cardData.length;

            const styles: { [key: number]: string } = {
              0: "rotate-[-3deg] -translate-x-[60%] z-0",
              1: "rotate-0 z-20",
              2: "rotate-[3deg] translate-x-[60%] z-0",
            };

            return (
              <div
                key={card.id}
                className={`absolute transition-all duration-500 ease-in-out transform ${
                  styles[position] || "opacity-0 scale-90"
                } ${position === 1 ? "brightness-100" : "brightness-75"}`}
              >
                <Image
                  src={card.url}
                  alt={`Card ${card.id}`}
                  width={500}
                  height={700}
                  className=" "
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="text-white p-2 hover:scale-105 transition z-10 cursor-pointer"
        >
          <Image src="/arrowr.png" alt="slider" width={30} height={30} />
        </button>
      </div>
    </div>
  );
}
