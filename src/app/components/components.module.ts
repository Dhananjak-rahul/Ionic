import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,IonicModule
  ],
  declarations: [FooterMenuComponent, MenuComponent],
  exports:[FooterMenuComponent]
})
export class ComponentsModule { }
