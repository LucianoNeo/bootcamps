import appPreview from '../assets/celular.png'
import Image from 'next/image'
import LogoImg from '../assets/logo.svg'
import Avatar from '../assets/avatares.png'
import Icon from '../assets/iconCheck.svg'
import { api } from '../lib/axios'
import { FormEvent, useState } from 'react'


interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}


export default function Home(props: HomeProps) {


  const [title, setTitle] = useState('')

  async function handleCreatePool(e: FormEvent) {
    e.preventDefault()

    try {
      const response = await api.post('/pools', {
        title: title
      })

      const { code } = response.data

      await navigator.clipboard.writeText(code)

      alert('Bolão criado com sucesso! O Código foi copiado para a area de transferencia!')

    } catch (error) {
      console.log(error)
      alert('Falha ao criar o bolão!')
    }
  }


  return (
    <div className='max-w-[1124px] h-screen items-center mx-auto grid grid-cols-2 gap-28'>
      <main>
        <Image src={LogoImg} alt='Logo' />
        <h1 className='mt-14 text-5xl font-bold leading-tight'>Crie seu próprio bolão da copa!</h1>
        <div className='mt-10 flex items-center gap-2 '>
          <Image src={Avatar} alt='' />
          <strong className='text-gray-100 text-xl' >
            <span className='text-ignite-500'>+{props.userCount}</span> pessoas já estão usando
          </strong>
        </div>

        <form className='mt-10 flex gap-2' onSubmit={handleCreatePool}>
          <input type="text" required placeholder='Qual o nome do seu bolão?'
            className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm'
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type='submit' className='bg-yellow-500 px-6 py-4 rounded font-bold uppercase text-gray-900 text-sm hover:bg-yellow-700'>Criar meu bolão</button>
        </form>

        <p className='text-gray-300 mt-4 text-sm leading-relaxed'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>


        <div className='mt-10 pt-10 border-t border-gray-600 flex justify-between text-gray-100' >
          <div className='flex items-center gap-6'>
            <Image src={Icon} alt='' />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+{props.poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>
          <div className='w-px h-16 bg-gray-600' />

          <div className='flex items-center gap-6'>
            <Image src={Icon} alt='' />
            <div className='flex flex-col'>
              <span className='font-bold text-2xl'>+{props.guessCount}</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreview} alt="2 celulares exibindo o aplicativo NLW COPA"
        quality={100}
      />
    </div>
  )
}


export const getServerSideProps = async () => {

  const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count')
  ])

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count
    }
  }
}