export interface IFormDialogEmbeddable {
  isFormDialogEmbedded: boolean;
  initialFormValue?: any;
  onFormDialogSubmit(value?: any): void;
  loadingFailed(): void;
}
