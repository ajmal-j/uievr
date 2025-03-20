export default function Footer() {
  return (
    <footer className="xl:pb-20 lg:pb-16 md:pb-14 sm:pb-12 pb-10 sm:pt-0 pt-5">
      <p className="text-[#8A8A8A] font-urbanist xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] text-center">
        © {new Date().getFullYear()} Uievr - All Right Reserved
      </p>
    </footer>
  );
}
