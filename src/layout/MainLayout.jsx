import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="flex gap-10 container mx-auto">
      <header>
        <Navbar />
      </header>
      <main className="py-20 w-full ml-40 text-center">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
