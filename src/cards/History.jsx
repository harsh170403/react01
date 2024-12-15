import React from 'react';

const History = ({ sidebarToggle }) => {
  return (
    <div className={`bg-black w-full min-h-screen flex-wrap flex justify-center items-center transition-all ${sidebarToggle ? '' : 'pl-56'}`}>
      <div className='grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-2 '>
        {/* Content */}
      </div>
    </div>
  );
};

export default History;
