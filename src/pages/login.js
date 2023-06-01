import Image from "next/image";
import Logo from "../img/logo-tasty.png";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import GoogleLogin from "@/Components/GoogleLogin";
export default function Login() {
  return (
    <section className="flex flex-col items-center bg-color3 h-screen w-screen">
      <div className="flex flex-wrap mt-10 max-w-sm">
        <Image src={Logo} alt={"tasty-meals-logo"} />
      </div>
      <form className="flex flex-col items-center">
        <label htmlFor="user" className="text-color1 text-xl mb-2 font-manrope">
          Correo:
        </label>
        <div className="relative flex items-center ">
          <EnvelopeIcon class="text-color4 w-5 h-5 absolute ml-2" />
          <input
            type="text"
            name="user"
            placeholder="Ingrese su correo aquí"
            className="pl-8 h-8 rounded-lg"
          ></input>
        </div>
        <div className="flex flex-col items-center p-10">
          <label htmlFor="password" className="text-color1 font-manrope">
            Contraseña:
          </label>
          <input type="password" name="password"></input>
        </div>
        <GoogleLogin />
      </form>
    </section>
  );
}
