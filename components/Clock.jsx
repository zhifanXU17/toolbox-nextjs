'use client';
import { useState, useEffect } from 'react';
import { format } from 'date-fns/format';
import { Clock as ClockIcon } from 'lucide-react';

export default function Clock() {
  const [time, setTime] = useState();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    });

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <p className='flex items-center gap-2 text-sm'>
      <ClockIcon className='h-4 w-4' />
      {time ? format(time, 'uuuu-MM-dd kk:mm:ss') : '----'}
    </p>
  );
}
