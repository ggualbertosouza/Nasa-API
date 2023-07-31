import Article from "../components/Article/Article";
import Nav from "../components/Nav/Nav";

export default function Home() {
  return (
    <div className="min-h-screen max-w-full bg-[#000000] text-zinc-50">
      <Nav />
      <Article />
    </div>
  );
}
