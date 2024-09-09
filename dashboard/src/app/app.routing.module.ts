import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
{   
    path: 'currency-convertor',     
    loadChildren: () =>import('./modules/currency-convertor/currency-convertor.module').then((m) => m.CurrencyConvertorModule), 
},
{   
    path: 'to-do-app',     
    loadChildren: () =>import('./modules/to-do-app/to-do-app.module').then((m) => m.ToDoAppModule), 
},
{   
    path: 'weather-forecast-app',     
    loadChildren: () =>import('./modules/weather-app/weather-app.module').then((m) => m.WeatherAppModule), 
},
{   path: '',redirectTo: '/weather-forecast-app', // Default route (optional)
    pathMatch: 'full',   }
// {   path: '**', redirectTo: '/feature1', // Wildcard route (optional) 
// },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}