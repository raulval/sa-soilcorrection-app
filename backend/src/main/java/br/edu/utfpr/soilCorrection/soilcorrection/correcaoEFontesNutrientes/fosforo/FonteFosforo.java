package br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.fosforo;

import java.util.Set;

import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.IFonteNutriente;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.NomeNutrienteAdicional;
import br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico.NutrienteAdicional;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum FonteFosforo 
        implements IFonteNutriente {

    SUPERFOSFATO_SIMPLES(
        0.18, 
        Set.of(
            new NutrienteAdicional(
                NomeNutrienteAdicional.ENXOFRE, 0.1), 
                new NutrienteAdicional(NomeNutrienteAdicional.CALCIO, 0.28))),
    SUPERFOSFATO_TRIPLO(
        0.41, 
        Set.of(
            new NutrienteAdicional(NomeNutrienteAdicional.CALCIO, 0.2))),
    MAP(
        0.48, 
        Set.of(
            new NutrienteAdicional(NomeNutrienteAdicional.CALCIO, 0.09)));

    private final double teorFonte;
    private final Set<NutrienteAdicional> nutrientesAdicionais;

}
