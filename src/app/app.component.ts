import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container', { read: ViewContainerRef}) 
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicTableComponent>

  addComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(DynamicTableComponent);
  }

  deleteComponent() {
    this.viewRef.clear();
  }
}
