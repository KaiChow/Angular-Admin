import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, ShareModule, PagesRoutingModule],
})
export class PagesModule {}
