package br.edu.utfpr.soilCorrection.models;

import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.potassio.FontePotassio;

public class DadosCorrecaoPotassio {
    private final double participacaoAtual;
    private final double participacaoDesejada;
    private final FontePotassio fontePotassio;
    private final double custoFontePotassio;
    private final double teorSolo;

    public DadosCorrecaoPotassio(double participacaoAtual, double participacaoDesejada, FontePotassio fontePotassio, double custoFontePotassio, double teorSolo) {
        this.participacaoAtual = participacaoAtual;
        this.participacaoDesejada = participacaoDesejada;
        this.fontePotassio = fontePotassio;
        this.custoFontePotassio = custoFontePotassio;
        this.teorSolo = teorSolo;
    }

    public double getCustoFonte() {
        return custoFontePotassio;
    }

    public FontePotassio getFontePotassio() {
        return fontePotassio;
    }

    public double getParticipacaoDesejada() {
        return participacaoDesejada;
    }

    public double getParticipacaoAtual() {
        return participacaoAtual;
    }

    public double getTeorSolo() {
        return teorSolo;
    }

}