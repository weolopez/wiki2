import {
    Component, Input, SimpleChanges, OnChanges, OnInit,
    ViewChild, ViewContainerRef, ComponentRef,
    Compiler, ComponentFactory, NgModule, ModuleWithComponentFactories, ComponentFactoryResolver, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { JsonComponent } from './json/json.component';
import { SharedModule } from '../shared.module';
import { HttpClient } from '@angular/common/http';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'runtime-content',
    template: `
         <div #container></div>
    `
})
export class RuntimeContentComponent implements OnChanges, OnInit {

    @Input('template') template: string;
    @Input('data') data: any;
    @Input('src') src: string;
    @ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    private componentRef: ComponentRef<{}>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private compiler: Compiler,
        public http: HttpClient
      ) {
    }

    ngOnInit() {
    }
    ngOnChanges(changes: SimpleChanges) {

      if (this.src) {
        this.http.get(this.src).subscribe(value => {
          if (value) {
            console.log(value);
            this.template = <string> value;
            this.compileTemplate();
          }
        }
        );
      } else {
        this.compileTemplate();
      }
    }
    compileTemplate() {

      const metadata = {
            selector: `runtime-component-sample`,
            template: this.template
        };

        const factory = this.createComponentFactorySync(this.compiler, metadata, null);

        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance['data'] = this.data;
    }

    private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
        const cmpClass = componentClass ||
              class RuntimeComponent {
                  data: any;
                  jparse(json) {
                    return JSON.parse(json);
                  }
              };
        const decoratedCmp = Component(metadata)(cmpClass);

        @NgModule({
          imports: [CommonModule
            , SharedModule
          ],
          declarations: [decoratedCmp
          //  , JsonComponent
          ],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
        class RuntimeComponentModule { }

        const module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
        return module.componentFactories.find(f => f.componentType === decoratedCmp);
    }

}
