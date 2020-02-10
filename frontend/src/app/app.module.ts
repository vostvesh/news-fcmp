import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoComponent } from './logo/logo.component';
import { AuthButtonsComponent } from './auth-buttons/auth-buttons.component';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { SourcesListComponent } from './sources-list/sources-list.component';
import { SourcesFilterComponent } from './sources-filter/sources-filter.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,
    NotFoundComponent,
    LogoComponent,
    AuthButtonsComponent,
    HeaderTitleComponent,
    SourcesListComponent,
    SourcesFilterComponent,
    NewsItemComponent,
    NewsListComponent,
    NewArticleComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
