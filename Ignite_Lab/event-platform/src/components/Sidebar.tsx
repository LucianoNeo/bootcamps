import { useQuery , gql} from "@apollo/client";
import { useGetLessonsQuery } from "../generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
    visible: string;
  }
  

export function Sidebar(props: SidebarProps){

    const { data } = useGetLessonsQuery()


    return(
        <aside className={`w-full sm:w-[348px] bg-gray-700 sm:block ${props.visible} p-6 border-l border-gray-600"`}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons.map(lesson =>{
                    return (
                        <Lesson 
                        key={lesson.id}
                        title={lesson.title}
                        slug={lesson.slug}
                        availableAt={new Date(lesson.availableAt)}
                        type={lesson.lessonType}
                        />
                    )
                })}
            
            </div>
        </aside>
        )
}