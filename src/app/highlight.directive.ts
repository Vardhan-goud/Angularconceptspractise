import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 e:any;
  constructor(e:ElementRef) { 
    this.e=e;
    this.e.nativeElement.style.backgroundColor="yellow";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('green');
  }

  private highlight(color: string) {
    this.e.nativeElement.style.backgroundColor = color;
  }


}
