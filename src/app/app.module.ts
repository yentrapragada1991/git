import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ViewModule } from './view/view.module';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { NgstyleComponent } from './ngstyle.component';
import { NgswitchComponent } from './ngswitch.component';
import { NgifComponent } from './ngif.component';
import { NgforComponent } from './ngfor.component';
import { JsonComponent } from './json.component';
import { PipesdemoComponent } from './pipesdemo.component';
import { ReversePipe } from './reverse.pipe';
import { InputComponent } from './input.component';
import { Mdf1Component } from './mdf1.component';
import { TdfComponent } from './tdf.component';
import { SampleComponent } from './sample/sample.component';
import { TestService } from './test.service';
import { TesserviceComponent } from './tesservice.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    EventbindingComponent,
    NgstyleComponent,
    NgswitchComponent,
    NgifComponent,
    NgforComponent,
    JsonComponent,
    PipesdemoComponent,
    ReversePipe,
    InputComponent,
    Mdf1Component,
    TdfComponent,
    SampleComponent,
    TesserviceComponent,
    
  ],
  imports: [
    BrowserModule,
    ViewModule,
    FormsModule,ReactiveFormsModule
    
    
  ],
  providers: [TestService 

  ],
  bootstrap: [ JsonComponent, AppComponent]
})
export class AppModule { }
