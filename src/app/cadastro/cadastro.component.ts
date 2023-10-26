import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ConsultaCepService } from "../service/consulta-cep.service";
@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router, private cepService: ConsultaCepService) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    // console.log(form.controls)
    if (form.valid) {
      this.router.navigate(["./sucesso"]);
    } else {
      alert("formulario inválido!");
    }
  }

  consultaCep(ev: any) {
    const cep = ev.target.value;
    return this.cepService
      .getConsultaCep(cep)
      .subscribe((resultado) => console.info(resultado));
  }
}
