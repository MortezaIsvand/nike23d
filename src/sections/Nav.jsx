import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <section className="flex items-center justify-between">
      <a href="/">
        <img src={headerLogo} alt="logo" />
      </a>
      <ul className="flex max-lg:hidden justify-center flex-1 w-[30%] items-center gap-16 text-xl text-slate-gray">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="hidden max-lg:block">
        <img src={hamburger} alt="menu" height={25} width={25} />
      </div>
    </section>
  );
};
export default Nav;
