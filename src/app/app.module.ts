import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './layouts/hero/hero.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// import * as lottie from 'lottie-web';


import { SponsorComponent } from './layouts/sponsor/sponsor.component';
import { InformationComponent } from './layouts/information/information.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';


import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutUsComponent,
    HeroComponent,
    SponsorComponent,
    InformationComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    LottieModule.forRoot({ player: playerFactory }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(librairy: FaIconLibrary) {

    library.add(fasStar, farStar);

  }


 }
