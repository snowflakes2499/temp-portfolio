"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type CardType = {
  url: string;
  title: string;
  id: number;
};

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scroll progress mapped to horizontal x translation
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-80%"]);

  return (
    <section ref={sectionRef} className="relative h-[200vh]   ">
      {/* Sticky Heading */}
      <div className="sticky top-0 lg:h-screen flex flex-col justify-between mt-20 lg:mt-0 p-5 lg:p-20 z-10">
        <h1 className="text-[#51331B] text-[40px] lg:text-7xl leading-tight z-0">
          /brand identities <br />
          that drive <span className="font-domine"> success</span>
        </h1>
        <div className="lg:mt-10 relative z-50">
          <Link href="/work">
            <button className="border m-10 border-[#51331B] text-[#51331B] px-4 py-2 text-sm flex items-center gap-2 active:bg-[#51331B] active:text-white lg:hover:bg-[#51331B] lg:hover:text-white transition-colors group cursor-pointer relative z-50">
              <span className="mr-2 font-regular text-base lg:text-xl leading-6 lg:leading-7 tracking-tight">view work</span>
              <ArrowUpRight className="w-5 h-5 group-active:translate-x-1 group-active:-translate-y-1 lg:group-hover:translate-x-1 lg:group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div className="absolute top-0 h-full w-full pointer-events-none z-20">
        <div className="sticky top-0 h-screen flex p-5 lg:p-20 overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-4 lg:gap-12 px-5 lg:px-20 relative items-center lg:items-start z-20 pointer-events-none"
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`relative mt-5 pointer-events-auto ${index % 2 === 0 ? 'lg:top-0' : 'lg:top-[300px]'}`}
              >
                <Card card={card} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ card, index }: { card: CardType; index: number }) => {
  // Define different sizes for desktop
  const desktopSizes = [
    { h: 300, w: 300 },
    { h: 250, w: 300 },
    { h: 300, w: 500 },
    { h: 200, w: 200 },
    { h: 300, w: 300 },
  ];
  
  const { h, w } = desktopSizes[index % desktopSizes.length];

  return (
    <div 
      className="rounded-xl overflow-hidden shadow-md bg-white w-[180px] h-[180px] lg:h-[var(--desktop-height)] lg:w-[var(--desktop-width)]"
      style={{ 
        '--desktop-height': `${h}px`, 
        '--desktop-width': `${w}px` 
      } as React.CSSProperties}
    >
      <Image
        src={card.url}
        alt={card.title}
        width={w}
        height={h}
        className="object-fill w-full h-full"
      />
    </div>
  );
};

const cards: CardType[] = [
  { url: "/living.png", title: "Title 1", id: 1 },
  { url: "/kissable.png", title: "Title 2", id: 2 },
  { url: "/solace.png", title: "Title 3", id: 3 },
  { url: "/naija.png", title: "Title 4", id: 4 },
  { url: "/label.png", title: "Title 5", id: 5 },
];

export default HorizontalScroll;
