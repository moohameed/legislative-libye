import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.page.html',
  styleUrls: ['./candidat.page.scss'],
})
export class CandidatPage implements OnInit {
  candId;
  candName;
  candPhoto;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.candId= this.route.snapshot.queryParamMap.get('candidatId');
    this.candName= this.route.snapshot.queryParamMap.get('candidatName');
    this.candPhoto= this.route.snapshot.queryParamMap.get('candidatPhoto');
    //just for testing
    console.log(this.candId);

  }
  buttonClick(){
    this.router.navigate(['/tabs/tab2/candidat/cv'],{queryParams :{
      candidatId : this.candId,
      candidatName : this.candName,
      candidatPhoto : this.candPhoto
    }});
    console.log('yes');
  }
  buttonClick2(){
    this.router.navigate(['/tabs/tab2/candidat/todolist'],{queryParams :{
      candidatId : this.candId,
      candidatName : this.candName,
      candidatPhoto : this.candPhoto
    }});
    console.log('yes');
  }
}
