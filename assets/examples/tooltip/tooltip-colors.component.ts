import { Component } from '@angular/core';


@Component({
  selector: 'nb-tooltip-colors',
  templateUrl: './tooltip-colors.component.html',
  styles: [`
    ::ng-deep nb-layout-column {
      justify-content: center;
      align-items: center;
      display: flex;
    }
    button {
      margin: 0.5rem;
    }
  `],
})
export class NbTooltipColorsComponent {
}
