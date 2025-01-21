import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import plus from "../assets/plus.png";
import Navbar from "../components/navbar";
import bg from "../assets/bg.webp";
import hotel from "../assets/hotel.png";
import airport from "../assets/airport.png";
import plane from "../assets/plane.png";
import home from "../assets/home.png";
import car from "../assets/car.png";
import amuse from "../assets/amuse.png";
import MenuList from "../components/menuList";
import ticket1 from "../assets/ticket1.png";
import ticket2 from "../assets/ticket2.png";
import ticket3 from "../assets/ticket3.png";
import bk from "../assets/bk.png";
import ptty from "../assets/ptty.png";

const Home = () => {
  const menuItems = [
    { icon: hotel, label: "ที่พัก" },
    { icon: home, label: "บ้านและอพาร์ตเมนต์" },
    { icon: airport, label: "ตั๋วเครื่องบิน + ที่พัก" },
    { icon: plane, label: "ตั๋วเครื่องบิน" },
    { icon: amuse, label: "ทัวร์และตั๋วท่องเที่ยว" },
    { icon: car, label: "บริการรับส่งสนามบิน" },
  ];

  const slides = [ticket1, ticket2, ticket3, ticket1, ticket2, ticket3]; // Array of tickets

  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src={bg} alt="bg" className="w-[100%] h-72 rounded-bl-[50px]" />
        <div className="absolute text-2xl text-white font-bold top-5 left-1/2 -translate-x-1/2">
          <h1>ท่องโลกทั้งใบในราคาถูกลง</h1>
        </div>
        <div
          className="p-2 w-[73%] h-[110%] border shadow-md border-none rounded-3xl absolute top-28 left-1/2 -translate-x-1/2"
          style={{ backgroundColor: "#f8f7f9" }}
        >
          <div className="my-5 mx-16">
            <button className="border-2 px-4 py-2 border-blue-500 bg-blue-100 rounded-full text-blue-500 mr-5">
              การเข้าพักข้ามคืน
            </button>
            <button className="border-2 px-4 py-2 border-gray bg-white rounded-full text-gray">
              การเข้าพักช่วงกลางวัน
            </button>
          </div>
          <div className="text-center justify-center flex">
            <input
              type="text"
              placeholder="ใส่จุดหมายปลายทางหรือชื่อที่พัก"
              className="w-[90%] h-14 bg-white p-4 border-gray mb-2 rounded-lg"
            />
          </div>
          <div className="text-center justify-center flex gap-5">
            <input
              type="text"
              placeholder="...."
              className="w-[44%] h-14 bg-white p-4 border-gray mb-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="...."
              className="w-[44%] h-14 bg-white p-4 border-gray mb-2 rounded-lg"
            />
          </div>
          <h1 className="my-5 mx-16 text-blue-500 flex items-center">
            <img src={plus} alt="plus" className="w-3 h-3 mr-3" />
            จองตั๋วด้วยเครื่องบิน
          </h1>
        </div>
        <div
          className="p-2 w-[67%] h-12 border border-none shadow-md rounded-lg absolute top-20 left-1/2 -translate-x-1/2"
          style={{ backgroundColor: "#f8f7f9" }}
        >
          <MenuList items={menuItems} />
        </div>
        <div className="p-2 w-[35%] h-16 border border-none shadow-md rounded-lg absolute top-[137%] left-1/2 -translate-x-1/2 bg-blue-500 text-center justify-center flex">
          <button className="text-white text-xl">ค้นหา</button>
        </div>
      </div>
      <div className="mt-52 ml-52">
        <h1 className="text-3xl font-bold mb-5">
          แพ็คของขวัญต้อนรับสำหรับลูกค้าที่จองผ่านแอป!
        </h1>
      </div>
      <div className="text-center items-center justify-center flex w-[73%] h-36 bg-blue-100 rounded-3xl p-4 mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          navigation
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide}
                alt={`ticket-${index}`}
                className="w-full h-auto rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-16 ml-52">
        <h1 className="text-2xl font-bold mb-5">
          ที่เที่ยวยอดนิยมในประเทศไทย!
        </h1>
        {/* <div className="flex">
          <div>
            <img src={bk} alt="bk" />
            <h1 className=" ">กรุงเทพ</h1>
          </div>
          <div>
            <img src={ptty} alt="ptty" />
            <h1 className=" ">พัทยา</h1>
          </div>
          
        </div> */}
      </div>
    </div>
  );
};

export default Home;
