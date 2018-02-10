import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"game",children:[{
      path:"list",component:GameListComponent,children:[{
        path:"detail/:id",component:GameDetailComponent
      }]
    }]},
    {path:"",redirectTo:"/home",pathMatch:"full"},
    {path:"**",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    HomeComponent,
    AboutComponent,
    GameListComponent,
    GameDetailComponent
]