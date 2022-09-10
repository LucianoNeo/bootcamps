export interface IProduct{
    title: string;
    subtitle: string;
    color1: string;
    color2: string;
    picture: number;
    ratio: number
}

export const products = [
{
    title: 'Pizza Marguerita',
    subtitle: 'Tomate, Mussarela e Manjericão',
    color1: '#F9AC8A',
    color2: '#FBC6AE',
    picture: require('./assets/pizza1.jpg'),
    ratio: 1
},
{
    title: 'Pizza Catubresa',
    subtitle: 'Catupiry, Calabresa e Mussarela',
    color1: '#4DD2A5',
    color2: '#63D8B0',
    picture: require('./assets/pizza2.png'),
    ratio: 1
},
{
    title: 'Pizza Calabresa',
    subtitle: 'Calabresa e Mussarela',
    color1: '#FEB621',
    color2: '#FDD446',
    picture: require('./assets/pizza3.jpg'),
    ratio: 1
},
{
    title: 'Pizza Sensação',
    subtitle: 'Chocolate com morango',
    color1: '#FF4455',
    color2: '#FDD446',
    picture: require('./assets/pizza4.png'),
    ratio: 0.6
}
]
    
