import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div className="flex flex-col max-w-full  bg-[#000000] text-zinc-50 space-y-12 md:space-y-6 overflow-hidden">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
