import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/app/data'

const Footer = () => {
    return (
        <footer className='w-full pt-20 pb-10 ' id='contact'>
            <div className='w-full absolute left-0 bottom-72 min-h-96'>
                <img src='/footer-grid.svg'
                    alt='grid'
                    className='w-full h-full opacity-50' />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-purple'> your</span> digital presence
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>I got to make this with the help of a youtube video</p>
                <a href='mailto:contact@me@tedst'>
                    <MagicButton
                        title='Get in Touch'
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex m-16 md:flex-row flex-col justify-between'>
                <p className='md:text-base text-small md:font-normal font-light'>
                    Copyright @ 2024 Nikolai
                </p>
                <div className='flex items-center md:gap-3'>
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg  
                        saturate-150 bg-opacity-40 bg-black-100 rounded-lg border-black-300'>
                            <img src={profile.img} alt={profile.id.toString()}
                                width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer