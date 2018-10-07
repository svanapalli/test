import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from  '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NewsComponent } from './news/news.component';
import { WaetherReportComponent } from './waether-report/waether-report.component';
import { SearchComponent } from './search/search.component';
import { NewsService } from './get-news.service';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import { WeatherService } from 'src/app/weather.service';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NewsComponent,
    WaetherReportComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    SlideMenuModule
  ],
  providers: [NewsService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
