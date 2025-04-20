import React, { useState } from 'react';

// Import your home images
import HomeImg1 from '../assets/Gallery/Home/livingRooms12.jpg';
import HomeImg2 from '../assets/Gallery/Home/livingroom5.jpg';
import HomeImg3 from '../assets/Gallery/Home/enter.jpg';
import HomeImg4 from '../assets/Gallery/Home/enter2.jpg';
import HomeImg5 from '../assets/Gallery/Home/Hall1.jpg';
import HomeImg6 from '../assets/Gallery/Home/ceiling.jpg';
import HomeImg7 from '../assets/Gallery/Home/homeDeocrs1.jpg';
import HomeImg8 from '../assets/Gallery/Home/homeDecor2.jpg';
import HomeImg9 from '../assets/Gallery/Home/kitchen1.jpg';
import HomeImg10 from '../assets/Gallery/Home/Kitchen2.jpg';
import HomeImg11 from '../assets/Gallery/Home/kitchen3.jpg';
import HomeImg12 from '../assets/Gallery/Home/kitchens1.jpg';
import HomeImg13 from '../assets/Gallery/Home/room2.jpg';
import HomeImg14 from '../assets/Gallery/Home/room8.jpg';
import HomeImg15 from '../assets/Gallery/Home/room10.jpg';
import HomeImg16 from '../assets/Gallery/Home/room15.jpg';
import HomeImg17 from '../assets/Gallery/Home/rooms9.jpg';
import HomeImg18 from '../assets/Gallery/Home/self.jpg';
import HomeImg19 from '../assets/Gallery/Home/studyTable.jpg';
import HomeImg20 from '../assets/Gallery/Home/workship.jpg';
import HomeImg21 from '../assets/Gallery/Home/Homeoffice.jpg';
import HomeImg22 from '../assets/Gallery/Home/dining3.jpg';
import HomeImg23 from '../assets/Gallery/Home/bathroom.2.jpg';
import HomeImg24 from '../assets/Gallery/Home/bathroom3.jpg';

// Office Images
import OfficeImg1 from '../assets/Gallery/Office/receptionHall.jpg';
import OfficeImg2 from '../assets/Gallery/Office/Waiting Hall.jpg';
import OfficeImg3 from '../assets/Gallery/Office/office Cabin.jpg';
import OfficeImg4 from '../assets/Gallery/Office/employeeCabin.jpg';
import OfficeImg5 from '../assets/Gallery/Office/cabin.jpg';
import OfficeImg6 from '../assets/Gallery/Office/DiscussionRoom.jpg';
import OfficeImg7 from '../assets/Gallery/Office/GroupMeeting.jpg';
import OfficeImg8 from '../assets/Gallery/Office/teamMeeting.jpg';
import OfficeImg9 from '../assets/Gallery/Office/MeetingRoom.jpg';
import OfficeImg10 from '../assets/Gallery/Office/Office Room.jpg';
import { useNavigate } from 'react-router-dom'; 
 
 
export const Gallery = () => {
  const navigate = useNavigate();
  const homeImages = [
    HomeImg1, HomeImg2, HomeImg3, HomeImg4,
    HomeImg5, HomeImg6, HomeImg7, HomeImg8,
    HomeImg9, HomeImg10, HomeImg11, HomeImg12,
    HomeImg13, HomeImg14, HomeImg15, HomeImg16,
    HomeImg17, HomeImg18, HomeImg19, HomeImg20,
    HomeImg21, HomeImg22, HomeImg23, HomeImg24,
  ];

  const officeImages = [
    OfficeImg1, OfficeImg2, OfficeImg3, OfficeImg4,
    OfficeImg5, OfficeImg6, OfficeImg7, OfficeImg8,
    OfficeImg9, OfficeImg10
  ];
  const fixedGridImages = homeImages.slice(0, 8);
  const scrollableImages = homeImages.slice(8); 
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);
  return (
    <div className='w-full bg-gradient-to-b from-gray-50 to-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Our Design <span className='text-blue-600'>Gallery</span>
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Explore our curated collections of beautifully designed spaces that inspire and delight.
          </p>
        </div>

        {/* Home Collection Section */}
        <section className='mb-20'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-8'>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
                Home Collection
              </h2>
              <p className='text-gray-600 max-w-2xl'>
                Elegant living spaces designed for comfort, functionality, and timeless beauty.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10'>
            {fixedGridImages.map((img, idx) => (
              <div 
                key={`home-${idx}`}
                className='relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'
              >
                <img
                  src={img}
                  alt={`Home design ${idx + 1}`}
                  loading='lazy'
                  className='w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            ))}
          </div>

          <div className='relative'>
            <div className='flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide'>
              <div className='flex space-x-6'>
                {scrollableImages.map((img, idx) => (
                  <div 
                    key={`home-scroll-${idx}`}
                    className='relative flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'
                  >
                    <img
                      src={img}
                      alt={`Home design ${idx + 9}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Office Collection Section */}
        <section className='mb-20'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-8'>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
                Office Collection
              </h2>
              <p className='text-gray-600 max-w-2xl'>
                Productive workspaces that blend functionality with modern aesthetics.
              </p>
            </div>
          </div>

          <div className='md:hidden grid grid-cols-2 gap-4 mb-6'>
            {officeImages.slice(0, 4).map((img, idx) => (
              <div 
                key={`office-mobile-${idx}`}
                className='relative overflow-hidden rounded-xl shadow-md'
              >
                <img
                  src={img}
                  alt={`Office design ${idx + 1}`}
                  className='w-full h-48 object-cover'
                />
              </div>
            ))}
          </div>

          <div className='hidden md:block relative'>
            <div className='flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide'>
              <div className='flex space-x-6'>
                {officeImages.map((img, idx) => (
                  <div 
                    key={`office-desktop-${idx}`}
                    className='relative flex-shrink-0 w-64 h-72 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300'
                  >
                    <img
                      src={img}
                      alt={`Office design ${idx + 1}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='md:hidden relative'>
            <div className='flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide'>
              <div className='flex space-x-4'>
                {officeImages.slice(4).map((img, idx) => (
                  <div 
                    key={`office-mobile-scroll-${idx}`}
                    className='relative flex-shrink-0 w-48 h-56 rounded-xl overflow-hidden shadow-md'
                  >
                    <img
                      src={img}
                      alt={`Office design ${idx + 5}`}
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center'>
          <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
            Ready to Transform Your Space?
          </h3>
          <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
            Let's create something beautiful together. Book a consultation with our design experts today.
          </p>
          <button 
            onClick={openConsultation}
            className='px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl'
          >
            Schedule Consultation
          </button>
          <Consultation isOpen={isConsultationOpen} onClose={closeConsultation} />
        </section>
      </div>
    </div>
  );
};