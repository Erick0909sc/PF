import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../img/logo-tasty.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center content-center justify-center w-screen h-screen bg-color3">
      <div className="m-0">
        <Image src={Logo} />
      </div>
      <Link href="/login">
        <button className="bg-color1 w-44 h-20 drop-shadow-2xl mb-20">
          <p className="text-color3 text-3xl font-manrope">Entrar</p>
        </button>
      </Link>
    </div>
  );
}
