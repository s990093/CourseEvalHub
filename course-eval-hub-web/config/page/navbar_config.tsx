interface NavItem {
  title: string;
  url: string;
  icon: string;
  open: boolean;
}
interface NavItemTitle {
  navItems: NavItem;
}
interface PageConfig {
  navItemTitle: NavItemTitle;
  navItems: NavItem[];
}

const NavbarConfig: PageConfig = {
  navItemTitle: {
    navItems: { title: "評價網站", url: "/", icon: "home", open: true },
  },
  navItems: [
    { title: "探索", url: "/discover", icon: "home", open: true },
    { title: "關於", url: "/about", icon: "info", open: true },
    { title: "許願", url: "/about", icon: "info", open: true },
    { title: "評價", url: "/services", icon: "services", open: true },
  ],
};

export default NavbarConfig;
