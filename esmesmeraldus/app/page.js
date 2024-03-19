import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-extrabold dark:text-white">ESMERALDUS COLOMBIAN COFFEE</h1>

      <h2 className="text-2xl font-extrabold dark:text-white">Lets get started </h2>
      <div>
        <Link href="/OurProducts" className="hover:underline">OurProducts</Link>
      </div>
      
      <div>
        <Link href="/Still_working/Recipes" className="hover:underline">Recipes</Link>
      </div>
      <div>
        <Link href="/Still_working/Homepage" className="hover:underline">Homepage</Link>
      </div>
      <div>
        <Link href="/Still_working/UserOut" className="hover:underline">SignOut</Link>
      </div>
      <div>
        <Link href="/Still_working/MerchandiseCoffee" className="hover:underline">Coffee</Link>
      </div>
      <div>
        <Link href="/Still_working/MerchandiseTea" className="hover:underline">Tea</Link>
      </div>
    </>
  );
}
