import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ArbeitsbereicheComponent } from "./arbeitsbereich/arbeitsbereich.component";
import { ZeitbewertungComponent } from "./zeitbewertung/zeitbewertung.component";
import { GutscheinsystemComponent } from "./gutscheinsystem/gutscheinsystem.component";

export const routes:Routes = [
    {path:'',redirectTo:'login',pathMatch:"full"},
    {path:'login',component:LoginComponent},
    {path:'arbeitsbereich',component:ArbeitsbereicheComponent},
    {path:'zeitbewertung',component:ZeitbewertungComponent},
    {path:'gutscheinsystem',component:GutscheinsystemComponent}
]