# Anime-Lessons
<div style='display:flex flex-wrap:wrap justify-content: center'>
<img src='screen1.jpg' max-height='300px'>
<img src='screen2.jpg' max-height='300px'>

</div>
<br>
<br>

Projeto desenvolvido durante o evento Ignite-Lab02 da RocketSeat.  
Se trata de uma plataforma de aulas/eventos desenvolvida com as tecnologias:
<div style='display:flex; align-items:center'>
<img src='https://img.shields.io/badge/REACTJS-blue'>
<img src='https://img.shields.io/badge/REACT_ROUTER_DOM-red'>
<img src='https://img.shields.io/badge/TYPESCRIPT-blue'>
<img src='https://img.shields.io/badge/GRAPHCMS-green'>
<img src='https://img.shields.io/badge/GRAPHQL-lightgreen'>
<img src='https://img.shields.io/badge/APOLLO-green'>
<img src='https://img.shields.io/badge/VITE-blue'>
<img src='https://img.shields.io/badge/VIMEJS-orange'>
<img src='https://img.shields.io/badge/TAILWINDCSS-lightblue'>
</div>




Projeto hospedado e rodando na 
<a href='https://anime-lessons.vercel.app/'><img src='https://img.shields.io/badge/VERCEL-blue'>
</a>

## Adições pós evento
- Rodapé
- personalização do tema para liçoes dos animes
- responsividade

<img src='screen3.jpg' max-height='300px'>
<img src='screen4.jpg' max-height='300px'>

## Detalhes técnicos:
A interface da plataforma foi desenvolvida com REACTJS e TAILWINDCSS. Projeto criado utilizando a ferramenta VITE<br>
Para obter acesso à plataforma o usuário deve cadastrar usuário e email na página inicial, estes que são enviados ao banco de dados GRAQHQL utilizando APOLLO CLIENT e se comunicando com a API do GRAPHCMS.
Toda a criação do backend está centralizada no GRAPHCMS.<br>
O redirecionamento de páginas é executado com REACT ROUTER DOM.<br>
Assim que efetuado a inscrição o usuário é redirecionado para a página de aulas/videos, que são carregadas dinamicamente com as informações do banco do GRAPHCMS. Contendo uma barra lateral com as datas, horários e nome das aulas/videos, e o conteudo principal que contém o vídeo (carregado utilizando a biblioteca VIMEJS) e detalhes sobre a aula e professor/palestrante.
A responsividade é controlada através de classes do TAILWINDCSS e ESTADOS(useState) do react (para controle de variáveis que ativam ou desativam elementos na tela)
