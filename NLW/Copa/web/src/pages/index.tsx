import appPreview from '../assets/celular.png'
import Image from 'next/image'
import LogoImg from '../assets/logo.svg'
import Avatar from '../assets/avatares.png'
import Icon from '../assets/iconCheck.svg'
interface HomeProps {
  count: number;
}


export default function Home() {
  return (
    <div>
      <main>
        <Image src={LogoImg} alt='Logo' />
        <h1>Crie seu próprio bolão da copa!</h1>
        <div>
          <Image src={Avatar} alt='' />
          <strong>
            <span>+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form action="">
          <input type="text" name="" id="" required placeholder='Qual o nome do seu bolão?' />
          <button type='submit'>Criar meu bolão</button>
        </form>

        <p>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
        <div>
          <div>
            <Image src={Icon} alt='' />
            <span>+2.034</span>
            <span>Bolões criados</span>
          </div>
          <div>
            <Image src={Icon} alt='' />
            <span>+2.034</span>
            <span>Bolões criados</span>
          </div>
        </div>
      </main>

      <Image src={appPreview} alt="2 celulares exibindo o aplicativo NLW COPA"
        quality={100}
      />
    </div>
  )
}


// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()


//   return {
//     props: {
//       count: data.count
//     }
//   }
// }