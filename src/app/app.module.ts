import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouteReuseStrategy} from '@angular/router'

import {IonicModule, IonicRouteStrategy} from '@ionic/angular'
import {SplashScreen} from '@ionic-native/splash-screen/ngx'
import {StatusBar} from '@ionic-native/status-bar/ngx'

import {AppComponent} from './app.component'
import {AppRoutingModule} from './app-routing.module'
import {NgCircleProgressModule} from 'ng-circle-progress'
import {HomePage} from './home/home.page'
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {Insomnia} from '@ionic-native/insomnia/ngx'

@NgModule({
  declarations: [AppComponent, HomePage],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    CommonModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
      animation: false,
      responsive: true,
      renderOnClick: false
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    Insomnia
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
