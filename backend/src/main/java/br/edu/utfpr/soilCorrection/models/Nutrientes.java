package br.edu.utfpr.soilCorrection.models;

public class Nutrientes {
    private final double fosforo;
    private final double potassio;
    private final double calcio;
    private final double magnesio;
    private final double enxofre;
    private final double aluminio;
    private final double hidrogenioAluminio;
    public final double mo;

    public Nutrientes(double fosforo, double potassio, double calcio, double magnesio, double enxofre, double aluminio, double hidrogenioAluminio, double mo) {
        this.fosforo = fosforo;
        this.potassio = potassio;
        this.calcio = calcio;
        this.magnesio = magnesio;
        this.enxofre = enxofre;
        this.aluminio = aluminio;
        this.hidrogenioAluminio = hidrogenioAluminio;
        this.mo = mo;
    }

    public double getFosforo() {
        return fosforo;
    }

    public double getPotassio() {
        return potassio;
    }

    public double getCalcio() {
        return calcio;
    }

    public double getMagnesio() {
        return magnesio;
    }

    public double getEnxofre() {
        return enxofre;
    }

    public double getAluminio() {
        return aluminio;
    }

    public double getHidrogenioAluminio() {
        return hidrogenioAluminio;
    }
    public double getMo() {
        return mo;
    }
}
