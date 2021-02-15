import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, Inject, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPlainDialogEmbeddable } from 'src/app/models/interfaces/i-plain-dialog-embeddable';
import { PlainDialogData } from 'src/app/models/plain-dialog-data';

@Component({
  selector: 'app-plain-dialog',
  templateUrl: './plain-dialog.component.html',
  styleUrls: ['./plain-dialog.component.scss']
})
export class PlainDialogComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('mainContainer', { read: ViewContainerRef }) mainContainer: ViewContainerRef;

  embeddedComponentRef: ComponentRef<IPlainDialogEmbeddable>;

  constructor(
    public dialogRef: MatDialogRef<PlainDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlainDialogData,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Create and embed the embeddable component.
    this.addEmbeddedComponent();
  }

  ngOnDestroy(): void {
    // this.mainContainer.remove(this.mainContainer.indexOf(this.embeddedComponentRef.hostView));
    this.embeddedComponentRef.destroy();
  }

  addEmbeddedComponent(): void {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.embeddedComponentClass);
    this.embeddedComponentRef = this.mainContainer.createComponent(componentFactory);

    const embeddedComponent: IPlainDialogEmbeddable = this.embeddedComponentRef.instance;
    embeddedComponent.isPlainDialogEmbedded = true;
    embeddedComponent.setDataFromPlainDialog(this.data.payload);

    this.cdr.detectChanges();
  }
}
