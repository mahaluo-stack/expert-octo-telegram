import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HomePageComponent } from "./pages/home.page/home.page.component";
import { ProfilePageComponent } from "./pages/profile.page/profile.page.component";
import { HeaderComponent } from './header/header/header.component';
import { SignInComponent } from './pages/sign.in/sign.in.component';
import { NotFoundComponent } from './pages/not.found/not.found.component';
import { CurrentUserService } from "../services/current.user.service";
import { PokemonGridService } from "../services/pokemon.grid.service";
import { SharedUiModule } from "src/app/shared/ui/shared.ui.module";

@NgModule({
    declarations: [
        HomePageComponent,
        ProfilePageComponent,
        HeaderComponent,
        SignInComponent,
        NotFoundComponent
    ],
    exports: [
        HomePageComponent,
        ProfilePageComponent,
        SignInComponent,
        NotFoundComponent,
        HeaderComponent
    ],
    providers: [
        CurrentUserService,
        PokemonGridService
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        SharedUiModule
    ]
})

export class ComponentModule {}