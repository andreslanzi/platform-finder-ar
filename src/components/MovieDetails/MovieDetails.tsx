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
      <div className="flex flex-inline w-full text-center justify-center m-auto py-8 px-12 text-white">
        <div className="w-[25%] flex mr-12  rounded">
          <img src={movie.posterURLs.original} className="m-auto flex justify-center" />
        </div>
        <div className="w-[50%] px-8 flex flex-col justify-around text-center border-2 rounded-xl border-slate-600 bg-black shadow-2xl">
          <div>
            <span className="text-4xl font-sans text-slate-400">{movie.title.toUpperCase()}</span>
            <br />
            <span className="text-slate-500">{movie.tagline}</span>
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-medium mb-4 font-sans text-slate-300 ">
              ▼ DISPONIBLE EN ▼
            </h2>
            <div className="flex flex-inline justify-around align-center items-center ">
              {Object.keys(movie.streamingInfo.ar).map((k) => (
                <a key={k} target="_blank" href={movie.streamingInfo.ar[k][0].link}>
                  <img src={getLogo(k as Platform)} className="max-h-[50px] max-w-[140px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-4 gap-2 ">
              <div>
                <h2 className="font-sans bg-black rounded-2xl px-4 w-fit m-auto text-center py-1 text-slate-400">
                  IMDB
                </h2>
                <span className="font-sans">{movie.imdbRating / 10} ⭐</span>
              </div>

              {movie.directors && movie.directors.length > 0 && (
                <div>
                  <h2 className="font-sans bg-black rounded-2xl px-4 w-fit m-auto text-center py-1 text-slate-400">
                    {movie.directors && movie.directors.length > 1 ? 'DIRECTORES' : 'DIRECTOR'}
                  </h2>
                  {movie.directors.map((d) => (
                    <>
                      <span className="font-sans">{d}</span>
                      <br />
                    </>
                  ))}
                </div>
              )}
              {movie.creators && movie.creators.length > 0 && (
                <div>
                  <h2 className="font-sans bg-black rounded-2xl px-4 w-fit m-auto text-center py-1 text-slate-400">
                    {movie.creators && movie.creators.length > 1 ? 'CREADORES' : 'CREADOR'}
                  </h2>
                  {movie.creators.map((c) => (
                    <>
                      <span className="font-sans">{c}</span>
                      <br />
                    </>
                  ))}
                </div>
              )}
              {movie.runtime && (
                <div>
                  <h2 className="font-sans bg-black rounded-2xl px-4 w-fit m-auto text-center py-1 text-slate-400">
                    DURACIÓN
                  </h2>
                  <span className="font-sans">{movie.runtime} min</span>
                </div>
              )}
              {movie.seasons && (
                <div>
                  <h2 className="font-sans bg-black rounded-2xl px-4 w-fit m-auto text-center py-1 text-slate-400">
                    TEMPORADAS
                  </h2>
                  <span className="font-sans">{movie.seasons.length} </span>
                </div>
              )}
              {movie.genres.length > 0 && (
                <div>
                  <h2 className="font-sans bg-black rounded-2xl px-4 w-fit m-auto text-center py-1 text-slate-400">
                    GÉNEROS
                  </h2>
                  {movie.genres.map((g) => (
                    <>
                      <span className="font-sans">{g.name}</span>
                      <br />
                    </>
                  ))}
                </div>
              )}
            </div>
            <div className="text-center flex justify-center m-6">
              <iframe
                width="420"
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
