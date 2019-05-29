import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MFnncsSharedLibsModule, MFnncsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MFnncsSharedLibsModule, MFnncsSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MFnncsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MFnncsSharedModule {
  static forRoot() {
    return {
      ngModule: MFnncsSharedModule
    };
  }
}
