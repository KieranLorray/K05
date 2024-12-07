import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { appRouting } from './app/app.routes'; // Adjust path as needed


bootstrapApplication(AppComponent, {
  providers: [appRouting, provideHttpClient()],
}).catch((err) => console.error(err));
