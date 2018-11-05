import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsSettingComponent } from './news-setting/news-setting.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { NewsSettingAddComponent } from './news-setting-add/news-setting-add.component';
import { NewsSettingEditComponent } from './news-setting-edit/news-setting-edit.component';

const routes: Routes = [
    {
        path: 'list',
        component: NewsListComponent
    },
    {
        path: 'setting',
        component: NewsSettingComponent
    },
    {
        path: 'setting/add',
        component: NewsSettingAddComponent
    },
    {
        path: 'setting/:id',
        component: NewsSettingEditComponent
    },
    {
        path: 'event',
        component: NewsEventComponent
    },
    /**
     * 対象がなかった時
     */
    {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
