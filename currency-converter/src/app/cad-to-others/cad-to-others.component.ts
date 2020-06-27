import { Component, OnInit } from '@angular/core';
import { ExchangeRatesApiRequestService } from '../service/exchange-rates-api-request.service';
import { currencyExchangeRate } from '../model/currency-exchange-rate.model'

@Component({
  selector: 'app-cad-to-others',
  templateUrl: './cad-to-others.component.html',
  styleUrls: ['./cad-to-others.component.css']
})
export class CadToOthersComponent implements OnInit {

  rates: currencyExchangeRate[] = [];
  dateRange: Date[] = [];
  selectedDate: Date;
  calDate: Date;
  calValue: any;
  exRate: any;

  constructor(private service: ExchangeRatesApiRequestService){}
  
  ngOnInit() {
    this.service.getData().then((data: any) => {
      this.dateRange = this.service.getDateRange(data);
      this.rates = this.service.getRates(data);
      this.selectedDate = this.dateRange[0];
    });
  }

  convertor(str : string, amt : any){
    var dt = this.selectedDate;
    var cryRate = this.rates.find(c => c.currency == str && c.date == dt);
    this.calDate = dt;
    this.exRate = 1/cryRate.rate;
    this.calValue = amt * this.exRate;
  }
}
