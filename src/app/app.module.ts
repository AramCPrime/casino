import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CasinoModule } from './casino/casino.module';
import { AppRoutingModule } from './app-routing.module';
  
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HomeComponent,
    AppComponent,
    CasinoModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }