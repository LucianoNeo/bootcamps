import { useEffect, useState } from 'react';
import config from '../../config.json'
import Banner from '../Components/Banner';

import Header from "../Components/Header";
import Menu from "../Components/Menu";
import RegisterVideo from '../Components/RegisterVideo';
import Timeline from "../Components/Timeline";
import { supabase } from '../services/api'


export default function Home() {
  const [search, setSearch] = useState('')
  const [playlists, setPlaylists] = useState({})


  const getAllVideos = () => {
    supabase.from('video')
      .select('*')
      .then((res) => {
        const newPlaylists = {};
        res.data.forEach((video) => {
          if (!newPlaylists[video.playlist]) newPlaylists[video.playlist] = [];
          newPlaylists[video.playlist] = [
            video,
            ...newPlaylists[video.playlist],
          ];
        });

        setPlaylists(newPlaylists);
      });
  }

  useEffect(() => {

    getAllVideos()
  }, [])


  return (
    <>

      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,

      }}>
        <Menu search={search} setSearch={setSearch} searchBar={true} />
        <Banner />
        <Header />
        <Timeline searchValue={search} playlists={playlists} favorites={config.favorites}>
          Conteúdo
        </Timeline>
        <RegisterVideo />
      </div>
    </>
  );
}
