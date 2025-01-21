import React from 'react'

const MenuList = ({items}) => {
  return (
    <div>
      <ul className='flex justify-between gap-1 mx-16'>
        {items.map((item, index)=>(
            <div key={index} className='flex items-center'>
                <img src={item.icon} alt={item.label} className='w-5 h-auto'/>
                <li className='text-black ml-2'>{item.label}</li>
            </div>
        ))}
      </ul>
    </div>
  )
}

export default MenuList
