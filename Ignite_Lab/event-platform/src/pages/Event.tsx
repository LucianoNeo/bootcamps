import { ArrowArcRight } from "phosphor-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event(){

    const { slug } = useParams<{ slug: string }>()
    const [sidebarVisibleValue, setSidebarVisibleValue] = useState('hidden')
    const [videoVisibleValue, setvideoVisibleValue] = useState('')

    function handleToggleSidebar() {
    videoVisibleValue === 'hidden' ? setvideoVisibleValue('') : setvideoVisibleValue('hidden');
    sidebarVisibleValue === 'hidden' ? setSidebarVisibleValue('') : setSidebarVisibleValue('hidden');
      
    }

    return(
        <div className="flex flex-col min-h-screen">
                <Header onToggleSidebar={handleToggleSidebar}/>
        
            <main className="flex relative">
               {slug ? 
               <Video lessonSlug={slug} visible={videoVisibleValue}/> 
               : <div className="flex-1" />
            }
               
                
                <Sidebar visible={sidebarVisibleValue}/ >
                
            </main>
        </div>
    
    )
}