const scoreAnswers = {
    atende: 1,
    atende_parcialmente: 0.5,
    nao_atende: 0,
    nao_aplica: null
}

const scoreQuestions = {
    F__espacamento: 1,
    F__escalaDeTamanhos: 3,
    F__tipografia: 2,
    F__cores: 2,
}

export function calculateScore(data) {
    let score = 0;
    let scoreMaximo = 0;

    Object.keys(data).map((val) => {
        if (data[val] != 'nao_aplica') {
            scoreMaximo += scoreQuestions[val] * scoreAnswers.atende;
            score +=  scoreQuestions[val] * scoreAnswers[data[val]];
        }
    });
    
    return {
        score: (score / scoreMaximo) * 1000,
        descriptionOverallScore: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        detailedScore: {
            consistencia: {
                score: 55,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
            },
            hierarquiaVisual: {
                score: 90,
                description: 'Lorem Ipsum is simply dummy'
            },
            usablidade: {
                score: 22,
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
            },
            designVisual: {
                score: 0,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
            },
            imagens: {
                score: 78,
                description: 'Lorem Ipsum is simply dummy texten'
            },
            mobile: {
                score: 100,
                description: 'Lorem Ipsum is simply dummy'
            },
        }
    };
}