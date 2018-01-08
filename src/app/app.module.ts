import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';

const appRoutes: Routes = [
	{path: 'book', component: BookComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  	HttpClientModule,
  	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
