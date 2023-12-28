import React from 'react';
import Link from 'next/link';
import Box from './Container/container';
import './About.css';

export default function About() {
  return (
    <div className='w-full md:text-center text-white p-10 lg:px-40 py-24 mt-96 pt-80 abc'>
      <h1 className='className=text-4xl md:text-5xl font-semibold leading-20 md:leading-[60px] mt-0'>
        About Bsides Dehradun
      </h1>
      <p className='my-3 text-gray-300 text-[14px]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit nulla quasi labore, suscipit
        inventore quo, ut impedit consequatur id velit esse aliquid maxime vitae veritatis, sit
        debitis delectus ex iure?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Praesentium facilis illo enim iure perferendis incidunt, suscipit possimus natus voluptates
        repellendus eos. Quidem a reiciendis voluptatem placeat odio cupiditate minima voluptatum.
      </p>
      <Box />
    </div>
  );
}
