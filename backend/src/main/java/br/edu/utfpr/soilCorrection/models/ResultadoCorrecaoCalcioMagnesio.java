package br.edu.utfpr.soilCorrection.models;

import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.NutrienteAdicional;
import java.util.Set;

public class ResultadoCorrecaoCalcioMagnesio {
    private final double qntAplicar;
    private final double custoHa;
    private final Set<NutrienteAdicional> nutrientesAdicionais;

    public ResultadoCorrecaoCalcioMagnesio(double qntAplicar, double custoHa, Set<NutrienteAdicional> nutrientesAdicionais) {
        this.qntAplicar = qntAplicar;
        this.custoHa = custoHa;
        this.nutrientesAdicionais = nutrientesAdicionais;
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
