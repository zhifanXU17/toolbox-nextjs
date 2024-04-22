import { Noto_Sans_SC } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Separator } from '@/components/ui/separator';

const noto = Noto_Sans_SC({ subsets: ['latin'] });

export const metadata = {
  title: '摸鱼热榜',
  description: '个人收藏的摸鱼新闻网站',
};

export default function RootLayout({ children }) {
  return (
    <html lang='zh-CN' suppressHydrationWarning>
      <body className={noto.className + ' grid-rows-layout grid'}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          <Separator />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
