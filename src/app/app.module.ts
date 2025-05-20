import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
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
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
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
import { ChattingComponent } from './components/common/chatting/chatting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreloaderComponent,
    HomeOneComponent,
    HomeTwoComponent,
    FooterComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent,
    HomeSixComponent,
    HomeSevenComponent,
    WithoutAnimationHomeOneComponent,
    WithoutAnimationHomeTwoComponent,
    WithoutAnimationHomeThreeComponent,
    WithoutAnimationHomeFourComponent,
    WithoutAnimationHomeFiveComponent,
    WithoutAnimationHomeSixComponent,
    WithoutAnimationHomeSevenComponent,
    AboutComponent,
    PricingComponent,
    TeamComponent,
    ContactComponent,
    FaqComponent,
    ErrorComponent,
    LogInComponent,
    SignUpComponent,
    ServicesOneComponent,
    ServicesTwoComponent,
    ServicesDetailsComponent,
    FeaturesOneComponent,
    FeaturesTwoComponent,
    BlogGridComponent,
    BlogRightSidebarComponent,
    BlogDetailsComponent,
    ChattingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
