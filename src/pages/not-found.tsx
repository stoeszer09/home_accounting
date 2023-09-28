import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  const {year, month} = router.query;

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          That page was not found
        </div>
      </main>
    </>
  );
}