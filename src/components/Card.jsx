// Card.js
import React from 'react';
import videos from './videoData';

const Card = ({ sidebarToggle }) => {
  return (
    <div className={`bg-black w-full min-h-screen flex-wrap flex justify-center items-center transition-all ${sidebarToggle ? '' : 'pl-56'}`}>
      <div className='grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-2'>
        {videos.map((video, index) => (
          <div key={index} className='w-81 p-2 text-white bg-black rounded-xl mt-4 lg:mt-0'>
            <a href={video.href} title="YouTube video player">
              <img src={video.imgSrc} alt='' className="h-60 w-91 object-cover" />
              <div className="p-2">
                <h2 className='font-bold text-lg mb-2 inline-flex gap-3'>
                  <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src={video.userImg} alt='user' />
                  </div>
                  {video.title}
                </h2>
                <div className='flex items-center gap-2'>
                  <span className='text-sm opacity-75 ml-14'>{video.user}</span>
                </div>
                <span className='text-sm opacity-75 ml-14'>{video.views} | {video.time}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
