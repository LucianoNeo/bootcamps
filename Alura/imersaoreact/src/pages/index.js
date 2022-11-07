import config from '../../config.json'
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
        <Header />
        <Timeline playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}
