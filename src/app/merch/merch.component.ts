import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {

  like = 0;
  dislike = 0;
  canVote = false;
  private url = 'klicks.php';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(data => {
      this.like = data['like'];
      this.dislike = data['dislike'];
      this.canVote = data['canVote'].toString() === "true";
    });
  }

  public onLike() {
    this.http.get(this.url + '?vote=1').subscribe(data => {
      this.like = data['like'];
      this.dislike = data['dislike'];
      this.canVote = data['canVote'].toString() === "true";
    });
  }

  public onDislike() {
    this.http.get(this.url + '?vote=2').subscribe(data => {
      this.like = data['like'];
      this.dislike = data['dislike'];
      this.canVote = data['canVote'].toString() === "true";
    });
  }
}
