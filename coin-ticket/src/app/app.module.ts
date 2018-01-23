import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CoinmarketcapService } from './coinmarketcap.service';
import { ChartsModule } from 'ng2-charts';
import { ChartsComponent } from './menu/charts/charts/charts.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule
  ],
  providers: [CoinmarketcapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
