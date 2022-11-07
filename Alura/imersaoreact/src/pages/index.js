import config from '../../config.json'
import Banner from '../Components/Banner';
import { CSSReset } from '../Components/CSSReset';
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Timeline from "../Components/Timeline";



export default function Home() {
  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
      }}>
        <Menu />
        <Banner />
        <Header />
        <Timeline playlists={config.playlists} favorites={config.favorites}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}
