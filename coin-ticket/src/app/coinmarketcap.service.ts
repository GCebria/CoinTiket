import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CoinmarketcapService {
  apiPath: string;
  results;
  constructor(private http: Http) {
    this.apiPath = 'https://api.coinmarketcap.com/v1/ticker/';
  }

  getData(){

  }


}
