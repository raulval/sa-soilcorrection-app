const INITIAL_STATE = {
  produtor: "",
  data: "",
  municipio: "",
  lote: "",
  areaTotal: "",
  talhao: "",
  areaTalhao: "",
  matriculaLote: "",
  textura: "",
  cultivo: "",
  responsavel: "",
  profundidade: "",
  resultado: "",
  // fosforo: 0,
  // potassio: 0,
  // calcio: 0,
  // magnesio: 0,
  // enxofre: 0,
  // aluminio: 0,
  // hal: 0,
  // scmol: 0,
  // ctccmol: 0,
  // vatual: 0,
};

function dadosReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DADOS":
      return {
        produtor: action.produtor,
        data: action.data,
        municipio: action.municipio,
        lote: action.lote,
        areaTotal: action.areaTotal,
        talhao: action.talhao,
        areaTalhao: action.areaTalhao,
        matriculaLote: action.matriculaLote,
        textura: action.textura,
        cultivo: action.cultivo,
        responsavel: action.responsavel,
        profundidade: action.profundidade,
        resultado: action.resultado,
      };
    case "TEORES":
      return {
        ...state,
        fosforo: action.fosforo,
        potassio: action.potassio,
        calcio: action.calcio,
        magnesio: action.magnesio,
        enxofre: action.enxofre,
        aluminio: action.aluminio,
        hal: action.hal,
        scmol: action.scmol,
        ctccmol: action.ctccmol,
        vatual: action.vatual,
      };
    case "CORRECAO":
      return {
        ...state,
        aposCorrecaoFosforo: action.aposCorrecaoFosforo,
        aposCorrecaoPotassio: action.aposCorrecaoPotassio,
        aposCorrecaoCalcio: action.aposCorrecaoCalcio,
        aposCorrecaoMagnesio: action.aposCorrecaoMagnesio,
      };
    case "RESETAR":
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default dadosReducer;
