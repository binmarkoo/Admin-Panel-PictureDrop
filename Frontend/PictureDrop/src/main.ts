import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/Components/login/login.component';
import { ArbeitsbereicheComponent } from './app/Components/arbeitsbereich/arbeitsbereich.component';
import { GutscheinsystemComponent } from './app/Components/gutscheinsystem/gutscheinsystem.component';
import { ZeitbewertungComponent } from './app/Components/zeitbewertung/zeitbewertung.component';

bootstrapApplication(LoginComponent, appConfig)
  .catch((err) => console.error(err));
