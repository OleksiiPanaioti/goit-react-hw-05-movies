import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './sharedLayout/SharedLayout';

const HomePageRender = lazy(() => import('../pages/HomePage'));
const MoviesPageRender = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsRender = lazy(() => import('../pages/MovieDetailsPage'));

export const App = () => {
  return (
    <>
      <SharedLayout />
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<HomePageRender />} />

          <Route path="movies" element={<MoviesPageRender />} />

          <Route path="/movies/:movieId/*" element={<MovieDetailsRender />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
