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

}