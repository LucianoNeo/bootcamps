import { useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../generated";
import personagens from '../assets/code.png'
import avatar from '../assets/avatar.jpg'
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

export function Subscribe(){

const navigate = useNavigate()

const [createSubscriber ,{ loading }] = useCreateSubscriberMutation()
const [name, setName ] = useState('')
const [email, setEmail ] = useState('')

async function handleSubscribe(event:FormEvent) {
    event.preventDefault()

    await createSubscriber({
        variables: {
            name,
            email
        }
    })

    navigate('/event')
}


    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
<div className="w-full max-w-[1100px] flex flex-col sm:flex-row items-center justify-between mt-20 mx-auto text-center sm:text-left">
    <div className="max-w-[640px] items-center flex flex-col sm:items-start px-5">
        <Logo />
        <h1 className="mt-8 text-[2.5rem] leading-tight ">
        Aprenda técnicas de luta com os  <strong className="text-blue-500">melhores e maiores</strong> personagens de anime <strong className="text-blue-500" >de TODOS OS TEMPOS! </strong> </h1>
        <p className="mt-4 text-gray-200 leading-relaxed">
        Em apenas uma semana você vai dominar na prática as principais técnicas utilizadas quando o mundo corre perigo.
        </p>
    </div>
    <div>
        <div className="w-screen sm:w-full mt-4 p-8 bg-gray-700 border border-gray-500 rounded">
        <strong className="text-2x mb-6 block">Inscreva-se gratuitamente</strong>
        <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">

            <input 
            className="bg-gray-900 rounded px-5 h-14" 
            type="text" 
            placeholder="Seu nome completo"
            onChange={event => setName(event.target.value)}
            />
            <input 
            className="bg-gray-900 rounded px-5 h-14" 
            type="email" placeholder="Digite seu e-mail"
            onChange={event => setEmail(event.target.value)}
            />

        <button type="submit"
        disabled={loading}
        className="bg-green-500 mt-4 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
        Garantir minha vaga

        </button>

        </form>
        </div>
    </div>


</div>

            <img src={personagens} className="mt-10 w-full"/>
            <footer className=" h-10 flex w-full items-center justify-between p-6  m-auto">
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