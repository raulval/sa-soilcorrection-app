package br.edu.utfpr.soilCorrection.models;

public class ResultadoEquilibrioCorrecao {
    private final double Scmol;
    private final double CTCcmol;
    private final double vatual;
    private final double mo;
    private final double carbono;

    public ResultadoEquilibrioCorrecao(double Scmol, double CTCcmol, double vatual, double mo, double carbono) {
        this.Scmol = Scmol;
        this.CTCcmol = CTCcmol;
        this.vatual = vatual;
        this.mo = mo;
        this.carbono = carbono;
    }

    public double getScmol() {
        return Scmol;
    }

    public double getCTCcmol() {
        return CTCcmol;
    }

    public double getVatual() {
        return vatual;
    }

    public double getMo() {
        return mo;
    }

    public double getCarbono() {
        return carbono;
    }
    
}
