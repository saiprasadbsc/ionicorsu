import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mobile', url: '/folder/RechargyouMobile', icon: ' Mobile' },
    { title: 'DTH', url: '/folder/PayYourDTHBill', icon: 'dth' },
    { title: 'Data card', url: '/folder/RechargYourDatacard', icon: 'datacard' },
    { title: 'Electricity', url: '/folder/PayYourElectricityBill', icon: 'electricity' },
    { title: 'LandLine', url: '/folder/PayYourLandlineBill', icon: 'landline' },
    { title: 'Broadbrond', url: '/folder/PayYourBroadbrondBill', icon: 'broadbrond' },
    { title: 'Gas', url: '/folder/PayyourGasBill', icon: 'gas' },
    { title: 'Water', url: '/folder/PayYourWaterBill', icon: 'water' },
    { title: 'Axis Digital Account', url: '/folder/AxisdigitalAccount', icon: 'axis digital account' },
    { title: 'Google Play Recharge', url: '/folder/GooglePlayRechargCode', icon: 'Google Play Recharg' },
    { title: 'Offers', url: '/folder/Offers', icon: 'offers' },
  ];
  public labels = ['Mutual Funds', 'Insurance', 'E-Gold', 'Express Fixed Deposit', 'Axis Plus Credit Card', 'Accepet Payments'];
  constructor() {}
}
