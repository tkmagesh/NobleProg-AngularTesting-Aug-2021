import { NgModule } from "@angular/core";
import { ElapsedPipe } from "./pipes/elapsed.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from "./pipes/trimText.pipe";

@NgModule({
    declarations : [
        ElapsedPipe,
        TrimTextPipe,
        SortPipe
    ],
    providers : [],
    imports : [],
    exports : [
         ElapsedPipe,
        TrimTextPipe,
        SortPipe
    ]
})
export class UtilsModule{

}