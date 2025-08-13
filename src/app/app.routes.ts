import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { ProductDetail } from './product-detail/product-detail';
import { ProductList } from './product-list/product-list';


export const routes: Routes = [
    {
        path: "product-list",
        component: ProductList
    
    },
    {
        path: "product-detail",
        component: ProductDetail
    
    },
    {
        path: "contact",
        component: Contact
    
    },
    {
        path: "",
        component: Home
    
    },
    {
        path: "cart",
        component: Cart
    
    }
];
