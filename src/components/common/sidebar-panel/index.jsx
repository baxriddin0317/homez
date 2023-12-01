import ContactInfo from "./ContactInfo";
import MenuItems from "./MenuItems";
import SocialLinks from "./SocialLinks";
import { FaTimes } from "react-icons/fa"

const SidebarPanel = ({setBarPanel, barPanel}) => {
  return (
    <div className={`hidden md:block fixed w-full h-full ${barPanel ? 'right-0 top-0 z-[60]' : '-right-full'}`}>
      <div onClick={() => setBarPanel(false)} className={`absolute ${barPanel ? 'w-full h-full' : 'w-0 h-0'} bg-black/50 z-[60] inset-0`}>
      </div>
      <div className={`absolute flex flex-col z-[70] max-w-[392px] w-full h-screen bg-white transition-all duration-500 ${barPanel ? 'right-0 ' : '-right-full'}`}>
        <div className="flex items-center justify-between border-b border-brand-gray-100 pt-6 pb-4 pl-7 pr-5">
          <h4 className="text-xl font-semibold text-brand-black-100">Welcome to Realton</h4>
          <button onClick={() => setBarPanel(false)} className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-gray-300 text-brand-black-100 hover:bg-brand-main hover:text-white transition-all duration-500">
            <FaTimes />
          </button>
        </div>
        {/* End header */}

        <MenuItems />

        <div className="mt-auto">
          <div className="flex flex-wrap gap-4 pt-11 pb-8 pl-7 border-y border-brand-gray-100">
            <ContactInfo />
          </div>
          {/* End .row */}

          <div className="flex py-8 pl-7">
            <div className="flex items-center gap-6">
              <h6 className="text-sm text-brand-black-100 font-semibold">Follow us</h6>
              <SocialLinks />
            </div>
          </div>
        </div>
        {/* End hsidebar-content */}
      </div>
    </div>
  );
};

export default SidebarPanel;
