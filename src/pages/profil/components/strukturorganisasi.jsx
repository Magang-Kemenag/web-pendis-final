export default function StrukturOrganisasi() {
  return (
    <div className="flex flex-col items-center gap-12">
      <div className="font-bold text-3xl text-center text-base-blue">
        <div>STRUKTUR ORGANISASI</div>
        <div>DIREKTORAT JENDERAL PENDIDIKAN ISLAM</div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="font-bold text-2xl text-ftitle">Direktur Jenderal</div>
        <div className="flex flex-col bg-white p-4 w-48 rounded-lg gap-4 shadow-md">
          <img src="/assets/Dirjen.png" className="rounded-md" alt="" />
          <div className="text-center text-ftitle font-semibold">
            Prof. Dr. H. Muhammad Ali Ramdhani, S.TP., M.T
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="font-bold text-2xl text-ftitle">
          Sekretaris Jenderal
        </div>
        <div className="flex flex-col bg-white p-4 w-48 rounded-lg gap-4 shadow-md">
          <img src="/assets/Dirjen.png" className="rounded-md" alt="" />
          <div className="text-center text-ftitle font-semibold">
            Prof. Dr. H. Muhammad Ali Ramdhani, S.TP., M.T
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="font-bold text-2xl text-ftitle">Direktur</div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 items-center">
            <div className="font-semibold text-xl text-ftitle">PTKI</div>
            <div className="flex flex-col bg-white p-4 w-48 rounded-lg gap-4 shadow-md">
              <img src="/assets/Dirjen.png" className="rounded-md" alt="" />
              <div className="text-center text-ftitle font-semibold">
                Prof. Dr. H. Muhammad Ali Ramdhani, S.TP., M.T
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="font-semibold text-xl text-ftitle">PTKI</div>
            <div className="flex flex-col bg-white p-4 w-48 rounded-lg gap-4 shadow-md">
              <img src="/assets/Dirjen.png" className="rounded-md" alt="" />
              <div className="text-center text-ftitle font-semibold">
                Prof. Dr. H. Muhammad Ali Ramdhani, S.TP., M.T
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="font-semibold text-xl text-ftitle">PTKI</div>
            <div className="flex flex-col bg-white p-4 w-48 rounded-lg gap-4 shadow-md">
              <img src="/assets/Dirjen.png" className="rounded-md" alt="" />
              <div className="text-center text-ftitle font-semibold">
                Prof. Dr. H. Muhammad Ali Ramdhani, S.TP., M.T
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="font-semibold text-xl text-ftitle">PTKI</div>
            <div className="flex flex-col bg-white p-4 w-48 rounded-lg gap-4 shadow-md">
              <img src="/assets/Dirjen.png" className="rounded-md" alt="" />
              <div className="text-center text-ftitle font-semibold">
                Prof. Dr. H. Muhammad Ali Ramdhani, S.TP., M.T
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="font-semibold text-xl text-ftitle">PTKI</div>
            <div className="flex flex-col bg-white p-4 w-48 rounded-lg gap-4 shadow-md">
              <img src="/assets/Dirjen.png" className="rounded-md" alt="" />
              <div className="text-center text-ftitle font-semibold">
                Prof. Dr. H. Muhammad Ali Ramdhani, S.TP., M.T
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-8 justify-center">
        <a
          href="/profil/struktur"
          className="flex border-ffield border-2 py-5 px-9 rounded-full bg-transparent hover:bg-ffield"
        >
          <div className="max-sm:m-auto flex gap-2">
            <div className="text-ftitle font-semibold">Lihat Selengkapnya</div>
            <div className="icon">
              <img src="/assets/arrow-right-black.svg" alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
