'use client';
import { Menu } from 'lucide-react';
import { FC } from 'react';
import { useMenu } from './Provider';
import './Navbar.css';  // Import the CSS file
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    const { showMenu, showMenuVisibility } = useMenu();
    return (
        <nav className="flex sticky shadow-md top-0 z-20 bg-body p-5 text-info justify-between">
            {/* <SearchBar /> */}
            <div>{/* Place holder for search bar */}</div>
            <div className="flex items-center gap-5">
                <a href='https://drive.google.com/file/d/13LHPfUjPkWt1bQQJGd04m0XevY8E4_RR/view' target='__'   style={{ color: 'white' }}
                    className="resume-link">
                    Resume 
                </a>

                <button
                    onClick={() => showMenuVisibility(!showMenu)}
                    type="button"
                >
                    <Menu className="flex lg:hidden cursor-pointer hover:text-primary transition-colors" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
