import { FormControl, ValidationErrors } from '@angular/forms';

export class ValidacionesPropias {
    static multiplo5(control: FormControl): ValidationErrors {
        let nro = parseInt(control.value);
        if (nro % 5 == 0)
            return {};
        else
            return { multiplo5: true }
    }

}