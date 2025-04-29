import { Router } from 'express';
const router = Router();

// Galería de obras
const obras = [
    {
        id: 1,
        titulo: "Fragmentos de Luz",
        autor: "Elena Solis",
        año: 2021,
        descripcion: "Exploración del equilibrio entre sombra y claridad.",
        imagen: "/img/Obra2.jpeg"
    },
    {
        id: 2,
        titulo: "Alegría en Geometría",
        autor: "Mateo Aranda",
        año: 2020,
        descripcion: "Una mirada inocente expresada en formas y colores vibrantes.",
        imagen: "/img/obra3.jpeg"
    },
    {
        id: 3,
        titulo: "Reflejos Urbanos",
        autor: "Lucía Fernández",
        año: 2022,
        descripcion: "Miradas modernas que reflejan el caos de la ciudad.",
        imagen: "/img/obra4.jpeg"
    },
    {
        id: 4,
        titulo: "Susurros del Viento",
        autor: "Andrés Valdés",
        año: 2019,
        descripcion: "El espíritu humano desdibujado en el viento etéreo.",
        imagen: "/img/obra5.jpeg"
    },
    {
        id: 5,
        titulo: "Pantera Rosa",
        autor: "Camila Duque",
        año: 2023,
        descripcion: "El desenfado y humor encapsulados en un ícono pop.",
        imagen: "/img/obra6.jpeg"
    },
    {
        id: 6,
        titulo: "Guardianes del Ocaso",
        autor: "Kenta Nakamura",
        año: 2023,
        descripcion: "Un duelo eterno entre dos fuerzas bajo el sol poniente.",
        imagen: "/img/obra7.jpeg"
    },
    {
        id: 7,
        titulo: "Vuelo Interior",
        autor: "Laura Beltrán",
        año: 2023,
        descripcion: "El impulso instintivo hacia la libertad, en su forma más pura.",
        imagen: "/img/obra8.jpeg"
    },
    {
        id: 8,
        titulo: "Tormenta Silenciosa",
        autor: "Esteban Rivas",
        año: 2023,
        descripcion: "La soledad de un faro que resiste el embate del tiempo.",
        imagen: "/img/obra9.jpeg"
    },
    {
        id: 9,
        titulo: "Sombras del Bosque",
        autor: "Daniela Cortés",
        año: 2023,
        descripcion: "Las montañas guardan secretos en su silencio invernal.",
        imagen: "/img/obra10.jpeg"
    },
    {
        id: 10,
        titulo: "Fragilidad Mortal",
        autor: "Alejandra Ruiz",
        año: 2023,
        descripcion: "La belleza que persiste incluso en medio del dolor.",
        imagen: "/img/obra11.jpeg"
    },
    {
        id: 11,
        titulo: "Identidad Fragmentada",
        autor: "Sara Méndez",
        año: 2023,
        descripcion: "La multiplicidad de emociones atrapada en un solo rostro.",
        imagen: "/img/obra12.jpeg"
    },
    {
        id: 12,
        titulo: "Dualidad Cromática",
        autor: "Manuel Cabrera",
        año: 2023,
        descripcion: "La coexistencia del color y la oscuridad en un mismo ser.",
        imagen: "/img/obra13.jpeg"
    },
    {
        id: 13,
        titulo: "Visión Prisma",
        autor: "Valentina León",
        año: 2023,
        descripcion: "Una mirada caleidoscópica al mundo interior.",
        imagen: "/img/obra14.jpeg"
    },
    {
        id: 14,
        titulo: "Fugaz Eternidad",
        autor: "Tomás Hidalgo",
        año: 2023,
        descripcion: "El último resplandor antes de que el día se apague.",
        imagen: "/img/obra15.jpeg"
    },
    {
        id: 15,
        titulo: "Noches de Ensueño",
        autor: "Pablo Salas",
        año: 2023,
        descripcion: "Un viaje entre estrellas a través de la imaginación viva.",
        imagen: "/img/obra16.jpeg"
    }
];

// Rutas principales
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/galeria', (req, res) => {
    res.render('galeria', { obras });
});

router.get('/obra/:id', (req, res) => {
    const obra = obras.find(o => o.id === parseInt(req.params.id));
    if (obra) {
        res.render('obra', { obra });
    } else {
        res.status(404).send('Obra no encontrada');
    }
});

router.get('/acerca', (req, res) => {
    res.render('acerca');
});

router.get('/inicio', (req, res) => {
    res.redirect('/');
});

export default router;

