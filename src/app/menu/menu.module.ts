import { NgModule } from "@angular/core";
import { MainMenuComponent } from "./main/main.component";
import { MenuComponent } from "./menu.component";

@NgModule({
  declarations: [
    MenuComponent,
    MainMenuComponent,
  ],
  // Only one export to keep control in module
  exports: [MenuComponent]
})
export class MenuModule {}
