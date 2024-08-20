import { useMediaQuery } from '@/hooks/useMediaQuery';

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/posts' },
  { name: 'Creating', path: '/creating' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Resource', path: '/resource' },
];

export default function ResponsiveNav({
  currentPath,
}: {
  currentPath: string;
}) {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <nav className="flex justify-center items-center">
      {isMobile ? (
        <MobileNav navItems={navItems} currentPath={currentPath} />
      ) : (
        <DesktopNav navItems={navItems} currentPath={currentPath} />
      )}
    </nav>
  );
}

interface NavItem {
  name: string;
  path: string;
}

interface NavProps {
  navItems: NavItem[];
  currentPath: string;
}

export function DesktopNav({ navItems, currentPath }: NavProps) {
  return (
    <div className="nav-wrapper">
      <ul className="nav-content flex space-x-4 px-6 py-3">
        {navItems.map((item) => (
          <li key={item.path}>
            <a
              href={item.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                currentPath === item.path ? 'text-pink-500' : 'text-gray-300'
              } hover:text-pink-500`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MobileNav({ navItems, currentPath }: NavProps) {
  return (
    <div className="w-24">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <div className="flex items-center gap-2">
              Menu
              <ChevronDown className="h-4 w-4" />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={currentPath}>
              {navItems.map((item: any, index: number) => (
                <div key={item.path}>
                  {index > 0 && <MenubarSeparator />}
                  <a href={item.path}>
                    <MenubarRadioItem
                      value={item.path}
                      className={`${currentPath === item.path ? 'text-pink-500' : 'text-gray-300'} hover:text-pink-500 transition-colors duration-300`}
                    >
                      {item.name}
                    </MenubarRadioItem>
                  </a>
                </div>
              ))}
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
