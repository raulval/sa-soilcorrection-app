package br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico;

import java.util.Set;

public interface IFonteNutriente {
    
    public double getTeorFonte();
    public Set<NutrienteAdicional> getNutrientesAdicionais();
}
