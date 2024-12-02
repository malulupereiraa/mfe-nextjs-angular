import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
// export class AppModule {
//   constructor(private injector: Injector) {
//     const element = createCustomElement(AppComponent, { injector });
//     customElements.define('angular-component', element);
//   }

//   ngDoBootstrap() {}
// }
export class AppModule {}
