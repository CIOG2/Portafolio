interface Template {
    title: string;
    tag: string[];
    color: string;
    permanent: boolean;
    content: string;
    id: number;
}


const templateButton: Template[] = [
    {
        title: 'Subtitulo',
        tag: ['<h2>', '</h2>'],
        color: 'linear-gradient(to right, #ff696a, #ff7a6d, #ff8972, #ff9778, #ffa581)',
        permanent: false,
        content: "",
        id: 0,
    },
    {
        title: 'Parrafo',
        tag: ['<p>', '</p>'],
        color: 'linear-gradient(to right, #2c5eff, #0086ff, #00a5ff, #00c0ff, #37d8ff)',
        permanent: false,
        content: "",
        id: 1,
    },
    {
        title: 'Cita',
        tag: ['<q>', '</q>'],
        color: 'linear-gradient(to right, #67ff04, #00ff8c, #00ffd1, #00f8f8, #92ecff)',
        permanent: false,
        content: "",
        id: 2,
    },
    {
        title: 'Imagen',
        tag: ['<img>'],
        color: 'linear-gradient(to right, #a832ff, #c848f6, #e05fef, #f278ea, #ff92e8)',
        permanent: false,
        content: "",
        id: 3,
    },
    {
        title: 'Codigo',
        tag: ['<code>', '</code>'],
        color: 'linear-gradient(to right, #011522, #122635, #223948, #334d5d, #456172)',
        permanent: false,
        content: "",
        id: 4,
    },
    {
        title: 'Terminal',
        tag: ['<code>', '</code>'],
        color: 'linear-gradient(to right bottom, #600d47, #75305d, #894c74, #9e698c, #b386a4)',
        permanent: false,
        content: "",
        id: 5,
    },
    {
        title: 'Lista',
        tag: ['<ul>', '</ul>'],
        color: 'linear-gradient(to right bottom, #ff2c2c, #ff6512, #ff9000, #ffb800, #ffdd00)',
        permanent: false,
        content: "",
        id: 6,
    },
    {
        title: 'Video',
        tag: ['<video>', '</video>'],
        color: 'linear-gradient(to right top, #d60000, #f30039, #ff006b, #ff00a3, #ff00de)',
        permanent: false,
        content: "",
        id: 7,
    },
]


const templatePermanent: Template[] = [
    {
        title: 'Titulo',
        tag: ['<h1>', '</h1>'],
        color: 'linear-gradient(to right bottom, #001029, #003352, #00597a, #0083a0, #00afc0)',
        permanent: true,
        content: "",
        id: 0,
    },
    {
        title: 'Imagen Principal',
        tag: ['<img>', '</img>'],
        color: 'linear-gradient(to right bottom, #001029, #003352, #00597a, #0083a0, #00afc0)',
        permanent: true,
        content: "",
        id: 1,
    },
    {
        title: 'Resumen',
        tag: ['<img>', '</img>'],
        color: 'linear-gradient(to right bottom, #001029, #003352, #00597a, #0083a0, #00afc0)',
        permanent: true,
        content: "",
        id: 2,
    },
    {
        title: 'Categoria',
        tag: ['<p>', '</p>'],
        color: 'linear-gradient(to right bottom, #001029, #003352, #00597a, #0083a0, #00afc0)',
        permanent: true,
        content: "",
        id: 3,
    },
]



const datosFake: any = {
    "category": [
        "bugs",
        "code",
        "error"
    ],
    "title": "Prueba 1",
    "mainContent": [
        {
            "title": "Titulo",
            "tag": [
                "<h1>",
                "</h1>"
            ],
            "color": "linear-gradient(to right bottom, #001029, #003352, #00597a, #0083a0, #00afc0)",
            "permanent": true,
            "content": "Prueba 1",
            "id": 0
        },
        {
            "title": "Imagen Principal",
            "tag": [
                "<img>",
                "</img>"
            ],
            "color": "linear-gradient(to right bottom, #001029, #003352, #00597a, #0083a0, #00afc0)",
            "permanent": true,
            "content": {
                "url": "https://firebasestorage.googleapis.com/v0/b/portafolio-3d382.appspot.com/o/cddb2205-2726-4ddd-9a56-8aebcf6af288?alt=media&token=5381ce6c-ced3-4306-a6bb-f4e3073a71c8",
                "id": "cddb2205-2726-4ddd-9a56-8aebcf6af288",
                "alt": "code"
            },
            "id": 1
        },
        {
            "title": "Resumen",
            "tag": [
                "<img>",
                "</img>"
            ],
            "color": "linear-gradient(to right bottom, #001029, #003352, #00597a, #0083a0, #00afc0)",
            "permanent": true,
            "content": "hoy toco aprender por la mala",
            "id": 2
        },
        {
            "title": "Categoria",
            "tag": [
                "<p>",
                "</p>"
            ],
            "color": "linear-gradient(to right bottom, #001029, #003352, #00597a, #0083a0, #00afc0)",
            "permanent": true,
            "content": [
                "bugs",
                "code",
                "error"
            ],
            "id": 3
        }
    ],
    "image": {
        "url": "https://firebasestorage.googleapis.com/v0/b/portafolio-3d382.appspot.com/o/f720edb2-696d-49f9-96dd-864d3130d450?alt=media&token=5e28796d-da3e-4c01-b2c2-fb0dd76adb04",
        "id": "f720edb2-696d-49f9-96dd-864d3130d450",
        "alt": "code"
    },
    "subtopics": [],
    "resume": "hoy toco aprender por la mala"
}




export { templateButton, templatePermanent, datosFake};