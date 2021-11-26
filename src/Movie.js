const Movie = ({children, genre, duration, cambiarPeliculaSeleccionada, img}) => {
    return (
       <article>
           <img src={img} alt="" />
           <ul>
               <li>Pelicula: {children}</li>
               <li>Género: {genre}</li>
               <li>Duración: {duration}</li>
           </ul>
           <br />
           <button onClick={()=>cambiarPeliculaSeleccionada(children)}>Seleccionar película</button>
       </article>
           
       
    )
}

export default Movie
