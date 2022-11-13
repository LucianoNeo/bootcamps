const supabase = require('@supabase/supabase-js')
const data = require('../../config.json')

const PROJECT_URL = 'https://nizyxubmscteqijeuflg.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5penl4dWJtc2N0ZXFpamV1ZmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzIzMDAsImV4cCI6MTk4Mzc0ODMwMH0.0wglxkk8EGfzrzWRhtBzK1hcHvjMV64FUGszj2pOBSU'

const api = supabase.createClient(PROJECT_URL, PUBLIC_KEY)

const addJogos = () => {
    data.playlists.jogos.map((video) => {
        api.from('video').insert({
            title: video.title,
            url: video.url,
            thumb: video.thumb,
            playlist: 'jogos',
        })
            .then((res) => {
                console.log('Video adicionado com sucesso!')
            })
    })
}

const addFrontEnd = () => {
    data.playlists.front_end.map((video) => {
        api.from('video').insert({
            title: video.title,
            url: video.url,
            thumb: video.thumb,
            playlist: 'Front-End',
        })
            .then((res) => {
                console.log('Video adicionado com sucesso!')
            })
    })
}

const addBackEnd = () => {

    data.playlists.back_end.map((video) => {
        api.from('video').insert({
            title: video.title,
            url: video.url,
            thumb: video.thumb,
            playlist: 'Back-End',
        })
            .then((res) => {
                console.log('Video adicionado com sucesso!')
            })
    })
}

const clearJogos = () => {

    api.from('video').delete().match({ playlist: 'jogos', })
        .then((res) => {
            console.log('Playlist limpa com sucesso!')
        })
}
const clearFrontEnd = () => {

    api.from('video').delete().match({ playlist: 'Front-End', })
        .then((res) => {
            console.log('Playlist limpa com sucesso!')
        })
}

const clearBackEnd = () => {

    api.from('video').delete().match({ playlist: 'Back-End', })
        .then((res) => {
            console.log('Playlist limpa com sucesso!')
        })
}



addBackEnd()
