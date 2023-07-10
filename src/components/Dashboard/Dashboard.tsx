import { Movie } from '../../types/types';
import MovieCard from '../MovieCard';

type DashboardProps = {
  movieData: Movie[];
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setSelectedMovie: React.Dispatch<React.SetStateAction<Movie | undefined>>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Dashboard = ({ movieData, setStep, setSelectedMovie }: DashboardProps) => {
  return (
    <div className="grid grid-cols-4 gap-8 h-full text-center px-8 py-8">
      {movieData
        .filter((data) => data.streamingInfo)
        .map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.imdbId}
            setStep={setStep}
            setSelectedMovie={setSelectedMovie}
          />
        ))}
    </div>
  );
};

export default Dashboard;
