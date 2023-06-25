import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PicrossModule } from './picross/picross.module';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';
import { LevelSelectModule } from './level-select/level-select.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PicrossModule,
    MenuModule,
    SharedModule,
    LevelSelectModule,
    SettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
