export interface IProps{
    id: number
    card: {
        id: number,
        name: string,
        image: string,
        gender: string,
    }
}

export interface ICard{
    
        id: number,
        name: string,
        image: string,
        gender: string,
    
}

export interface IFavorite{
    favorite: IProps[]
  }
  
  export interface IFavState{
    favorite: {
        favorite: IProps[]
    }
  }