import { useState } from 'react';
import config from '../../config.json'
import Banner from '../Components/Banner';

import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Timeline from "../Components/Timeline";



export default function Home() {
  const [search, setSearch] = useState('')

  return (
    <>

      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,

      }}>
        <Menu search={search} setSearch={setSearch} />
        <Banner />
        <Header />
        <Timeline searchValue={search} playlists={config.playlists} favorites={config.favorites}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}
