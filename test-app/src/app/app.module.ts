import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeService } from './greeter/time.service'
import { ElapsedPipe } from './pipes/elapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElapsedPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
