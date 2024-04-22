'use client';
import Image from 'next/image';
import loadFailPic from '@/public/assets/load_fail.svg';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import useSWR from 'swr';
import { ENDPOINT, fetcher } from '@/utils/utils';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { Button } from './ui/button';
import { RefreshCw } from 'lucide-react';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const formatNewsList = (arr) => {
  return arr.filter((item) => item.id).slice(0, 10);
};

export default function NewsListCard({ id, title }) {
  const { data, error, isLoading } = useSWR(`${ENDPOINT}${id}`, fetcher);

  let content = null;
  let updateTime = '';

  if (isLoading) {
    content = (
      <ul>
        <li className='space-y-4'>
          {new Array(8).fill().map((_, index) => (
            <Skeleton key={index} className='h-4 w-full' />
          ))}
        </li>
      </ul>
    );
  }

  if (error) {
    content = (
      <Image
        src={loadFailPic}
        width={200}
        height={200}
        className='mx-auto'
        alt={'Load Fail'}
      />
    );
  }

  if (data && data.updateTime) {
    const result = formatNewsList(data.data);
    content = (
      <SimpleBar className='hot-list h-full space-y-2.5 text-sm'>
        {result.map((item) => (
          <div className='hot-list-item mb-2' key={item.id}>
            <a
              className='underline-offset-4 hover:underline'
              target='_blank'
              href={item.url}
            >
              {item.title}
            </a>
          </div>
        ))}
      </SimpleBar>
    );

    updateTime = formatDistanceToNow(data.updateTime, {
      addSuffix: true,
      locale: zhCN,
    });
  }

  return (
    <Card className='grid h-full max-h-96 grid-rows-card'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <Image
          priority={true}
          src={`/assets/logo/${id}.png`}
          width={20}
          height={20}
          alt={`${id} Logo`}
        />
        <h4 className='scroll-m-20 font-semibold tracking-tight'>{title}</h4>
      </div>
      <CardContent className='h-[17rem] px-4 py-0'>{content}</CardContent>
      <CardFooter className='flex justify-between py-2'>
        <p className='text-xs'>{updateTime}</p>
        <Button variant='outline' size='sm'>
          <RefreshCw className='h-3 w-3' />
        </Button>
      </CardFooter>
    </Card>
  );
}
