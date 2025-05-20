import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ServicesOneComponent } from './components/pages/services-one/services-one.component';
import { ServicesTwoComponent } from './components/pages/services-two/services-two.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { FeaturesOneComponent } from './components/pages/features-one/features-one.component';
import { FeaturesTwoComponent } from './components/pages/features-two/features-two.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';

const routes: Routes = [
    {path: '', component: HomeTwoComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesOneComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'features', component: FeaturesOneComponent},
    {path: 'team', component: TeamComponent},
    {path: 'faq', component: FaqComponent},
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
