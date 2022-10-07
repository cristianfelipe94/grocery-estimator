import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'reactive-radio-form',
  template: `
    <form formGroup="form">
      <input type="radio" formControlName="request" value="item" > Item
    </form>
    <p>Form value: {{ form.value | json}}</p>  <!-- {food: 'lamb' } -->
  `,
})
export class ReactiveRadioButtonComp {
  form = new FormGroup({

  });
}
