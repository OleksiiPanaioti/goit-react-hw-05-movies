import MovieItem from 'components/moviesList/movieItem/MovieItem';
import PropTypes from 'prop-types';
import { List } from './MoviesList.styled';
export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, original_title }) => {
        return <MovieItem key={id} title={original_title} id={id} />;
      })}
    </List>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
