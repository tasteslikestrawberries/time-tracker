import { DatePipe } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AddEntryComponent } from './components/time-tracker/add-entry/add-entry.component';
import { EntryListComponent } from './components/time-tracker/entry-list/entry-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './shared/interceptors/spinner-interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    HeaderComponent,
    AddEntryComponent,
    EntryListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule
  ],
  exports: [
    NgxSpinnerModule
  ],
  providers: [DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true,
    }
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA] ,
  bootstrap: [AppComponent]
})
export class AppModule { }

