import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {
  candId;
  candName;
  candPhoto;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.candId= this.route.snapshot.queryParamMap.get('candidatId');
    this.candName= this.route.snapshot.queryParamMap.get('candidatName');
    this.candPhoto= this.route.snapshot.queryParamMap.get('candidatPhoto');
    console.log(this.candName);
  }

}
