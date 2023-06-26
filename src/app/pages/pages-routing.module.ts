import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { ListComponent } from './table/list/list.component'
import { TableComponent } from './table/table.component'
import { FullListComponent } from './table/full-list/full-list.component'

const routes: Routes = [
  {
    path: 'pages',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'table'
      },
      {
        path: 'table',
        component: TableComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'list'
          },
          {
            path: 'list',
            component: ListComponent
          },
          {
            path: 'full-list',
            component: FullListComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
