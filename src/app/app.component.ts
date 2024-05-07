import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ConverterComponent } from './components/converter/converter.component';
import { MapComponent } from './components/map/map.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, ConverterComponent, MapComponent]
})
export class AppComponent {
  title = 'coinvert';
}
