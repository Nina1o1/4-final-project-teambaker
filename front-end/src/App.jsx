import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountEdit from './pages/Account/Account';
import MainMap from './pages/MainMap/MainMap';
import Login from './pages/Authenticate/Login';
import Register from './pages/Authenticate/Register';
import Error from './pages/Error/Error';
import InfoDetail from './pages/InfoDetail/InfoDetail';
import FavoriteList from './pages/FavoriteList/FavoriteList';
import AppLayout from './AppLayout';
import AuthLayout from './pages/Authenticate/AuthLayout';
import AccountWithLogin from './pages/Account/AccountWithLogin';
import ResetPassword from './pages/Account/ResetPassword';
import PrivateRoute from './pages/Private/PrivateRoute';

import MapLayout from './pages/MainMap/MapLayout';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route element={<AppLayout/>}>
            
            <Route element={<MapLayout />}>
              <Route path="/" element={<MainMap />} />
            </Route>
            
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            
            {/* TODO: add params: /info/:pieceInfo */}
            <Route path="/info" element={<InfoDetail/>}/>
            
            <Route path="/accountLog" element={<AccountWithLogin />} />
            <Route path="/*" element={<Error />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            
            <Route element={<PrivateRoute />}>
              <Route path="/favoritelist" element={<FavoriteList />}/>
              <Route path="/account" element={<AccountEdit />} />
            </Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
