package br.edu.utfpr.soilCorrection.models;

import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.NutrienteAdicional;
import java.util.Set;

public class ResultadoCorrecaoPotassio {
    private final double qntAplicar;
    private final double custoHa;
    private final Set<NutrienteAdicional> nutrientesAdicionais;
    private final double aposCorrecao;

    public ResultadoCorrecaoPotassio(double qntAplicar, double custoHa, Set<NutrienteAdicional> nutrientesAdicionais, double aposCorrecao) {
        this.qntAplicar = qntAplicar;
        this.custoHa = custoHa;
        this.nutrientesAdicionais = nutrientesAdicionais;
        this.aposCorrecao = aposCorrecao;
    }

    public double getAposCorrecao() {
        return aposCorrecao;
    }

    public double getCustoHa() {
        return custoHa;
    }

    public double getQntAplicar() {
        return qntAplicar;
    }

    public Set<NutrienteAdicional> getNutrientesAdicionais() {
        return nutrientesAdicionais;
    }
}
