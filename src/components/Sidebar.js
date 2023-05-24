import React, { useContext } from 'react';

import {Link} from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';

import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';

import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {

const {isOpen,handleClose} = useContext(SidebarContext);
const {cart, clearCart, total, itemAmount} =  useContext(CartContext);


  return <div className={`${isOpen? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full md:shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-scroll`}>

  <div className='flex items-center justify-between py-6 border-b'>
    <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
    <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
      <IoMdArrowForward className='text-2xl hover:text-red-500'  />
    </div>
  </div>

  <div className=' flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-scroll overflow-x-hidden border-b -mr-2 pr-2 '>{cart.map((cartprod)=> {
    return <CartItem key={cartprod.id} item={cartprod}/>
      
  })}</div>

  <div className=' flex flex-col gap-y-3 py-4 mt-4'>
    <div className=' flex w-full justify-between items-center'>
      <div className='uppercase font-semibold'>
        <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
      </div>
      <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12  h-12 flex justify-center items-center text-xl '>
        <FiTrash2/>
      </div>
    </div>
    <Link to={'/'} className='bg-gray-200 flex p-4 justify-center text-primary w-full font-medium'>View cart</Link>

    <Link to={'/'} className='bg-primary flex p-4 justify-center text-white w-full font-medium '>Checkout</Link>
  </div>


  </div>;
};

export default Sidebar;
