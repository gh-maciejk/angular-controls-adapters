import {
  AfterViewInit,
  ComponentRef,
  Directive,
  Input,
  OnDestroy,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Directive()
export abstract class ControlAdapter<TViewComponent>
  implements AfterViewInit, OnDestroy
{
  @Input() view?: Type<TViewComponent>;

  constructor(private _injectedView: Type<TViewComponent>) {}

  protected _componentRef: ComponentRef<TViewComponent> | undefined = undefined;

  abstract _container: ViewContainerRef;
  abstract afterViewCreated(): void;

  ngAfterViewInit(): void {
    const _view = this.view ?? this._injectedView;

    if (!_view) {
      throw new Error('Missing control view');
    }

    this._componentRef = this._container.createComponent(_view);
    this.afterViewCreated();
  }

  ngOnDestroy(): void {
    this._componentRef?.destroy();
  }
}
