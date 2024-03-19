import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-extrabold dark:text-white">ESMERALDUS COLOMBIAN COFFEE</h1>

      <h2 className="text-2xl font-extrabold dark:text-white">Lets get started </h2>
      <Link href="/profile-page" className="hover:underline">profile-page</Link>
      <Link href="/category" className="hover:underline"></Link>
      <Link href="/newpages" className="hover:underline">category</Link>


      <br />
    </>
  );
}
