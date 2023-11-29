import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { ProtectedAreaService } from 'src/app/services/protected-area.service';

@Component({
  selector: 'app-protected-area-edit-form',
  templateUrl: './protected-area-edit-form.component.html',
  styleUrls: ['./protected-area-edit-form.component.scss'],
})
export class ProtectedAreaEditFormComponent {
  @Input() editType;
  @Input() id;
  private subscriptions = new Subscription();

  form = new UntypedFormGroup({
    effectiveDate: new UntypedFormControl(null),
    legalName: new UntypedFormControl(null),
    displayName: new UntypedFormControl(null),
    phoneticName: new UntypedFormControl(null),
    audioClip: new UntypedFormControl(null),
  });

  formAttributes = ['effectiveDate', 'legalName', 'displayName', 'phoneticName', 'audioClip'];

  public currentData;
  public loading = true;

  constructor(
    private router: Router,
    private protectedAreaService: ProtectedAreaService,
    private loadingService: LoadingService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.protectedAreaService.watchCurrentProtectedArea().subscribe((res) => {
        this.currentData = res ? res : {};
        // Populate form with data
        if (this.currentData && this.editType === 'minor') {
          // TODO: Prompt user is another change has been detected after init.
          this.initForm(this.form, this.currentData, this.formAttributes);
        }
        this.ref.detectChanges();
      })
    );

    this.subscriptions.add(
      this.loadingService.getLoadingStatus().subscribe((res) => {
        this.loading = res;
        this.ref.detectChanges();
      })
    );
  }

  initForm(form, data, formAttributes) {
    formAttributes.forEach((element) => {
      form.controls[element].setValue(data[element] ? data[element] : null);
    });
    form.markAsPristine();
  }

  onDatePicked() {
    this.ref.detectChanges();
  }

  cancel() {
    this.router.navigate(['protected-areas', this.currentData.pk, 'edit']);
  }

  submit() {}

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.ref.detectChanges();
  }
}
