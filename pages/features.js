/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline';

const features = [
  {
    name: 'FOR GENERATIONS',
    description:
      'Safe online storage. Your memories available for uncountable family generations.',
  },
  {
    name: 'HISTORY COMES TOGETHER',
    description: 'Know yourself better by understanding your family history.',
  },
  {
    name: 'ACCESSIBILITY',
    description:
      'Are you a begginer or a pro? Both can easily use the web apps, kids and grandmas!',
  },
  {
    name: 'STRUCTURED DATA',
    description: 'Filter by year, availability and type of memories available.',
  },
  {
    name: 'PHONE APP',
    description: 'Access your content anywhere with our dedicated phone apps.',
  },
  {
    name: 'ADD MEMBERS',
    description:
      'You can add and manage family members content, like your babys memories.',
  },
  {
    name: 'FRAME YOUR HISTORY',
    description:
      'Family Tree is the place to frace your family history together.',
  },
  {
    name: 'GENETIC STORATE',
    description:
      'Study and understand your ancestrals biology. The platform will be ready for when such storage is legally and technology available.',
  },
];

export default function Features() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900'>
            All-in-one platform
          </h2>
          <p className='mt-4 text-lg text-gray-500'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
          {features.map((feature) => (
            <div key={feature.name} className='relative'>
              <dt>
                <CheckIcon
                  className='absolute h-6 w-6 text-green-500'
                  aria-hidden='true'
                />
                <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
                  {feature.name}
                </p>
              </dt>
              <dd className='mt-2 ml-9 text-base text-gray-500'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
