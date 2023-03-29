import { useState } from 'react';

const ComoFunciona = () => {
  const [steps] = useState([
    {
      id: 1,
      title: 'Registrate',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus vitae velit lacinia gravida.',
    },
    {
      id: 2,
      title: 'Inicia sesión',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus vitae velit lacinia gravida.',
    },
    {
      id: 3,
      title: 'Genera tus preguntas',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus vitae velit lacinia gravida.',
    },
    {
      id: 4,
      title: 'Comparte tu formulario',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus vitae velit lacinia gravida.',
    },
    {
      id: 5,
      title: '¡Listo!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus vitae velit lacinia gravida.',
    },
  ]);

  return (
    <div className='container mx-auto py-12 lg:px-8'>
      <h2 className='text-4xl font-extrabold text-gray-900 mb-8'>
        ¿Cómo funciona?
      </h2>
      <div className='space-y-8'>
        {steps.map((step) => (
          <div key={step.id} className='flex'>
            <div className='inline-flex items-center justify-center h-12 w-12 rounded-full bg-black text-white mr-4'>
              <span className='text-2xl font-bold'>{step.id}</span>
            </div>
            <div>
              <h3 className='text-lg font-medium text-gray-900'>
                {step.title}
              </h3>
              <p className='mt-2 text-base text-gray-500'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComoFunciona;
