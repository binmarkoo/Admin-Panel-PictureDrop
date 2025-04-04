import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { LoginComponent } from './app/Components/login/login.component';
import { ArbeitsbereicheComponent } from './app/Components/arbeitsbereich/arbeitsbereich.component';
import { GutscheinsystemComponent } from './app/Components/gutscheinsystem/gutscheinsystem.component';
import { ZeitbewertungComponent } from './app/Components/zeitbewertung/zeitbewertung.component';

const bootstrap = () => bootstrapApplication(LoginComponent, config);

export default bootstrap;
