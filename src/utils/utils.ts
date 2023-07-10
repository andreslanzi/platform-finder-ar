import axios from 'axios';

export const fetchMovieData = async (movieTitle: string) => {
  const response = await axios.get(
    'https://streaming-availability.p.rapidapi.com/v2/search/title',
    {
      params: {
        title: movieTitle.toLowerCase(),
        country: 'ar',
        show_type: 'all',
        output_language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': '1ed1ceaf24mshb7bceb9d1c89e03p163315jsn936e55bd6a00',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    }
  );
  return response.data;
};
