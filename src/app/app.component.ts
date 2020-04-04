import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { BmiCalculatorServiceService } from './services/bmi-calculator-service.service';
import { RetirementCalculatorServiceService } from './services/retirement-calculator-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public bmiCalculatorForm: FormGroup;
  public bmiCalculatorMessage = null;

  public retirementCalculatorForm: FormGroup;
  public retirementCalculatorMessage = null;

  constructor(private formBuilder: FormBuilder, private bmiCalculatorService: BmiCalculatorServiceService, 
    private retirementCalculatorService: RetirementCalculatorServiceService) {
    this.bmiCalculatorForm = this.formBuilder.group({
      heightFt: new FormControl(null, [Validators.required, Validators.min(0)]),
      heightIn: new FormControl(null, [Validators.required, Validators.min(0)]),
      weight: new FormControl(null, [Validators.required, Validators.min(0)])
    });
    this.retirementCalculatorForm = this.formBuilder.group({
      age: new FormControl(null, [Validators.required, Validators.min(0)]),
      salary: new FormControl(null, [Validators.required, Validators.min(0)]),
      percentage: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
      goal: new FormControl(null, [Validators.required, Validators.min(0)])
    });
  }

  onBmiCalculatorSubmit(form) {
    if (this.bmiCalculatorForm.valid &&
       (this.bmiCalculatorForm.value.heightFt !== 0 || 
        this.bmiCalculatorForm.value.heightIn !== 0)) {
      this.bmiCalculatorService.CalculateBmi(form).subscribe((result: any) => {
        this.bmiCalculatorMessage = `BMI Value: ${result.value} BMI Category: ${result.category}`;
      });
    } else {
      this.bmiCalculatorMessage = "INVALID INPUT. All values must be nonnegative and Total Height must be greater than 0."
    }
  }

  onRetirementCalculatorSubmit(form) {
    if (this.retirementCalculatorForm.valid) {
     this.retirementCalculatorService.CalculateRetirement(form).subscribe((result: any) => {
       this.retirementCalculatorMessage = `Final Age: ${result.age} Goal Met?: ${result.goalMet}`;
     });
   } else {
     this.retirementCalculatorMessage = "INVALID INPUT. All values must be nonnegative."
   }
  }

  ngOnInit() {

  }
}
