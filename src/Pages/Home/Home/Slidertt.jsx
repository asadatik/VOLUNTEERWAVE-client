

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination, Navigation } from 'swiper/modules';



const Slidertt = () => {
    return (
        <div className="  " >
             <Swiper
        slidesPerView={1}
        spaceBetween={30}
    
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

        pagination={{
          clickable: true,
           
        }}
        navigation={true}
        modules={ [Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
           <SwiperSlide   >
            
        <div
      className='w-full bg-center bg-cover h-[700px]'
      style={{
        backgroundImage:` url(https://i.ibb.co/QMp0DHN/pexels-rdne-6646949.jpg)`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
        <div className='text-white space-y-7  '>
                        <h2 className='lg:text-5xl text-amber-300 font-bold'>Join Hands, Change Lives: Volunteer Today!</h2>
                        <p className="text-xl" >Make a difference, one act of kindness at a time. Join us in our mission to create positive change in our community. <br /> Volunteer today and be the change you wish to see in the world.
                        Empowerment in Action: Unite, Serve, Transform. <br /> Volunteer with us to create a brighter tomorrow for all. Your time, your effort, your impact – join us today.
                        </p>
                        
                    </div>
          <br />
       
        </div>
      </div>
       </div>
            
            </SwiperSlide>
        
            <SwiperSlide   >
            
            <div
          className='w-full bg-center bg-cover h-[700px]'
          style={{
            backgroundImage:` url(https://i.ibb.co/rsxy424/pexels-shvetsa-5029919-1.jpg)`,
          }}
        >
          <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
            <div className='text-center'>
            <div className='text-white space-y-7  '>
                            <h2 className='lg:text-5xl text-amber-300 font-bold'>Join Hands, Change Lives: Volunteer Today!</h2>
                            <p className="text-xl" >Make a difference, one act of kindness at a time. Join us in our mission to create positive change in our community. <br /> Volunteer today and be the change you wish to see in the world.
                            Empowerment in Action: Unite, Serve, Transform. <br /> Volunteer with us to create a brighter tomorrow for all. Your time, your effort, your impact – join us today.
                            </p>
                            
                        </div>
              <br />
           
            </div>
          </div>
           </div>
                
                </SwiperSlide>
            
                <SwiperSlide   >
            
            <div
          className='w-full bg-center bg-cover h-[700px]'
          style={{
            backgroundImage:` url(https://i.ibb.co/xYpCgkt/group-happy-african-volunteers-hugs-park-africa-volunteering-charity-people-ecology-concept.jpg)`,
          }}
        >
          <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
            <div className='text-center'>
            <div className='text-white space-y-7  '>
                            <h2 className='lg:text-5xl text-amber-300 font-bold'>Join Hands, Change Lives: Volunteer Today!</h2>
                            <p className="text-xl" >Make a difference, one act of kindness at a time. Join us in our mission to create positive change in our community. <br /> Volunteer today and be the change you wish to see in the world.
                            Empowerment in Action: Unite, Serve, Transform. <br /> Volunteer with us to create a brighter tomorrow for all. Your time, your effort, your impact – join us today.
                            </p>
                            
                        </div>
              <br />
           
            </div>
          </div>
           </div>
                
                </SwiperSlide>



         <SwiperSlide   >
            
        <div
      className='w-full bg-center bg-cover h-[700px]'
      style={{
        backgroundImage:` url(https://i.ibb.co/hCv0p9L/1000-F-32069160-96-Jp-OLq-NYK15-MBN3-UPl-XBp-Zjuj3-Hy-Gqx-1.jpg)`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
        <div className='text-white space-y-7  '>
                        <h2 className='lg:text-5xl text-amber-300 font-bold'>Join Hands, Change Lives: Volunteer Today!</h2>
                        <p className="text-xl" >Make a difference, one act of kindness at a time. Join us in our mission to create positive change in our community. <br /> Volunteer today and be the change you wish to see in the world.
                        Empowerment in Action: Unite, Serve, Transform. <br /> Volunteer with us to create a brighter tomorrow for all. Your time, your effort, your impact – join us today.
                        </p>
                        
                    </div>
          <br />
       
        </div>
      </div>
       </div>
            
            </SwiperSlide>

            <SwiperSlide   >
            
            <div
          className='w-full bg-center bg-cover h-[700px]'
          style={{
            backgroundImage:` url(https://i.ibb.co/88XWj24/1000-F-108593517-Q2klc5-W2eb-JL03gb-EW4-P5-B3a-PH9-K0-HHH-1.jpg)`,
          }}
        >
          <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
            <div className='text-center'>
            <div className='text-white space-y-7  '>
                            <h2 className='lg:text-5xl text-amber-300 font-bold'>Join Hands, Change Lives: Volunteer Today!</h2>
                            <p className="text-xl" >Make a difference, one act of kindness at a time. Join us in our mission to create positive change in our community. <br /> Volunteer today and be the change you wish to see in the world.
                            Empowerment in Action: Unite, Serve, Transform. <br /> Volunteer with us to create a brighter tomorrow for all. Your time, your effort, your impact – join us today.
                            </p>
                            
                        </div>
              <br />
           
            </div>
          </div>
           </div>
                
                </SwiperSlide>

        
      </Swiper>

        </div>
    );
};

export default Slidertt;