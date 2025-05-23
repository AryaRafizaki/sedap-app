export function HeroSection() {
  return (
    <div
      className="relative h-screen pt-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/img/Makanan.jpg')" }}
    >
      {/* Overlay hitam transparan di atas gambar */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Konten di atas overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Selamat Datang Di Restoran Sedap!</h2>
        <p className="max-w-xl mb-6 text-lg md:text-xl">
        Sedap adalah restoran yang berlokasi di Indonesia. Kami memiliki resep-resep yang luar biasa dan koki-koki paling berbakat di kota ini!

        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded">
          More Detail
        </button>
      </div>
    </div>
  );
}
