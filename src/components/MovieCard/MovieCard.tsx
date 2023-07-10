import { Movie } from '../../types/types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type MovieCardProps = {
  movie: Movie;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setSelectedMovie: React.Dispatch<React.SetStateAction<Movie | undefined>>;
};

const MovieCard = ({ movie, setStep, setSelectedMovie }: MovieCardProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer text-white-100"
      onClick={() => {
        setSelectedMovie(movie);
        setStep(2);
      }}>
      <LazyLoadImage
        src={movie.posterURLs.original}
        className="max-h-[300px]"
        loading="lazy"
        alt={movie.title}
      />

      <div className="mt-4">
        <div>{movie.title}</div>
        <div>{movie.year}</div>
        <div>IMDB {movie.imdbRating / 10}</div>
      </div>
    </div>
  );
};

export default MovieCard;
