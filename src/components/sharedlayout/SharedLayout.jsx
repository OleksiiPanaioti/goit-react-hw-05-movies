import { LayoutContainer, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <LayoutContainer>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
    </LayoutContainer>
  );
};

export default SharedLayout;
