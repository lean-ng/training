import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

console.log('Starting Angular from scratch!');

bootstrapApplication(AppComponent).catch((err) => console.error(err));
