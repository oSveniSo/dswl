import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  //@ViewChild navbar;
  navigation = [{ name: 'home', label: 'Home' }, { name: 'about', label: 'About' }];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  public getActive(name: string): string {
    return (this.router.url == '/' + name) ? 'active' : '';
  }

}
