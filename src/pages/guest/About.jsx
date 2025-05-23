export default function About() {
    return (
       <section>
      <div className="relative h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/img/Makanan.jpg')" }}>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 text-white text-center">
          <h2 className="text-5xl font-bold">ABOUT</h2>
          <p className="mt-2">Home / About</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h3 className="text-3xl md:text-4xl italic font-bold text-gray-900 mb-8">Selamat Datang Di Restoran Sedap</h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16">
        Sedap adalah restoran yang ada di Indonesia, restoran ini dirancang dengan mempertimbangkan sejarah, kami telah menciptakan ruang makan industrial yang lembut, dikombinasikan dengan dapur terbuka, bar kopi untuk dibawa pulang, dan tempat pemanggangan kopi di lokasi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-800">
          <div>
            <h4 className="text-yellow-600 font-bold text-sm">1996</h4>
            <h5 className="text-xl font-semibold italic my-2">Grand Opening</h5>
            <p>
            Sedap dibuka pada 16 Mei 1996, interiornya dibuat oleh seniman-seniman paling terkenal. Kini restoran kami menampung 238 orang!
            </p>
          </div>
          <div>
            <h4 className="text-yellow-600 font-bold text-sm">2006</h4>
            <h5 className="text-xl font-semibold italic my-2">Second Branch</h5>
            <p>
            Sejak hari pertama, Sedap menjadi tempat berkumpulnya para guru, dokter, dan aktor. Oleh karena itu, kami memutuskan untuk membuka cabang kedua kami!
            </p>
          </div>
          <div>
            <h4 className="text-yellow-600 font-bold text-sm">2014</h4>
            <h5 className="text-xl font-semibold italic my-2">Great Taste Award</h5>
            <p>
            Sedap dulu dan sekarang bukan hanya sekadar restoran, tetapi juga bagian luar biasa dari budaya. Kami senang mengumumkan bahwa kami menerima penghargaan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}