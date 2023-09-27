import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "~/components/Navbar";

export default function Home() {
  const router = useRouter();
  const {year, month} = router.query;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          year month
          Post: {year} {month}
        </div>
      </main>
    </>
  );
}