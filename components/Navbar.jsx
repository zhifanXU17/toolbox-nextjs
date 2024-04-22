import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Clock from '@/components/Clock';
import { ModeToggle } from '@/components/ModeToggle';

const Navbar = () => {
  return (
    <nav>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4'>
        <div>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
            摸鱼热榜
          </h3>
          <p className='hidden text-xs font-light leading-7 md:block'>
            随便看看随便看看
          </p>
        </div>

        <div className='hidden items-center gap-4 sm:flex'>
          <Clock />

          <div className='flex items-center gap-2'>
            <Button variant='outline' size='icon'>
              <RefreshCw className='h-4 w-4' />
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
