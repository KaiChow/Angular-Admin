import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './pages/layout/layout.component'
import { TableComponent } from './pages/table/table.component'
import { ListComponent } from './pages/table/list/list.component'

const routes: Routes = [
  {
    path: 'pages',
    component: LayoutComponent,
    children: [
      {
        path: 'table',
        component: TableComponent,
        children: [
          {
            path: 'list',
            component: ListComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
