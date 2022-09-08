export interface IProduct{
    title: string;
    subtitle: string;
    color1: string;
    color2: string;
    picture: number;
}

export const products = [
{
    title: 'Pizza Marguerita',
    subtitle: 'Pequena',
    color1: '#F9AC8A',
    color2: '#FBC6AE',
    picture: require('./assets/pizza1.jpg'),
},
{
    title: 'Pizza Calabresa',
    subtitle: 'BIG',
    color1: '#4DD2A5',
    color2: '#63D8B0',
    picture: require('./assets/pizza2.png'),
},
{
    title: 'Pizza Sensação',
    subtitle: 'Broto',
    color1: '#FEB829',
    color2: '#FDD446',
    picture: require('./assets/pizza3.png'),
}
]
    
