import clsx from 'clsx';

export function Loading() {
  const { variant = 'normal' } = props;

  const color = {
    normal: 'bg-blue-500',
    primary: 'bg-white',
  }[variant];
  const dotClassNames = `${color} rounded-full h-1.5 w-1.5 animate-pulse`;

  return (
    <span aria-label='Loading' className='relative flex flex-row space-x-1'>
      <i className={clsx(dotClassNames)}></i>
      <i className={clsx(dotClassNames, '[animation-delay:0.2s]')}></i>
      <i className={clsx(dotClassNames, '[animation-delay:0.4s]')}></i>
    </span>
  );
}
