import { Suspense, lazy } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { MovieDetails } from 'components/movieDetails/MovieDetails';

const CastPage = lazy(() => import('./CastPage'));
const ReviewsPage = lazy(() => import('./ReviewsPage'));

const MovieDetailsRender = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const goBackPage = location.state?.from ?? '/';
  return (
    movieId && (
      <>
        <GoBack to={goBackPage}>Go back</GoBack>
        <MovieDetails />
        <AdditionalInfo>
          <h3>Additional information</h3>
          <AdditionalLink to="cast">Cast</AdditionalLink>
          <AdditionalLink to="reviews">Reviews</AdditionalLink>
        </AdditionalInfo>{' '}
        {/* <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
      </Suspense> */}
        <Suspense fallback={<>Loading..</>}>
          <Routes>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};
const GoBack = styled(Link)`
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
const AdditionalInfo = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
`;
const AdditionalLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-right: ${p => p.theme.space[4]}px;
  &.active {
    color: ${p => p.theme.colors.accent};
  }
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
export default MovieDetailsRender;
