import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col justify-between gap-24">
      <div className="flex max-lg:flex-col justify-between items-start gap-16">
        <div className="text-white flex flex-col gap-8">
          <img src={footerLogo} alt="footer logo" width={170} />
          <p className="max-w-sm text-white-400">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-4">
            {socialMedia.map((item) => (
              <img
                src={item.src}
                alt={item.alt}
                className="bg-white rounded-full p-2"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-20 xl:gap-32 justify-between">
          {footerLinks.map((section) => (
            <div>
              <h2 className="text-white text-2xl mb-4">{section.title}</h2>
              {section.links.map((item) => (
                <ul>
                  <li className="text-white-400 mt-2 hover:text-slate-gray">
                    <a href={item.link}>{item.name}</a>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-sm:flex-col justify-between items-center text-lg text-white-400">
        <div className="flex gap-2">
          <img src={copyrightSign} alt="copyRightSign" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </section>
  );
};
export default Footer;
