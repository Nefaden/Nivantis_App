import { NetSellingPricePopoverComponent } from './../CalculatorPopover/net-selling-price-popover/net-selling-price-popover.component';
import { NetPuchasePicePopoverComponent } from './../CalculatorPopover/net-puchase-pice-popover/net-puchase-pice-popover.component';
import { MultiplierPopoverComponent } from './../CalculatorPopover/multiplier-popover/multiplier-popover.component';
import { Component, OnInit } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { numeric } from 'tar';
import { NumericValueAccessor, PopoverController} from '@ionic/angular';
import { PopoverOptions } from '@ionic/core';
import { DiscountRatePopoverComponent } from './../CalculatorPopover/discount-rate-popover/discount-rate-popover.component';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor(private popoverController: PopoverController) {
    console.log('constructed');
  }

  public buttonRoute =
  [
    {
      title: 'Taux de remise',
      fonctionLink: 'DiscountRateEvent',
      icon: 'calculator'
    },
    {
      title: 'Prix d\'achat net',
      fonctionLink: 'NetPurchasePriceEvent',
      icon: 'calculator'
    },
    {
      title: 'Prix de vente net',
      fonctionLink: 'NetSellingPriceEvent',
      icon: 'calculator'
    },
    {
      title: 'Coefficient multiplicateur',
      fonctionLink: 'MultiplierEvent',
      icon: 'calculator'
    }
  ];

  ngOnInit() {
  }

  ButtonRouting(functionName: string, event) {
    switch (functionName) {
      case 'DiscountRateEvent': {
        this.DiscountRateEvent(event);
        break;
      }
      case 'NetPurchasePriceEvent': {
        this.NetPurchasePriceEvent(event);
        break;
      }
      case 'NetSellingPriceEvent': {
        this.NetSellingPriceEvent(event);
        break;
      }
      case 'MultiplierEvent': {
        this.MultiplierEvent(event);
        break;
      }
    }
  }

  DiscountRateEvent(event) {

    this.GetDiscountRatePopoverComponent(event);
  }

  NetPurchasePriceEvent(event) {
    this.GetNetPurchasePricePopoverComponent(event);
  }

  NetSellingPriceEvent(event) {
    this.GetNetSellingPricePopoverComponent(event);
  }

  MultiplierEvent(event) {
    this.GetMultiplierPopoverComponent(event);
  }

  async GetDiscountRatePopoverComponent($event) {
    const popover = await this.popoverController.create({
      component : DiscountRatePopoverComponent,
      event
    });
    return await popover.present();
  }

  async GetMultiplierPopoverComponent($event) {
    const popover = await this.popoverController.create({
      component : MultiplierPopoverComponent,
      event
    });
    return await popover.present();
  }

  async GetNetPurchasePricePopoverComponent($event) {
    const popover = await this.popoverController.create({
      component : NetPuchasePicePopoverComponent,
      event
    });
    return await popover.present();
  }

  async GetNetSellingPricePopoverComponent($event) {
    const popover = await this.popoverController.create({
      component : NetSellingPricePopoverComponent,
      event
    });
    return await popover.present();
  }
}
