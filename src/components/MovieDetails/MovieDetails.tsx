import { Movie, Platform } from '../../types/types';
import netflix from '../../assets/platform-logos/netflix.png';
import disney from '../../assets/platform-logos/disney.png';
import apple from '../../assets/platform-logos/apple.png';
import hbo from '../../assets/platform-logos/hbo.png';
import paramount from '../../assets/platform-logos/paramount.png';
import zee5 from '../../assets/platform-logos/zee5.png';
import prime from '../../assets/platform-logos/prime.png';

const MovieDetails = ({ movie }: { movie: Movie | undefined }) => {
  const getLogo = (platform: Platform) => {
    switch (platform) {
      case 'netflix':
        return netflix;
      case 'apple':
        return apple;
      case 'disney':
        return disney;
      case 'hbo':
        return hbo;
      case 'paramount':
        return paramount;
      case 'zee5':
        return zee5;
      case 'prime':
        return prime;
      default:
        return netflix;
    }
  };

  return movie ? (
    <>
      <div className="flex flex-inline w-full md:flex-row flex-col text-center items-center justify-center m-auto md:py-8 md:px-12 py-4 px-4 text-white">
        <div className="md:w-[400px] w-[300px] flex justify-center align-center items-center rounded">
          <img src={movie.posterURLs.original} className="m-auto flex justify-center md:mr-8" />
        </div>
        <div className="md:w-[55%] w-full md:px-8 flex flex-col justify-around text-center md:border-2 md:rounded-xl md:border-slate-600 bg-shadow-2xl">
          <div>
            <span className="lg:text-4xl text-xl font-sans text-slate-400">
              {movie.title.toUpperCase()}
            </span>
            <br />
            <span className="text-slate-500  text-sm">{movie.tagline}</span>
          </div>
          <div className="w-full">
            <h2 className="lg:text-2xl text-lg font-medium mb-4 font-sans text-slate-300 ">
              ▼ DISPONIBLE EN ▼
            </h2>
            <div className="flex sm:flex-row flex-col sm:flex-inline justify-around align-center items-center ">
              {Object.keys(movie.streamingInfo.ar).map((k) => (
                <a key={k} target="_blank" href={movie.streamingInfo.ar[k][0].link}>
                  <img
                    src={getLogo(k as Platform)}
                    className="lg:max-h-[50px] lg:max-w-[140px] md:max-h-[35px] md:max-w-[100px] max-w-[120px] md:mb-0 mb-8"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 ">
            <div className="grid xl:grid-cols-4 grid-cols-2 gap-2 ">
              <div>
                <h2 className="font-sans  text-slate-400">IMDB</h2>
                <span className="font-sans text-sm">{movie.imdbRating / 10} ⭐</span>
              </div>

              {movie.directors && movie.directors.length > 0 && (
                <div>
                  <h2 className="font-sans  text-slate-400">
                    {movie.directors && movie.directors.length > 1 ? 'DIRECTORES' : 'DIRECTOR'}
                  </h2>
                  {movie.directors.map((d) => (
                    <>
                      <span className="font-sans text-sm">{d}</span>
                      <br />
                    </>
                  ))}
                </div>
              )}
              {movie.creators && movie.creators.length > 0 && (
                <div>
                  <h2 className="font-sans  text-slate-400">
                    {movie.creators && movie.creators.length > 1 ? 'CREADORES' : 'CREADOR'}
                  </h2>
                  {movie.creators.map((c) => (
                    <>
                      <span className="font-sans  text-sm">{c}</span>
                      <br />
                    </>
                  ))}
                </div>
              )}
              {movie.runtime && (
                <div>
                  <h2 className="font-sans  text-slate-400">DURACIÓN</h2>
                  <span className="font-sans  text-sm">{movie.runtime} min</span>
                </div>
              )}
              {movie.seasons && (
                <div>
                  <h2 className="font-sans  text-slate-400">TEMPORADAS</h2>
                  <span className="font-sans text-sm">{movie.seasons.length} </span>
                </div>
              )}
              {movie.genres.length > 0 && (
                <div>
                  <h2 className="font-sans  text-slate-400">GÉNEROS</h2>
                  {movie.genres.map((g) => (
                    <>
                      <span className="font-sans  text-sm">{g.name}</span>
                      <br />
                    </>
                  ))}
                </div>
              )}
            </div>
            <div className="text-center flex justify-center m-6">
              <iframe
                width="auto"
                height="200"
                src={`https://www.youtube.com/embed/${movie.youtubeTrailerVideoId}`}></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>No movie yet</div>
  );
};

export default MovieDetails;
