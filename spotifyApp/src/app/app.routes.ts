import { RouterModule, Routes } from '@angular/router';

//import components
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:term', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );
