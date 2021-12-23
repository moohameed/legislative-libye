import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.page.html',
  styleUrls: ['./cv.page.scss'],
})
export class CvPage implements OnInit {
  candId;
  candName;
  candPhoto;

  constructor(
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.candId= this.route.snapshot.queryParamMap.get('candidatId');
    this.candName= this.route.snapshot.queryParamMap.get('candidatName');
    this.candPhoto= this.route.snapshot.queryParamMap.get('candidatPhoto');
  }

  buttonClick(){
    
  }

}
