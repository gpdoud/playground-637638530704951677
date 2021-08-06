import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { ToUpperPipe } from './to-upper.pipe';
import { BoolDisplayPipe } from './bool-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuitemComponent,
    ToUpperPipe,
    BoolDisplayPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
