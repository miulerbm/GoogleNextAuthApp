/**
 * Se crea este archivo para hacer que el contexto Provider
 * Que maneja los datos de sesión de los usuarios autenticados con Next Auth
 * Se pueda usar del lado del cliente, sin interferir con el lado del sv
 * de los demás elementos en el layout.
 *
 * Cualquier componente que se pase, va a estar dentro del Session Provider
 * que manejará la sesión de cada usuario logeado
 */

"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
