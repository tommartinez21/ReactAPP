import MovieList from "./MovieList"

export const Home = () => {
    let links = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Google',
            link: 'https://www.google.com',
            target: true,
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com',
            target: true,
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com',
            target: true,
        },
        {
            name: 'Twitter',
            link: 'https://www.twitter.com',
            target: true
        }
    ]
    return (
        <>
            <nav>
                <ul>
                    {links.map((elem, i) => (
                        <li key={i}><a href={elem.link} target={elem.target ? '_blank' : null}>{elem.name}</a></li>
                    ))}
                </ul>
            </nav>
            <main>
                <MovieList />
            </main>
        </>
    )
}
