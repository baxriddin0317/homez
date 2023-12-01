import mobileMenuItems from "@/data/mobileMenuItems";
import { isParentActive } from "@/utilis/isMenuActive";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const ProSidebarContent = () => {
  const path = usePathname();

  return (
    <Sidebar width="100%" backgroundColor="#fff" className="py-8">
      <Menu>
        {mobileMenuItems.map((item, index) => (
          <SubMenu
            key={index}
            className={isParentActive(item.subMenu, path) ? "text-brand-main" : "text-brand-black-100"}
            label={item.label}
          >
            {item.subMenu.map((subItem, subIndex) =>
              subItem.subMenu ? (
                <SubMenu
                  key={subIndex}
                  label={subItem.label}
                  className={
                    isParentActive(subItem.subMenu, path) ? "text-brand-main" : "text-brand-black-100"
                  }
                >
                  {subItem.subMenu.map((nestedItem, nestedIndex) => (
                    <MenuItem
                      key={nestedIndex}
                      component={
                        <Link
                          className={nestedItem.path == path ? "text-brand-main" : "text-brand-black-100"}
                          href={nestedItem.path}
                        />
                      }
                    >
                      {nestedItem.label}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem
                  key={subIndex}
                  component={
                    <Link
                      className={subItem.path == path ? "text-brand-main" : "text-brand-black-100"}
                      href={subItem.path}
                    />
                  }
                >
                  {subItem.label}
                </MenuItem>
              )
            )}
          </SubMenu>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default ProSidebarContent;
