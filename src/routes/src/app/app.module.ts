import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

import { RouterModule, Routes } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
// import { routingComponents } from './app-routing.module';

const appRoutes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"game",children:[{
    path:"list",component:GameListComponent,children:[{
      path:"detail/:id",component:GameDetailComponent
    }]
  }]},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",redirectTo:"/home",pathMatch:"full"}

  /*

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'games', component: GameListComponent },
    { path: 'games/:id', component: GameDetailComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent }

   */
];

@NgModule({
  declarations: [
    // routingComponents
    AppComponent,
    HomeComponent,
    AboutComponent,
    GameListComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
