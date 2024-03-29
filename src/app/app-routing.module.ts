import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import * as footerComponent from './footer/footer.component';
import { ErrorComponent } from './error/error.component';



const routes: Routes = [
{path:'',redirectTo:'home',pathMatch :'full'},
{path:'home',component:HomeComponent,title:'Home'},
{path:'about',component:AboutComponent,title:'About'},
{path:'portfolio',component:PortfolioComponent,title:'Portfolio'},
{path:'contact',component:ContactComponent,title:'Contact'},
// {path:'footer',component:footerComponent},
{path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
