import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadToOthersComponent } from './cad-to-others/cad-to-others.component';
import { OthersToCadComponent } from './others-to-cad/others-to-cad.component';

@NgModule({
  declarations: [
    AppComponent,
    CadToOthersComponent,
    OthersToCadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
