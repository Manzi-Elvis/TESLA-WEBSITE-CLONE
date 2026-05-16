import logo from '../assets/logo.png'
import {CircleQuestionMark, Globe, CircleUserRound} from 'lucide-react'

export default function Navbar(){
      return(
       <nav className="flex items-center justify-between px-8 py-0 ">
            <img src={logo} alt="tesla logo" className="w-64 h-32 object-contain" />
            <ul className='flex gap-8 cursor-pointer border-solid rounded-18'>
                  <li>Vehicles</li>
                  <li>Energy</li>
                  <li>Charging</li>
                  <li>Discover</li>
                  <li>Shop</li>
            </ul>
            <div className='rightSection flex gap-4'>
                  <CircleQuestionMark className='cursor-pointer' />
                  <Globe className='cursor-pointer' />
                  <CircleUserRound className='cursor-pointer' />
            </div>
      </nav>
      )
}