import {
    Button,
    ButtonGroup,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react';
import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import localFont from 'next/font/local';
import {
    BriefcaseBusiness,
    HomeIcon,
    MessageSquare,
    User2Icon,
} from 'lucide-react';
import Image from 'next/image';

const futuraBlack = localFont({ src: '../public/Futura Black.ttf' });

const Header = () => {
    return (
        <>
            <Navbar>
                <NavbarBrand>
                    <p>
                        <Image
                            src='https://res.cloudinary.com/dw9sg2gdi/image/upload/v1725391417/logo_xro4h6.png'
                            alt='logo'
                            className='opacity-100 w-[40px] md:w-[40px] lg:w-[40px]'
                            width={40}
                            height={40}
                        />
                    </p>
                    <p className='ml-2 text-lg font-semibold'>AishDev</p>
                </NavbarBrand>
                <NavbarContent justify='center' className='hidden lg:flex'>
                    <NavbarItem>
                        <ButtonGroup variant='light' size='lg'>
                            <Button as={Link} href='/'>
                                <HomeIcon />
                            </Button>
                            <Button as={Link} href='/about'>
                                <User2Icon />
                            </Button>
                            <Button as={Link} href='/portfolio'>
                                <BriefcaseBusiness />
                            </Button>
                            <Button as={Link} href='/contact'>
                                <MessageSquare />
                            </Button>
                        </ButtonGroup>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify='end'>
                    <NavbarItem>
                        {/* <ThemeSwitcher /> */}
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
};

export default Header;
