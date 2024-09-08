import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, Dropdown, Button, Drawer } from 'antd';
import { DownOutlined, MenuOutlined  } from '@ant-design/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = (
    <Menu>
      <Menu.Item key="1"><a href="#">About</a></Menu.Item>
      <Menu.Item key="2"><a href="#">Pricing</a></Menu.Item>
      <Menu.Item key="3"><a href="#">FAQs</a></Menu.Item>
      <Menu.Item key="4"><a href="#">Terms and Conditions</a></Menu.Item>
      <Menu.Item key="5"><a href="#">Privacy Policy</a></Menu.Item>
      <Menu.Item key="6"><a href="#">Blog</a></Menu.Item>
      <Menu.Item key="7"><a href="#">Blog Detail Page</a></Menu.Item>
    </Menu>
  );

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scroll ? 'bg-white text-blue-900 shadow-lg' : 'bg-transparent text-black'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Logo" width={150} height={50} />
        </div>
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900 hover:text-blue-400' : 'text-white'}`}>Home</a>
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>Services</a>
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>Portfolio</a>
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>Testimonials</a>
          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>Team</a>
          
          {/* Antd Dropdown for Menu */}
          <Dropdown overlay={menuItems}>
            <a className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>
              Menu <DownOutlined size={1} />
            </a>
          </Dropdown>

          <a href="#" className={`hover:text-blue-300 ${scroll ? 'text-blue-900' : 'text-white'}`}>News</a>
        </div>
        <div className="flex items-center space-x-6">
          <button className={`bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md hidden md:block ${scroll ? 'bg-blue-600' : ''}`}>Get Quotes</button>
        </div> 
        <div className="md:hidden flex items-center">
          {/* Mobile menu button */}
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            className="bg-transparent border-none focus:outline-none"
            style={{ color: scroll ? 'black' : 'white' }} 
          />
        </div>
      </div>

      {/* Drawer for mobile view */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <a href="#" className="block px-4 py-2 text-sm">Home</a>
        <a href="#" className="block px-4 py-2 text-sm">Services</a>
        <a href="#" className="block px-4 py-2 text-sm">Portfolio</a>
        <a href="#" className="block px-4 py-2 text-sm">Testimonials</a>
        <a href="#" className="block px-4 py-2 text-sm">Team</a>
        <Dropdown overlay={menuItems}>
          <a className="block px-4 py-2 text-sm">
            Menu <DownOutlined />
          </a>
        </Dropdown>
        <a href="#" className="block px-4 py-2 text-sm">News</a>
      </Drawer>
    </nav>
  );
};

export default Navbar;
