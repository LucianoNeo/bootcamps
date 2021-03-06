import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, GithubLogo, Lightning, LinkedinLogo, TwitterLogo } from "phosphor-react";
import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../generated";
import avatar from '../assets/avatar.jpg'


interface VideoProps {
    lessonSlug: string,
    visible: string;
}

export function Video(props: VideoProps){

const { data } = useGetLessonBySlugQuery({
    variables: {

        slug: props.lessonSlug,
        
    },
    fetchPolicy: 'no-cache',
})

if (!data || !data.lesson){
    return(
        <div className="flex-1">
           
        </div>
    )
}

    return(
        <div className={`sm:flex-1 ${props.visible}`}>
        <div className="bg-black flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
        <Player>
            <Youtube videoId={data.lesson.videoId}/>
            <DefaultUi />
        </Player>

            </div>
        </div>

        <div className="p-8 max-w-[1100px] mx-auto ">
        
        <div className="flex flex-col sm:flex-row items-start gap-16">
            <div className="flex-1">
                <h1 className="text-2xl font-bold">
                    {data.lesson.title}
                </h1>
                <p className="my-4 text-gray-200 leading-relaxed">
                {data.lesson.description}
                </p>

                {data.lesson.teacher && (
            <div className="flex items-center gap-4 mt-6">
            <img src={data.lesson.teacher.avatarURL} alt="" className="h-16 w-16 rounded-full border-2 border-blue-500"/>
        <div className="leading-relaxed">
            <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
            <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
        </div>
        </div>
        )}
            </div>

            <div className="flex flex-col gap-4 w-full sm:max-w-[250px] mx-auto">             

            <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                <DiscordLogo size={24}/>
            Comunidade do discord
            </a>
            <a href="" className="p-4 text-sm border border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center text-blue-500 hover:bg-blue-500 hover:text-gray-900 transitions-color">
                <Lightning size={24}/>
            Acesse o desafio
            </a>
            </div>

        </div>
        
        

            <div className="gap-8 mt-20 grid grid-cols-1 sm:grid-cols-2">

            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40}/>
            </div>
            <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Material Complementar</strong>
            <p className="text-sm text-gray-200 mt-2">
            Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
            </div>
            <div className="h-full p-6 flex items-center">
            <CaretRight size={24}/>
            </div>

            </a>
            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={40}/>
            </div>
            <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Wallpapers exclusivos</strong>
            <p className="text-sm text-gray-200 mt-2">
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua m??quina
            </p>
            </div>
            <div className="h-full p-6 flex items-center">
            <CaretRight size={24}/>
            </div>

            </a>
            </div>

        </div>
        <footer className="bg-gray-900 h-10 flex w-11/12 items-center justify-between p-6 border-t border-gray-600 m-auto">
            <div className="flex items-center">
            <img src={avatar} alt="" className="h-8 w-8 rounded-full mr-3"/>
                <span>Desenvolvido por LucianoNeo</span>
            </div>
            <div className="flex justify-end">
            <a href="https://github.com/Lucianoneo" target='blank' 
            className="mr-3 hover:text-blue-600 transition-colors" ><GithubLogo size={35} /></a>  
            <a href="https://www.linkedin.com/in/luciano-dos-santos-bueno-58363373/" target='blank'
            className="mr-3 hover:text-blue-600 transition-colors" ><LinkedinLogo size={35} 
             /></a>
            <a href="https://twitter.com/lucianoneo" target='blank' 
            className="mr-3 hover:text-blue-600 transition-colors"><TwitterLogo size={35} /></a>
            </div>
            </footer>
    </div>
        )
}