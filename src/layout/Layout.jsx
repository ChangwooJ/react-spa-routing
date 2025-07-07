import { Outlet } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";


const Layout = () => {
  return (
    <div className="h-screen w-full">
      <header className="w-full h-fit p-5">
        <div className="text-2xl font-semibold mb-4">NewsViewer</div>
        <div className="w-full flex">
          <Search />
          <Category />
        </div>
      </header>
      <main className="relative flex-1 min-h-0 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;