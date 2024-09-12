'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBackGround";
import { techStackRow1, techStackRow2 } from "@/app/data";
import Lottie from "react-lottie";
import { useState } from "react";
import { animate } from "framer-motion";
import animationData from "@/app/data/confetti.json"
import MagicButton from "./MagicButton";
import { IoCafeOutline } from "react-icons/io5";


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
    link,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    link?: string;
}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('testssss');

        setCopied(true);
    }
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                background: 'rgb(2,0,36)',
                backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(117,34,139,1) 37%, rgba(120,9,121,1) 88%)'
            }}
        >

            <div className={cn(
                titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>

                <div className="font-sans font-extralight text-[#cb61e7] text-sm md:text-xs lg:text-base z-10 ">
                    {description}
                </div>
                <div className="font-sans font-bold  text-lg lg:text-3xl max-w-96 z-10 ">
                    {title}



                    {id === 1 && (
                        <div className="flex gap-1 lg:gap-5 w-fit
                                absolute -right-3 lg:right-2 ">

                            <div className="flex flex-col gap-3 lg:gap-8 ">

                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                                {techStackRow1.map((items, index) => (
                                    <span key={index} className="py=2 lg:py4 lg:px-3 px-3 lg:px-3 text-xs lg:text-base opacity-50 
                                                    lg:opacity-100 rounded-lg text-center bg-[#10132E] ">
                                        {items.item}
                                    </span>
                                ))}


                            </div>

                            <div className="flex flex-col gap-3 lg:gap-8 ">

                                {techStackRow2.map((items, index) => (
                                    <span key={index} className="py=2 lg:py4 lg:px-3 px-3 lg:px-3 text-xs lg:text-base opacity-50
                                                    lg:opacity-100 rounded-lg text-center bg-[#10132E] ">
                                        {items.item}
                                    </span>
                                ))}
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                            </div>

                        </div>


                    )}

                </div>

                <div className={`${id === 3} && 'flex justify-center h-full`}>
                    {id === 3 && (
                        <BackgroundGradientAnimation>
                            <div className="absolute z-50 inset-0 flex items-center justify-center 
                        text-white font-bold px-4 pointer-events-none 
                        text-3xl text-center md:text-4xl lg:text-7xl rounded-lg"></div>

                        </BackgroundGradientAnimation>
                    )}
                    {id === 3 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }} />
                            </div>
                            <MagicButton
                                title={copied ? 'Email copied' : 'Copy my Email'}
                                icon={<IoCafeOutline />}
                                otherClasses="!bg-[#161a31]"
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
