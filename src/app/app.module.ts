import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ServicesOneComponent } from './components/pages/services-one/services-one.component';
import { ServicesTwoComponent } from './components/pages/services-two/services-two.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { FeaturesTwoComponent } from './components/pages/features-two/features-two.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ChattingComponent } from './components/common/chatting/chatting.component';
import { HomeFourComponent } from './components/home-four/home-four.component';
import { ProjectsComponent } from './components/pages/Projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreloaderComponent,
    HomeTwoComponent,
    HomeFourComponent,
    FooterComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    FaqComponent,
    ErrorComponent,
    ServicesOneComponent,
    ServicesTwoComponent,
    ServicesDetailsComponent,
    ProjectsComponent,
    FeaturesTwoComponent,
    BlogGridComponent,
    BlogRightSidebarComponent,
    BlogDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
