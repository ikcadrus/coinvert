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

  onOptionSelectFirst(option: CurrencyOption) {
    if (this.selectedOptionSecond.id === option.id) {
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
  
  isAmountButtonOpenFirst: boolean = false;

  amountButtonFirst(){
    this.isAmountButtonOpenFirst = !this.isAmountButtonOpenFirst;
  }

  isAmountButtonOpenSecond: boolean = false;

  amountButtonSecond(){
    this.isAmountButtonOpenSecond = !this.isAmountButtonOpenSecond;
  }

}