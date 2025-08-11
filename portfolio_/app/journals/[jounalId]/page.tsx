"use client"

import { notFound } from 'next/navigation'
import Navbar from '@/components/navbar';

// Mock data - in a real app, this would come from a database or API
const journalPosts = [
  {
    id: "1",
    date: "June, 2025",
    title: "Packaging Design - What makes it sell on shelves in retail shelves and carts",
    content: [
      "A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteo A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in rotein. A protein snacking brand based in india, redefining proteo",
      "A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteo A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in rotein. A protein snacking brand based in india, redefining proteo"
    ]
  },
  {
    id: "2",
    date: "July, 2025",
    title: "Brand Strategy - Building trust in competitive markets",
    content: [
      "A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteo A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in rotein. A protein snacking brand based in india, redefining proteo",
      "A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteo A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in rotein. A protein snacking brand based in india, redefining proteo"
    ]
  },
  {
    id: "3",
    date: "August, 2025",
    title: "Digital Marketing - ROI optimization techniques",
    content: [
      "A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteo A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in rotein. A protein snacking brand based in india, redefining proteo",
      "A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteo A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in rotein. A protein snacking brand based in india, redefining proteo"
    ]
  }
]

interface JournalDetailPageProps {
  params: Promise<{
    jounalId: string
  }>
}

export default async function JournalDetailPage({ params }: JournalDetailPageProps) {
  const { jounalId } = await params
  
  // Find the journal post by ID
  const post = journalPosts.find(p => p.id === jounalId)
  
  if (!post) {
    notFound()
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#FEFCE4]">
      <div className="mx-auto px-6 md:px-24 py-16 md:py-24">
        {/* Header Image - Gray rectangular area matching the design */}
        <div className="w-full h-[406px] md:h-[495px] bg-[#C8C8D0] mb-8 rounded-none">
          {/* Empty gray rectangle matching the attached image */}
        </div>
        
        {/* Date */}
        <p className="text-base text-[#C19570] mb-6 ">
          {post.date}
        </p>
        
        {/* Title */}
        <h1 className="text-xl md:text-[40px] font-domine leading-tight mb-8 text-[#2C2216] max-w-4xl">
          {post.title}
        </h1>
        
        {/* Content in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className='max-w-[350px] md:max-w-[620px]'>
            <p className="text-sm md:text-lg text-[#2C2216] leading-loose">
              {post.content[0]}
            </p>
            <div className='hidden md:block border-b border-[#2C2216] pt-40 max-w-xl'></div>
          </div>
          <div className='max-w-[350px] md:max-w-[620px]'>
            <p className="text-sm md:text-lg text-[#2C2216] leading-loose">
              {post.content[1]}
            </p>
            <div className='md:hidden border-b border-[#2C2216] pt-20 max-w-xl'></div>
          </div>
        </div>

        {/* New Section with left heading and right content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Left side - Section heading */}
          <div className="max-w-[360px] md:max-w-xl">
            {/* <div className="border-t border-[#2C2216] pt-8 mb-8"></div> */}
            <h2 className="text-2xl md:text-[32px] font-domine text-[#51331B] md:leading-[43px] md:tracking-[-1px]">
              /industry goes intoa . turmoil with bad decisions , poor design and a lack of judgement on part of designers
            </h2>
          </div>
          
          {/* Right side - Content sections */}
          <div className="space-y-12 max-w-[340px] md:max-w-[550px]">
            {/* First content block */}
            <div>
              <p className="text-sm md:text-base text-[#2C2216] leading-relaxed mb-8">
                A protein snacking brand based in india, redefining protein snacking in india as a mission to protein. A protein snacking brand based in india, redefining protein snacking in india as a mission to protein. A protein snacking brand based in india.
              </p>
            </div>

            {/* Second content block with heading */}
            <div>
              <h3 className="text-base md:text-lg font-bold text-[#2C2216] tracking-wider uppercase mb-4">
                WHAT DOES BRANDING MEAN?
              </h3>
              <p className="text-sm md:text-base text-[#2C2216] leading-relaxed">
                A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteo A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in rotein. A protein snacking brand based in india, redefining proteo
              </p>
            </div>

            {/* Third content block with heading */}
            <div>
              <h3 className="text-base md:text-lg font-bold text-[#2C2216] tracking-wider uppercase mb-4">
                WHAT DOES BRANDING MEAN?
              </h3>
              <p className="text-sm md:text-base text-[#2C2216] leading-relaxed">
                A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteo A protein snacking brand based in india, redefining proteon snacking in india as a mission to protein. A protein snacking brand based in india, redefining proteon snacking in rotein. A protein snacking brand based in india, redefining proteo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
