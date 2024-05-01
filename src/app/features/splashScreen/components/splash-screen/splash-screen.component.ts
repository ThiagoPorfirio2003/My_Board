import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent
{
  public imageClass : string;
  public showText : boolean;

  constructor(private utilsService : UtilsService,
    private platform : Platform)
    {
      this.imageClass = 'slide-out-bottom';
      this.showText = false;
    }

    ionViewDidEnter()
    {
      if(!this.utilsService.splashScreenHasShown)
      {
        this.platform.ready().then(() => 
        {
          this.utilsService.splashScreenHasShown = true;
          SplashScreen.hide().then(()=>
          {
            setTimeout(()=>
            {
              this.imageClass = 'slide-in-top';
              this.showText = true;
              setTimeout(()=>
              {
              },100);

            },500)


            setTimeout(() => 
            {
              this.utilsService.changeRoute('/auth')
            }, 3000);
          })
        });
      }
    }  
}
