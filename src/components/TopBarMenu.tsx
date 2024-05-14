const TopBarMenu = ({ open }: { open: boolean }) => (
  <div className={`md:hidden ${open ? "block" : "hidden"}`} id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Home
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Features
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Pricing
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      >
        Contact
      </a>
    </div>
  </div>
);

export default TopBarMenu;
