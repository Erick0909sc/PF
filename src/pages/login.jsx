import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') {
    return (
      <>
        Bienvenido/a  {session.user.name} <br />
        <button onClick={() => signOut()}>Log out</button>
      </>
    )
  }
  return (
    <>
      Registrarse con: <br />
      <button onClick={() => signIn()}>Google</button>
    </>
  )
};


export default Login;

