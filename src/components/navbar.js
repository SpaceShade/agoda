import React from 'react'
import logo from '../assets/Agoda_logo.png'
import more from '../assets/more.png'
import thailand from '../assets/thailand.png'
import heart from '../assets/heart.png'
import menu from '../assets/menu.png'
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='flex'>
            <img src={logo} alt='logo' className='w-20 h-auto mx-10 my-4' ></img>
            <div className='flex items-center text-center justify-between gap-10 mx-3'>
                <a href='/'>ตั๋วเครื่องบิน + ที่พัก</a>
                <a href='/'>ที่พัก</a>
                <a href='/'>บริการเดินทางขนส่ง</a>
                <a href='/'>ทัวร์และตั๋วท่องเที่ยว</a>
                <a href='/'>คูปองส่วนลด + ข้อเสนอพิเศษ</a>
                <a href='/'><img src={more} alt='more' className='w-5 h-auto ' ></img></a>
                <div className='ml-8 flex items-center text-center justify-between gap-10' >
                    <img src={thailand} alt='thailand' className='w-8 h-auto'></img>
                    <h1>฿</h1>
                </div>
                <div className='ml-5 flex items-center text-center justify-between gap-8'>
                <buuton className=' text-blue-500 font-bold'>เข้าสู่ระบบ</buuton>
                <button className='border-2 px-4 py-2 rounded-full text-blue-500 font-bold'>สร้างบัญชีผู้ใช้</button>
                <img src={heart} alt='heart' className='w-5 h-auto' ></img>
                <img src={menu} alt='menu' className='w-5 h-auto'></img>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
