
import { MailIcon,  PhoneIcon} from '@heroicons/react/outline';

export default function About () {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 '>
      <main className='overflow-hidden'>
        {/* Header */}
        <div className='bg-warm-gray-50'>
          <div className='py-24 lg:py-24'>
            <div className='relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8'>
              <h1 className='text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl'>
                Get in touch
              </h1>
              <p className='mt-6 text-xl text-warm-gray-500 max-w-3xl'>
                Ideas or doubts? Get in touch with us!
              </p>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <section
          className='relative bg-white'
          aria-labelledby='contact-heading'>
          <div
            className='absolute w-full h-1/2 bg-warm-gray-50'
            aria-hidden='true'
          />
          {/* Decorative dot pattern */}
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <svg
              className='absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'>
              <defs>
                <pattern
                  id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'>
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-warm-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
              />
            </svg>
          </div>
          <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='relative bg-white shadow-xl'>
              <h2 id='contact-heading' className='sr-only'>
                Contact us
              </h2>

              <div className='grid grid-cols-1 '>
                {/* Contact information */}
                <div className='mt-10 relative overflow-hidden py-10 max-w-3xl px-6 bg-gradient-to-b from-blue-500 to-blue-600 sm:px-10 xl:p-12'>
                  {/* Decorative angle backgrounds */}
                  <div
                    className='absolute inset-0 pointer-events-none sm:hidden'
                    aria-hidden='true'>
                    <svg
                      className='absolute inset-0 w-full h-full'
                      width={343}
                      height={388}
                      viewBox='0 0 343 388'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                        fill='url(#linear1)'
                        fillOpacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear1'
                          x1='254.553'
                          y1='107.554'
                          x2='961.66'
                          y2='814.66'
                          gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
                    aria-hidden='true'>
                    <svg
                      className='absolute inset-0 w-full h-full'
                      width={359}
                      height={339}
                      viewBox='0 0 359 339'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                        fill='url(#linear2)'
                        fillOpacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear2'
                          x1='192.553'
                          y1='28.553'
                          x2='899.66'
                          y2='735.66'
                          gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
                    aria-hidden='true'>
                    <svg
                      className='absolute inset-0 w-full h-full'
                      width={160}
                      height={678}
                      viewBox='0 0 160 678'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                        fill='url(#linear3)'
                        fillOpacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear3'
                          x1='192.553'
                          y1='325.553'
                          x2='899.66'
                          y2='1032.66'
                          gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#fff' />
                          <stop offset={1} stopColor='#fff' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className='text-lg font-medium text-white'>
                    Contact information
                  </h3>
                  <p className='mt-6 text-base text-teal-50 max-w-3xl'>
                    
                  </p>
                  <dl className='mt-8 space-y-6'>
                    <dt>
                      <span className='sr-only'>Phone number</span>
                    </dt>
                    <dd className='flex text-base text-teal-50'>
                      <PhoneIcon
                        className='flex-shrink-0 w-6 h-6 text-teal-200'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>+1 (555) 123-4567</span>
                    </dd>
                    <dt>
                      <span className='sr-only'>Email</span>
                    </dt>
                    <dd className='flex text-base text-teal-50'>
                      <MailIcon
                        className='flex-shrink-0 w-6 h-6 text-teal-200'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>jhonathanaugusto@gmail.com</span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
