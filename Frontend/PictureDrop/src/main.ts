import { bootstrapApplication } from '@angular/platform-browser';
import { MoastaComponent } from './app/Components/moasta.component';
import { appConfig } from './app/Components/moasta.config';

bootstrapApplication(MoastaComponent, appConfig)
  .catch((err) => console.error(err));
