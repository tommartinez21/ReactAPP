import Movie from "./Movie"

const MovieList = () => {
    let movies = [
        {
            name: 'Jurassic Park',
            genre: 'Ciencia Ficcion',
            duration: '127mins',
            img: 'https://es.web.img2.acsta.net/pictures/14/03/25/09/25/346980.jpg '
        },
        {
            name: 'Harry Potter y la piedra filosofal',
            genre: 'Fantasia',
            duration: '152mins',
            img: 'https://images2.vudu.com/poster2/10617-338',
        },
        {
            name: 'Rapidos y Furiosos 1',
            genre: 'Acción',
            duration: '106mins',
            img: 'https://sites.google.com/site/jonathanandres320/_/rsrc/1467124695099/autos-de-rapido-y-furioso/rapido-y-furioso1.jpg ',
        }
    ];

    let peliculaSeleccionada = 'No se seleccionó ninguna película';
    let cambiarPeliculaSeleccionada = (data) => peliculaSeleccionada = data
    return (
        <>
        <div className='peliculas'>
                {movies.map((elem, i) => (
                    <Movie key={i} img={elem.img} cambiarPeliculaSeleccionada={cambiarPeliculaSeleccionada} genre={elem.genre} duration={elem.duration}>{elem.name}</Movie>
                ))}
        </div>
         <button className='showMovie' onClick={() => console.log(peliculaSeleccionada)}>Mostrar película seleccionada</button>
        </>
    )
}

export default MovieList
