import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductComponent } from './pages/product/product.component';
import { UserComponent } from './pages/user/user.component';
import { SalesComponent } from './pages/sales/sales.component';
import { SalesHistoryComponent } from './pages/sales-history/sales-history.component';
import { ReportComponent } from './pages/report/report.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'productos', component: ProductComponent },
    { path: 'usuarios', component: UserComponent },
    { path: 'ventas', component: SalesComponent },
    { path: 'historial-ventas', component: SalesHistoryComponent },
    { path: 'reportes', component: ReportComponent },
];
