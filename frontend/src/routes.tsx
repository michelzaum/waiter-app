import { Routes, Route } from 'react-router-dom';
import { Menu } from './view/pages/Menu';
import { Categories } from './view/pages/Categories';
import { Orders } from './view/components/Orders';
import { OrdersHistory } from './view/pages/OrdersHistory';
import { Users } from './view/pages/Users';
import { PrivatePagesLayout } from './view/layout/PrivatePagesLayout';

export function Router() {
  return (
    <Routes>
      <Route element={<PrivatePagesLayout />}>
        <Route path='/' element={<Orders />} />
        <Route path='/history' element={<OrdersHistory />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/users' element={<Users />} />
      </Route>
    </Routes>
  )
}
