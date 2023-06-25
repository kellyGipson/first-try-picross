import { NgModule } from "@angular/core";
import { PicrossBoardComponent } from "./board/board.component";
import { PicrossComponent } from "./picross.component";

@NgModule({
  declarations: [
    PicrossComponent,
    PicrossBoardComponent,
  ],
  // Only one export to keep control in module
  exports: [PicrossComponent]
})
export class PicrossModule {}
