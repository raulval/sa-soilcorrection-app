package br.edu.utfpr.soilCorrection.models;

import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.calcioMagnesio.FonteCalcioMagnesio;

public class DadosCorrecaoCalcioMagnesio {
    private final double participacaoAtual;
    private final double participacaoDesejada;
    private final FonteCalcioMagnesio fonteCalcioMagnesio;
    private final double custoFonteCalMg;
    private final double prnt;
    private final double teorCao;
    private final double teorSolo;

    public DadosCorrecaoCalcioMagnesio(double participacaoAtual, double participacaoDesejada, FonteCalcioMagnesio fonteCalcioMagnesio, double custoFonteCalMg, double prnt, double teorCao, double teorSolo) {
        this.participacaoAtual = participacaoAtual / 100;
        this.participacaoDesejada = participacaoDesejada / 100;
        this.fonteCalcioMagnesio = fonteCalcioMagnesio;
        this.custoFonteCalMg = custoFonteCalMg;
        this.prnt = prnt / 100;
        this.teorCao = teorCao / 100;
        this.teorSolo = teorSolo;
    }

    public double getCustoFonte() {
        return custoFonteCalMg;
    }

    public FonteCalcioMagnesio getFonteCalcioMagnesio() {
        return fonteCalcioMagnesio;
    }

    public double getParticipacaoAtual() {
        return participacaoAtual;
    }

    public double getParticipacaoDesejada() {
        return participacaoDesejada;
    }

    public double getPrnt() {
        return prnt;
    }

    public double getTeorCao() {
        return teorCao;
    }

    public double getTeorSolo() {
        return teorSolo;
    }

}