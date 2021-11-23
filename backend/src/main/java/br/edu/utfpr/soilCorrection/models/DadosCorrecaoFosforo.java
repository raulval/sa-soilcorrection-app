package br.edu.utfpr.soilCorrection.models;

import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.fosforo.FonteFosforo;

public class DadosCorrecaoFosforo {
    private final double teorFosforo;
    private final FonteFosforo fonteFosforo;
    private final double custoFonteFosforo;
    private final double eficienciaFosforo;

    public DadosCorrecaoFosforo(double teorFosforo, FonteFosforo fonteFosforo, double custoFonteFosforo, double eficienciaFosforo) {
        this.teorFosforo = teorFosforo;
        this.fonteFosforo = fonteFosforo;
        this.custoFonteFosforo = custoFonteFosforo;
        this.eficienciaFosforo = eficienciaFosforo;
    }

    public double getCustoFonteFosforo() {
        return custoFonteFosforo;
    }

    public double getEficienciaFosforo() {
        return eficienciaFosforo;
    }

    public FonteFosforo getFonteFosforo() {
        return fonteFosforo;
    }

    public double getTeorFosforo() {
        return teorFosforo;
    }

}