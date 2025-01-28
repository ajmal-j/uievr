import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export default function Header({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-transparent absolute top-0 left-0 right-0 flex justify-stretch font-dmSans px-20 py-14 z-50",
        className
      )}
    >
      <div className='flex-1'></div>
      <div className='flex-1'>
        <h2 className='bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent text-[71.5px] font-dmSans text-center leading-none tracking-tight'>
          Uievr
        </h2>
      </div>
      <div className='flex-1 flex items-center'>
        <div className='w-full flex items-center justify-end gap-10 h-[50px]'>
          <button className='relative text-start ps-6 text-white border border-secondaryBackground w-[143px] flex items-center rounded-[30px] h-full'>
            <span className='text-[17px]'>Menu</span>
            <div className='aspect-square bg-secondaryBackground grid place-content-center rounded-full size-[50px] absolute right-0'>
              <Menu className='h-6 text-black' />
            </div>
          </button>
          <div className='h-[45px] bg-[#9000FF] w-[1.3px] shrink-0 place-items-start' />
          <button className='text-[17px] text-black bg-secondaryBackground rounded-[30px] h-full shrink-0 py-2 px-7'>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
