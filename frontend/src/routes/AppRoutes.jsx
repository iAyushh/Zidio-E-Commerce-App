import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import Dashboard from './ADMIN/Dashboard';
// import ProductsForm from './ADMIN/ProductsForm';
// import Products from './ADMIN/Products';
// import ProductsList from './ADMIN/ProductsList';
// import EditProduct from './Admin/EditProduct';
// import CouponsList from './ADMIN/CouponsList';
// import AdminLayout from './ADMIN/AdminComponents/AdminLayout.jsx';  


import Dashboard from '../ADMIN/Dashboard';
// import AdminDashboard from '../ADMIN/Dashboard';
import ProductsForm from '../ADMIN/ProductsForm';
import Products from '../ADMIN/Products';
import CouponsList from '../ADMIN/CouponsList';
import ProductsList from '../ADMIN/ProductsList';
import EditProduct from '../ADMIN/EditProduct';
import AdminLayout from '../ADMIN/AdminComponents/AdminLayout.jsx';


const AppRoutes =() =>{
    return(

              <Routes>
                <Route path="/admin" element={
                    <AdminLayout>
                      <Dashboard />
                    </AdminLayout>
                  }
                />
                <Route path="/admin/create-product"
                  element={
                    <AdminLayout>
                      <ProductsForm />
                    </AdminLayout>
                  }
                />
                < Route path="/admin/productsGrid" element={
                    <AdminLayout>
                      < Products/>
                    </AdminLayout>
                  }/>
                <Route path="/admin/productsList" element={
                    <AdminLayout>
                      < ProductsList/>
                    </AdminLayout>
                  }/>
                <Route path="/admin/products/edit/:id" element={
                    <AdminLayout>
                      <EditProduct />
                    </AdminLayout>
                  }
                />
                <Route path='/admin/coupons' element={<AdminLayout><CouponsList/></AdminLayout>} />
              </Routes>
            
            
    );
};

export default AppRoutes;