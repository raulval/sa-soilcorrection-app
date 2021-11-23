package br.edu.utfpr.soilCorrection.models;

import java.util.Set;

import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.NutrienteAdicional;

public class ResultadoCorrecaoFosforo {
    private final double qntAplicar;
    private final double custoHa;
    private final Set<NutrienteAdicional> nutrientesAdicionais;

    public ResultadoCorrecaoFosforo(double qntAplicar, double custoHa, Set<NutrienteAdicional> nutrientesAdicionais) {
        this.qntAplicar = qntAplicar;
        this.custoHa = custoHa;
        this.nutrientesAdicionais = nutrientesAdicionais;
    }

    public double getCustoHa() {
        return custoHa;
    }

    public Set<NutrienteAdicional> getNutrientesAdicionais() {
        return nutrientesAdicionais;
    }

    public double getQntAplicar() {
        return qntAplicar;
    }
}
