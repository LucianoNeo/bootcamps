import { List } from "phosphor-react";
import { useState } from "react";
import { Logo } from "./Logo";

interface HeaderProps {
    onToggleSidebar: () => void;
  }


export function Header({ onToggleSidebar }: HeaderProps){

    
    return(
        <nav className="w-full p-5 flex items-center justify-between sm:justify-center  bg-gray-700 border-b border-gray-600">
            

          
            <div>
            <Logo />
            </div>
            <nav className="sm:hidden">
        <a href="#" className="flex items-center gap-2" onClick={onToggleSidebar}>
          Aulas
          <List size={46} className="text-blue-500"/>
        </a>
            </nav>
           
        </nav>
    
    )
}