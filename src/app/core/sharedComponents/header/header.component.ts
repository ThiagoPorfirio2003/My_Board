import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { UtilsService } from '../../services/utils.service';
import { TranslateEnums } from '../../enums/userProperties';
import { addIcons } from 'ionicons';
import { logOut } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent
{
  @Input() title! : string;
  public profile! : string;

  constructor(public authService : AuthService, private utilsService : UtilsService) 
  {
    addIcons({logOut})

    if(authService.isLogued)
    {
      this.profile = TranslateEnums.transalteProfile(this.authService.myUser.profile);
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
