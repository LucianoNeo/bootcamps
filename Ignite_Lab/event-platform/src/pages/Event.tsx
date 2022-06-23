import { ArrowArcRight } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event(){

    const { slug } = useParams<{ slug: string }>()

    return(
        <div className="flex flex-col min-h-screen">
                <Header />
        
            <main className="flex flex-1">
               {slug ? 
               <Video lessonSlug={slug}/> 
               : <div className="flex-1 justify-end flex p-5 mt-10" >
                <span className="text-xl mr-4">Selecione uma aula para visualizar o conteúdo! </span>
                <ArrowArcRight size={40}/>
                
                </div>}
               
                
                <Sidebar / >
                
            </main>
        </div>
    
    )
}