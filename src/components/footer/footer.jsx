export default function Footer() {
  return (
    <footer className="bg-[#ffffff] border-t-2 mt-4">
      <div className="mx-16 lg:mt-10 max-md:mx-10 max-md:mt-8 max-sm:mx-4 max-sm:mt-4">
        <div className="flex justify-between max-md:flex-col">
          <div>
            <div className="flex flex-1 px-2 gap-4 items-center">
              <img src="/assets/pendis-kemenag.png" alt="" />
              <div className="h-[48px] border border-title max-sm:hidden"></div>
              <div className="text-title text-ftitle font-bold leading-9 w-[307px] max-sm:hidden">
                Direktorat Jenderal Pendidikan Islam Kementrian Agama
              </div>
            </div>
            <div className="sosmed flex gap-6 mt-8">
              <img src="/assets/facebook.png" alt="" />
              <img src="/assets/twitter.png" alt="" />
              <img src="/assets/youtube.png" alt="" />
              <img src="/assets/instagram.png" alt="" />
            </div>
          </div>
          <div className="font-bold text-ftitle flex flex-row gap-8 md:flex-col max-sm:flex-none mt-8">
            <div className="hover:text-base-blue">
              <a href="#">Hubungi Kami</a>
            </div>
            <div className=" hover:text-base-blue">
              <a href="#">Tentang Kami</a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          Copyright © 2021 | All Rights Reserved, Designed By Pendis Kemenag
        </div>
      </div>
    </footer>
  );
}
