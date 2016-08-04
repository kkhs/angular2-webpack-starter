import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    directives: [HeaderComponent, FooterComponent]
})
export class AppComponent {
}