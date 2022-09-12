import React from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../stores';
import Uploader from '../components/Uploader';
import Welcome from '../components/Welcome';
// import Tips from '../components/Tips';

const Home = observer(() => {
  const { UserStore } = useStores();

  // const User = () => <div>Hello {UserStore.currentUser.attribures.username} </div>

  return (
    <>
      {UserStore.currentUser ? <div className='pad'> <Uploader /></div> : <Welcome />}
    </>
  );
});

export default Home;