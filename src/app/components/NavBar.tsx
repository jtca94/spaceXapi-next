import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-indigo-900 text-white drop-shadow">
      <div className="container mx-auto flex py-3 px-5">
        <h5 className="grow">SpaceX Launches</h5>
        <div className="sm:flex hidden">
          <h5 className="px-3">
            <Link href={"/launches"}> Launches </Link>
          </h5>
          <h5 className="px-3">Rockets</h5>
          <h5 className="px-3">Missions</h5>
        </div>
        <div className="sm:hidden">Menu</div>
      </div>
    </div>
  );
};
export default NavBar;
