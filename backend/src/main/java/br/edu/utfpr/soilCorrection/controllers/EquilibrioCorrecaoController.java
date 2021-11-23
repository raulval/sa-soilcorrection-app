package br.edu.utfpr.soilCorrection.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.soilCorrection.models.Nutrientes;
import br.edu.utfpr.soilCorrection.models.ResultadoEquilibrioCorrecao;
import br.edu.utfpr.soilCorrection.soilcorrection.valoresIdeais.EquilibrioCorrecaoCTC;

@RestController
public class EquilibrioCorrecaoController {

    public double SCmol;
    public double CTCcmol;
    public double moPercentual;

    @CrossOrigin
    @PostMapping("/equilibrioteores")
    public ResultadoEquilibrioCorrecao equilibrioCorrecao(@RequestBody Nutrientes novosNutrientes) {

        var equilibrioCorrecaoCTC = new EquilibrioCorrecaoCTC();

        this.SCmol = equilibrioCorrecaoCTC.calculaSCmol(novosNutrientes.getPotassio(),
                novosNutrientes.getCalcio(), novosNutrientes.getMagnesio());

        this.CTCcmol = equilibrioCorrecaoCTC.calculaCTCCmol(novosNutrientes.getPotassio(),
                novosNutrientes.getCalcio(), novosNutrientes.getMagnesio(), novosNutrientes.getHidrogenioAluminio());

        this.moPercentual = equilibrioCorrecaoCTC.calculaMOPercentual(novosNutrientes.getMo());

        return new ResultadoEquilibrioCorrecao(this.SCmol, this.CTCcmol,
                equilibrioCorrecaoCTC.calculaVPercentual(this.SCmol, this.CTCcmol), this.moPercentual,
                equilibrioCorrecaoCTC.calculaCarbono(this.moPercentual));
    }
}
