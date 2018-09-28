import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<div>
        Hi there!
    </div>
    `,
    styleUrls: ['./app.component.scss']
})

/** The base component that bootstraps angular */
export class AppComponent {
  content: string;

  constructor() {
    // put something here
  }
}
