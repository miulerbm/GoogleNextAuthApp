"use client";

import Link from "next/link";
import { getSession, signIn, useSession } from "next-auth/react";
import axios from "axios";
import { useEffect } from "react";
import Cookie from "js-cookie";

function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  const session2 = getSession();
  console.log("session2", session2);

  const signUp = async (token: string) => {
    try {
      const response = await axios.post(
        "https://p5l1rdvb8d.execute-api.us-east-1.amazonaws.com/Prod/user/google/login",
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
            // Agrega aquí más encabezados según sea necesario
          },
        }
      );
      console.log(response);
    } catch (error) {
      // Manejo de errores
      console.error("Error al realizar la solicitud:", error);
      return null;
    }
  };

  //Traer cookies
  const tokenGoogle = Cookie.get("next-auth.session-token");

  useEffect(() => {
    console.log("tokenGoogle", tokenGoogle);
  }, [tokenGoogle]);

  return (
    <nav className="bg-slate-900 flex items-center py-3 justify-between px-20 text-white">
      <Link href="/">
        <h1>NextGoogle</h1>
      </Link>
      <div className="flex gap-x-2 items-center">
        <Link href="/dashboard">Dashboard</Link>
        <button
          onClick={() => signIn()}
          className="bg-sky-400 px-3 py-2 rounded"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
