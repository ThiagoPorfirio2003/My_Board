import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { logOut } from 'ionicons/icons';
import { UtilsService } from 'src/app/core/services/utils.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage
{
  public currentLanguage : number; 
  public currentTopic : number;
  public currentLanguagePath : string;
  public currentTopicPath : string;
  private readonly FLAGS_PATH : string = '../../../../assets/images/flags/';
  private readonly TOPICS_PATH : string = '../../../../assets/images/topics/';

  constructor(private utilsService : UtilsService, private authService : AuthService) 
  { 
    this.currentLanguage = 1;
    this.currentTopic = 1;
    this.currentLanguagePath = this.FLAGS_PATH + 'spain.png';
    this.currentTopicPath = this.TOPICS_PATH + 'dog.png'
    addIcons({logOut});
  }

  public changeCurrentLanguaje(option : number)
  {
    this.currentLanguage = option;

    switch(option) 
    {
      case 1:
        this.currentLanguagePath = this.FLAGS_PATH + 'spain.png'
        break;
  
      case 2:
        this.currentLanguagePath = this.FLAGS_PATH + 'uk.png'
        break;

      case 3:
        this.currentLanguagePath = this.FLAGS_PATH + 'portugal.png'
        break;
    }
  }

  public changeCurrentTopic(option : number)
  {
    this.currentTopic = option;
    switch(option) 
    {
      case 1:
        this.currentTopicPath = this.TOPICS_PATH + 'dog.png'
        break;
  
      case 2:
        this.currentTopicPath = this.TOPICS_PATH + 'colorPalet.png'
        break;

      case 3:
        this.currentTopicPath = this.TOPICS_PATH + 'number.png'
        break;
    }
  }

  public signOut()
  {
    this.utilsService.showSweet({title:'¿Seguro que desea salír?',
    showDenyButton: true, denyButtonText: 'No', denyButtonColor: '#606C38',
    confirmButtonText: 'Sí', confirmButtonColor: '#BC6C25',
    customClass: {
      title: 'sweetTitle',
      confirmButton: 'sweetConfirm',
      denyButton: 'sweetDeny',
    }})
    .then((result)=>
    {
      if(result.isConfirmed)
      {
        this.authService.logOut();
        this.utilsService.changeRoute('/auth')
      } 
    })
  }

}
