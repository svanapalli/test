import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { NewsData } from 'src/assets/newsData';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }

  getData() {
    return this.http.get<NewsData>('../assets/news_data.json');
  }
}