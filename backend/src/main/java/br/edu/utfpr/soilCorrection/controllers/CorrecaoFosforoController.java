package br.edu.utfpr.soilCorrection.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.soilCorrection.models.DadosCorrecaoFosforo;
import br.edu.utfpr.soilCorrection.models.ResultadoCorrecaoFosforo;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.fosforo.CorrecaoFosforo;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.fosforo.ConverteMgDm3EmKgHa;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.fosforo.ConverteKgHaEmP2O5;

@RestController
public class CorrecaoFosforoController {

    @CrossOrigin
    @PostMapping("/correcao/fosforo")
    public ResultadoCorrecaoFosforo equilibrioCorrecao(@RequestBody DadosCorrecaoFosforo dadosCorrecaoFosforo) {
        var correcaoFosforo = new CorrecaoFosforo();

        var teorFosforoAdicionarKgHa = new ConverteMgDm3EmKgHa().converte(dadosCorrecaoFosforo.getTeorFosforo());
        var teorFosforoAdicionarP2O5 = new ConverteKgHaEmP2O5().converte(teorFosforoAdicionarKgHa);
        var necessidadeFosforo = correcaoFosforo.calculaEficienciaNutriente(teorFosforoAdicionarP2O5,
                (dadosCorrecaoFosforo.getEficienciaFosforo() / 100));
        var qntAplicar = correcaoFosforo.calculaQuantidadeAplicar(necessidadeFosforo,
                dadosCorrecaoFosforo.getFonteFosforo());
        var custoHa = correcaoFosforo.calculaCusto(dadosCorrecaoFosforo.getCustoFonteFosforo(), qntAplicar);
        var nutrientesAdicionais = correcaoFosforo.getNutrientesAdicionais(
            qntAplicar,
            dadosCorrecaoFosforo.getFonteFosforo());

        return new ResultadoCorrecaoFosforo(qntAplicar, custoHa, nutrientesAdicionais);
    }
}
