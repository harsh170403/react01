import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ sidebarToggle }) => {
  return (
    <div className={`bg-black w-full min-h-screen flex-wrap flex justify-center items-center transition-all ${sidebarToggle ? '' : 'pl-56'}`}>
     <div className='grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-2 '>

      <div className='w-81 p-2 text-white bg-black rounded-xl mt-4 lg:mt-0'>
        
       <a href="https://www.youtube.com/embed/XE03qdGZrPc?si=BJGhGc2k_GyZy_Gf" title="YouTube video player" > 
       <img src="images/Screenshot from 2024-07-31 06-43-12.png" alt='' className="h-60 w-91 object-cover" />
        <div className="p-2 ">
          <h2 className='font-bold text-lg mb-2 inline-flex gap-3 '>
             <div className="flex h-8 w-8 overflow-hidden rounded-full  md:ml-4">
                <img src='images/Premium Photo _ Astronaut illustration logo icon.jpeg'/>
              </div> Eating challenge| win $2000</h2>
          <div className='flex items-center gap-2'>
            <span className='text-sm  opacity-75 ml-14 '>Food vloger</span>
          </div>
          <span className='text-sm  opacity-75 ml-14'>14k views | 11 Hours ago</span>
        </div></a>
      </div>

        
      <div className='w-81 p-2 text-white bg-black rounded-xl mt-4 lg:mt-0'>
      
      <a href="https://www.youtube.com/embed/T5-uapHB2ek?si=TyEMCbqw2cKgXMTj" title="YouTube video player"  > 
        <img src="images/Screenshot from 2024-07-31 06-43-46.png" alt='' className="h-60 w-96 object-cover" />
        <div className="p-2 ">
          <h2 className='font-bold text-lg mb-2 inline-flex gap-3 '>
             <div className="flex h-8 w-8 overflow-hidden rounded-full  md:ml-4">
                <img src='images/Premium Photo _ Astronaut illustration logo icon.jpeg'/>
              </div>The Legend of Teachers</h2>
          <div className='flex items-center gap-2'>
            <span className='text-sm  opacity-75 ml-14 '>Samay Raina</span>
          </div>
          <span className='text-sm  opacity-75 ml-14'>4.6M views| 3 weeks ago</span>
        </div></a>
      </div>  


      <div className='w-81 p-2 text-white bg-black rounded-xl mt-4 lg:mt-0'>
     
      <a href="https://www.youtube.com/embed/oRapwDWgElQ?si=9jmURHH6AeI803Zs" title="YouTube video player"   > 
        <img src="images/Screenshot from 2024-07-31 06-44-15.png" alt='' className="h-60 w-96 object-cover" />
        <div className="p-2 ">
          <h2 className='font-bold text-lg mb-2 inline-flex gap-3 '>
             <div className="flex h-8 w-8 overflow-hidden rounded-full  md:ml-4">
                <img src='images/Premium Photo _ Astronaut illustration logo icon.jpeg'/>
              </div>Pro vs Noobs Art on Street</h2>
          <div className='flex items-center gap-2'>
            <span className='text-sm  opacity-75 ml-14 '>Street Art</span>
          </div>
          <span className='text-sm  opacity-75 ml-14'>140k views | 6 Days ago</span>
        </div></a>
      </div> 


      <div className='w-81 p-2 text-white bg-black rounded-xl mt-4 lg:mt-0'>
      <a href="https://www.youtube.com/embed/JaGZp8vnDc4?si=INdfrEcN44Ux11JY" title="YouTube video player" >
        <img src="images/Screenshot from 2024-07-31 06-44-35.png" alt='' className="h-60 w-96 object-cover" />
        <div className="p-2 ">
          <h2 className='font-bold text-lg mb-2 inline-flex gap-3 '>
             <div className="flex h-8 w-8 overflow-hidden rounded-full  md:ml-4">
                <img src='images/Premium Photo _ Astronaut illustration logo icon.jpeg'/>
              </div>Kabbadi|Final Match </h2>
          <div className='flex items-center gap-2'>
            <span className='text-sm  opacity-75 ml-14 '>eating challenge</span>
          </div>
          <span className='text-sm  opacity-75 ml-14'>14M views | 2 Days ago</span>
        </div></a>
      </div> 

      <div className='w-81 p-2 text-white bg-black rounded-xl mt-4 lg:mt-0'>
        <a href="https://www.youtube.com/embed/6JVuyccDz-E?si=CjP6RRPhfRmSePq5" title="YouTube video player">
        <img src="images/Screenshot from 2024-07-31 06-45-06.png" alt='' className="h-60 w-96 object-cover" />
        <div className="p-2 ">
          <h2 className='font-bold text-lg mb-2 inline-flex gap-3 '>
             <div className="flex h-8 w-8 overflow-hidden rounded-full  md:ml-4">
                <img src='images/Premium Photo _ Astronaut illustration logo icon.jpeg'/>
              </div>Roommates in hostal</h2>
          <div className='flex items-center gap-2'>
            <span className='text-sm  opacity-75 ml-14 '>Amazon-Mini-TV</span>
          </div>
          <span className='text-sm  opacity-75 ml-14'>4k views | 11 WEEKS ago</span>
        </div></a>
      </div> 


      <div className='w-81 p-2 text-white bg-black rounded-xl mt-4 lg:mt-0'>
        <a href="https://www.youtube.com/embed/IVRDQcx30Sw?si=Du9jTDBmwEqEYctm" title="YouTube video player">
        <img src="images/Screenshot from 2024-07-31 06-45-37.png" alt='' className="h-60 w-96 object-cover" />
        <div className="p-2 ">
          <h2 className='font-bold text-lg mb-2 inline-flex gap-3 '>
             <div className="flex h-8 w-8 overflow-hidden rounded-full  md:ml-4">
                <img src='images/Premium Photo _ Astronaut illustration logo icon.jpeg'/>
              </div>Rap Song Karn Vs Arjun</h2>
          <div className='flex items-center gap-2'>
            <span className='text-sm  opacity-75 ml-14 '>Rap shows</span>
          </div>
          <span className='text-sm  opacity-75 ml-14'>1M views | 5 Days ago</span>
        </div></a>
      </div> 


      <div className='w-81 p-2 text-white bg-black rounded-xl mt-4 lg:mt-0'>
        <a href="https://www.youtube.com/embed/c069MnqA6L4?si=NaIfc5mb1UmTFvfV" title="YouTube video player" >
        <img src="images/Screenshot from 2024-08-02 10-35-18.png" alt='' className="h-60 w-96 object-cover" />
        <div className="p-2 ">
          <h2 className='font-bold text-lg mb-2 inline-flex gap-3 '>
             <div className="flex h-8 w-8 overflow-hidden rounded-full  md:ml-4">
                <img src='images/Premium Photo _ Astronaut illustration logo icon.jpeg'/>
              </div>Doremon new movie </h2>
          <div className='flex items-center gap-2'>
            <span className='text-sm  opacity-75 ml-14 '>Cartoon Network</span>
          </div>
          <span className='text-sm  opacity-75 ml-14'>14k views | 11 Hours ago</span>
        </div></a>
      </div> 


      <div className='w-81 p-2 text-white bg-black rounded-xl mt-4 lg:mt-0'>
        <a href="https://www.youtube.com/embed/mv2qap8jZGE?si=RJmLvN87cgWV5b3u" title="YouTube video player" >
        <img src="images/Screenshot from 2024-08-01 05-24-44.png" alt='' className="h-60 w-96 object-cover" />
        <div className="p-2 ">
          <h2 className='font-bold text-lg mb-2 inline-flex gap-3 '>
             <div className="flex h-8 w-8 overflow-hidden rounded-full  md:ml-4">
                <img src='images/Premium Photo _ Astronaut illustration logo icon.jpeg'/>
              </div>Flood in kerla </h2>
          <div className='flex items-center gap-2'>
            <span className='text-sm  opacity-75 ml-14 '>NDT NEWS</span>
          </div>
          <span className='text-sm  opacity-75 ml-14'>100K views | 1 Hours ago</span>
        </div></a>
      </div>

 
      </div>
    </div>
  );
};

export default Card;
