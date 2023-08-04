import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen max-w-full bg-[#000000] text-zinc-50 space-y-24">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
