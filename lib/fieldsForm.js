export const fieldsForm = [
    {
        id: "A",
        tab: "consistencia",
        titleTab: "Consistência",
        description: "A consistência em UI refere-se à uniformidade dos elementos e comportamentos da interface ao longo de toda a aplicação. Ela garante que os usuários tenham uma experiência previsível e coerente. Isso envolve o uso de padrões visuais, cores, tipografia, espaçamentos, escalas de tamanhos e interações semelhantes em todas as partes da interface.",
        fields: [
            {
                name: "A__espacamento",
                label: "Espaçamento",
                score: 3,
                help: "O espaçamento refere-se à distância entre os elementos em uma interface gráfica, como margens, preenchimentos (padding) e espaçamentos entre linhas e colunas. A consistência no espaçamento é crucial para uma interface bem organizada e fácil de navegar."
            },
            {
                name: "A__escala_de_tamanhos",
                label: "Escala de tamanhos",
                score: 3,
                help: ""
            },
            {
                name: "A__tipografia",
                label: "Tipografia",
                score: 3,
                help: ""
            },
            {
                name: "A__cores",
                label: "Cores",
                score: 3,
                help: ""
            }
        ]
    },
    {
        id: "B",
        tab: "hierarquia_visual",
        titleTab: "Hierarquia Visual",
        description: "A hierarquia visual aborda a organização dos elementos gráficos para indicar sua importância relativa e guiar o olhar do usuário através da interface. Isso é alcançado através do uso da escala de tamanhos, cor, contraste, espaçamento, tipografia e posicionamento.",
        fields: [
            {
                name: "B__espacamento",
                label: "Espaçamento",
                score: 3,
                help: ""
            },
            {
                name: "B__escala_de_tamanhos",
                label: "Escala de tamanhos",
                score: 3,
                help: ""
            },
            {
                name: "B__tipografia",
                label: "Tipografia",
                score: 3,
                help: ""
            },
            {
                name: "B__cores",
                label: "Cores",
                score: 3,
                help: ""
            },
            {
                name: "B__agrupamento",
                label: "Agrupamento",
                score: 3,
                help: ""
            },
            {
                name: "B__posicionamento",
                label: "Posicionamento",
                score: 1,
                help: ""
            }
        ]
    },
    {
        id: "C",
        tab: "usabilidade",
        titleTab: "Usabilidade",
        description: "A usabilidade refere-se à eficácia, eficiência e satisfação com que os usuários podem alcançar objetivos específicos em um ambiente particular. Engloba aspectos como a facilidade de aprendizagem, memorização, prevenção de erros e velocidade para execução da atividade desejada.",
        fields: [
            {
                name: "C__pista_de_funcionamento",
                label: "Pista de como algo deve funcionar",
                score: 2,
                help: ""
            },
            {
                name: "C__helper_sobre_funcoes",
                label: "Explicação do que é determinada função, elemento ou botão",
                score: 2,
                help: ""
            },
            {
                name: "C__eficiencia_para_tarefas_principais",
                label: "A interface deve permitir uma alta eficiência para as tarefas principais, sendo fácil de localizar e executar determinada ação",
                score: 2,
                help: ""
            },
            {
                name: "C__tolerancia_a_erros",
                label: "Tolerância de erros - a interface deve permitir que o usuário desfaça alguma ação crítica ou forneça avisos para a confirmação, evitando acionamentos enganosos",
                score: 2,
                help: ""
            },
            {
                name: "C__facilidade_de_aprendizado",
                label: "Facilidade de aprendizado",
                score: 2,
                help: ""
            },
            {
                name: "C__navegacao_intuitiva",
                label: "Navegação intuitiva, fornecendo menus e opções explícitas para que o usuário consiga se localizar e chegar onde deseja",
                score: 2,
                help: ""
            },
            {
                name: "C__campo_para_pesquisa",
                label: "Campo para pesquisa já no topo da interface",
                score: 1,
                help: ""
            },
            {
                name: "C__funcoes_de_utilidade",
                label: "Canto superior direito da interface reservado para as funções de utilidade dos usuários (logout, configurações, perfil, ajuda, atendimento, carrinho, mensagens, favoritos, etc...)",
                score: 1,
                help: ""
            },
            {
                name: "C__funcoes_para_lista",
                label: "Listas devem possuir funções como pesquisa, filtro, ordenação e paginação",
                score: 1,
                help: ""
            },
        ]
    },
    {
        id: "D",
        tab: "design_visual",
        titleTab: "Design Visual",
        description: "O design visual abrange a estética e aparência da interface. Envolve a escolha de cores, tipografia, ícones e layout, visando a criação de uma interface atraente e funcional.",
        fields: [
            {
                name: "D__espacamento",
                label: "Bom espaçamento entre os elementos da Interface para maior organização, ordem e ênfase",
                score: 2,
                help: ""
            },
            {
                name: "D__grid",
                label: "A interface deve possuir um grid de alinhamento bem definido e que se aplica a todos os componentes",
                score: 1,
                help: ""
            },
            {
                name: "D__proximidade",
                label: "Organizar os elementos relacionados próximos",
                score: 2,
                help: ""
            },
            {
                name: "D__responsividade",
                label: "A interface deve ser responsiva para que se adapte a diferentes dimensões de telas",
                score: 2,
                help: ""
            },
            {
                name: "D__contraste",
                label: "Bom contraste entre a cor do texto e cor de background",
                score: 2,
                help: ""
            },
            {
                name: "D__espacamento_textos",
                label: "Bom espaçamento dos textos para que a leitura seja agradável",
                score: 2,
                help: ""
            },
            {
                name: "D__fonte_legivel",
                label: "Fontes legíveis em tamanhos pequenos e grandes",
                score: 3,
                help: ""
            },
            {
                name: "D__botao_finalizacao_transacao",
                label: "O botão que finaliza uma transação deve ser localizado no final do fluxo visual",
                score: 1,
                help: ""
            },
            {
                name: "D__feedback_de_progresso",
                label: "Operação demoradas necessitam de um status visível ao usuário",
                score: 1,
                help: ""
            },
            {
                name: "D__cancelamento_de_acoes_demoradas",
                label: "Opção para cancelamento instantâneo de ação demorada sem efeitos colaterais",
                score: 1,
                help: ""
            },
            {
                name: "D__daltonismo",
                label: "Não utilizar vermelho com verde para algum contraste, pois pessoas com algum grau de daltonismo podem não enxergar a diferença",
                score: 1,
                help: ""
            },
            {
                name: "D__contraste_complementar",
                label: "Não realizar o contraste de texto com cores complementares, pois os olhos humanos se cansam rapidamente",
                score: 1,
                help: ""
            }
        ]
    },
    {
        id: "E",
        tab: "imagens",
        titleTab: "Imagens",
        description: "Imagens desempenham um papel crucial em interfaces gráficas, fornecendo contexto, atraindo atenção e ajudando na comunicação de informações de forma visual.",
        fields: [
            {
                name: "E__imagens_relevantes",
                label: "Imagens inseridas na interface precisam ser relevantes ao conteúdo",
                score: 2,
                help: ""
            },
            {
                name: "E__interesse",
                label: "Precisam gerar interesse aos usuários",
                score: 1,
                help: ""
            },
            {
                name: "E__atrativas",
                label: "Precisam ser atrativas",
                score: 1,
                help: ""
            }
        ]
    },
    {
        id: "F",
        tab: "mobile",
        titleTab: "Mobile",
        description: "O design de interfaces para dispositivos móveis deve considerar as limitações e possibilidades desses dispositivos, como tamanhos de tela menores, uso de toques e gestos, e contextos de uso variado.",
        fields: [
            {
                name: "F__coluna_vertical",
                label: "Organização do conteúdo em uma coluna vertical",
                score: 1,
                help: ""
            },
            {
                name: "F__carrosel",
                label: "Conteúdos paralelos exibidos lado a lado em um carrossel",
                score: 1,
                help: ""
            },
            {
                name: "F__conteudo_oculto",
                label: "Ferramentas secundárias ocultas para não ocupar muito espaço na tela, sendo exibidas apenas com um toque na tela",
                score: 1,
                help: ""
            },
            {
                name: "F__facilidade_de_click",
                label: "Links e botões precisam possuir um tamanho que seja fácil de acertar o clique e bastante espaço livre ao redor para evitar cliques errados",
                score: 1,
                help: ""
            },
            {
                name: "F__limpeza_de_campos",
                label: "Possibilidade de limpar campos de texto com apenas 1 clique",
                score: 1,
                help: ""
            },
            {
                name: "F__feedback_de_carregamento",
                label: "Indicadores de carregamento por conexão mais lenta",
                score: 1,
                help: ""
            },
            {
                name: "F__consistencia",
                label: "Consistência do layout desktop adaptado para o mobile",
                score: 1,
                help: ""
            },
        ]
    },
];

export const options = [
    {
        name: 'atende',
        label: 'Atende'
    },
    {
        name: 'atende_parcialmente',
        label: 'Atende parcialmente'
    },
    {
        name: 'nao_atende',
        label: 'Não atende'
    },
    {
        name: 'nao_aplica',
        label: 'Não se aplica'
    }
];