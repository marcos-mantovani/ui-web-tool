const pontuacaoRespostas = {
    atende: 1,
    atende_parcialmente: 0.5,
    nao_atende: 0,
    nao_aplica: null
}

const pontuacaoPerguntas = {
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

const questions = {
    A__espacamento: 'Espaçamento',
    A__escala_de_tamanhos: 'Escala de tamanhos',
    A__tipografia: 'Tipografia',
    A__cores: 'Cores',
    B__espacamento: 'Espaçamento',
    B__escala_de_tamanhos: 'Escala de tamanhos',
    B__tipografia: 'Tipografia',
    B__cores: 'Cores',
    B__agrupamento: 'Agrupamento',
    B__posicionamento: 'Posicionamento',
    C__pista_de_funcionamento: 'Pista sobre o funcionamento',
    C__helper_sobre_funcoes: 'Explicação de funções, elementos e botões',
    C__eficiencia_para_tarefas_principais: 'Eficiência na execução de tarefas',
    C__tolerancia_a_erros: 'Tolerância à erros',
    C__facilidade_de_aprendizado: 'Facilidade de aprendizado',
    C__navegacao_intuitiva: 'Navegação intuitiva',
    C__campo_para_pesquisa: 'Campo de pesquisa no topo da interface',
    C__funcoes_de_utilidade: 'Funções de utilidade no canto superior direito',
    C__funcoes_para_lista: 'Funções de pesquisa, filtro, ordenação e paginação para listas',
    D__espacamento: 'Bom espaçamento entre elementos',
    D__grid: 'Grid de alinhamento',
    D__responsividade: 'Responsividade da interface',
    D__contraste: 'Contraste entre texto e background',
    D__espacamento_textos: 'Espaçamento dos textos para boa legibilidade',
    D__botao_finalizacao_transacao: 'Localização do elemento de finalização de transações no final do fluxo visual',
    D__feedback_de_progresso: 'Status explícito em operações demoradas',
    D__cancelamento_de_acoes_demoradas: 'Cancelamento instantâneo para transações demoradas',
    D__daltonismo: 'Evitar o contraste de vermelho com verde',
    D__contraste_complementar: 'Evitar contraste de texto com cores complementares',
    E__imagens_relevantes: 'Relevância',
    E__interesse: 'Interesse',
    E__atrativas: 'Atratividade',
    F__coluna_vertical: 'Organização do conteúdo em uma coluna vertical',
    F__carrosel: 'Conteúdos paralelos em carrossel',
    F__conteudo_oculto: 'Ferramentas secundárias ocultas',
    F__facilidade_de_click: 'Tamanho de links e botões',
    F__limpeza_de_campos: 'Limpar campos de texto com um clique',
    F__feedback_de_carregamento: 'Indicadores de carregamento',
    F__consistencia: 'Consistência do layout desktop adaptado para o mobile'
}

export function calculateScore(data) {
    let score = {
        maximo: 0,
        real: 0,
        consistencia: {
            real: 0,
            maximo:0,
            questions: []
        },
        hierarquiaVisual: {
            real: 0,
            maximo: 0,
            questions: []
        },
        usablidade: {
            real: 0,
            maximo: 0,
            questions: []
        },
        designVisual: {
            real: 0,
            maximo: 0,
            questions: []
        },
        imagens: {
            real: 0,
            maximo: 0,
            questions: []
        },
        mobile: {
            real: 0,
            maximo: 0,
            questions: []
        }
    };

    Object.keys(data).map((val) => {
        if (data[val] != 'nao_aplica') {
            score.maximo += pontuacaoPerguntas[val] * pontuacaoRespostas.atende;
            score.real +=  pontuacaoPerguntas[val] * pontuacaoRespostas[data[val]];

            if (val.startsWith("A__")) {
                score.consistencia.maximo += pontuacaoPerguntas[val] * pontuacaoRespostas.atende;
                score.consistencia.real +=  pontuacaoPerguntas[val] * pontuacaoRespostas[data[val]];

                if(pontuacaoRespostas[data[val]] != 1) {
                    score.consistencia.questions.push({'name': questions[val], 'help': '', key: val});
                }
            } else if (val.startsWith("B__")) {
                score.hierarquiaVisual.maximo += pontuacaoPerguntas[val] * pontuacaoRespostas.atende;
                score.hierarquiaVisual.real +=  pontuacaoPerguntas[val] * pontuacaoRespostas[data[val]];

                if(pontuacaoRespostas[data[val]] != 1) {
                    score.hierarquiaVisual.questions.push({'name': questions[val], 'help': '', key: val});
                }
            } else if (val.startsWith("C__")) {
                score.usablidade.maximo += pontuacaoPerguntas[val] * pontuacaoRespostas.atende;
                score.usablidade.real +=  pontuacaoPerguntas[val] * pontuacaoRespostas[data[val]];

                if(pontuacaoRespostas[data[val]] != 1) {
                    score.usablidade.questions.push({'name': questions[val], 'help': '', key: val});
                }
            } else if (val.startsWith("D__")) {
                score.designVisual.maximo += pontuacaoPerguntas[val] * pontuacaoRespostas.atende;
                score.designVisual.real +=  pontuacaoPerguntas[val] * pontuacaoRespostas[data[val]];

                if(pontuacaoRespostas[data[val]] != 1) {
                    score.designVisual.questions.push({'name': questions[val], 'help': '', key: val});
                }
            } else if (val.startsWith("E__")) {
                score.imagens.maximo += pontuacaoPerguntas[val] * pontuacaoRespostas.atende;
                score.imagens.real +=  pontuacaoPerguntas[val] * pontuacaoRespostas[data[val]];

                if(pontuacaoRespostas[data[val]] != 1) {
                    score.imagens.questions.push({'name': questions[val], 'help': '', key: val});
                }
            } else if (val.startsWith("F__")) {
                score.mobile.maximo += pontuacaoPerguntas[val] * pontuacaoRespostas.atende;
                score.mobile.real +=  pontuacaoPerguntas[val] * pontuacaoRespostas[data[val]];

                if(pontuacaoRespostas[data[val]] != 1) {
                    score.mobile.questions.push({'name': questions[val], 'help': '', key: val});
                }
            }
        }
    });

    const pontuacaoGeral = Math.round((score.real / score.maximo) * 100);
    let descriptionOverallScore = '';

    if (pontuacaoGeral > 95) {
        descriptionOverallScore = 'Sua interface demonstra um excelente design visual, alta usabilidade e acessibilidade, oferecendo uma experiência de usuário excepcional. Parabéns pelo excelente trabalho! Apenas mantenha a consistência e continue buscando inovações para manter a qualidade elevada.';
    } else if (pontuacaoGeral > 70) {
        descriptionOverallScore = 'A maioria dos elementos e funcionalidades está bem implementada, proporcionando uma experiência de usuário agradável e eficiente. Apenas alguns ajustes menores são necessários para otimizar ainda mais a interface e garantir que todos os aspectos funcionem harmoniosamente.';
    } else if (pontuacaoGeral > 40) {
        descriptionOverallScore = 'Alguns elementos estão bem estruturados, mas ainda há áreas que requerem melhorias para alcançar uma usabilidade satisfatória. Sugerimos focar em ajustes específicos para aprimorar a experiência do usuário e tornar a interface mais intuitiva e eficiente.';
    } else {
        descriptionOverallScore = 'Diversos aspectos essenciais, como design visual, usabilidade e acessibilidade, apresentam falhas significativas que dificultam a experiência do usuário. Recomendamos uma revisão completa dos elementos e funcionalidades para atender melhor às necessidades dos usuários e garantir uma navegação eficiente e agradável.';
    }
    
    return {
        score: pontuacaoGeral,
        descriptionOverallScore: descriptionOverallScore,
        detailedScore: {
            consistencia: {
                score: Math.round((score.consistencia.real / score.consistencia.maximo) * 100),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
                questions: score.consistencia.questions,
            },
            hierarquiaVisual: {
                score: Math.round((score.hierarquiaVisual.real / score.hierarquiaVisual.maximo) * 100),
                description: 'Lorem Ipsum is simply dummy',
                questions: score.hierarquiaVisual.questions,
            },
            usablidade: {
                score: Math.round((score.usablidade.real / score.usablidade.maximo) * 100),
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
                questions: score.usablidade.questions,
            },
            designVisual: {
                score: Math.round((score.designVisual.real / score.designVisual.maximo) * 100),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
                questions: score.designVisual.questions,
            },
            imagens: {
                score: Math.round((score.imagens.real / score.imagens.maximo) * 100),
                description: 'Lorem Ipsum is simply dummy texten',
                questions: score.imagens.questions,
            },
            mobile: {
                score: Math.round((score.mobile.real / score.mobile.maximo) * 100),
                description: 'Lorem Ipsum is simply dummy',
                questions: score.mobile.questions,
            },
        }
    };
}