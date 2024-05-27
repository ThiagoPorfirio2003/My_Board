import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { logOut } from 'ionicons/icons';
import { UtilsService } from 'src/app/core/services/utils.service';
import { AuthService } from '../../auth/services/auth.service';
import { CurrentLanguage } from 'src/app/core/enums/currentLanguage';
import { CurrentTopic } from 'src/app/core/enums/currentTopic';
import { Animals } from 'src/app/core/enums/animals';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage
{
  public currentLanguage : CurrentLanguage; 
  public currentTopic : CurrentTopic;
  public currentFlagPath : string;
  public currentTopicPath : string;
  private readonly FLAGS_PATH : string = '../../../../assets/images/flags/';
  private readonly TOPICS_PATH : string = '../../../../assets/images/topics/';
  
  private readonly SOUNDS_PATH : string = '../../../../assets/sounds/';
  private readonly EN_SOUNDS_PATH : string = this.SOUNDS_PATH + 'En/';
  private readonly ES_SOUNDS_PATH : string = this.SOUNDS_PATH + 'Es/';
  private readonly PO_SOUNDS_PATH : string = this.SOUNDS_PATH + 'Po/';
  private currentTopicSoundPath : string;
  private currentLanguageSoundPath : string;


  constructor(private utilsService : UtilsService, private authService : AuthService) 
  { 
    this.currentLanguage = 1;
    this.currentTopic = 1;
    this.currentFlagPath = this.FLAGS_PATH + 'spain.png';
    this.currentTopicPath = this.TOPICS_PATH + 'dog.png'
    this.currentTopicSoundPath = 'Animals/';
    this.currentLanguageSoundPath = this.ES_SOUNDS_PATH;
    addIcons({logOut});
  }

  public changeCurrentLanguaje(newLanguage : CurrentLanguage)
  {
    this.currentLanguage = newLanguage;

    switch(newLanguage) 
    {
      case CurrentLanguage.ES:
        this.currentFlagPath = this.FLAGS_PATH + 'spain.png';
        this.currentLanguageSoundPath = this.ES_SOUNDS_PATH;
        break;
  
      case CurrentLanguage.EN:
        this.currentFlagPath = this.FLAGS_PATH + 'uk.png';
        this.currentLanguageSoundPath = this.EN_SOUNDS_PATH;
        break;

      case CurrentLanguage.PO:
        this.currentFlagPath = this.FLAGS_PATH + 'portugal.png'
        this.currentLanguageSoundPath = this.PO_SOUNDS_PATH;
        break;
    }
  }

  public changeCurrentTopic(newTopic : CurrentTopic)
  {
    this.currentTopic = newTopic;


    switch(newTopic) 
    {
      case 1:
        this.currentTopicPath = this.TOPICS_PATH + 'dog.png';
        this.currentTopicSoundPath = 'Animals/';
        break;
  
      case 2:
        this.currentTopicPath = this.TOPICS_PATH + 'colorPalet.png';
        this.currentTopicSoundPath = 'Colors/';
        break;

      case 3:
        this.currentTopicPath = this.TOPICS_PATH + 'number.png';
        this.currentTopicSoundPath = 'Numbers/'
        break;
    }
  }

  public makeSound(option : number)
  {
    let soundPath : string;
    let soundName : string;

    switch(this.currentLanguage)
    {
      case CurrentLanguage.ES:
        soundName = 'Es_'
        break;
        
      case CurrentLanguage.EN:
        soundName = 'En_'
        break;

      case CurrentLanguage.PO:
        soundName = 'Po_'
        break;
    }

    switch(this.currentTopic)
    {
      case CurrentTopic.ANIMALS:
        switch(option)
        {
          case Animals.DOG:
            soundName += 'Dog'
            break;

          case Animals.LION:
            soundName += 'Lion'
            break;
          
          case Animals.MONKEY:
            soundName += 'Monkey'
            break;

          case Animals.CAT:
            soundName += 'Cat'
            break;

          case Animals.HORSE:
            soundName += 'Horse'
            break;

          case Animals.ELEPHANT:
            soundName += 'Elephant'
            break;
        }
        break;

      case CurrentTopic.COLORS:
        switch(option)
        {
          case 1:
            soundName += 'Red'
            break;

          case 2:
            soundName += 'Green'
            break;
          
          case 3:
            soundName += 'White'
            break;

          case 4:
            soundName += 'Blue'
            break;

          case 5:
            soundName += 'Yellow'
            break;

          case 6:
            soundName += 'Brown'
            break;
        }
        break;

      case CurrentTopic.NUMBERS:
        switch(option)
        {
          case 1:
            soundName += 'One'
            break;

          case 2:
            soundName += 'Two'
            break;
          
          case 3:
            soundName += 'Three'
            break;

          case 4:
            soundName += 'Four'
            break;

          case 5:
            soundName += 'Five'
            break;

          case 6:
            soundName += 'Six'
            break;
        }
        break;
    }

    (new Audio(this.currentLanguageSoundPath + this.currentTopicSoundPath + soundName + '.m4a')).play()
  }

  public signOut()
  {
    this.authService.logOut();
    this.utilsService.changeRoute('/auth');

    /*
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
    */
  }

}
