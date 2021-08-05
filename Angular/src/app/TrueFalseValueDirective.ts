import { Directive, Input, ElementRef, Renderer2, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'input[type=checkbox][trueFalseValue]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TrueFalseValueDirective),
      multi: true
    }
  ]
})
export class TrueFalseValueDirective implements ControlValueAccessor {
  @Input() trueValue = true;
  @Input() falseValue = false;
  private propagateChange = (_: any) => { };

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('change', ['$event'])
  onHostChange(ev: { target: { checked: any; }; }) {
    this.propagateChange(ev.target.checked ? this.trueValue : this.falseValue);
  }

  writeValue(obj: any): void {
    // model -> view
    if (obj === this.trueValue) {
      // this.elementRef.nativeElement.checked = true;
      this.renderer.setProperty(this.elementRef.nativeElement, 'checked', true);
    } else {
      this.renderer.setProperty(this.elementRef.nativeElement, 'checked', false);
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }
}
