import logo from '../assets/logo.png';
import {CircleQuestionMark, Globe, CircleUserRound} from 'lucide-react';

export default function Navbar(){
      return(
       <nav className="h-14 flex items-center justify-between px-10 py-0">
            <img src={logo} alt="tesla logo" className="w-28 object-contain" />
            <ul className='flex items-center font-semibold gap-8 text-sm cursor-pointer'>
                  <li>Vehicles</li>
                  <li>Energy</li>
                  <li>Charging</li>
                  <li>Discover</li>
                  <li>Shop</li>
            </ul>
            <div className='flex items-center gap-4'>
                  <CircleQuestionMark size={26} className='cursor-pointer' />
                  <Globe size={26} className='cursor-pointer' />
                  <CircleUserRound size={26} className='cursor-pointer' />
            </div>
      </nav>
      )
}