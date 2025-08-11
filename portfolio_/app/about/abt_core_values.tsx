"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function AbtCoreValues() {
    const [isPackagingOpen, setIsPackagingOpen] = useState(true);
    const [isBrandingOpen, setIsBrandingOpen] = useState(false);

    return (
        <section className="py-8 lg:py-16">
            <div className="w-[90%] mx-auto md:px-6 lg:px-4">
                <div className="text-center mb-8 lg:mb-16">
                    <h2 className="text-[#51331B] text-xs lg:text-sm font-normal tracking-[2px] lg:tracking-[4px] leading-6 lg:leading-7 uppercase mb-4 lg:mb-8">
                        THE CORE OFFERINGS AND THE EXACT METHOD ,<br/> APPROACH AND PROCESS AND DELIVERABLES:
                    </h2>
                </div>
                
                <div className="space-y-4 lg:space-y-8">
                    {/* Branding Section */}
                    <div className="border-t border-[#51331B] pt-4 pb-0 lg:py-8">
                        {/* CHANGE 1: Use flex for main header and chevron alignment */}
                        <div className="flex justify-between items-center lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start">
                            <div className="lg:col-span-1">
                                <h3 className="text-3xl lg:text-5xl font-light text-[#51331B] mb-2 lg:mb-4 mt-2 lg:mt-4">
                                    /branding
                                </h3>
                            </div>
                            <div className="lg:col-span-2 flex justify-end"> {/* Ensure button stays right on desktop too */}
                                <div className="mb-2 lg:mb-4">
                                    <button onClick={() => setIsBrandingOpen(!isBrandingOpen)} className="p-2 -mr-2">
                                        {isBrandingOpen ? (
                                            <ChevronUp className="w-6 h-6 lg:w-8 lg:h-8 text-[#51331B]" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 lg:w-8 lg:h-8 text-[#51331B]" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <AnimatePresence>
                            {isBrandingOpen && (
                                <motion.div 
                                    className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-start -mt-4 lg:-mt-12"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    {/* Left Column - Packaging Image */}
                                    <div className="lg:col-span-1 mt-8 md:mt-20 lg:mt-40">
                                        <div className="w-48 h-48 lg:w-64 lg:h-64 bg-amber-100 rounded-lg overflow-hidden mx-auto lg:mx-0">
                                            <Image 
                                                src="/Mask-group.png" 
                                                alt="Packaging Design" 
                                                width={340}
                                                height={356}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Right Column - Content sections for Branding */}
                                    <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                                        {/* Approach Section */}
                                        {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                        <div className="grid grid-cols-2 items-start">
                                            <div className="col-span-1"> {/* Subheading takes 1 column */}
                                                <h4 className="text-base lg:text-xl font-medium text-[#51331B]">
                                                    /approach
                                                </h4>
                                            </div>
                                            <div className="col-span-1"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                                <p className="text-sm lg:text-base text-[#51331B] leading-6 lg:leading-7 pr-0 lg:pr-16 -ml-6 lg:-ml-28 tracking-tight">
                                                    A data driven, brand narrative driven approach to position your brand as a leader in the space. A data driven, brand narrative driven approach to position your brand as a leader in the space.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Process Section */}
                                        <div className="pt-4 lg:pt-6">
                                            <div className="border-t border-[#51331B] mr-0 lg:mr-20"></div>
                                            {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                            <div className="grid grid-cols-2 items-start pt-4 lg:pt-6">
                                                <div className="col-span-1"> {/* Subheading takes 1 column */}
                                                    <h4 className="text-base lg:text-xl font-medium text-[#51331B]">
                                                        /process
                                                    </h4>
                                                </div>
                                                <div className="col-span-1"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                                    <div className="relative pr-0 lg:pr-20 -ml-6 lg:-ml-28">
                                                        <div className="absolute left-0 top-2 lg:top-3 w-px bg-[#51331B]" style={{ height: 'calc(100% - 1.25rem)' }}></div>
                                                        <div className="space-y-2 lg:space-y-4 ml-4 lg:ml-6 leading-6 lg:leading-7">
                                                            <div className="flex items-center">
                                                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#51331B] rounded-full -ml-5 lg:-ml-7 mr-2 lg:mr-4 relative z-10"></div>
                                                                <span className="text-sm lg:text-base text-[#51331B]">Deliverable or step 1</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#51331B] rounded-full -ml-5 lg:-ml-7 mr-2 lg:mr-4 relative z-10"></div>
                                                                <span className="text-sm lg:text-base text-[#51331B]">Deliverable or step 2</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#51331B] rounded-full -ml-5 lg:-ml-7 mr-2 lg:mr-4 relative z-10"></div>
                                                                <span className="text-sm lg:text-base text-[#51331B]">Deliverable or step 3</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#51331B] rounded-full -ml-5 lg:-ml-7 mr-2 lg:mr-4 relative z-10"></div>
                                                                <span className="text-sm lg:text-base text-[#51331B]">Deliverable or step 4</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Deliverables Section */}
                                        <div className="pt-4 lg:pt-6">
                                            <div className="border-t border-[#51331B] mr-0 lg:mr-20"></div>
                                            {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                            <div className="grid grid-cols-2 items-start pt-4 lg:pt-6">
                                                <div className="col-span-1"> {/* Subheading takes 1 column */}
                                                    <h4 className="text-base lg:text-xl font-medium text-[#51331B]">
                                                        /deliverables
                                                    </h4>
                                                </div>
                                                <div className="col-span-1 mb-4 lg:mb-8"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                                    <p className="text-sm lg:text-base text-[#51331B] pr-0 lg:pr-16 -ml-6 lg:-ml-28 leading-6 lg:leading-7 tracking-tight">
                                                        Understanding the Product, Creative Direction, Structural Design Graphics, Sampling, Testing
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    
                    {/* Packaging Section */}
                    <div className="border-t border-[#51331B] pt-4 pb-0 lg:py-8">
                        {/* CHANGE 1: Use flex for main header and chevron alignment */}
                        <div className="flex justify-between items-center lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start">
                            <div className="lg:col-span-1">
                                <h3 className="text-3xl lg:text-5xl font-light text-[#51331B] mb-2 lg:mb-4 mt-2 lg:mt-4">
                                    /packaging
                                </h3>
                            </div>
                            <div className="lg:col-span-2 flex justify-end"> {/* Ensure button stays right on desktop too */}
                                <div className="mb-2 lg:mb-4">
                                    <button onClick={() => setIsPackagingOpen(!isPackagingOpen)} className="p-2 -mr-2">
                                        {isPackagingOpen ? (
                                            <ChevronUp className="w-6 h-6 lg:w-8 lg:h-8 text-[#51331B]" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 lg:w-8 lg:h-8 text-[#51331B]" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <AnimatePresence>
                            {isPackagingOpen && (
                                <motion.div 
                                    className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-start -mt-4 lg:-mt-12"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    {/* Left Column - Packaging Image */}
                                    <div className="lg:col-span-1 mt-8 md:mt-20 lg:mt-40">
                                        <div className="w-48 h-48 lg:w-64 lg:h-64 bg-amber-100 rounded-lg overflow-hidden mx-auto lg:mx-0">
                                            <Image 
                                                src="/Mask-group.png" 
                                                alt="Packaging Design" 
                                                width={340}
                                                height={356}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Right Column - Content sections */}
                                    <div className="lg:col-span-2 space-y-4 lg:space-y-6">
                                        {/* Approach Section */}
                                        {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                        <div className="grid grid-cols-2 items-start">
                                            <div className="col-span-1"> {/* Subheading takes 1 column */}
                                                <h4 className="text-base lg:text-xl font-medium text-[#51331B]">
                                                    /approach
                                                </h4>
                                            </div>
                                            <div className="col-span-1"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                                <p className="text-sm lg:text-base text-[#51331B] leading-6 lg:leading-7 pr-0 lg:pr-16 -ml-6 lg:-ml-28 tracking-tight">
                                                    A data driven, brand narrative driven approach to position your brand as a leader in the space. A data driven, brand narrative driven approach to position your brand as a leader in the space.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Process Section */}
                                        <div className="pt-4 lg:pt-6">
                                            <div className="border-t border-[#51331B] mr-0 lg:mr-20"></div>
                                            {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                            <div className="grid grid-cols-2 items-start pt-4 lg:pt-6">
                                                <div className="col-span-1"> {/* Subheading takes 1 column */}
                                                    <h4 className="text-base lg:text-xl font-medium text-[#51331B]">
                                                        /process
                                                    </h4>
                                                </div>
                                                <div className="col-span-1"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                                    <div className="relative pr-0 lg:pr-20 -ml-6 lg:-ml-28">
                                                        <div className="absolute left-0 top-2 lg:top-3 w-px bg-[#51331B]" style={{ height: 'calc(100% - 1.25rem)' }}></div>
                                                        <div className="space-y-2 lg:space-y-4 ml-4 lg:ml-6 leading-6 lg:leading-7">
                                                            <div className="flex items-center">
                                                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#51331B] rounded-full -ml-5 lg:-ml-7 mr-2 lg:mr-4 relative z-10"></div>
                                                                <span className="text-sm lg:text-base text-[#51331B]">Deliverable or step 1</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#51331B] rounded-full -ml-5 lg:-ml-7 mr-2 lg:mr-4 relative z-10"></div>
                                                                <span className="text-sm lg:text-base text-[#51331B]">Deliverable or step 2</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#51331B] rounded-full -ml-5 lg:-ml-7 mr-2 lg:mr-4 relative z-10"></div>
                                                                <span className="text-sm lg:text-base text-[#51331B]">Deliverable or step 3</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#51331B] rounded-full -ml-5 lg:-ml-7 mr-2 lg:mr-4 relative z-10"></div>
                                                                <span className="text-sm lg:text-base text-[#51331B]">Deliverable or step 4</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Deliverables Section */}
                                        <div className="pt-4 lg:pt-6">
                                            <div className="border-t border-[#51331B] mr-0 lg:mr-20"></div>
                                            {/* CHANGE 2: grid-cols-2 for mobile for subheadings and content */}
                                            <div className="grid grid-cols-2 items-start pt-4 lg:pt-6">
                                                <div className="col-span-1"> {/* Subheading takes 1 column */}
                                                    <h4 className="text-base lg:text-xl font-medium text-[#51331B]">
                                                        /deliverables
                                                    </h4>
                                                </div>
                                                <div className="col-span-1 mb-4 lg:mb-8"> {/* Content takes 1 column on mobile, 2 on desktop */}
                                                    <p className="text-sm lg:text-base text-[#51331B] pr-0 lg:pr-16 -ml-6 lg:-ml-28 leading-6 lg:leading-7 tracking-tight">
                                                        Understanding the Product, Creative Direction, Structural Design Graphics, Sampling, Testing
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    
                    <div className="border-t border-[#51331B]"></div>
                </div>
            </div>
        </section>
    );
}