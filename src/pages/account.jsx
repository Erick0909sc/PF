import { getSession, signOut, useSession } from 'next-auth/react';
import React from 'react';

const Account = () => {
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return (
            <>
              Bienvenido/a {session.user.name} <br />
              <button onClick={() => signOut()}>Log out</button>
            </>
        )
    } else {
        return (
            <>
              <h2>Te Invitamos a que te registres</h2>
            </>
        )
    }
};

export default Account;


export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
      return {
        redirect: {
          destination: '/login'
        }
      }
    }
    return {
      props: {session}
    };
  };