import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi:true

  }]
})
export class MaiorIdadeDirective implements Validators {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null{
    const dataNascimento = new Date(control.value)
    let dataAtual = new Date();
    var diferenca_tempo = dataAtual.getTime() - dataNascimento.getTime(); 
    var diferenca_dias = diferenca_tempo / (1000 * 3600 * 24);
    return parseInt(diferenca_dias.toString()) > 6573 ? null : {'maiorIdadeValidator':true}
  }

}
