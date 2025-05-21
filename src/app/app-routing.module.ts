import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ServicesOneComponent } from './components/pages/services-one/services-one.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ProjectsComponent } from './components/pages/Projects/projects.component';

const routes: Routes = [
    {path: '', component: HomeTwoComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesOneComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'blog', component: BlogGridComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
