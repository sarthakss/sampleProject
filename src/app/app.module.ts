import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    ])
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
