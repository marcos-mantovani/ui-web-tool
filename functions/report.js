const scoreAnswers = {
    atende: 1,
    atende_parcialmente: 0.5,
    nao_atende: 0,
    nao_aplica: null
}

const scoreQuestions = {
    A__espacamento: 3,
    A__escala_de_tamanhos: 3,
    A__tipografia: 3,
    A__cores: 3,
    B__espacamento: 3,
    B__escala_de_tamanhos: 3,
    B__tipografia: 3,
    B__cores: 3,
    B__agrupamento: 3,
    B__posicionamento: 1,
    C__pista_de_funcionamento: 2,
    C__helper_sobre_funcoes: 2,
    C__eficiencia_para_tarefas_principais: 2,
    C__tolerancia_a_erros: 2,
    C__facilidade_de_aprendizado: 2,
    C__navegacao_intuitiva: 2,
    C__campo_para_pesquisa: 1,
    C__funcoes_de_utilidade: 1,
    C__funcoes_para_lista: 1,
    D__espacamento: 2,
    D__grid: 1,
    D__proximidade: 2,
    D__responsividade: 2,
    D__contraste: 2,
    D__espacamento_textos: 2,
    D__fonte_legivel: 3,
    D__botao_finalizacao_transacao: 1,
    D__feedback_de_progresso: 1,
    D__cancelamento_de_acoes_demoradas: 1,
    D__daltonismo: 1,
    D__contraste_complementar: 1,
    E__imagens_relevantes: 2,
    E__interesse: 1,
    E__atrativas: 1,
    F__coluna_vertical: 1,
    F__carrosel: 1,
    F__conteudo_oculto: 1,
    F__facilidade_de_click: 1,
    F__limpeza_de_campos: 1,
    F__feedback_de_carregamento: 1,
    F__consistencia: 1
}

export function calculateScore(data) {
    let score = {
        maximo: 0,
        real: 0,
        consistencia: {
            real: 0,
            maximo:0
        },
        hierarquiaVisual: {
            real: 0,
            maximo: 0
        },
        usablidade: {
            real: 0,
            maximo: 0
        },
        designVisual: {
            real: 0,
            maximo: 0
        },
        imagens: {
            real: 0,
            maximo: 0
        },
        mobile: {
            real: 0,
            maximo: 0
        }
    };

    Object.keys(data).map((val) => {
        if (data[val] != 'nao_aplica') {
            score.maximo += scoreQuestions[val] * scoreAnswers.atende;
            score.real +=  scoreQuestions[val] * scoreAnswers[data[val]];

            if (val.startsWith("A__")) {
                score.consistencia.maximo += scoreQuestions[val] * scoreAnswers.atende;
                score.consistencia.real +=  scoreQuestions[val] * scoreAnswers[data[val]];
            } else if (val.startsWith("B__")) {
                score.hierarquiaVisual.maximo += scoreQuestions[val] * scoreAnswers.atende;
                score.hierarquiaVisual.real +=  scoreQuestions[val] * scoreAnswers[data[val]];
            } else if (val.startsWith("C__")) {
                score.usablidade.maximo += scoreQuestions[val] * scoreAnswers.atende;
                score.usablidade.real +=  scoreQuestions[val] * scoreAnswers[data[val]];
            } else if (val.startsWith("D__")) {
                score.designVisual.maximo += scoreQuestions[val] * scoreAnswers.atende;
                score.designVisual.real +=  scoreQuestions[val] * scoreAnswers[data[val]];
            } else if (val.startsWith("E__")) {
                score.imagens.maximo += scoreQuestions[val] * scoreAnswers.atende;
                score.imagens.real +=  scoreQuestions[val] * scoreAnswers[data[val]];
            } else if (val.startsWith("F__")) {
                score.mobile.maximo += scoreQuestions[val] * scoreAnswers.atende;
                score.mobile.real +=  scoreQuestions[val] * scoreAnswers[data[val]];
            }
        }
    });
    
    return {
        score: Math.round((score.real / score.maximo) * 1000),
        descriptionOverallScore: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        detailedScore: {
            consistencia: {
                score: Math.round((score.consistencia.real / score.maximo) * 1000),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
            },
            hierarquiaVisual: {
                score: Math.round((score.hierarquiaVisual.real / score.maximo) * 1000),
                description: 'Lorem Ipsum is simply dummy'
            },
            usablidade: {
                score: Math.round((score.usablidade.real / score.maximo) * 1000),
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
            },
            designVisual: {
                score: Math.round((score.designVisual.real / score.maximo) * 1000),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
            },
            imagens: {
                score: Math.round((score.imagens.real / score.maximo) * 1000),
                description: 'Lorem Ipsum is simply dummy texten'
            },
            mobile: {
                score: Math.round((score.mobile.real / score.maximo) * 1000),
                description: 'Lorem Ipsum is simply dummy'
            },
        }
    };
}