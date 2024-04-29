import { Component } from '@angular/core';

interface CurrencyOption {
  id: number,
  name: string;
  imageUrl: string;
  symbol: string;
}

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  
  selectedOptionFirst: CurrencyOption = { id: 0, name: 'USD', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/us.svg', symbol: '$' };

  optionsFirst: CurrencyOption[] = [
    { id:1, name: 'PLN', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/pl.svg', symbol: 'zł' },
    { id:2, name: 'EUR', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/eu.svg', symbol: '€' },
    { id:3, name: 'GBP', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/gb.svg', symbol: '£' },
    { id:0, name: 'USD', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/us.svg', symbol: '$' },
    { id:4, name: 'AUD', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/au.svg', symbol: 'A$' },
    { id:5, name: 'CAD', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/ca.svg', symbol: 'C$' },
    { id:6, name: 'CHF', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/ch.svg', symbol: '₣' },
    { id:7, name: 'CZK', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/cz.svg', symbol: 'Kč' },
    { id:8, name: 'HUF', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/hu.svg', symbol: 'Fr' },
    { id:9, name: 'JPY', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/jp.svg', symbol: '¥' },
    { id:10, name: 'KRW', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/kr.svg', symbol: '₩' },
    { id:11, name: 'TRY', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/tr.svg', symbol: '₺'}
  ];


  selectedOptionSecond: CurrencyOption = { id: 2, name: 'EUR', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/eu.svg', symbol: '€' };
  
  optionsSecond: CurrencyOption[] = [
    { id:1, name: 'PLN', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/pl.svg', symbol: 'zł' },
    { id:2, name: 'EUR', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/eu.svg', symbol: '€' },
    { id:3, name: 'GBP', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/gb.svg', symbol: '£' },
    { id:0, name: 'USD', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/us.svg', symbol: '$' },
    { id:4, name: 'AUD', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/au.svg', symbol: 'A$' },
    { id:5, name: 'CAD', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/ca.svg', symbol: 'C$' },
    { id:6, name: 'CHF', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/ch.svg', symbol: '₣' },
    { id:7, name: 'CZK', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/cz.svg', symbol: 'Kč' },
    { id:8, name: 'HUF', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/hu.svg', symbol: 'Fr' },
    { id:9, name: 'JPY', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/jp.svg', symbol: '¥' },
    { id:10, name: 'KRW', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/kr.svg', symbol: '₩' },
    { id:11, name: 'TRY', imageUrl: 'https://hatscripts.github.io/circle-flags/flags/tr.svg', symbol: '₺' }
  ];

  // Variables tracking the open state of the button for selecting the amount in the source and target currencies.
  isAmountButtonOpenFirst: boolean = false;
  isAmountButtonOpenSecond: boolean = false;

  // Functions handling the button for the source currency.
  amountButtonFirst(){
    this.isAmountButtonOpenFirst = !this.isAmountButtonOpenFirst;
  }

  amountButtonSecond(){
    this.isAmountButtonOpenSecond = !this.isAmountButtonOpenSecond;
  }

  // Storing data about currency exchange rates.
  exchangeRates: any;

  //Storing the amount values in source and target currencies.
  amountFirst: number | undefined;
  amountSecond: number | undefined;

  // Function rounding a number to two decimal places.
  roundToTwoDecimals(num: number): number {
    return parseFloat(num.toFixed(2));
  }

  // Function called upon selecting the source currency.
  onOptionSelectFirst(option: CurrencyOption) {
    if(this.selectedOptionSecond.id === option.id) {
      const temp = this.selectedOptionSecond;
      this.selectedOptionSecond = this.selectedOptionFirst;
      this.selectedOptionFirst = temp;
    } else {
      this.selectedOptionFirst = option;
    }
    this.isAmountButtonOpenFirst = !this.isAmountButtonOpenFirst;
  }
  onOptionSelectSecond(option: CurrencyOption) {
    if (this.selectedOptionFirst.id === option.id) {
      const temp = this.selectedOptionFirst;
      this.selectedOptionFirst = this.selectedOptionSecond;
      this.selectedOptionSecond = temp;
    } else {
      this.selectedOptionSecond = option;
    }
    this.isAmountButtonOpenSecond = !this.isAmountButtonOpenSecond;
  }


  // Function fetching currency exchange rates from an external source.
  async fetchExchangeRates() {
    try {
      this.exchangeRates = await this.getExchangeRates();
      console.log('Exchange rates:', this.exchangeRates);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  }

  // Function fetching currency exchange rates from a specific API.
  async getExchangeRates(): Promise<{ eur: number, gbp: number, usd: number, aud: number, cad: number, chf: number, czk: number, huf: number, jpy: number, krw: number, try: number } | null | undefined>{
    try{
      const response = await fetch('https://api.nbp.pl/api/exchangerates/tables/a/');
      const data = await response.json();
      const rates = data[0].rates;
      let eurRate = null, gbpRate = null, usdRate = null, audRate = null, cadRate = null, chfRate = null, czkRate = null, hufRate = null, jpyRate = null, krwRate = null, tryRate = null;
      for(const rate of rates){
        if(rate.code === 'EUR'){eurRate = rate.mid;}
        else if(rate.code === 'GBP'){gbpRate = rate.mid;}
        else if(rate.code === 'USD'){usdRate = rate.mid;}
        else if(rate.code === 'AUD'){audRate = rate.mid;}
        else if(rate.code === 'CAD'){cadRate = rate.mid;}
        else if(rate.code === 'CHF'){chfRate = rate.mid;}
        else if(rate.code === 'CZK'){czkRate = rate.mid;}
        else if(rate.code === 'HUF'){hufRate = rate.mid;}
        else if(rate.code === 'JPY'){jpyRate = rate.mid;}
        else if(rate.code === 'KRW'){krwRate = rate.mid;}
        else if(rate.code === 'TRY'){tryRate = rate.mid;}
      }

      // Check if currencies rates were found 
      if(![eurRate, gbpRate, usdRate, audRate, cadRate, chfRate, czkRate, hufRate, jpyRate, krwRate, tryRate].every(rate => rate !== null)){
        throw new Error('Unable to find euro or dollar exchange rate');
      }

      // Check if data was retrieved successfully
      if(!Array.isArray(data) || data.length === 0 || !data[0].rates){
        throw new Error('Unable to fetch currency exchange rates data');
      }

      return { eur: eurRate, gbp: gbpRate, usd: usdRate, aud: audRate, cad: cadRate, chf: chfRate, czk: czkRate, huf: hufRate, jpy: jpyRate, krw: krwRate, try: tryRate};
    } catch (error) {
      return { eur: 0, gbp: 0, usd: 0, aud: 0, cad: 0, chf: 0, czk: 0, huf: 0, jpy: 0, krw: 0, try: 0 };
    }
  }
}