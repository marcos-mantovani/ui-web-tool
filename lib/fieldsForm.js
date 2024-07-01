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
                help: "O espaçamento refere-se à distância entre os elementos em uma interface gráfica, como margens, preenchimentos (padding) e espaçamentos entre linhas e colunas."
            },
            {
                name: "A__escala_de_tamanhos",
                label: "Escala de tamanhos",
                score: 3,
                help: "A consistência na escala de tamanhos garante que textos, botões, ícones e imagens sigam proporções uniformes em toda a interface."
            },
            {
                name: "A__tipografia",
                label: "Tipografia",
                score: 3,
                help: "A consistência na tipografia envolve usar fontes, tamanhos, pesos e estilos de texto de maneira uniforme em toda a interface."
            },
            {
                name: "A__cores",
                label: "Cores",
                score: 3,
                help: "A consistência nas cores envolve usar uma paleta de cores uniforme em toda a interface. Verifique se as cores para botões, textos, links e fundos seguem um padrão estabelecido, e se há um contraste adequado entre elementos."
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
                name: "B__posicionamento",
                label: "Posicionamento",
                score: 1,
                help: "Verifique se elementos importantes estão colocados em posições destacadas e se há uma organização lógica que guia o usuário pela interface de forma intuitiva."
            },
            {
                name: "B__agrupamento",
                label: "Agrupamento",
                score: 3,
                help: "Verifique se itens relacionados estão agrupados de maneira consistente, facilitando a identificação e a navegação. Isso orienta o usuário e destaca as relações entre diferentes partes da interface."
            },
            {
                name: "B__escala_de_tamanhos",
                label: "Escala de tamanhos",
                score: 3,
                help: "A escala de tamanhos ajuda a estabelecer uma hierarquia visual clara, diferenciando títulos, subtítulos e textos de corpo. Verifique se os elementos maiores indicam maior importância e se os tamanhos dos textos e botões são proporcionais às suas funções."
            },
            {
                name: "B__espacamento",
                label: "Espaçamento",
                score: 3,
                help: "O espaçamento adequado contribui para uma hierarquia visual clara, ajudando os usuários a distinguir entre diferentes seções e elementos da interface. Verifique se há espaçamento suficiente entre títulos, subtítulos, parágrafos e outros componentes para guiar o olhar do usuário de forma intuitiva e organizada."
            },
            {
                name: "B__cores",
                label: "Cores",
                score: 3,
                help: "As cores são essenciais para estabelecer a hierarquia visual, destacando elementos importantes e guiando o olhar do usuário. Verifique se as cores são usadas de maneira consistente para diferenciar títulos, links e botões, criando um contraste adequado. Isso ajuda a enfatizar informações prioritárias e facilita a navegação na interface."
            },
            {
                name: "B__tipografia",
                label: "Tipografia",
                score: 3,
                help: "Verifique se há variação consistente nos pesos e estilos das fontes para indicar a importância relativa de cada elemento."
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
                label: "Pista sobre o funcionamento",
                score: 2,
                help: "As pistas de como algo deve funcionar são elementos visuais ou interativos que orientam o usuário sobre como interagir com a interface. Verifique se botões, ícones e outros elementos têm aparência e comportamento consistentes com suas funções esperadas. Isso torna a navegação intuitiva, reduzindo a necessidade de instruções explícitas e melhorando a experiência do usuário."
            },
            {
                name: "C__helper_sobre_funcoes",
                label: "Explicação de funções, elementos e botões",
                score: 2,
                help: "Verifique se há textos descritivos, ícones representativos ou tooltips informativos que explicam de forma concisa o propósito e a função de elementos mais técnicos."
            },
            {
                name: "C__eficiencia_para_tarefas_principais",
                label: "Eficiência na execução de tarefas",
                score: 2,
                help: "Para garantir uma alta eficiência na execução de tarefas, a interface deve facilitar a localização e execução das ações principais. Verifique se os elementos principais estão acessíveis de forma clara e direta, utilizando agrupamentos lógicos, ícones intuitivos e menus bem estruturados."
            },
            {
                name: "C__tolerancia_a_erros",
                label: "Tolerância à erros",
                score: 2,
                help: "Para garantir uma boa usabilidade, a interface deve permitir que o usuário desfaça ações críticas facilmente e fornecer avisos claros para confirmação, evitando acionamentos enganosos."
            },
            {
                name: "C__facilidade_de_aprendizado",
                label: "Facilidade de aprendizado",
                score: 2,
                help: "Verifique se os elementos são intuitivos e se há feedback visual claro para orientar o usuário durante a navegação. A utilização de dicas contextuais, tutoriais breves ou guias interativos pode ajudar também."
            },
            {
                name: "C__navegacao_intuitiva",
                label: "Navegação intuitiva",
                score: 2,
                help: "Para garantir uma navegação intuitiva, é essencial fornecer menus e opções claras que ajudem o usuário a se localizar e alcançar seus objetivos facilmente. Verifique se os menus estão bem organizados e se as opções são explicitamente descritas, facilitando a compreensão e a escolha."
            },
            {
                name: "C__campo_para_pesquisa",
                label: "Campo de pesquisa no topo da interface",
                score: 1,
                help: "Verifique se o campo é facilmente visível e acessível no topo da interface, permitindo que os usuários encontrem informações com facilidade."
            },
            {
                name: "C__funcoes_de_utilidade",
                label: "Funções de utilidade no canto superior direito",
                score: 1,
                help: "Reservar o canto superior direito da interface para funções de utilidade como logout, configurações, perfil e outras opções importantes facilita a acessibilidade e usabilidade. Verifique se essas funções estão claramente identificadas com ícones intuitivos e texto descritivo, permitindo que os usuários acessem facilmente as configurações pessoais e outras funcionalidades essenciais."
            },
            {
                name: "C__funcoes_para_lista",
                label: "Funções de pesquisa, filtro, ordenação e paginação para listas",
                score: 1,
                help: "É essencial que as listas na interface contenham funções como pesquisa, filtro, ordenação e paginação para melhorar a usabilidade. Verifique se essas funcionalidades são facilmente acessíveis e intuitivas, permitindo que os usuários localizem rapidamente informações específicas e organizem os dados conforme necessário."
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
                label: "Bom espaçamento entre elementos",
                score: 2,
                help: "Um bom espaçamento entre os elementos da interface é essencial para garantir maior organização, ordem e ênfase. Verifique se os elementos estão adequadamente espaçados, evitando aglomerações e proporcionando clareza visual."
            },
            {
                name: "D__grid",
                label: "Grid de alinhamento",
                score: 1,
                help: "A interface deve possuir um grid de alinhamento bem definido que se aplica a todos os componentes para garantir consistência visual e organização. Verifique se todos os elementos seguem um padrão de alinhamento regular, o que ajuda a manter a harmonia e a legibilidade da interface."
            },
            {
                name: "D__responsividade",
                label: "Responsividade da interface",
                score: 2,
                help: "A interface deve ser responsiva, adaptando-se a diferentes dimensões de telas para garantir uma experiência de usuário consistente. Verifique se o layout e os elementos visuais se ajustam corretamente em dispositivos de diversos tamanhos, como smartphones, tablets e desktops."
            },
            {
                name: "D__contraste",
                label: "Contraste entre texto e background",
                score: 2,
                help: "Um bom contraste entre a cor do texto e a cor de background é essencial para a legibilidade e acessibilidade da interface. Verifique se o texto é claramente visível contra o fundo, utilizando combinações de cores que facilitem a leitura."
            },
            {
                name: "D__espacamento_textos",
                label: "Espaçamento dos textos",
                score: 2,
                help: "Verifique se há espaço suficiente entre linhas (entrelinhas) e parágrafos, garantindo que o texto não pareça amontoado."
            },
            {
                name: "D__botao_finalizacao_transacao",
                label: "Localização do elemento de finalização de transações",
                score: 1,
                help: "O botão que finaliza uma transação deve ser localizado no final do fluxo visual para garantir uma navegação intuitiva e lógica. Verifique se o botão está posicionado onde o usuário naturalmente espera encontrá-lo após concluir todas as etapas necessárias."
            },
            {
                name: "D__feedback_de_progresso",
                label: "Status explícito em operações demoradas",
                score: 1,
                help: "Para operações demoradas, é essencial fornecer um status visível ao usuário para manter a transparência e reduzir a ansiedade. Verifique se há indicadores visuais, como barras de progresso ou ícones de carregamento, que informem claramente sobre o andamento da operação."
            },
            {
                name: "D__cancelamento_de_acoes_demoradas",
                label: "Cancelamento instantâneo para transações demoradas",
                score: 1,
                help: "Para ações demoradas, é importante oferecer uma opção de cancelamento instantâneo sem efeitos colaterais visíveis. Verifique se há um botão ou link claro e acessível que permita o usuário interromper a operação em qualquer momento."
            },
            {
                name: "D__daltonismo",
                label: "Evitar o contraste de vermelho com verde",
                score: 1,
                help: "Evitar o uso de vermelho com verde para contraste é crucial, pois pessoas com algum grau de daltonismo podem não enxergar a diferença. Verifique se essas cores não são usadas juntas para elementos importantes como texto e fundo, ícones, ou indicadores de status."
            },
            {
                name: "D__contraste_complementar",
                label: "Evitar contraste de texto com cores complementares",
                score: 1,
                help: "Evite o contraste de texto com cores complementares para evitar cansaço visual rápido. Cores complementares, quando usadas em contraste direto, podem dificultar a leitura prolongada e causar desconforto aos usuários."
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
                label: "Relevância",
                score: 2,
                help: "É fundamental que as imagens inseridas na interface sejam relevantes ao conteúdo para melhorar a experiência visual e a compreensão do usuário. Verifique se as imagens escolhidas estão alinhadas com o contexto e contribuem para transmitir informações de forma clara e eficaz."
            },
            {
                name: "E__interesse",
                label: "Interesse",
                score: 1,
                help: "É crucial que as imagens na interface despertem interesse nos usuários, capturando sua atenção e incentivando a exploração. Verifique se as imagens são visualmente atraentes, relevantes ao contexto e comunicam claramente informações ou sentimentos desejados."
            },
            {
                name: "E__atrativas",
                label: "Atratividade",
                score: 1,
                help: "É essencial que as imagens na interface sejam atrativas para capturar a atenção dos usuários de forma positiva. Verifique se as imagens são visualmente impactantes, com cores vibrantes e composição equilibrada, de modo a destacar-se de forma positiva."
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
                help: "Em interfaces para dispositivos móveis, é fundamental organizar o conteúdo em uma coluna vertical para facilitar a navegação e a leitura. Verifique se os elementos estão dispostos de forma lógica e linear, seguindo uma hierarquia clara de informações."
            },
            {
                name: "F__carrosel",
                label: "Conteúdos paralelos em carrossel",
                score: 1,
                help: "Em interfaces móveis, exibir conteúdos paralelos lado a lado em um carrossel pode melhorar a eficiência ao maximizar o espaço de tela disponível. Verifique se os itens no carrossel são relevantes e de fácil identificação, garantindo que cada conteúdo seja apresentado de forma clara e acessível."
            },
            {
                name: "F__conteudo_oculto",
                label: "Ferramentas secundárias ocultas",
                score: 1,
                help: "Em interfaces móveis, ocultar ferramentas secundárias para economizar espaço na tela e exibi-las com um toque é uma prática eficaz. Verifique se as ferramentas estão claramente identificadas por ícones intuitivos ou gestos de toque, facilitando o acesso sem sobrecarregar visualmente a interface. "
            },
            {
                name: "F__facilidade_de_click",
                label: "Tamanho de links e botões",
                score: 1,
                help: "Em interfaces móveis, é crucial que os links e botões tenham um tamanho adequado para facilitar o toque preciso e evitar cliques acidentais."
            },
            {
                name: "F__limpeza_de_campos",
                label: "Limpar campos de texto com um clique",
                score: 1,
                help: "Verifique se há um ícone claro próximo aos campos de texto para limpar o conteúdo inserido de forma rápida e intuitiva."
            },
            {
                name: "F__feedback_de_carregamento",
                label: "Indicadores de carregamento",
                score: 1,
                help: "É essencial incluir indicadores de carregamento para usuários em conexões mais lentas. Verifique se há elementos visuais, como ícones de carregamento ou mensagens informativas, que informem os usuários sobre o processo de carregamento."
            },
            {
                name: "F__consistencia",
                label: "Consistência do layout desktop adaptado para o mobile",
                score: 1,
                help: "Ao adaptar um layout desktop para dispositivos móveis, é crucial manter a consistência visual e estrutural. Verifique se os elementos de design, como cores, tipografia e espaçamento, são ajustados de forma coesa para o ambiente móvel, garantindo uma experiência de usuário fluida e familiar."
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