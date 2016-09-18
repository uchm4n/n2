import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[collapse-on-click]'
})
export class CollapseOnClickDirective {

    isCollapsed = false;

    @HostBinding("class.glyphicon-collapse-up")
    get collapsed(){
        return this.isCollapsed
    }

    @HostListener("click")
    toggle(){
        this.isCollapsed = ! this.isCollapsed;
    }
}
