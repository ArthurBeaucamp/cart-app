import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appState, initialState } from './store/store';
import {
  DevToolsExtension,
  NgRedux,
  NgReduxModule,
} from '@angular-redux/store';
import { rootReducer } from './store/combine-reducers';
import { HttpClientModule } from '@angular/common/http';
import { ProductsDisplayComponent } from './pages/products-display/products-display.component';
import { HeaderComponent } from './components/header/header.component';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [AppComponent, ProductsDisplayComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule,
    BadgeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private readonly ngRedux: NgRedux<appState>,
    private readonly devTools: DevToolsExtension
  ) {
    let enhancers: any[] = [];

    if (devTools.isEnabled()) {
      enhancers = [...enhancers, this.devTools.enhancer()];
    }

    this.ngRedux.configureStore(rootReducer, initialState, [], enhancers);
  }
}
