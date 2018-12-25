import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})

export class DropDownDirective {
  @HostBinding('class.open') openDropDown = false;
  @HostListener('click') toggleOpen() {
    this.openDropDown = !this.openDropDown;
  }


}
