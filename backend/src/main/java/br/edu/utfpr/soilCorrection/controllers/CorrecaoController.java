package br.edu.utfpr.soilCorrection.controllers;


import br.edu.utfpr.soilCorrection.models.*;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.calcioMagnesio.CorrecaoCalcioMagnesio;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.fosforo.ConverteKgHaEmP2O5;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.fosforo.ConverteMgDm3EmKgHa;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.fosforo.CorrecaoFosforo;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.potassio.ConverteCMolcDm3EmMgDm3;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.potassio.ConverteKgHaEmK2O;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.potassio.CorrecaoPotassio;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CorrecaoController {

    @CrossOrigin
    @PostMapping("/correcao/fosforo")
    public ResultadoCorrecaoFosforo correcaoFosforo(@RequestBody DadosCorrecaoFosforo dadosCorrecaoFosforo) {
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
        var aposCorrecao = (dadosCorrecaoPotassio.getTeorSolo() * dadosCorrecaoPotassio.getParticipacaoDesejada())
                / dadosCorrecaoPotassio.getParticipacaoAtual();

        return new ResultadoCorrecaoPotassio(qntAplicar, custoHa, nutrientesAdicionais, aposCorrecao);
    }

    @CrossOrigin
    @PostMapping("/correcao/calciomagnesio")
    public ResultadoCorrecaoCalcioMagnesio correcaoCalcioMagnesio(@RequestBody DadosCorrecaoCalcioMagnesio dadosCorrecaoCalcioMagnesio) {
        var correcaoCalcioMagnesio = new CorrecaoCalcioMagnesio();

        var qntAplicar = correcaoCalcioMagnesio.calculaQuantidadeAplicar(dadosCorrecaoCalcioMagnesio.getParticipacaoDesejada(), dadosCorrecaoCalcioMagnesio.getPrnt());
        var custoHa = correcaoCalcioMagnesio.calculaCusto(dadosCorrecaoCalcioMagnesio.getCustoFonte(), qntAplicar);
        var nutrientesAdicionais = correcaoCalcioMagnesio.getNutrientesAdicionais(qntAplicar, dadosCorrecaoCalcioMagnesio.getFonteCalcioMagnesio());


        return new ResultadoCorrecaoCalcioMagnesio(qntAplicar, custoHa, nutrientesAdicionais);
    }

}
