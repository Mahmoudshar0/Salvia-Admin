import { Link } from "react-router-dom";
import { PiPlantLight, PiCertificate } from "react-icons/pi";
import { TbMessage, TbPhotoCog } from "react-icons/tb";
import { LuNewspaper } from "react-icons/lu";
import { ImLab } from "react-icons/im";
import { BsBoxSeam } from "react-icons/bs";
import logoImage from "../assets/Images/logo.png";
import accountImage from "../assets/Images/account.png";

function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  const links = [
    { to: "/about", label: "About Us", icon: <PiPlantLight /> },
    { to: "/product", label: "Our Products", icon: <BsBoxSeam /> },
    { to: "/our-quality", label: "Our Quality Co.", icon: <PiPlantLight /> },
    { to: "/r-and-d", label: "R&D", icon: <ImLab /> },
    { to: "/gallary", label: "Gallery", icon: <TbPhotoCog /> },
    { to: "/events", label: "Events", icon: <LuNewspaper /> },
    { to: "/contact", label: "Contact Us", icon: <TbMessage /> },
    { to: "/certificates", label: "Certificates", icon: <PiCertificate /> },
    { to: "/page9", label: "Page 9", icon: <PiPlantLight /> },
    { to: "/page10", label: "Page 10", icon: <PiPlantLight /> },
  ];

  return (
    <div
      className="fixed inset-0 z-10000 bg-black/30 backdrop-blur-[1px]"
      onClick={onClose}
    >
      <div
        className="absolute top-0 left-0 h-full w-[260px]
        bg-[#293A23]/95 backdrop-blur-md text-white z-10001
        shadow-xl transform transition-transform duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col justify-between h-full px-6 py-6 text-left">
          <div className="mt-4">
            <img
              src={logoImage}
              alt="Salvia Naturals Logo"
              className="w-32 h-auto object-contain"
            />
          </div>

          <ul className="flex flex-col gap-5 text-lg font-light ml-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={onClose}
                  className="flex items-center gap-3 hover:text-gray-300 font-bold transition-colors"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 mt-4">
            <img
              src={accountImage}
              alt="Profile Picture"
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold">Mohamed Mohamady</p>
              <p className="text-xs text-gray-300">mohamed@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
