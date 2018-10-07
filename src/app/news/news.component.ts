import { Component, OnInit } from '@angular/core';
import { NewsService } from '../get-news.service';
import { NewsData } from 'src/assets/newsData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
   news:NewsData;
  constructor(private dataService :  NewsService) { }

  ngOnInit() {
      this.dataService.getData()
        .subscribe(data=> this.news = data);
        console.log(this.news);
    }
  }

