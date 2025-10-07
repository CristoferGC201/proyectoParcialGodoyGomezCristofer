import { Component } from '@angular/core';
import { PerroslistComponent } from '../perroslist/perroslist.component';

@Component({
  selector: 'app-Inicio-component',
  standalone: true,
  imports: [ PerroslistComponent],
  templateUrl: './Inicio-component.component.html',
  styleUrl: './Inicio-component.component.css'
})
export class HomeComponentComponent {
}
