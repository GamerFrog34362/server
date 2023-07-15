import { config } from "dotenv"
config()

const API_KEY = process.env.MOVIE_API_KEY

export async function handleMovies(req, res) {
  const { name, id } = req.query

  if (name) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`)
    const data = await response.json()

    res.json({
      outcome: "Success",
      movies: data.Search?.map(({ Title, Poster, Year, imdbID }) => ({
        title: Title,
        poster: Poster,
        year: Year,
        imdbID,
      })),
    })
  }

  if (id) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    const data = await response.json()

    res.json({
      outcome: "Success!",
      movie: data,
    })
  }
}
