import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import SidebarMobile from '../components/mobile/SidebarMobile';
import SidebarDesktop from '../components/desktop/SidebarDesktop';

interface RootPath {
    routerPaths: {
        [key: string]: {
            link: string;
            name: string;
        };
    };
}

const Root: FC<RootPath> = ({ routerPaths }) => {
    const windowWidth: number = document.documentElement.clientWidth;
    // console.log(Object.keys(routerPaths));
    return (
        <div className="container-main">
            <SidebarDesktop Routes={routerPaths} />
            <SidebarMobile />
            <div className="sections-container">
                <Outlet />

            </div>
        </div>
    );
};

export default Root;
