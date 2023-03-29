import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { testimoniosData } from '../assets/constantes';

export default function Testimonios() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='bg-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Testimonios
          </h2>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 mx-auto'>
            Esto dicen nuestros usuarios acerca de Ask it
          </p>
        </div>
        <div className='mt-10'>
          <Slider {...settings}>
            {testimoniosData.map((testimonio) => (
              <div key={testimonio.id}>
                <div className=''>
                  <div className='relative rounded-lg '>
                    <div className=''></div>
                    <div className=''>
                      <img
                        className='w-full h-full object-cover'
                        src={testimonio.image}
                        alt={`Testimonio de ${testimonio.name}`}
                      />
                    </div>
                    <div className=''>
                      <blockquote className='mt-6'>
                        <div className='max-w-3xl mx-auto text-xl text-center text-gray-900'>
                          <p className='font-semibold'>{testimonio.name}</p>
                          <p className='text-gray-500'>{testimonio.email}</p>
                          <p className='mt-2'>{testimonio.comment}</p>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};