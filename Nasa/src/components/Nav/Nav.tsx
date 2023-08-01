export default function Nav() {
  return (
    <header className="max-w-full p-4 shadow-sm shadow-white">
      <div className="flex justify-evenly">
        <a href="/" className="font-bold text-2xl font-serif cursor-pointer">
          <span className="text-red-700">Nasa</span> API
        </a>
        <ul className="flex gap-4 font-serif">
          <li className="text-lg hover:text-red-700 hover:rotate-6 cursor-pointer">
            <a href="">Explore</a>
          </li>
          <li className="text-lg hover:text-red-700 hover:rotate-6 cursor-pointer">
            <a href="/creator">Creator</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
