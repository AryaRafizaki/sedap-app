import React from "react";
import menuData from "../../components/data/menuData.json";
import testimonials from "../../components/data/testimonials.json";


export default function Product() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/img/Makanan.jpg')" }}>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
            
          </div>
          <h1 className="text-4xl md:text-6xl font-bold">MENU</h1>
          <p className="mt-2 text-sm text-gray-200">Home / <span className="text-yellow-400">Menu</span></p>
        </div>
      </section>

      {/* Menu Introduction */}
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 italic">Menu Kami</h2>
        <div className="flex justify-center mb-6">
          
        </div>
        <p className="max-w-2xl mx-auto text-gray-600">
          Setiap orang punya selera, meski mereka tidak menyadarinya. Meski Anda bukan koki hebat, tidak ada yang menghalangi Anda untuk memahami dan mengetahui apa yang enak
        </p>
      </section>

      {/* Menu List */}
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-4 font-semibold text-yellow-600">
            <span>Menu</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {Object.keys(menuData).map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={`/img/menu-${category.toLowerCase()}.jpg`}
                alt={category}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <ul>
                {menuData[category].map((item, idx) => (
                  <li key={idx} className="flex justify-between border-b py-2">
                    <div>
                      <p className="font-semibold italic">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <span className="text-yellow-600 font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <section
        className="bg-cover bg-center py-24 px-6 relative"
        style={{ backgroundImage: "url('/img/Makanan.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-white text-center">
          <h2 className="text-4xl font-bold italic mb-4">Testimoni</h2>
          <div className="flex justify-center mb-6">
            <img src="/img/icon-divider.png" alt="divider" className="h-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
                <div className="text-yellow-600 text-3xl mb-2">“</div>
                <p className="italic mb-4">"{t.quote}"</p>
                <img src={t.image} alt={t.name} className="w-16 h-16 mx-auto rounded-full object-cover mb-2" />
                <p className="font-bold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
