import { FormArray, FormControl, FormGroup } from '@angular/forms';
export class FormValidations {
  
static requireMinCheckbox(min = 1 ){
  const validator = ( fromarray : FormArray) => {
    const totalcheckd = fromarray.controls.map(v => v.value).reduce((tot,curr) => curr ? tot + 1 : tot,0)
    return totalcheckd >=  min  ? null : {required : true}
  }
return validator
}

static cepvalidator(control : FormControl){
  const cep = control.value;
  const validacao = /[0-9]{5}-[0-9]{3}/;
  if (cep && cep !== ''){
    return validacao.test(cep) ? null : {cepinvalid : true}
  }
  return null
}

static equalsTo(other: string){
  const comparewith = (control : FormGroup) => {
    let campo1 = control;
    let campo2 = <FormControl>control.root.get(other)

    if(campo2 !== null && campo1 !== null){
      if (campo1.value !== campo2.value){
        return {isnotequal: true}
      }
      else
      return null
    }
    return null
  }
  return comparewith
}


}