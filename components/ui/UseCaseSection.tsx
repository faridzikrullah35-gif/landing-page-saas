"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Car, Hotel, Utensils, ShoppingBag, Package } from "lucide-react";

interface UseCaseSectionProps {
  darkMode?: boolean;
}

export default function UseCaseSection({ darkMode = true }: UseCaseSectionProps) {
  const useCases = [
    {
      title: "Car Showrooms & Rentals",
      desc: "Showcase your cars with a sleek digital catalog. Customers can explore, book, and even pay online with ease.",
      icon: <Car className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform duration-300" />,
      img: "/img/showroom.png",
    },
    {
      title: "Hotels & Stays",
      desc: "Manage reservations, highlight your rooms with stunning visuals, and automate bookings instantly.",
      icon: <Hotel className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform duration-300" />,
      img: "/img/hotel.png",
    },
    {
      title: "Restaurants & Cafés",
      desc: "Display interactive menus, accept online orders, and build a loyal customer base effortlessly.",
      icon: <Utensils className="w-10 h-10 text-green-500 group-hover:scale-110 transition-transform duration-300" />,
      img: "/img/restaurant.png",
    },
    {
      title: "Cosmetics Brands",
      desc: "Elevate your brand with elegant product catalogs, seamless order flow, and instant payments.",
      icon: <ShoppingBag className="w-10 h-10 text-pink-500 group-hover:scale-110 transition-transform duration-300" />,
      img: "/img/cosmetics.png",
    },
    {
      title: "Other SMEs",
      desc: "Perfect for any growing business that needs fast, elegant digital transformation.",
      icon: <Package className="w-10 h-10 text-purple-500 group-hover:scale-110 transition-transform duration-300" />,
      img: "/img/sme.png",
    },
  ];

  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-6 transition-colors duration-500 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Who Is This Platform For?
        </h2>
        <p
          className={`text-lg mb-12 transition-colors duration-500 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Designed for medium to high-growth businesses that need fast and elegant digitalization.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          {useCases.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`p-6 flex flex-col items-center text-center rounded-2xl backdrop-blur-sm group transition-colors duration-500 ${
                  darkMode ? "bg-gray-800/80" : "bg-white/80"
                }`}
              >
                {/* Image 16:9 responsive */}
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Icon */}
                <div className="mb-4">{item.icon}</div>

                {/* Title */}
                <h3
                  className={`font-semibold text-xl mb-2 transition-colors duration-500 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className={`transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
