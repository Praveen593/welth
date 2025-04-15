import React from "react";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import HeroImg1 from "@/public/hero1.jpg";
import HeroImg3 from "@/public/hero3.jpg";
import HeroImg2 from "@/public/hero2.jpg";
import HeroImg4 from "@/public/hero4.jpg";

 
const HeroSection = () => {
  return(
   <div className="pb-20 mt-40 ">
        <div className="py-16 md:py-10 " >
            <h1 className="px-10 pb-2 text-5xl md:text-6xl lg:text-8xl text-center text-transparent bg-gradient-to-t from-green-500 to-blue-500 tracking-tighter bg-clip-text font-bold cursor-default">

              Transform Your Finances with <br/>AI Magic
            </h1>
            <p className=" text-white md:text-xl lg:text-2xl text-center py-3 px-10 md:px-30">
            Effortlessly Track. Instantly Analyze. Smartly Save. With our cutting-edge AI, managing your money is no longer a chore<br/> – it's a breeze.
            </p>
            <div className="mt-5 flex justify-center  ">
              <Button size="lg" variant="outline" className="md:px-7 md:py-6 md:text-xl text-sm hover:duration-300 hover:bg-transparent hover:text-white hover:shadow-2xl">
              <Link href="/dashboard" >Get Started</Link>
              </Button>
            </div>
            <div className="-z-20 flex absolute top-20  ">
              <div>
                <Image 
                src={HeroImg3}
                alt="HeroImage"
                className="h-[700px] object-cover object-center"/>
              </div>
              <div>
                <Image 
                src={HeroImg4}
                alt="HeroImage"
                className="h-[700px] object-cover object-center"/>
              </div>
              <div>
                <Image 
                src={HeroImg1}
                alt="HeroImage"
                className="h-[700px] object-cover object-center"/>
              </div>
              <div>
                <Image 
                src={HeroImg2}
                alt="HeroImage"
                className="h-[700px] object-cover object-center"/>
              </div>

            </div>
        </div>
    </div>
  );
}

export default HeroSection;