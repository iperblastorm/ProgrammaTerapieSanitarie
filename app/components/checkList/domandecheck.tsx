interface DomandaCheck {
    id: string;
    domanda: string
}

interface ListaModelliCheck {
    id: string;
    titolo: string;
    domande: DomandaCheck [];
}

const ModelliCheck: ListaModelliCheck[] = [
    {
        id: 'tracheostomia',
        titolo: 'CHECK LIST TRACHEOSTOMIA',
        domande: [
            { id: 'tracheostomia_1', domanda: 'arcella' },
            { id: 'tracheostomia_2', domanda: 'contenitore per controcannula' },
            { id: 'tracheostomia_3', domanda: 'acqua ossigenata' },
            { id: 'tracheostomia_4', domanda: 'soluzione fisiologica/distillata' },
            { id: 'tracheostomia_5', domanda: 'antisettico' },
            { id: 'tracheostomia_6', domanda: 'materiale di pulizia per tracheostomia (spazzolini,scovolini)' }
        ]
    }
]