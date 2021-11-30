package br.edu.utfpr.soilCorrection.models;

import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.fosforo.FonteFosforo;

public class DadosCorrecaoFosforo {
    private final double fosforo;
    private final double teorFosforo;
    private final FonteFosforo fonteFosforo;
    private final double custoFonteFosforo;
    private final double eficienciaFosforo;

    public DadosCorrecaoFosforo(double fosforo, double teorFosforo, FonteFosforo fonteFosforo, double custoFonteFosforo, double eficienciaFosforo) {
        this.fosforo = fosforo;
        this.teorFosforo = teorFosforo - fosforo;
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

    public double getFosforo() {
        return fosforo;
    }


}