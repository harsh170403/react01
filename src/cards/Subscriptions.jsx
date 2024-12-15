// src/cards/Subscriptions.jsx
import React from 'react';

const Subscriptions = ({ sidebarToggle }) => {
  return (
    <div className={`bg-black w-full min-h-screen flex-wrap flex justify-center items-center transition-all ${sidebarToggle ? '' : 'pl-56'}`}>
      <div className='grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-2 '>
        <div className='w-81 p-2 text-white bg-black rounded-xl mt-4 lg:mt-0'>
          <a href="https://www.youtube.com/embed/JaGZp8vnDc4?si=INdfrEcN44Ux11JY" title="YouTube video player" >
            <img src="images/Screenshot from 2024-07-31 06-44-35.png" alt='' className="h-60 w-96 object-cover" />
            <div className="p-2 ">
              <h2 className='font-bold text-lg mb-2 inline-flex gap-3 '>
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                  <img src='images/Premium Photo _ Astronaut illustration logo icon.jpeg'/>
                </div>Kabbadi|Final Match </h2>
              <div className='flex items-center gap-2'>
                <span className='text-sm opacity-75 ml-14 '>eating challenge</span>
              </div>
              <span className='text-sm opacity-75 ml-14'>14M views | 2 Days ago</span>
            </div>
          </a>
        </div>
        {/* Repeat the above div for additional cards */}
      </div>
    </div>
  );
};

export default Subscriptions;
