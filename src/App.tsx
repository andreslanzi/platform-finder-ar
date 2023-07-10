import { useState } from 'react';
import Form from './components/Form';
import { Movie } from './types/types';
import Dashboard from './components/Dashboard';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);
  const [step, setStep] = useState(0);

  return (
    <div className="p-16 bg-primary">
      <h1 className="text-white-100 text-xl">Buscador De Películas Y Series</h1>
      <h2 className="text-gray-400">by Andres Lanzi</h2>
      <div className="py-8">
        {step !== 0 && (
          <span
            className="text-white text-xl mt-8 cursor-pointer hover:font-bold hover:underline"
            onClick={() => setStep(step - 1)}>
            ATRÁS
          </span>
        )}

        {step === 0 && <Form setMovieData={setMovieData} setStep={setStep} />}
        {step === 1 && (
          <Dashboard movieData={movieData} setStep={setStep} setSelectedMovie={setSelectedMovie} />
        )}
        {step === 2 && <MovieDetails movie={selectedMovie} />}
      </div>
    </div>
  );
}

export default App;
