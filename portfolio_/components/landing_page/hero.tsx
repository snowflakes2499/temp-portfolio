"use client";
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import React from 'react';
import {useRef}   from 'react'

export default function Hero() {
    const imageRef = useRef<HTMLDivElement | null>(null);
  return (
    <section className="bg-[#FEFCE4] w-full  py-5">
      <div>
        {" "}
        <div className=" hidden md:flex text-xs md:text-sm text-[#2C2216] tracking-wider  uppercase border-t border-b border-[#2C2216] py-2 flex-wrap justify-center gap-4 ">
          <Marquee speed={180}>
            <div>
              <ul className="flex flex-wrap gap-14">
                <li ></li>
                <li> Brand Strategy</li>
                <li>|</li>
                <li> Visual Identity </li>
                <li>|</li>
                <li> Brand Strategy </li>
                <li>|</li>
                <li> Packaging Design </li>
                <li>|</li>
                <li> Art Direction </li>
                <li>|</li>
                <li> UIUX </li>
                <li>|</li>
                <li> Publication </li>
                <li>|</li>

              </ul>
            </div>
          </Marquee>
        </div>
        <div className="md:hidden text-xs text-[#2C2216] tracking-wider  uppercase border-t border-b border-[#2C2216] py-2  flex flex-wrap justify-center gap-8">
          <Marquee>
            <div>
              <ul className="flex flex-wrap gap-8">
                <li ></li>
                <li> Brand Strategy</li>
                <li>|</li>
                <li> Visual Identity </li>
                <li>|</li>
                <li> Brand Strategy </li>
                <li>|</li>
                <li> Packaging Design </li>
                <li>|</li>
                <li> Art Direction </li>
                <li>|</li>
                <li> UIUX </li>
                <li>|</li>
                <li> Publication </li>
                <li>|</li>

              </ul>
            </div>
          </Marquee>
        </div>
      </div>

      {/* Middle Image for large screens */}
      <div
        className="w-auto py-10 hidden sm:flex items-center justify-center text-[#2C2216] text-sm"
        ref={imageRef}
      >
        <Image src="/hero4x.png" alt="hero" width={1108} height={674} className="md:-ml-40" />
      </div>

      {/* Middle Image for mobile */}
      <div
        className="w-auto py-5 flex sm:hidden items-center justify-center text-[#2C2216] text-sm"
        ref={imageRef}
      >
        <Image src="/Heromobile.png" alt="hero" width={462} height={523} />
      </div>

      <div className="mt-8 flex flex-row items-center justify-between md:justify-center mx-4 md:mx-24">
        {/* Hero Content */}
        {/* Left Text Column (mobile stacked) */}
        <div className="flex text-[#2C2216] text-sm md:text-base leading-relaxed mx-1 max-w-[50%] sm:max-w-2xs md:max-w-full lg:mx-18">
          <p>
            I help consumer brands turn ideas into design-driven success. As a
            design partner, I craft identities, packaging, and brand experiences
            that don’t just look good—they sell, connect, and last. For me,
            great design isn’t decoration; it’s strategy, storytelling, and
            impact.
          </p>
        </div>

        <div className="flex text-[#2C2216] text-sm md:text-base leading-relaxed max-w-[50%] sm:max-w-2xs md:max-w-full mx-1 sm:mx-8 lg:mx-18">
          <p>
            I help consumer brands turn ideas into design-driven success. As a
            design partner, I craft identities, packaging, and brand experiences
            that don’t just look good—they sell, connect, and last. For me,
            great design isn’t decoration; it’s strategy, storytelling, and
            impact.
          </p>
        </div>
      </div>
    </section>
  );
}
