import { steps } from '../assets/constantes';

export default function ComoFunciona() {
  return (
    <div className='container mx-auto py-12 px-4 lg:px-8'>
      <h2 className='text-4xl font-extrabold text-gray-900 mb-8'>
        ¿Cómo funciona?
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {steps.map((step) => (
          <div key={step.id} className='relative'>
            <div className='absolute top-0 left-0 h-full w-1 bg-white'></div>
            <div className='relative bg-white rounded-xl shadow-xl p-8'>
              <div className='flex items-center justify-center h-12 w-12 rounded-full bg-black text-white mb-4'>
                <span className='text-2xl font-bold'>{step.id}</span>
              </div>
              <h3 className='text-lg font-medium text-gray-900 mb-2'>
                {step.title}
              </h3>
              <p className='mt-2 text-base text-gray-500'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
