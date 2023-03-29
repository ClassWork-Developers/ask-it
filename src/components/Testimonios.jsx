import { useQuery } from 'react-query';
import Slider from 'react-slick';

const testimoniosData = [
  {
    id: 1,
    name: 'Mario Casas',
    email: 'mariocss@example.com',
    comment: 'La aplicación es excelente, me ha ayudado mucho como reclutador',
    image: 'https://picsum.photos/800/400?random=1',
  },
  {
    id: 2,
    name: 'Leid Smith',
    email: 'leissmith@example.com',
    comment: 'Ask it es la mejor herramienta para hacer formularios',
    image: 'https://picsum.photos/800/400?random=2',
  },
  {
    id: 3,
    name: 'Danner Loms',
    email: 'nnerloson@example.com',
    comment: 'He mejorado mi conocimiento gracias a la comunidad de Ask it',
    image: 'https://picsum.photos/800/400?random=3',
  },
];

const Testimonios = () => {
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

export default Testimonios;
