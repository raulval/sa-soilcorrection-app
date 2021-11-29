package br.edu.utfpr.soilCorrection.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.edu.utfpr.soilCorrection.models.DadosCorrecaoPotassio;
import br.edu.utfpr.soilCorrection.models.ResultadoCorrecaoPotassio;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.fosforo.ConverteMgDm3EmKgHa;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.potassio.ConverteCMolcDm3EmMgDm3;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.potassio.ConverteKgHaEmK2O;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.potassio.CorrecaoPotassio;

@RestController
public class CorrecaoPotassioController {

    @CrossOrigin
    @PostMapping("/correcao/potassio")
    public ResultadoCorrecaoPotassio correcaoPotassio(@RequestBody DadosCorrecaoPotassio dadosCorrecaoPotassio) {
        var correcaoPotassio = new CorrecaoPotassio();
        
        var necessidadeCMolcDM3 = correcaoPotassio.calculaNecessidadeAdicionarCMolcDm3(
                dadosCorrecaoPotassio.getTeorSolo(), dadosCorrecaoPotassio.getParticipacaoAtual(),
                dadosCorrecaoPotassio.getParticipacaoDesejada());
        var teorPotassioMgDM3 = new ConverteCMolcDm3EmMgDm3().converte(necessidadeCMolcDM3);
        var teorPotassioKgHa = new ConverteMgDm3EmKgHa().converte(teorPotassioMgDM3);
        var teorPotassioK20 = new ConverteKgHaEmK2O().converte(teorPotassioKgHa);
        var eficienciaNutriente = correcaoPotassio.calculaEficienciaNutriente(teorPotassioK20, 0.85);
        var qntAplicar = correcaoPotassio.calculaQuantidadeAplicar(eficienciaNutriente,
                dadosCorrecaoPotassio.getFontePotassio());
        var custoHa = correcaoPotassio.calculaCusto(qntAplicar, dadosCorrecaoPotassio.getCustoFonte());
        var nutrientesAdicionais = correcaoPotassio.getNutrientesAdicionais(
                qntAplicar,
                dadosCorrecaoPotassio.getFontePotassio());

        return new ResultadoCorrecaoPotassio(qntAplicar, custoHa, nutrientesAdicionais);
    }
}
