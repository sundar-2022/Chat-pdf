import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';

export const SidebarData=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/Home"
    },
    {
        title:"Chat-PDF",
        icon:<FolderCopyIcon />,
        link:"/ChatLayout"
    },
    {
        title:"Product descriptions",
        icon:<AutoAwesomeMotionIcon/>,
        link:"/ProductDescription"
    },
    {
        title:"Bulk Generation",
        icon:<DeviceHubIcon/>,
        link:"/BulkGenration"
    },
] ;
