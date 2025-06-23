import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Aboutus } from './page/aboutus/aboutus';
import { Products } from './page/products/products';

export const routes: Routes = [
     {path:"", component:Home},
     {path:'about',component:Aboutus},
     {path:'products',component:Products},
     {path:'home',component:Home},
];
