import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import DarkModeSwitch from "./DarkModeSwtch";

function Header() {
  return (
    <header className="border-b border-primary-300 mx-6 md:mx-12 pb-2 z-20">
      <div className="flex justify-between gap-6 items-center mt-4 ">
        <MobileMenu />
        <Logo />
        <Navigation />
        <DarkModeSwitch />
      </div>
    </header>
  );
}

export default Header;

{
  /* <header className="fixed top-0 left-0 w-full bg-primary-50/80 dark:bg-primary-900/80 backdrop-blur-md border-b border-primary-300 z-50 shadow-md">
<div className="flex justify-between gap-6 items-center px-6 py-4">
  <MobileMenu />
  <Logo />
  <Navigation />
  <DarkModeSwitch />
</div>
</header> */
}
