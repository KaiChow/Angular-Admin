import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ShareModule } from '../share/share.module';
import { TableComponent } from './table/table.component';
import { ListComponent } from './table/list/list.component';

@NgModule({
  declarations: [LayoutComponent, TableComponent, ListComponent],
  imports: [CommonModule, ShareModule, PagesRoutingModule],
})
export class PagesModule {}
