export function FooterGuest() {
  return (
      <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold italic mb-2">Alamat Kami</h3>
          <p>Jl. Melur Indah<br />Pekanbaru, Indonesia</p>
          <p className="text-yellow-500 font-semibold mt-2 cursor-pointer">VIEW ON MAP</p>
        </div>

        <div className="bg-neutral-900 p-6 rounded-lg">
          <h3 className="text-2xl font-bold italic mb-4">Waktu Reservasi</h3>
          <div className="flex justify-between border-b border-gray-600 py-2">
            <span>Senin - Jumat</span>
            <span>09:00 - 21:00</span>
          </div>
          <div className="flex justify-between border-b border-gray-600 py-2">
            <span>Sabtu</span>
            <span>12:00 - 00:00</span>
          </div>
          <div className="flex justify-between border-b border-gray-600 py-2">
            <span>Minggu</span>
            <span>11:00 - 22:00</span>
          </div>
          <button className="bg-yellow-600 text-black font-bold px-6 py-2 mt-4 rounded">BOOK NOW</button>
        </div>

        <div>
          <h3 className="text-2xl font-bold italic mb-2">Kontak Kami</h3>
          <p>Email: sedap@gmail.com</p>
          <p>Phone: 14022</p>
          <p className="text-yellow-500 font-semibold mt-2 cursor-pointer">SEND MESSAGE</p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-10">Copyright©2025 Sedap All Rights Reserved.</div>
    </footer>
  );
}
