import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JsonComponent } from './components/json/json.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    JsonComponent,
  ],
  exports: [
    JsonComponent
  ],
  imports: [
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class SharedModule { }
