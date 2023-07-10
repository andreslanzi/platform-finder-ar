export type Movie = {
  type: string;
  title: string;
  overview: string;
  streamingInfo: {
    ar: {
      [key: string]: {
        type: string;
        price: {
          amount: string;
          currency: string;
          formatted: string;
        };
        link: string;
      }[];
    };
  };
  cast: string[];
  year: number;
  advisedMinimumAudienceAge: number;
  imdbId: string;
  imdbRating: number;
  imdbVoteCount: number;
  tmdbId: number;
  tmdbRating: number;
  originalTitle: string;
  backdropPath: string;
  genres: {
    id: number;
    name: string;
  }[];
  originalLanguage: string;
  countries: string[];
  directors: string[];
  creators: string[];
  runtime: number;
  youtubeTrailerVideoId: string;
  youtubeTrailerVideoLink: string;
  posterPath: string;
  posterURLs: {
    original: string;
  };
  tagline: string;
  seasons: {
    type: string;
    title: string;
    overview: string;
    episodes: string[];
  }[];
};

export type Platform = 'apple' | 'netflix' | 'hbo' | 'disney' | 'paramount' | 'zee5' | 'prime';
