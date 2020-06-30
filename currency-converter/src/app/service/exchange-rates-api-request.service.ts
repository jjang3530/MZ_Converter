import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {currencyExchangeRate} from '../model/currency-exchange-rate.model'

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesApiRequestService {

  private baseUrl = 'https://www.bankofcanada.ca/valet/observations/group/FX_RATES_DAILY/json'; //'https://www.bankofcanada.ca/valet/observations/group/FX_RATES_DAILY/json?recent=5';

  currencies = ['USD','EUR','JPY','GBP','AUD','CHF','CNY','HKD','MXN','INR'];
  
  constructor(private http: HttpClient) { }

  getData(){
    return new Promise(resolve =>{
      this.http.get(this.baseUrl).subscribe(data =>{
        data = data["observations"]; //data = data["observations"].splice(5,5); within 5days
        resolve(data);
        console.log(data);     
      },
        err => {
          console.log(err);
      });
    });
  }

  getDateRange(data : any){
    var dateRange: Date[] = [];
    for(var i=0; i < data.length; i++){
      dateRange.push(data[i].d);
    }
    dateRange = dateRange.reverse();
    console.log(dateRange);
    return dateRange;
  }

  getRates(data: any){
    var rates: currencyExchangeRate[] = [];
    for(var i = 0; i < this.currencies.length; i++){
      var cryStr = 'FX' + this.currencies[i] + 'CAD'; // FXUSDCAD
      var cry = this.currencies[i];
      for(var j=0; j < data.length; j++){
        var changeDate = data[j].d;
        var rt = data[j][cryStr].v;
        rates.push({
          date: changeDate,
          currency : cry,
          rate: rt
        });
      }
    }
    console.log(rates);
    return rates;
  }
}