import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ImageCardComponentComponent } from './image-card-component/image-card-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageCardComponentComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
