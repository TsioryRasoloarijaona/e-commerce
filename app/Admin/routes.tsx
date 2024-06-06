import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

import { IRoute } from './components/admin/types/navigation';

const routes: IRoute[] = [
  {
    name: 'Main Dashboard',
    layout: '/Admin/dashboard',
    path: '/main',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Add car',
    layout: '/Admin/dashboard',
    path: '/add-car',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    secondary: true,
  },
  {
    name: 'Cars',
    layout: '/Admin/dashboard',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/cars',
  },
  {
    name: 'Appointments',
    layout: '/Admin/dashboard',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/appointments',
  }
];

export default routes;
