import { NetSellingPricePopoverComponent } from './../CalculatorPopover/net-selling-price-popover/net-selling-price-popover.component';
import { NetPuchasePicePopoverComponent } from './../CalculatorPopover/net-puchase-pice-popover/net-puchase-pice-popover.component';
import { MultiplierPopoverComponent } from './../CalculatorPopover/multiplier-popover/multiplier-popover.component';
import { DiscountRatePopoverComponent } from './../CalculatorPopover/discount-rate-popover/discount-rate-popover.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalculatorPage } from './calculator.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [DiscountRatePopoverComponent, MultiplierPopoverComponent,
    NetPuchasePicePopoverComponent, NetSellingPricePopoverComponent],
  declarations: [CalculatorPage, DiscountRatePopoverComponent, MultiplierPopoverComponent,
    NetPuchasePicePopoverComponent, NetSellingPricePopoverComponent]
})
export class CalculatorPageModule {}
