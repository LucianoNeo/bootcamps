import styled from "styled-components";

const StyledFavorites = styled.div`
  width: 100%;
  padding: 32px;
  
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  .cardContainer{
      display: flex;
      gap: 8px;
    }

  .favoriteCard{
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    align-items: center;
    text-decoration: none;
  }

  a:visited {
    color: ${({ theme }) => theme.textColorBase}
  }

  img {
    
    width: 100px;
    height: 100px;
    border-radius: 50%; 
  }
`

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
    border-radius: 10px;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;


export default function Timeline(props) {



  const playlistNames = Object.keys(props.playlists)
  return (
    <>
      <StyledTimeline>
        {playlistNames.map((playlistName, index) => {
          const videos = props.playlists[playlistName]
          return (
            <section key={index}>
              <h2>{playlistName}</h2>
              <div>
                {videos
                  .filter((video) => {
                    const titleNormalized = video.title.toLowerCase()
                    const searchValueNormalized = props.searchValue.toLowerCase()
                    return titleNormalized.includes(searchValueNormalized)
                  })
                  .map((video, index) => {
                    return (
                      <a href={video.url} key={index}>
                        <img src={video.thumb} />
                        <span>
                          {video.title}
                        </span>
                      </a>
                    )
                  })}
              </div>

            </section>

          )

        })}

      </StyledTimeline>
      <StyledFavorites>
        <h2>AluraTubes Favoritos</h2>
        <section className="cardContainer">
          {props.favorites.map((favorite, index) => {
            return (
              <a href={favorite.url} key={index} className='favoriteCard' target='_blank' rel="noreferrer">
                <div>
                  <img src={favorite.thumb} />
                  <p>
                    {favorite.name}
                  </p>
                </div>
              </a>
            )
          })}
        </section>
      </StyledFavorites>
    </>
  )
}
