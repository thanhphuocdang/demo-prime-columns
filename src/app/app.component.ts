import {
  Component,
  ElementRef,
  Injector,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isTh = true;
  las = 10;
  ps = [25, 75];
  ref: ElementRef<HTMLElement>;
  ins: Injector;
  @ViewChild('plit') container: ViewContainerRef;
  changeT() {
    this.isTh = !this.isTh;
    this.ps = [75, 25];
    // this.container.nativeElement.setAttribute('a', 'a');
    let e = this.container.injector.get(HTMLElement);
    console.log(e);
  }
  constructor(private injector: Injector) {}
}

function plit(plit: any) {
  throw new Error('Function not implemented.');
}
