import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HomeSevenComponent } from './components/pages/home-seven/home-seven.component';
import { WithoutAnimationHomeOneComponent } from './components/pages/without-animation-home-one/without-animation-home-one.component';
import { WithoutAnimationHomeTwoComponent } from './components/pages/without-animation-home-two/without-animation-home-two.component';
import { WithoutAnimationHomeThreeComponent } from './components/pages/without-animation-home-three/without-animation-home-three.component';
import { WithoutAnimationHomeFourComponent } from './components/pages/without-animation-home-four/without-animation-home-four.component';
import { WithoutAnimationHomeFiveComponent } from './components/pages/without-animation-home-five/without-animation-home-five.component';
import { WithoutAnimationHomeSixComponent } from './components/pages/without-animation-home-six/without-animation-home-six.component';
import { WithoutAnimationHomeSevenComponent } from './components/pages/without-animation-home-seven/without-animation-home-seven.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TeamComponent } from './components/pages/team/team.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { LogInComponent } from './components/pages/log-in/log-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { ServicesOneComponent } from './components/pages/services-one/services-one.component';
import { ServicesTwoComponent } from './components/pages/services-two/services-two.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { FeaturesOneComponent } from './components/pages/features-one/features-one.component';
import { FeaturesTwoComponent } from './components/pages/features-two/features-two.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-2', component: HomeTwoComponent},
    {path: 'home-3', component: HomeThreeComponent},
    {path: 'home-4', component: HomeFourComponent},
    {path: 'home-5', component: HomeFiveComponent},
    {path: 'home-6', component: HomeSixComponent},
    {path: 'home-7', component: HomeSevenComponent},
    {path: 'without-animation-home-1', component: WithoutAnimationHomeOneComponent},
    {path: 'without-animation-home-2', component: WithoutAnimationHomeTwoComponent},
    {path: 'without-animation-home-3', component: WithoutAnimationHomeThreeComponent},
    {path: 'without-animation-home-4', component: WithoutAnimationHomeFourComponent},
    {path: 'without-animation-home-5', component: WithoutAnimationHomeFiveComponent},
    {path: 'without-animation-home-6', component: WithoutAnimationHomeSixComponent},
    {path: 'without-animation-home-7', component: WithoutAnimationHomeSevenComponent},
    {path: 'about', component: AboutComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'services-1', component: ServicesOneComponent},
    {path: 'services-2', component: ServicesTwoComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'features-1', component: FeaturesOneComponent},
    {path: 'features-2', component: FeaturesTwoComponent},
    {path: 'team', component: TeamComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'log-in', component: LogInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'blog-1', component: BlogGridComponent},
    {path: 'blog-2', component: BlogRightSidebarComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
