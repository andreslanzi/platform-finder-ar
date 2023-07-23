import { useState } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Movie } from '../../types/types';
import { fetchMovieData } from '../../utils/utils';

type FormProps = {
  setMovieData: React.Dispatch<React.SetStateAction<Movie[]>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Form = ({ setMovieData, setStep }: FormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieTitle, setMovieTitle] = useState<string>('');
  const [error, setError] = useState('');

  const handleMovieTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieTitle(e.currentTarget.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const movies = await fetchMovieData(movieTitle);
    if (
      movies.result.length > 0 &&
      movies.result.filter((r: Movie) => r.streamingInfo.ar).length > 0
    ) {
      setMovieData(movies.result.filter((r: Movie) => r.streamingInfo.ar));
      setStep(1);
    } else {
      setIsLoading(false);
      setError('No movies found 🥺 \n Maybe try another title?');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col justify-center align-center content-center items-center text-white">
      <h3 className="text-white-100 font-semibold text-2xl mb-4"></h3>
      <input
        className={`mb-4 w-[350px] ${
          isLoading ? 'bg-gray-800' : 'bg-inherit'
        } p-2 border-b-4 outline-none text-white-100 text-xl`}
        type="text"
        value={movieTitle}
        onChange={handleMovieTitle}
        disabled={isLoading}
        placeholder="Ingresá el título que buscabas!"
        onKeyDown={handleKeyDown}
      />
      {!isLoading && (
        <button
          className="py-2 px-4 hover:bg-blue-900 w-[200px] border-solid border-2 border-white-100 rounded-xl hover:bg-white hover:text-primary bg-primary text-white"
          onClick={handleSubmit}>
          Buscar Plataformas
        </button>
      )}
      {isLoading && (
        <MagnifyingGlass
          visible={true}
          height="60"
          width="60"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      {error && (
        <span className="text-xl text-red-600 whitespace-pre text-center mt-8">{error}</span>
      )}
    </div>
  );
};

export default Form;
