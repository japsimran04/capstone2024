import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-extrabold dark:text-white">ESMERALDUS COLOMBIAN COFFEE</h1>

      <h2 className="text-2xl font-extrabold dark:text-white">Lets get started </h2>
      <Link href="/ColumbianCoffee" className="hover:underline">ColumbianCoffee</Link>
      <Link href="/newpages" className="hover:underline">newpages</Link>

    </>
  );
}
