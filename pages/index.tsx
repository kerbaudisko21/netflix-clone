import {signOut, getSession} from 'next-auth/react'
import {NextPageContext} from 'next'
import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar';
import BillBoard from '@/components/BillBoard';
import MovieList from '@/components/MovieList';
import useMoviesList from '@/hooks/useMoviesList';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: movies } = useMoviesList();
  const { data: favorites = [] } = useFavorites();
  const {isOpen, closeModal} = useInfoModalStore();

  return (
    <>
      <Navbar />
      <BillBoard />
      <div className='pb-40'>
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  )
}
