import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JsonComponent } from './components/json/json.component';
import { HttpClientModule} from '@angular/common/http';
import { RuntimeContentComponent } from './components/runtime-content.component';
@NgModule({
  declarations: [
    JsonComponent,
    RuntimeContentComponent
  ],
  exports: [
    JsonComponent,
    RuntimeContentComponent
  ],
  imports: [
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class SharedModule { }
