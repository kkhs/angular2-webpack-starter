import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './component/app.component';

document.addEventListener('DOMContentLoaded', () => {
    return bootstrap(
        AppComponent, [
        ]
    ).catch((err: any) => console.error(err));
});