import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  candidats: Array<any> ;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.candidats = [
      {id : '1' ,like : '0',dislike :'0', name :' عبد الحكيم على بعيو ' , photo :'../..//assets/images/عبد الحكيم على بعيو.png ' },
      {id : '2' ,like : '0',dislike :'0', name :'سيف الإسلام معمر القذافي' ,  photo :'../..//assets/images/سيف الإسلام معمر القذافي.png' },
      {id : '3' ,like : '0',dislike :'0', name :'    أسعد محسن زهيو ' , photo :'../..//assets/images/22222.png ' },
      {id : '4' ,like : '0',dislike :'0', name :'    عبد الله أحمد ناكر  ' , photo :'../..//assets/images/2525.png' },
      // eslint-disable-next-line max-len
      {id : '5' ,like : '0',dislike :'0', name :'    عبد الحافظ عبد الحميد قدور ' , photo :'../..//assets/images/عبد الحكيم على بعيو.png ' },

    ];
  }
  buttonClick(test,name,photo,){
    console.log(test) ;
    console.log(name) ;
    this.router.navigate(['/tabs/tab2/candidat'],{queryParams :{
      candidatId : test,
      candidatName : name,
      candidatPhoto : photo,
    }});

  }
}
