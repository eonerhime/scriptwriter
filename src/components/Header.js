import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header className="border-b border-primary-300 pb-2 mx-4 z-40">
      <div className="flex mt-4 min-[601px]:justify-center min-[840px]:justify-between items-center ">
        <MobileMenu />
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
