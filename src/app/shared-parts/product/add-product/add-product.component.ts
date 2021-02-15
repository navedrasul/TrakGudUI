import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DProduct, DProductCategory } from 'src/app/api-models/api-models';
import { IPlainDialogEmbeddable } from 'src/app/models/interfaces/i-plain-dialog-embeddable';
import { LoggerService } from 'src/app/services/logger.service';
import { TgApiService } from 'src/app/services/tg-api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, IPlainDialogEmbeddable {

  isPlainDialogEmbedded: boolean;
  @Output() closeDialog = new EventEmitter<void>();

  dataFromPDlg: any;

  addForm: FormGroup;

  dataIsLoading = false;
  pBarMode = 'query';
  loadDataError: string;
  productCategories: DProductCategory[];

  constructor(
    private router: Router,
    private logger: LoggerService,
    private tgapiSvc: TgApiService,
    private snackBar: MatSnackBar
  ) { }

  setDataFromPlainDialog?(data: any): void{
    this.dataFromPDlg = data;

    this.loadData();
  }


  ngOnInit(): void {
    // Todo: Remove after testing:
    // -----> TEST CODE START
    // this.isPlainDialogEmbedded = true;
    // -----> TEST CODE END

    this.initForm();

    // If this component is embedded in a 'Plain Dialog', wait for the 'Plain Dialog' to call setData.
    if (!this.isPlainDialogEmbedded) {
      this.loadData();
    }
  }

  initForm(): void {
    this.addForm = new FormGroup({
      productCategoryId: new FormControl(),
      name: new FormControl(),
      desc: new FormControl(),
      barCode: new FormControl()
    });
  }

  loadData(): void {
    this.pBarMode = 'query';
    this.loadDataError = null;

    // Get all Product-Categories.

    this.dataIsLoading = true;
    this.tgapiSvc.getAll<DProductCategory>(DProductCategory.name)
      .subscribe(
        (res) => {
          this.productCategories = (res as DProductCategory[]).map(obj => ({ ...obj }));
          // console.log('Data received from TgApiService.getAll(): ', this.productCategories);

          this.subscribeToFormEvents();
        },
        (err) => {
          this.handleApiResErr(err, true);
          this.dataIsLoading = false;
        },
        () => {
          this.dataIsLoading = false;
        }
      );
  }

  subscribeToFormEvents(): void {
    // this.addForm.get('prodId').valueChanges
    //   .subscribe(pRes => {
    //     this.loadProdIdDependantValues(pRes);
    //   });
  }

  loadingFailed(): void {
    console.log('▶ AddProductComponent ladingFailed() called!');

    if (this.isPlainDialogEmbedded) {
      // Close the Plain-Dialog.
      this.closeDialog.emit();
    }
  }

  onSubmit(formProduct?: DProduct): void {
    if (!formProduct) {
      formProduct = (this.addForm.value as DProduct);
    }

    console.log('Adding item: ', formProduct);

    this.dataIsLoading = true;
    this.tgapiSvc.addSingle(DProduct.name, formProduct)
      .subscribe(
        (res) => {
          console.log('Item successfully saved. API Response: ', res);

          // --- Redirect to the Items-list view ---
          this.router.navigate(['/shared/items-list']).then((navigated: boolean) => {
            if (navigated) {
              this.openSnackBar('Successfully added the item', 3000, 'success');
            }
          });
        },
        (err) => {
          this.dataIsLoading = false;
          this.handleApiResErr(err);
        },
        () => {
          this.dataIsLoading = false;
        }
      );
  }

  cancelBtnOnClicked(): void {
    if (this.isPlainDialogEmbedded) {
      // Close the Plain-Dialog.
      this.closeDialog.emit();
    } else {
      this.router.navigate(['/shared/items-list']);
    }
  }

  // API-Service Response Error Handler.
  handleApiResErr(error: any, redirect: boolean = false): void {
    this.logger.error('Error while receiving data from TgApiService: ');
    this.logger.error(error);

    if (redirect) {
      if (this.isPlainDialogEmbedded) {
        // Close the Plain-Dialog.
        this.closeDialog.emit();

        this.openSnackBar(this.loadDataError, 3000, 'warn');
      } else {
        // --- Redirect to the Items-list view ---
        this.router.navigate(['/shared/items-list']).then((navigated: boolean) => {
          if (navigated) {
            this.openSnackBar(this.loadDataError, 3000, 'warn');
          }
        });
      }
    } else {
      this.loadDataError = 'Problem processing request. Please try later.';
      this.openSnackBar(this.loadDataError, 3000, 'warn');
    }
  }

  openSnackBar(message: string, duration: number, color: string = null): void {
    if (color) {
      let colorClass: string;

      if (color === 'theme') {
        colorClass = 'bg_theme';
      } else if (color === 'lightTheme') {
        colorClass = 'bg_lightTheme';
      } else if (color === 'info') {
        colorClass = 'bg_info';
      } else if (color === 'warn') {
        colorClass = 'bg_warn';
      } else if (color === 'success') {
        colorClass = 'bg_success';
      } else {
        colorClass = 'bg_darkGrey';
      }

      this.snackBar.open(
        message,
        null,
        {
          duration,
          panelClass: colorClass
        }
      );
    } else {
      this.snackBar.open(message, null, {
        duration,
      });
    }
  }
}
