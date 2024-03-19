import Image from 'next/image';

export default function ColombianCoffee() {
  return (
    <main className="bg-custom-main-color">
      {/* Navigation Bar */}
      <nav className="bg-custom-color py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-16">
            <a href="/" className="text-color hover:text-color text-lg hover:underline">Home</a>
            <a href="/shop" className="text-color hover:text-color text-lg hover:underline">Shop</a>
            <a href="/learn" className="text-color hover:text-color text-lg hover:underline">Learn</a>
            <a href="/about" className="text-color hover:text-color text-lg hover:underline">About</a>
          </div>

          {/* Account Links, Cart Icon, Login and Signup Buttons */}
          <div className="flex items-center space-x-2">
            {/* Cart Icon */}
            <a href="/cart">
              <Image src="/images/cart.png" alt="Cart" width={24} height={24} />
            </a>
            {/* Signup Button */}
            <a href="/signup">
            <Image src="/images/signup.png" alt="Signup" width={150} height={150} />
            </a>
            {/* Login Button */}
            <a href="/login">
            <Image src="/images/login.png" alt="Login" width={150} height={150} />
            </a>
          </div>
        </div>
      </nav>


<section className="container mx-auto px-4 flex flex-col justify-center items-center h-full mb-10">
  <h1 className="font-bold text-3xl my-6 bg-brown-color">Colombian Coffee</h1>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          <div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto transition duration-300 ease-in-out hover:bg-green-700 hover:text-white">
            <Image src="/images/classic.png" alt="Classic 250g - Specialty Coffee" width={100} height={100} layout="responsive" />
            <div className="mt-4">
              <h2 className="font-bold text-lg">Classic 250g - Specialty Coffee</h2>
              <p>Citric and unrefined cane sugar.</p>
              <p className="mt-2 font-bold">CAD$17.50</p>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto transition duration-300 ease-in-out hover:bg-green-700 hover:text-white">
            <Image src="/images/supremo.png" alt="Supremo 250g - Specialty Coffee" width={100} height={100} layout="responsive" />
            <div className="mt-4">
              <h2 className="font-bold text-lg">Supremo 250g - Specialty Coffee</h2>
              <p>Unrefined cane sugar, honey, wood, and resin.</p>
              <p className="mt-2 font-bold">CAD$17.50</p>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto transition duration-300 ease-in-out hover:bg-green-700 hover:text-white">
            <Image src="/images/caturra.png" alt="Caturra 250g - Specialty Coffee" width={100} height={100} layout="responsive" />
            <div className="mt-4">
              <h2 className="font-bold text-lg">Caturra 250g - Specialty Coffee</h2>
              <p>Honey and caramel, low acidity with hints of lemongrass.</p>
              <p className="mt-2 font-bold">CAD$18.50</p>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto transition duration-300 ease-in-out hover:bg-green-700 hover:text-white">
            <Image src="/images/blend.png" alt="Blend 250g - Dark Roast" width={100} height={100} layout="responsive" />
            <div className="mt-4">
              <h2 className="font-bold text-lg">Blend 250g - Dark Roast</h2>
              <p>Dark Chocolate, nutmeg, and sugar cane.</p>
              <p className="mt-2 font-bold">CAD$18.50</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer starts here */}
      <footer className="flex flex-col">

        {/* Quote section */}
        <div className="text-center bg-bottom-quote py-6">
          <p className="text-lg mb-4 text-color">Coffee, rich as an emerald</p>
        </div>
        {/* Rest of the footer with a green background */}
        <footer className="bg-[#4B5320] flex-grow py-6">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          
          {/* Subscription Section */}
          <div className="flex flex-col text-left text-black">
            <p className="mb-2 text-color">Subscribe for more news!</p>
            <p className="mb-4 text-color">We send out news, deals and recipes! Don't miss out!</p>
            <form className="flex">
              <input type="email" placeholder="Enter Email Address" className="p-2 rounded-l" />
              <button className="bg-black text-white p-2 rounded-r">→</button>
            </form>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-2 mb-4">
                <a href="mailto:esmeralduscoffee@gmail.com">
                <Image src="/images/mail.png" alt="Facebook" width={24} height={24} />
                </a>
                <a href="https://www.facebook.com/esmeralduscoffe">
                <Image src="/images/facebook.png" alt="Facebook" width={25} height={50} />
                </a>
                <a href="https://www.instagram.com/esmeralduscoffee" className="mt-2">
                <Image src="/images/instagram.png" alt="Instagram" width={25} height={50} />
                </a>
                <a href="https://www.pinterest.ca/esmeralduscoffee/" className="mt-3">
                <Image src="/images/pintrest.png" alt="Pinterest" width={25} height={50} />
                </a>
                <a href="https://www.linkedin.com/company/esmaralduscoffee/" className="mt-4">
                <Image src="/images/linkdin.png" alt="Linkdin" width={25} height={50} />
                </a>
              </div>
            {/* Legal links*/}
            <div className="flex flex-col items-end space-y-2 text-color">
              <a href="/terms-of-service" className="text-sm hover:underline">Terms of Service</a>
              <a href="/return-policy" className="text-sm hover:underline">Return Policy</a>
              <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>
            </div>
          </div>
          </footer>
      </footer>
    </main>
  );
}
