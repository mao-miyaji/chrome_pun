import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsSettingComponent } from './news-setting/news-setting.component';
import { NewsSettingAddComponent } from './news-setting-add/news-setting-add.component';
import { NewsSettingEditComponent } from './news-setting-edit/news-setting-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        NewsEventComponent,
        NewsListComponent,
        NewsSettingComponent,
        NewsSettingAddComponent,
        NewsSettingEditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
