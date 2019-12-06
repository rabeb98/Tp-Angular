import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  coulors:string[]=["red","blue","black","gray","green","orange","pink","yellow","brown"]

  @HostBinding ('style.color') c='';
  @HostBinding ('style.borderColor') bc='';
  @HostListener ('keydown') keydown(){this.c=this.coulors[Math.floor(Math.random()*this.coulors.length)];
                                      this.bc=this.coulors[Math.floor(Math.random()*this.coulors.length)];}
  constructor() {

  }

}
