import React, { type PropsWithChildren } from "react";
import Navbar from "./Navbar";


export default function Layout ({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}