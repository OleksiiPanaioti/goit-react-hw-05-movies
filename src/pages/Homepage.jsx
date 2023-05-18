import { MoviesList } from '../components/moviesList/MoviesList';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchTrendingMoovies } from 'services/apiService';

export default function HomePageRender() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getFetchMoovies() {
      try {
        const data = await fetchTrendingMoovies();
        const { results } = data;
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMoovies();
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
const Title = styled.h2`
  margin: ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
