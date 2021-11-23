package br.edu.utfpr.soilCorrection.soilcorrection.correcaoEFontesNutrientes.nutrienteGenerico;

public interface Conversao<T, R> {

    public R converte(T valor);
}
