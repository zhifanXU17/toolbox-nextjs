import NewsListCard from '@/components/NewsListCard';

export default function Home() {
  const list = [
    {
      name: '36kr',
      id: '36kr',
    },
    {
      name: '百度',
      id: 'baidu',
    },
    {
      name: '哔哩哔哩',
      id: 'bilibili',
    },
    {
      name: '豆瓣讨论小组',
      id: 'douban-group',
    },
    {
      name: '豆瓣电影',
      id: 'douban-movie',
    },
    {
      name: '抖音',
      id: 'douyin',
    },
    {
      name: 'IT之家',
      id: 'ithome',
    },
    {
      name: 'LOL',
      id: 'lol',
    },
    {
      name: '网易新闻',
      id: 'netease-news',
    },
    {
      name: 'NGA',
      id: 'ngabbs',
    },
    {
      name: '腾讯新闻',
      id: 'qq-news',
    },
    {
      name: '少数派',
      id: 'sspai',
    },
    {
      name: '澎湃新闻',
      id: 'thepaper',
    },
    {
      name: '百度贴吧',
      id: 'tieba',
    },
    {
      name: '今日头条',
      id: 'toutiao',
    },
    {
      name: '微博',
      id: 'weibo',
    },
    {
      name: '微信读书',
      id: 'weread',
    },
    {
      name: '知乎日报',
      id: 'zhihu-daily',
    },
    {
      name: '知乎',
      id: 'zhihu',
    },
  ];

  return (
    <main className='mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {list.map((item) => {
        return <NewsListCard key={item.id} id={item.id} title={item.name} />;
      })}
    </main>
  );
}
