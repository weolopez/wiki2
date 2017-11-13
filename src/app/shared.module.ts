import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JsonComponent } from './components/json/json.component';

@NgModule({
  declarations: [
    JsonComponent,
  ],
  exports: [
    JsonComponent
  ],
  imports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class SharedModule { }
