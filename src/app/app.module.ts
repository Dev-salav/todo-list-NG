import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';

@NgModule({
  declarations: [AppComponent, TableComponentComponent, TodoComponentComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
