// Datos de recursos QML del README
const qmlResources = [
    {
        title: "Github repo: awesome QML",
        description: "Repositorio de código y recursos",
        link: "https://github.com/krishnakumarsekar/awesome-quantum-machine-learning",
        category: "tools",
        type: "GitHub"
    },
    {
        title: "2 Github repo",
        description: "Repositorio de código y recursos",
        link: "https://github.com/artix41/awesome-quantum-ml",
        category: "tools",
        type: "GitHub"
    },
    {
        title: "QML MOOC by Petter Wittek",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=QtWCmO_KIlg&list=PLmRxgFnCIhaMgvot-Xuym_hn69lmzIokg&index=1",
        category: "courses",
        type: "Video"
    },
    {
        title: "QML Hackaton",
        description: "Artículo explicativo y educativo",
        link: "https://medium.com/xanaduai/we-came-we-saw-we-qhacked-dacea7914f5a",
        category: "papers",
        type: "Article"
    },
    {
        title: "QML 101 - Medium post",
        description: "Recurso educativo",
        link: "https://towardsdatascience.com/quantum-machine-learning-101-1058f24c3487",
        category: "papers",
        type: "Resource"
    },
    {
        title: "The Emerging Role of Quantum Computing in Machine Learning (Recomendado)",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=V2WRdU56WIc",
        category: "courses",
        type: "Video"
    },
    {
        title: "Introductory material for QML:",
        description: "Recurso educativo",
        link: "https://quantumcomputing.stackexchange.com/questions/2151/introductory-material-for-quantum-machine-learning",
        category: "papers",
        type: "Resource"
    },
    {
        title: "An introduction to Quantum Machine Learning - Webinar by Aroosa Ijaz",
        description: "Video educativo sobre computación cuántica para principiantes",
        link: "https://www.youtube.com/watch?v=-DWng3jyBIM",
        category: "courses",
        type: "Video"
    },
    {
        title: "An introduction to QML by Maria Schuld",
        description: "Paper de investigación académica para principiantes",
        link: "https://arxiv.org/pdf/1409.3097.pdf",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "Quantum machine learning for supervised pattern recognition by Maria Schuld:",
        description: "Recurso educativo",
        link: "https://pdfs.semanticscholar.org/9d3b/04e3667b13d55d0fbe65cb21ea7c52614e2c.pdf",
        category: "courses",
        type: "Resource"
    },
    {
        title: "QML talk 2020: Maria Schuld",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=C_lBYKV_pJo",
        category: "videos",
        type: "Video"
    },
    {
        title: "QML and Pennylane by Maria Schuld",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=pe1d0RyCNxY",
        category: "videos",
        type: "Video"
    },
    {
        title: "How to translate from Qubiter to Pennylane",
        description: "Repositorio de código y recursos",
        link: "https://github.com/artiste-qb-net/qubiter/blob/master/qubiter/jupyter_notebooks/Translating_from_Qubiter_to_Xanadu_PennyLane.ipynb",
        category: "tools",
        type: "GitHub"
    },
    {
        title: "QML by Jacob Biamonte and Petter Wittek",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/pdf/1611.09347.pdf",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "“QML Algorithms: Read the Fine Print” by Scott Aaronson",
        description: "Recurso educativo",
        link: "https://www.scottaaronson.com/papers/qml.pdf",
        category: "papers",
        type: "Resource"
    },
    {
        title: "QML: a classical perspective",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/pdf/1707.08561.pdf",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "QML for data scientists",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/pdf/1804.10068.pdf",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "Data re-uploading for a universal quantum classifier",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/pdf/1907.02085.pdf",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "Talk: What Can We Expect from QML? Dr. Peter Wittek",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=EKWGLERVLuc",
        category: "videos",
        type: "Video"
    },
    {
        title: "Highlighting Quantum Computing for Machine Learning",
        description: "Artículo explicativo y educativo",
        link: "https://medium.com/meetech/highlighting-quantum-computing-for-machine-learning-1f1abd41cb59",
        category: "courses",
        type: "Article"
    },
    {
        title: "Quantum embeddings for machine learning",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/pdf/2001.03622.pdf",
        category: "courses",
        type: "Research Paper"
    },
    {
        title: "On quantum ensembles of quantum classifiers",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/pdf/2001.10833.pdf",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "The Holy Grail of Quantum Artificial Intelligence: Major Challenges in Accelerating the Machine Learning Pipeline",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/abs/2004.14035",
        category: "courses",
        type: "Research Paper"
    },
    {
        title: "Quantum Assisted Feed-Forward Neural Network For MNIST Image Classification",
        description: "Recurso educativo",
        link: "https://quantumzeitgeist.com/quantum-assisted-feed-forward-neural-network-for-mnist-image-classification",
        category: "papers",
        type: "Resource"
    },
    {
        title: "No Free Lunch for QML",
        description: "Paper de investigación académica",
        link: "https://scirate.com/arxiv/2003.14103",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "End-to-End QML Implemented with Controlled Quantum Dynamics",
        description: "Paper de investigación académica",
        link: "https://scirate.com/arxiv/2003.13658",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "Bayesian deep learning on quantum computers",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/pdf/1806.11463.pdf",
        category: "courses",
        type: "Research Paper"
    },
    {
        title: "Repo with code of the previous paper:",
        description: "Recurso educativo",
        link: "https://gitlab.com/apozas/bayesian-dl-quantum",
        category: "papers",
        type: "Resource"
    },
    {
        title: "Latest improved HHL algorithm for previous paper",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/pdf/2003.12770.pdf",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "QML: Prospects and challenges",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=Ycy40s4aXxs",
        category: "videos",
        type: "Video"
    },
    {
        title: "Panel discussion: QML",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=-YY_kWpdu3Y",
        category: "videos",
        type: "Video"
    },
    {
        title: "QML with PyTorch and Qiskit",
        description: "Recurso educativo",
        link: "https://blog.usejournal.com/quantum-machine-learning-hybrid-quantum-classical-machine-learning-with-pytorch-and-qiskit-d03da758d58b",
        category: "papers",
        type: "Resource"
    },
    {
        title: "Reddit question: Best major and focus for QML",
        description: "Recurso educativo",
        link: "https://www.reddit.com/r/QuantumComputing/comments/h9upxv/best_majors_and_focus_for_quantum_machine_learning/",
        category: "papers",
        type: "Resource"
    },
    {
        title: "A Classical Algorithm Framework for Dequantizing QML",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=j4k6aVihQXE&list=RDCMUCW1C2xOfXsIzPgjXyuhkw9g&start_radio=1",
        category: "videos",
        type: "Video"
    },
    {
        title: "New Directions for Tensor Networks: Machine Learning and Quantum Computing I",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=Ql2-doWQYJk",
        category: "courses",
        type: "Video"
    },
    {
        title: "QML - What Quantum Computing Means to Data Mining ( Book) by Peter Wittek",
        description: "Recurso educativo",
        link: "https://www.researchgate.net/profile/Peter_Wittek/publication/264825604_Quantum_Machine_Learning_What_Quantum_Computing_Means_to_Data_Mining/links/5ababcfba6fdcc71647085db/Quantum-Machine-Learning-What-Quantum-Computing-Means-to-Data-Mining.pdf",
        category: "papers",
        type: "Resource"
    },
    {
        title: "Implementing QSVM on IBM’s Quantum computers",
        description: "Recurso educativo",
        link: "https://quantumcomputinguk.org/tutorials/how-to-implement-qsvm-algorithm-on-ibms-quantum-computers-with-qiskit",
        category: "papers",
        type: "Resource"
    },
    {
        title: "QML: Training a model on IBM quantum computers  with the iris flower dataset",
        description: "Recurso educativo",
        link: "https://iris.entropicalabs.io/",
        category: "papers",
        type: "Resource"
    },
    {
        title: "Introduction to QSVM",
        description: "Artículo explicativo y educativo para principiantes",
        link: "https://medium.com/@patrick.huembeli/introduction-into-quantum-support-vector-machines-727f3ccfa2b4",
        category: "papers",
        type: "Article"
    },
    {
        title: "Training quantum neural networks with Pennylane, PyTorch, and TensorFlow",
        description: "Artículo explicativo y educativo",
        link: "https://medium.com/xanaduai/training-quantum-neural-networks-with-pennylane-pytorch-and-tensorflow-c669108118cc",
        category: "tools",
        type: "Article"
    },
    {
        title: "How to calculate Quantum Gradients and use them for classification:",
        description: "Repositorio de código y recursos",
        link: "https://colab.research.google.com/github/kareem1925/Ismailia-school-of-AI/blob/master/quantum_gradients/universal_qubit_classifier_using_gradient_descent.ipynb",
        category: "tools",
        type: "GitHub"
    },
    {
        title: "Can Quantum Computers Learn Like Classical Computers? A Co-Design Framework for Machine Learning and Quantum Circuits",
        description: "Paper de investigación académica",
        link: "https://scirate.com/arxiv/2006.14815",
        category: "courses",
        type: "Research Paper"
    },
    {
        title: "On Sampling and Inference using Quantum Algorithms",
        description: "Paper de investigación académica",
        link: "https://scirate.com/arxiv/2006.11775",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "Recurrent Quantum Neural Networks",
        description: "Paper de investigación académica",
        link: "https://scirate.com/arxiv/2006.14619",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "Layerwise learning for quantum neural networks",
        description: "Paper de investigación académica",
        link: "https://scirate.com/arxiv/2006.14904",
        category: "courses",
        type: "Research Paper"
    },
    {
        title: "Boltzmann machine learning with a variational quantum algorithm",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/abs/2007.00876",
        category: "courses",
        type: "Research Paper"
    },
    {
        title: "Single-photon QML improves on the classical result",
        description: "Recurso educativo",
        link: "https://quantumzeitgeist.com/single-photon-quantum-machine-learning-improves-on-classical-result",
        category: "papers",
        type: "Resource"
    },
    {
        title: "The effect of data encoding on the expressive power of variational QML models",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/abs/2008.08605",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "“Quantum Classification” by Brian N. Siegelwax",
        description: "Artículo explicativo y educativo",
        link: "https://link.medium.com/fOEeWHIIy9",
        category: "papers",
        type: "Article"
    },
    {
        title: "“Superdense Encoding of Classical Data” by Brian N. Siegelwax",
        description: "Artículo explicativo y educativo",
        link: "https://link.medium.com/qhSSSX2iA9",
        category: "papers",
        type: "Article"
    },
    {
        title: "“Quantum Clustering & Classification” by Brian N. Siegelwax",
        description: "Artículo explicativo y educativo",
        link: "https://link.medium.com/9BTVkL5iA9",
        category: "papers",
        type: "Article"
    },
    {
        title: "NITheP QML mini-school by Amira Abbas - First session",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=iWrGVHwXPSI",
        category: "videos",
        type: "Video"
    },
    {
        title: "SMBQ Day 2: Amira Abbas and Maria Schuld QML talks",
        description: "Video educativo sobre computación cuántica",
        link: "https://www.youtube.com/watch?v=kAHtzHzAzgE",
        category: "videos",
        type: "Video"
    },
    {
        title: "Efficient calculation of gradients in classical simulations of variational quantum algorithms",
        description: "Paper de investigación académica",
        link: "https://arxiv.org/abs/2009.02823",
        category: "papers",
        type: "Research Paper"
    },
    {
        title: "Quantum Transfer Learning",
        description: "Recurso educativo",
        link: "https://pennylane.ai/qml/demos/tutorial_quantum_transfer_learning.html",
        category: "courses",
        type: "Resource"
    }
];

// Variables globales
let allBooks = [];
let filteredBooks = [];
let currentBookFilter = 'all';
let currentResourceFilter = 'all';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupScrollToTop();
    loadQMLResources();
    loadBooks();
    setupFilters();
    setupSearch();
    animateStats();
    updateLastUpdate();
}

// Navegación móvil
function setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Botón scroll to top
function setupScrollToTop() {
    const scrollBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Cargar recursos QML
function loadQMLResources() {
    const container = document.getElementById('qml-resources');
    container.innerHTML = '<div class="loading">Cargando recursos QML...</div>';
    
    setTimeout(() => {
        displayQMLResources(qmlResources);
    }, 500);
}

function displayQMLResources(resources) {
    const container = document.getElementById('qml-resources');
    
    if (resources.length === 0) {
        container.innerHTML = '<p class="no-results">No se encontraron recursos.</p>';
        return;
    }

    const html = resources.map(resource => `
        <div class="resource-card" data-category="${resource.category}">
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <div class="resource-meta">
                <span class="resource-type">${resource.type}</span>
            </div>
            <a href="${resource.link}" class="resource-link" target="_blank">
                <i class="fas fa-external-link-alt"></i>
                Ver recurso
            </a>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

// Cargar libros desde el README
async function loadBooks() {
    try {
        const container = document.getElementById('books-container');
        container.innerHTML = '<div class="loading">Cargando biblioteca...</div>';
        
        // Simulamos la carga de datos del README
        // En una implementación real, aquí cargarías los datos del README parseado
        setTimeout(() => {
            allBooks = getBooksData();
            filteredBooks = [...allBooks];
            displayBooks(filteredBooks);
            updateBookCount();
        }, 1000);
        
    } catch (error) {
        console.error('Error loading books:', error);
        const container = document.getElementById('books-container');
        container.innerHTML = '<p class="error">Error al cargar los libros.</p>';
    }
}

// Datos de libros (esto se generaría automáticamente desde el README)
function getBooksData() {
    return [
        {
            year: 2025,
            title: "Quantum Nation: India's Leap into the Future",
            link: "https://amzn.to/3PkRN8N",
            category: "general"
        },
        {
            year: 2025,
            title: "Introduction to Quantum Computing: From a Layperson to a Programmer in 30 Steps",
            link: "https://www.amazon.com/Introduction-Quantum-Computing-Layperson-Programmer/dp/303136984X",
            category: "beginner"
        },
        {
            year: 2024,
            title: "A Gentle Introduction to Quantum Computing: Applied Concepts for Beginners",
            link: "https://www.amazon.com/Gentle-Introduction-Quantum-Computing-Beginners/dp/B0D31B9NMF",
            category: "beginner"
        },
        {
            year: 2024,
            title: "Quantum Computing for Programmers",
            link: "https://www.cambridge.org/core/books/quantum-computing-for-programmers/BA1C887BE4AC0D0D5653E71FFBEF61C6",
            category: "general"
        },
        {
            year: 2024,
            title: "Essential Mathematics for Quantum Computing: A beginner's guide to just the math you need without needless complexities",
            link: "https://amzn.to/4cWP0xb",
            category: "beginner"
        },
        {
            year: 2024,
            title: "A Practical Guide to Quantum Machine Learning and Quantum Optimization: Hands-on Approach to Modern Quantum Algorithms",
            link: "https://amzn.to/3U15njD",
            category: "business"
        },
        {
            year: 2024,
            title: "Quantum Chemistry and Computing for the Curious: Illustrated with Python and Qiskit® code",
            link: "https://amzn.to/3Jum020",
            category: "programming"
        },
        {
            year: 2024,
            title: "Learn Quantum Computing with Python and IBM Quantum Experience (2nd Edition)",
            link: "https://www.amazon.com/Learn-Quantum-Computing-Python-IBM-dp-1803244801/dp/1803244801",
            category: "programming"
        },
        {
            year: 2023,
            title: "Quantum Supremacy: How the Quantum Computer Revolution Will Change Everything",
            link: "https://mitpressbookstore.mit.edu/book/9780593744239",
            category: "general"
        },
        {
            year: 2023,
            title: "Quantum Computing Experimentation with Amazon Braket",
            link: "https://amzn.to/443O3yW",
            category: "general"
        },
        {
            year: 2023,
            title: "Quantum Information Science",
            link: "https://amzn.to/4bj1xcL",
            category: "general"
        },
        {
            year: 2023,
            title: "Quantum Information and Quantum Optics with Superconducting Circuits",
            link: "https://amzn.to/3TWPfj2",
            category: "general"
        },
        {
            year: 2023,
            title: "Law and Policy for the Quantum Age",
            link: "https://amzn.to/3xI1Krd",
            category: "general"
        },
        {
            year: 2023,
            title: "Quantum Networks: A Primer",
            link: "https://amzn.to/443r3Qu",
            category: "general"
        },
        {
            year: 2023,
            title: "Quantum Excellence: How Leading Companies Are Deploying the Transformational Technology",
            link: "https://amzn.to/4d0KL3A",
            category: "general"
        },
        {
            year: 2023,
            title: "Fundamentals of Quantum Computing: Theory and Practice",
            link: "https://amzn.to/49JQmby",
            category: "academic"
        },
        {
            year: 2022,
            title: "Dancing with Qubits, Second Edition",
            link: "https://amzn.to/4gWNv37",
            category: "general"
        },
        {
            year: 2022,
            title: "Quantum Computing in Action",
            link: "https://amzn.to/3JnOlqU",
            category: "general"
        },
        {
            year: 2022,
            title: "Quantum Computing and Information: A Scaffolding Approach",
            link: "https://amzn.to/3UmLYe8",
            category: "general"
        },
        {
            year: 2022,
            title: "Quantum Computing for the Quantum Curious",
            link: "https://amzn.to/3W5ByRx",
            category: "general"
        },
        {
            year: 2022,
            title: "Mathematics of Quantum Computing: An Introduction",
            link: "https://amzn.to/447oMUC",
            category: "beginner"
        },
        {
            year: 2022,
            title: "Quantum Design Sprint",
            link: "https://amzn.to/4aE1XKN",
            category: "general"
        },
        {
            year: 2022,
            title: "Quantum Boost: Using Quantum Computing to Supercharge Your Business",
            link: "https://amzn.to/3WntxaX",
            category: "business"
        },
        {
            year: 2021,
            title: "Understanding Quantum Technologies",
            link: "https://arxiv.org/abs/2111.15352v1",
            category: "general"
        },
        {
            year: 2021,
            title: "Programming Quantum Computers",
            link: "https://amzn.to/4aC5Pf6",
            category: "programming"
        },
        {
            year: 2021,
            title: "Learn Quantum Computing with Python and Q#: A hands-on approach",
            link: "https://amzn.to/3xEl5tw",
            category: "programming"
        },
        {
            year: 2021,
            title: "Quantum in Pictures: A New Way to Understand the Quantum World",
            link: "https://amzn.to/448LqvY",
            category: "general"
        },
        {
            year: 2021,
            title: "Q is for Quantum",
            link: "https://amzn.to/3vYLAJs",
            category: "general"
        },
        {
            year: 2021,
            title: "Picturing Quantum Processes: A First Course in Quantum Theory and Diagrammatic Reasoning",
            link: "https://amzn.to/3Uqiuwd",
            category: "academic"
        },
        {
            year: 2020,
            title: "Cryptography Apocalypse: Preparing For The Day When Quantum Computing Breaks Today’s Crypto",
            link: "http://zlibrary24tuxziyiyfr7zd46ytefdqbqd2axkmxm4o5374ptpc52fad.onion/book/10989920/667082",
            category: "general"
        },
        {
            year: 2020,
            title: "Quantum Image Processing",
            link: "https://b-ok.lat/book/5332993/d76695",
            category: "general"
        },
        {
            year: 2020,
            title: "Analysis and Design of Next-Generation Software Architectures: 5G, IoT, Blockchain, and Quantum Computing",
            link: "https://b-ok.lat/book/5450688/885029",
            category: "general"
        },
        {
            year: 2020,
            title: "Quantum Computing and Blockchain in Business: Exploring the applications, challenges, and collision of quantum computing and blockchain",
            link: "https://b-ok.lat/book/5534584/70a082",
            category: "business"
        },
        {
            year: 2020,
            title: "Quantum Computing and Blockchain in Business: Exploring the applications, challenges, and collision of quantum computing and blockchain",
            link: "https://b-ok.lat/book/5534585/2df85d",
            category: "business"
        },
        {
            year: 2019,
            title: "Practical Quantum Computing for Developers: Programming Quantum Rigs in the Cloud using Python, Quantum Assembly Language and IBM QExperience",
            link: "https://b-ok.lat/book/3642069/6ad6eb",
            category: "programming"
        },
        {
            year: 2019,
            title: "Computational Methods to Study the Structure and Dynamics of Biomolecules and Biomolecular Processes: From Bioinformatics to Molecular Quantum Mechanics",
            link: "https://b-ok.lat/book/3661934/9a4d88",
            category: "general"
        },
        {
            year: 2019,
            title: "Computational Quantum Mechanics",
            link: "https://b-ok.lat/book/3696901/db6633",
            category: "general"
        },
        {
            year: 2019,
            title: "The Simulation Hypothesis: An MIT Computer Scientist Shows Why Ai, Quantum Physics and Eastern Mystics All Agree We Are in a Video Game",
            link: "https://b-ok.lat/book/4999390/eb84ab",
            category: "academic"
        },
        {
            year: 2019,
            title: "A Primer on Quantum Computing",
            link: "https://b-ok.lat/book/5208127/e3f58a",
            category: "general"
        },
        {
            year: 2019,
            title: "Quantum computing for everyone",
            link: "https://b-ok.lat/book/5211589/ff686c",
            category: "beginner"
        },
        {
            year: 2019,
            title: "Quantum computing for everyone",
            link: "https://b-ok.lat/book/5211590/a7efe4",
            category: "beginner"
        },
        {
            year: 2019,
            title: "Post-Quantum Cryptography: 10th International Conference, PQCrypto 2019, Chongqing, China, May 8–10, 2019 Revised Selected Papers",
            link: "https://b-ok.lat/book/5216140/d3523b",
            category: "general"
        },
        {
            year: 2019,
            title: "Programming Quantum Computers: Essential Algorithms and Code Samples",
            link: "https://b-ok.lat/book/5219375/b9c708",
            category: "programming"
        },
        {
            year: 2019,
            title: "Towards a Scalable Quantum Computing Platform in the Ultrastrong Coupling Regime",
            link: "https://b-ok.lat/book/5244084/63a1b3",
            category: "general"
        },
        {
            year: 2019,
            title: "Topological Orders with Spins and Fermions: Quantum Phases and Computation",
            link: "https://b-ok.lat/book/5244529/228f58",
            category: "general"
        },
        {
            year: 2019,
            title: "Quantum Computing: An Applied Approach",
            link: "https://b-ok.lat/book/5275554/db3785",
            category: "general"
        },
        {
            year: 2019,
            title: "Programming Quantum Computers: Essential Algorithms and Code Samples",
            link: "https://b-ok.lat/book/5277292/b5055e",
            category: "programming"
        },
        {
            year: 2019,
            title: "Mathematics Of Quantum Computing: An Introduction",
            link: "https://b-ok.lat/book/5286453/3cc27d",
            category: "beginner"
        },
        {
            year: 2019,
            title: "Dancing with Qubits: How quantum computing works and how it can change the world",
            link: "https://b-ok.lat/book/5298425/ef1e4b",
            category: "general"
        },
        {
            year: 2019,
            title: "Electrons in Solids: Mesoscopics, Photonics, Quantum Computing, Correlations, Topology",
            link: "https://b-ok.lat/book/5339856/305f57",
            category: "general"
        },
        {
            year: 2019,
            title: "Quantum Inspired Meta-heuristics for Image Analysis",
            link: "https://b-ok.lat/book/5339956/28a6a4",
            category: "general"
        },
        {
            year: 2019,
            title: "Programming Quantum Computers: Essential Algorithms and Code Samples",
            link: "https://b-ok.lat/book/5394373/5f8f66",
            category: "programming"
        },
        {
            year: 2019,
            title: "The Simulation Hypothesis: An MIT Computer Scientist Shows Why AI, Quantum Physics and Eastern Mystics All Agree We Are in a Video Game (Kindle)",
            link: "https://b-ok.lat/book/5407840/de8640",
            category: "academic"
        },
        {
            year: 2019,
            title: "The Simulation Hypothesis: An MIT Computer Scientist Shows Why AI, Quantum Physics and Eastern Mystics All Agree We Are in a Video Game",
            link: "https://b-ok.lat/book/5415504/29622d",
            category: "academic"
        },
        {
            year: 2019,
            title: "The Simulation Hypothesis: An MIT Computer Scientist Shows Why AI, Quantum Physics, and Eastern Mystics All Agree We Are in a Video Game",
            link: "https://b-ok.lat/book/5415505/e7c6b2",
            category: "academic"
        },
        {
            year: 2019,
            title: "Mastering Quantum Computing with IBM QX: Explore the world of quantum computing using the Quantum Composer and Qiskit",
            link: "https://b-ok.lat/book/5428206/7074d4",
            category: "general"
        },
        {
            year: 2019,
            title: "Electrons in Solids: Mesoscopics, Photonics, Quantum Computing, Correlations, Topology (Graduate Texts in Condensed Matter)",
            link: "https://b-ok.lat/book/5523561/b6b6d5",
            category: "general"
        },
        {
            year: 2019,
            title: "AI &amp; Quantum Computing for Finance &amp; Insurance: Fortunes and Challenges for China and America: 1 (Singapore University Of Social Sciences - World Scientific Future Economy Series)",
            link: "https://b-ok.lat/book/5533494/abce98",
            category: "general"
        },
        {
            year: 2019,
            title: "Quantum Computing for Everyone",
            link: "https://b-ok.lat/book/5630906/3b0060",
            category: "beginner"
        },
        {
            year: 2018,
            title: "Quantum computational chemistry : modelling and calculation for functional materials",
            link: "https://b-ok.lat/book/3377252/3b2bcd",
            category: "general"
        },
        {
            year: 2018,
            title: "Quantum Computing:An Environment for Intelligent Large Scale Real Application",
            link: "https://b-ok.lat/book/3394848/43a2b1",
            category: "general"
        },
        {
            year: 2018,
            title: "Supervised Learning with Quantum Computers",
            link: "https://b-ok.lat/book/3587547/d5c8d0",
            category: "general"
        },
        {
            year: 2018,
            title: "A first Introduction to Quantum Computing and Information",
            link: "https://b-ok.lat/book/3597126/958209",
            category: "beginner"
        },
        {
            year: 2018,
            title: "Practical Quantum Computing for Developers. Programming Quantum Rigs in the Cloud using Python, Quantum  Assembly Language and IBM QExperience",
            link: "https://b-ok.lat/book/3644201/8d6411",
            category: "programming"
        },
        {
            year: 2018,
            title: "Quantum Computation and Logic. How Quantum Computers have inspired Logical Investigations",
            link: "https://b-ok.lat/book/3644380/785c15",
            category: "general"
        },
        {
            year: 2018,
            title: "The Second Quantum Revolution: From Entanglement to Quantum Computing and Other Super-Technologies",
            link: "https://b-ok.lat/book/3659525/682b07",
            category: "general"
        },
        {
            year: 2018,
            title: "Quantum Computation and Logic: How Quantum Computers Have Inspired Logical Investigations",
            link: "https://b-ok.lat/book/3660775/e9b969",
            category: "general"
        },
        {
            year: 2018,
            title: "A First Introduction to Quantum Computing and Information",
            link: "https://b-ok.lat/book/3661318/0b2a7d",
            category: "beginner"
        },
        {
            year: 2018,
            title: "Supervised Learning with Quantum Computers",
            link: "https://b-ok.lat/book/3662050/bf8f06",
            category: "general"
        },
        {
            year: 2018,
            title: "Computational Quantum Mechanics",
            link: "https://b-ok.lat/book/4980364/d5d401",
            category: "general"
        },
        {
            year: 2018,
            title: "A first introduction to quantum computing and information",
            link: "https://b-ok.lat/book/4985155/9af60e",
            category: "beginner"
        },
        {
            year: 2018,
            title: "Quantum Computation and Logic: How Quantum Computers Have Inspired Logical Investigations",
            link: "https://b-ok.lat/book/4986566/b4b1f9",
            category: "general"
        },
        {
            year: 2018,
            title: "The second quantum revolution. From entanglement to quantum computing and other super-technologies",
            link: "https://b-ok.lat/book/4986939/6cdd50",
            category: "general"
        },
        {
            year: 2018,
            title: "The theory of quantum information",
            link: "https://b-ok.lat/book/4986950/5ef931",
            category: "academic"
        },
        {
            year: 2018,
            title: "Quantum Computing verstehen: Grundlagen – Anwendungen – Perspektiven",
            link: "https://b-ok.lat/book/5401174/a5cfb2",
            category: "general"
        },
        {
            year: 2017,
            title: "Quantum Inspired Computational Intelligence. Research and Applications",
            link: "https://b-ok.lat/book/2800902/b89d9f",
            category: "general"
        },
        {
            year: 2017,
            title: "Control of Magnetotransport in Quantum Billiards: Theory, Computation and Applications",
            link: "https://b-ok.lat/book/2837601/7aa1fa",
            category: "academic"
        },
        {
            year: 2017,
            title: "Introduction to topological quantum matter &amp; quantum computation",
            link: "https://b-ok.lat/book/2872015/c89c79",
            category: "beginner"
        },
        {
            year: 2017,
            title: "The Realization of Star Trek Technologies: The Science, Not Fiction, Behind Brain Implants, Plasma Shields, Quantum Computing, and More",
            link: "https://b-ok.lat/book/2919165/31e071",
            category: "general"
        },
        {
            year: 2017,
            title: "Universal Quantum Computing: Supervening Decoherence - Surmounting Uncertainty",
            link: "https://b-ok.lat/book/2928969/3d214a",
            category: "general"
        },
        {
            year: 2017,
            title: "Twenty-First Century Quantum Mechanics: Hilbert Space to Quantum Computers: Mathematical Methods and Conceptual Foundations",
            link: "https://b-ok.lat/book/2948949/0c77a5",
            category: "academic"
        },
        {
            year: 2017,
            title: "Introduction to Topological Quantum Matter &amp; Quantum Computation",
            link: "https://b-ok.lat/book/3373758/83a5fb",
            category: "beginner"
        },
        {
            year: 2017,
            title: "Twenty-first century quantum mechanics : Hilbert Space to quantum computers : mathematical methods and conceptual foundations",
            link: "https://b-ok.lat/book/3374413/544487",
            category: "academic"
        },
        {
            year: 2017,
            title: "Computational physics : simulation of classical and quantum systems",
            link: "https://b-ok.lat/book/3376317/9987fb",
            category: "academic"
        },
        {
            year: 2017,
            title: "Computational Physics. Simulation of Classical and Quantum Systems   2nd ed.",
            link: "https://b-ok.lat/book/3383412/1f3271",
            category: "academic"
        },
        {
            year: 2017,
            title: "Adventures in Computer Science. From Classical Bits to Quantum Bits",
            link: "https://b-ok.lat/book/3399366/eacdb4",
            category: "general"
        },
        {
            year: 2017,
            title: "Quantum Triangulations : Moduli Space, Quantum Computing, Non-Linear Sigma Models and Ricci Flow",
            link: "https://b-ok.lat/book/3405156/063d3a",
            category: "general"
        },
        {
            year: 2017,
            title: "Adventures in Computer Science : From Classical Bits to Quantum Bits",
            link: "https://b-ok.lat/book/3420660/5b8b72",
            category: "general"
        },
        {
            year: 2017,
            title: "Quantum Computational Chemistry: Modelling and Calculation for Functional Materials",
            link: "https://b-ok.lat/book/3490936/d61ea0",
            category: "general"
        },
        {
            year: 2017,
            title: "Computational Physics: Simulation of Classical and Quantum Systems",
            link: "https://b-ok.lat/book/3491851/e5da8f",
            category: "academic"
        },
        {
            year: 2017,
            title: "Computational Strong-Field Quantum Dynamics: Intense Light-Matter Interactions",
            link: "https://b-ok.lat/book/3616334/cbeea2",
            category: "general"
        },
        {
            year: 2017,
            title: "Quantum information theory",
            link: "https://b-ok.lat/book/4986576/1b3aff",
            category: "academic"
        },
        {
            year: 2017,
            title: "Quantum information theory. Mathematical foundation",
            link: "https://b-ok.lat/book/4986673/7b4e41",
            category: "academic"
        },
        {
            year: 2017,
            title: "Computational Physics: Simulation of Classical and Quantum Systems",
            link: "https://b-ok.lat/book/5551222/5e52b8",
            category: "academic"
        },
        {
            year: 2017,
            title: "Computational Physics - Simulation of classical and quantum systems",
            link: "https://b-ok.lat/book/5589881/36f858",
            category: "academic"
        },
        {
            year: 2016,
            title: "Reversible Logic Synthesis Methodologies with Application to Quantum Computing",
            link: "https://b-ok.lat/book/2618148/73368b",
            category: "general"
        },
        {
            year: 2016,
            title: "Logic and Algebraic Structures in Quantum Computing",
            link: "https://b-ok.lat/book/2710652/a74c80",
            category: "general"
        },
        {
            year: 2016,
            title: "Quantum Wells, Wires and Dots: Theoretical and Computational Physics of Semiconductor Nanostructures",
            link: "https://b-ok.lat/book/2800199/9324d7",
            category: "academic"
        },
        {
            year: 2016,
            title: "Electron Spin Resonance (ESR) Based Quantum Computing",
            link: "https://b-ok.lat/book/2802287/38b319",
            category: "general"
        },
        {
            year: 2016,
            title: "Computational Chemistry: Introduction to the Theory and Applications of Molecular and Quantum Mechanics",
            link: "https://b-ok.lat/book/2802713/5dfcc7",
            category: "beginner"
        },
        {
            year: 2016,
            title: "Introduction to Topological Quantum Matter &amp; Quantum Computation",
            link: "https://b-ok.lat/book/2852884/f36586",
            category: "beginner"
        },
        {
            year: 2016,
            title: "Reversible Logic Synthesis Methodologies with Application to Quantum Computing",
            link: "https://b-ok.lat/book/2858959/4c3bf4",
            category: "general"
        },
        {
            year: 2016,
            title: "Logic and Algebraic Structures in Quantum Computing",
            link: "https://b-ok.lat/book/3371522/1a65ba",
            category: "general"
        },
        {
            year: 2016,
            title: "Foundations of Quantum Programming",
            link: "https://b-ok.lat/book/3609713/b01796",
            category: "programming"
        },
        {
            year: 2016,
            title: "Quantum zero-error information theory",
            link: "https://b-ok.lat/book/4986596/a40f87",
            category: "academic"
        },
        {
            year: 2016,
            title: "Basics of Thermal Field Theory: A Tutorial on Perturbative Computations",
            link: "https://b-ok.lat/book/5156944/34e3fc",
            category: "academic"
        },
        {
            year: 2016,
            title: "The Realization of Star Trek Technologies: The Science, Not Fiction, Behind Brain Implants, Plasma Shields, Quantum Computing, and More",
            link: "https://b-ok.lat/book/5421268/8efa7e",
            category: "general"
        },
        {
            year: 2016,
            title: "Electron Spin Resonance (ESR) Based Quantum Computing",
            link: "https://b-ok.lat/book/5670869/953ce7",
            category: "general"
        },
        {
            year: 2015,
            title: "Elements of Quantum Computing: History, Theories and Engineering Applications",
            link: "https://b-ok.lat/book/2465803/070eed",
            category: "general"
        },
        {
            year: 2015,
            title: "Computational Approaches to Protein Dynamics: From Quantum to Coarse-Grained Methods",
            link: "https://b-ok.lat/book/2488645/ebb5f2",
            category: "general"
        },
        {
            year: 2015,
            title: "Computational Approaches to Protein Dynamics: From Quantum to Coarse-Grained Methods",
            link: "https://b-ok.lat/book/2488896/48c7dc",
            category: "general"
        },
        {
            year: 2015,
            title: "Quantum Computation with Topological Codes: From Qubit to Topological Fault-Tolerance",
            link: "https://b-ok.lat/book/2645088/46b73f",
            category: "programming"
        },
        {
            year: 2015,
            title: "Quantum Computational Number Theory",
            link: "https://b-ok.lat/book/2648119/942c64",
            category: "academic"
        },
        {
            year: 2015,
            title: "Quantum computing: efficient prime factorization",
            link: "https://b-ok.lat/book/2838444/239b38",
            category: "general"
        },
        {
            year: 2015,
            title: "Quantum Computational Number Theory",
            link: "https://b-ok.lat/book/3372119/84a733",
            category: "academic"
        },
        {
            year: 2015,
            title: "Elements of quantum computing: History, theories and engineering applications",
            link: "https://b-ok.lat/book/4985659/cf3158",
            category: "general"
        },
        {
            year: 2015,
            title: "Quantum Computing verstehen: Grundlagen - Anwendungen - Perspektiven",
            link: "https://b-ok.lat/book/5151722/1528c3",
            category: "general"
        },
        {
            year: 2014,
            title: "Computational Methods to Study the Structure and Dynamics of Biomolecules and Biomolecular Processes: From Bioinformatics to Molecular Quantum Mechanics",
            link: "https://b-ok.lat/book/2202254/bfa9f9",
            category: "general"
        },
        {
            year: 2014,
            title: "Computing with Quantum Cats: From Colossus to Qubits",
            link: "https://b-ok.lat/book/2328937/76224a",
            category: "general"
        },
        {
            year: 2014,
            title: "Theory of Quantum Computation, Communication, and Cryptography: 6th Conference, TQC 2011, Madrid, Spain, May 24-26, 2011, Revised Selected Papers",
            link: "https://b-ok.lat/book/2332324/630e57",
            category: "academic"
        },
        {
            year: 2014,
            title: "Elements of Quantum Computing: History, Theories and Engineering Applications",
            link: "https://b-ok.lat/book/2457596/792f16",
            category: "general"
        },
        {
            year: 2014,
            title: "Quantum Machine Learning : What Quantum Computing Means to Data Mining",
            link: "https://b-ok.lat/book/2463283/c6b452",
            category: "general"
        },
        {
            year: 2014,
            title: "Post-Quantum Cryptography: 6th International Workshop, PQCrypto 2014, Waterloo, ON, Canada, October 1-3, 2014. Proceedings",
            link: "https://b-ok.lat/book/2466492/2d4f7d",
            category: "general"
        },
        {
            year: 2014,
            title: "Quantum Information and Computation for Chemistry",
            link: "https://b-ok.lat/book/2469231/716acd",
            category: "general"
        },
        {
            year: 2014,
            title: "Brain-Computer Interfacing for Assistive Robotics: Electroencephalograms, Recurrent Quantum Neural Networks, and User-Centric Graphical Interfaces",
            link: "https://b-ok.lat/book/2569382/cdab2a",
            category: "general"
        },
        {
            year: 2014,
            title: "Adiabatic Quantum Computation and Quantum Annealing: Theory and Practice",
            link: "https://b-ok.lat/book/2924559/d4385e",
            category: "academic"
        },
        {
            year: 2014,
            title: "Adiabatic Quantum Computation and Quantum Annealing",
            link: "https://b-ok.lat/book/2924779/11a0fc",
            category: "general"
        },
        {
            year: 2013,
            title: "Quantum Computing since Democritus",
            link: "https://b-ok.lat/book/2075679/e8a4e7",
            category: "general"
        },
        {
            year: 2013,
            title: "Quantum Computing since Democritus",
            link: "https://b-ok.lat/book/2083333/2a2781",
            category: "general"
        },
        {
            year: 2013,
            title: "Schrödinger's Killer App: Race to Build the World's First Quantum Computer",
            link: "https://b-ok.lat/book/2090741/1b33df",
            category: "general"
        },
        {
            year: 2013,
            title: "Theory of Quantum Computation, Communication, and Cryptography: 7th Conference, TQC 2012, Tokyo, Japan, May 17-19, 2012, Revised Selected Papers",
            link: "https://b-ok.lat/book/2120519/f421d6",
            category: "academic"
        },
        {
            year: 2013,
            title: "Computation, Logic, Games, and Quantum Foundations. The Many Facets of Samson Abramsky: Essays Dedicated to Samson Abramsky on the Occasion of His 60th Birthday",
            link: "https://b-ok.lat/book/2120975/c2f84b",
            category: "general"
        },
        {
            year: 2013,
            title: "Quantum Computing verstehen: Grundlagen - Anwendungen - Perspektiven",
            link: "https://b-ok.lat/book/2121082/5e7b0a",
            category: "general"
        },
        {
            year: 2013,
            title: "Computational Physics: Simulation of Classical and Quantum Systems",
            link: "https://b-ok.lat/book/2146673/07b383",
            category: "academic"
        },
        {
            year: 2013,
            title: "Computer Algebra in Quantum Field Theory: Integration, Summation and Special Functions",
            link: "https://b-ok.lat/book/2191656/c59ede",
            category: "academic"
        },
        {
            year: 2013,
            title: "Post-Quantum Cryptography: 5th International Workshop, PQCrypto 2013, Limoges, France, June 4-7, 2013. Proceedings",
            link: "https://b-ok.lat/book/2261485/3240af",
            category: "general"
        },
        {
            year: 2013,
            title: "Quantum Computing since Democritus",
            link: "https://b-ok.lat/book/2290983/e30843",
            category: "general"
        },
        {
            year: 2013,
            title: "Quantum Computing since Democritus",
            link: "https://b-ok.lat/book/2338730/67ea5d",
            category: "general"
        },
        {
            year: 2013,
            title: "Elements of quantum computation and quantum communication",
            link: "https://b-ok.lat/book/2572570/6aa835",
            category: "general"
        },
        {
            year: 2013,
            title: "Quantum computing since Democritus",
            link: "https://b-ok.lat/book/2639266/e8b749",
            category: "general"
        },
        {
            year: 2013,
            title: "Quantum computing since Democritus",
            link: "https://b-ok.lat/book/2639267/d9102d",
            category: "general"
        },
        {
            year: 2013,
            title: "Introduction to the theory of quantum information processing",
            link: "https://b-ok.lat/book/4986027/e5092e",
            category: "beginner"
        },
        {
            year: 2013,
            title: "Schroedinger's killer app. Race to build the world's first quantum computer",
            link: "https://b-ok.lat/book/4986683/6a68d9",
            category: "general"
        },
        {
            year: 2013,
            title: "Computational Physics: Simulation of Classical and Quantum Systems",
            link: "https://b-ok.lat/book/5551229/669b28",
            category: "academic"
        },
        {
            year: 2012,
            title: "Quantum Triangulations: Moduli Spaces, Strings, and Quantum Computing",
            link: "https://b-ok.lat/book/1257969/24e469",
            category: "general"
        },
        {
            year: 2012,
            title: "Quantum Triangulations: Moduli Spaces, Strings, and Quantum Computing",
            link: "https://b-ok.lat/book/1262116/a84a69",
            category: "general"
        },
        {
            year: 2012,
            title: "Quantum Triangulations: Moduli Spaces, Strings, and Quantum Computing",
            link: "https://b-ok.lat/book/1300569/50e965",
            category: "general"
        },
        {
            year: 2012,
            title: "Quantum Triangulations: Moduli Spaces, Strings, and Quantum Computing",
            link: "https://b-ok.lat/book/2053357/8d1d01",
            category: "general"
        },
        {
            year: 2012,
            title: "Mathematical Optics: Classical, Quantum, and Computational Methods",
            link: "https://b-ok.lat/book/2088964/a73214",
            category: "academic"
        },
        {
            year: 2012,
            title: "Quantum Information, Computation and Communication",
            link: "https://b-ok.lat/book/2192963/df860e",
            category: "general"
        },
        {
            year: 2012,
            title: "Quantum Information, Computation and Communication",
            link: "https://b-ok.lat/book/2322591/990edc",
            category: "general"
        },
        {
            year: 2012,
            title: "Quantum Computing from the Ground Up",
            link: "https://b-ok.lat/book/2470741/eec7ca",
            category: "general"
        },
        {
            year: 2012,
            title: "High-level Structures in Quantum Computing",
            link: "https://b-ok.lat/book/2607292/4c7e6a",
            category: "general"
        },
        {
            year: 2012,
            title: "The New Quantum Age: From Bell’s Theorem to Quantum Computation and Teleportation",
            link: "https://b-ok.lat/book/2936768/793278",
            category: "general"
        },
        {
            year: 2012,
            title: "Quantum Information and Quantum Computing",
            link: "https://b-ok.lat/book/3335585/1346be",
            category: "general"
        },
        {
            year: 2012,
            title: "Introduction To Topological Quantum Computation",
            link: "https://b-ok.lat/book/3369463/a0abd4",
            category: "beginner"
        },
        {
            year: 2012,
            title: "The New Quantum Age: From Bell's Theorem to Quantum Computation and Teleportation",
            link: "https://b-ok.lat/book/3375028/1f037e",
            category: "general"
        },
        {
            year: 2011,
            title: "Quantum Physics for Scientists and Technologists: Fundamental Principles and Applications for Biologists, Chemists, Computer Scientists, and Nanotechnologists",
            link: "https://b-ok.lat/book/783003/ea3ed2",
            category: "academic"
        },
        {
            year: 2011,
            title: "Theory of Quantum Computation, Communication and Cryptography: 5th Conference, TQC 2010, Leeds, UK, April 13-15, 2010, Revised Selected Papers (Lecture ... Computer Science and General Issues)",
            link: "https://b-ok.lat/book/836438/1febf9",
            category: "academic"
        },
        {
            year: 2011,
            title: "Computational Chemistry: Introduction to the Theory and Applications of Molecular and Quantum Mechanics",
            link: "https://b-ok.lat/book/936272/2e5343",
            category: "beginner"
        },
        {
            year: 2011,
            title: "Explorations in Quantum Computing",
            link: "https://b-ok.lat/book/984523/68825d",
            category: "general"
        },
        {
            year: 2011,
            title: "Interactive Quantum Mechanics: Quantum Experiments on the Computer",
            link: "https://b-ok.lat/book/1008353/19658b",
            category: "general"
        },
        {
            year: 2011,
            title: "Mathematical Foundations of Quantum Information and Computation and Its Applications to Nano- and Bio-systems",
            link: "https://b-ok.lat/book/1023235/ef2628",
            category: "academic"
        },
        {
            year: 2011,
            title: "Quantum Computing for Computer Architects (Synthesis Lectures on Computer Architecture)",
            link: "https://b-ok.lat/book/1049770/3ca706",
            category: "general"
        },
        {
            year: 2011,
            title: "Quantum Computation and Quantum Information: 10th Anniversary Edition",
            link: "https://b-ok.lat/book/1056790/448469",
            category: "general"
        },
        {
            year: 2011,
            title: "Mathematical Foundations of Quantum Information and Computation and Its Applications to Nano- and Bio-systems",
            link: "https://b-ok.lat/book/1067059/e9673f",
            category: "academic"
        },
        {
            year: 2011,
            title: "Theory of Quantum Computation, Communication, and Cryptography: 5th Conference, TQC 2010, Leeds, UK, April 13-15, 2010, Revised Selected Papers",
            link: "https://b-ok.lat/book/1186849/0b6b80",
            category: "academic"
        },
        {
            year: 2011,
            title: "Topics in Theoretical and Computational Nanoscience: From Controlling Light at the Nanoscale to Calculating Quantum Effects with Classical Electrodynamics",
            link: "https://b-ok.lat/book/1224546/bf3038",
            category: "general"
        },
        {
            year: 2011,
            title: "Post-Quantum Cryptography: 4th International Workshop, PQCrypto 2011, Taipei, Taiwan, November 29 – December 2, 2011. Proceedings",
            link: "https://b-ok.lat/book/1243339/1a6c8f",
            category: "general"
        },
        {
            year: 2011,
            title: "Quantum Computing: A Gentle Introduction",
            link: "https://b-ok.lat/book/1245323/392aa0",
            category: "beginner"
        },
        {
            year: 2011,
            title: "Quantum Computing: A Gentle Introduction (Scientific and Engineering Computation)",
            link: "https://b-ok.lat/book/1261864/bbf31e",
            category: "beginner"
        },
        {
            year: 2011,
            title: "Quantum Computation and Quantum Information: 10th Anniversary Edition",
            link: "https://b-ok.lat/book/1285150/2c6e0a",
            category: "general"
        },
        {
            year: 2011,
            title: "Quantum Computation and Quantum Information: 10th Anniversary Edition",
            link: "https://b-ok.lat/book/1299172/d308dd",
            category: "general"
        },
        {
            year: 2011,
            title: "Quantum Computing: A Gentle Introduction",
            link: "https://b-ok.lat/book/1299173/ce3c6d",
            category: "beginner"
        },
        {
            year: 2011,
            title: "Theory of Quantum Computation, Communication, and Cryptography: 5th Conference, TQC 2010, Leeds, UK, April 13-15, 2010, Revised Selected Papers",
            link: "https://b-ok.lat/book/2071826/8b1129",
            category: "academic"
        },
        {
            year: 2011,
            title: "Topics in Theoretical and Computational Nanoscience: From Controlling Light at the Nanoscale to Calculating Quantum Effects with Classical Electrodynamics",
            link: "https://b-ok.lat/book/2104226/9bf00b",
            category: "general"
        },
        {
            year: 2011,
            title: "Cross Disciplinary Advances in Quantum Computing",
            link: "https://b-ok.lat/book/2382602/9c227e",
            category: "general"
        },
        {
            year: 2011,
            title: "Explorations in quantum computing",
            link: "https://b-ok.lat/book/2625196/c4e2c1",
            category: "general"
        },
        {
            year: 2011,
            title: "YinYang Bipolar Relativity: A Unifying Theory of Nature, Agents and Causality with Applications in Quantum Computing, Cognitive Informatics and Life Sciences",
            link: "https://b-ok.lat/book/2725727/02531d",
            category: "academic"
        },
        {
            year: 2011,
            title: "A short course in quantum information theory: an approach from theoretical physics",
            link: "https://b-ok.lat/book/4985178/d04263",
            category: "academic"
        },
        {
            year: 2011,
            title: "Coming of age with quantum information: Notes on a Paulian idea",
            link: "https://b-ok.lat/book/4985450/65939e",
            category: "general"
        },
        {
            year: 2011,
            title: "Modern perspectives in lattice QCD : quantum field theory and high performance computing",
            link: "https://b-ok.lat/book/4999532/bb4068",
            category: "academic"
        },
        {
            year: 2010,
            title: "Computational Physics: Simulation of Classical and Quantum Systems",
            link: "https://b-ok.lat/book/762653/c3c3eb",
            category: "academic"
        },
        {
            year: 2010,
            title: "Quantum Information, Computation and Cryptography: An Introductory Survey of Theory, Technology and Experiments",
            link: "https://b-ok.lat/book/913399/b6ef43",
            category: "academic"
        },
        {
            year: 2010,
            title: "Post-Quantum Cryptography: Third International Workshop, PQCrypto 2010, Darmstadt, Germany, May 25-28, 2010. Proceedings",
            link: "https://b-ok.lat/book/941874/0f2819",
            category: "general"
        },
        {
            year: 2010,
            title: "Quantum Quenching, Annealing and Computation",
            link: "https://b-ok.lat/book/947210/8a6b8f",
            category: "general"
        },
        {
            year: 2010,
            title: "Exact Methods in Low-dimensional Statistical Physics and Quantum Computing",
            link: "https://b-ok.lat/book/1022258/cfa176",
            category: "academic"
        },
        {
            year: 2010,
            title: "Computational Physics: Simulation of Classical and Quantum Systems",
            link: "https://b-ok.lat/book/1023678/abb94e",
            category: "academic"
        },
        {
            year: 2010,
            title: "Accurate Condensed-Phase Quantum Chemistry (Computation in Chemistry)",
            link: "https://b-ok.lat/book/1057094/1b7b7b",
            category: "general"
        },
        {
            year: 2010,
            title: "Topological Quantum Computation (Cbms Regional Conference Series in Mathematics)",
            link: "https://b-ok.lat/book/1247955/0cc8fb",
            category: "general"
        },
        {
            year: 2010,
            title: "Topological quantum computation",
            link: "https://b-ok.lat/book/1248472/060325",
            category: "general"
        },
        {
            year: 2010,
            title: "Topological quantum computation",
            link: "https://b-ok.lat/book/1250378/4cc1fd",
            category: "general"
        },
        {
            year: 2010,
            title: "Broadband Quantum Cryptography (Synthesis Lectures on Quantum Computing)",
            link: "https://b-ok.lat/book/1269753/09f07e",
            category: "general"
        },
        {
            year: 2010,
            title: "Exact Methods in Low-dimensional Statistical Physics and Quantum Computing: Lecture Notes of the Les Houches Summer School: Volume 89, July 2008",
            link: "https://b-ok.lat/book/1270374/a3a77b",
            category: "academic"
        },
        {
            year: 2010,
            title: "The Complexity of Noise: A Philosophical Outlook on Quantum Error Correction (Synthesis Lectures on Quantum Computing)",
            link: "https://b-ok.lat/book/1270841/372f10",
            category: "general"
        },
        {
            year: 2010,
            title: "Topological quantum computation",
            link: "https://b-ok.lat/book/1314305/272d57",
            category: "general"
        },
        {
            year: 2010,
            title: "Quantum Computation and Quantum Information",
            link: "https://b-ok.lat/book/2043691/47b66e",
            category: "general"
        },
        {
            year: 2010,
            title: "Quantum computation and quantum information",
            link: "https://b-ok.lat/book/2053341/5bd894",
            category: "general"
        },
        {
            year: 2010,
            title: "Natural Computing: DNA, Quantum Bits, and the Future of Smart Machines",
            link: "https://b-ok.lat/book/2064066/07dded",
            category: "general"
        },
        {
            year: 2010,
            title: "Post-Quantum Cryptography: Third International Workshop, PQCrypto 2010, Darmstadt, Germany, May 25-28, 2010. Proceedings",
            link: "https://b-ok.lat/book/2071474/e3a416",
            category: "general"
        },
        {
            year: 2010,
            title: "Reversible Computing: Fundamentals, Quantum Computing, and Applications",
            link: "https://b-ok.lat/book/2072819/6edf59",
            category: "general"
        },
        {
            year: 2010,
            title: "Quantum Neural Computation",
            link: "https://b-ok.lat/book/2097193/f69973",
            category: "general"
        },
        {
            year: 2010,
            title: "Reversible Computing: Fundamentals, Quantum Computing, and Applications",
            link: "https://b-ok.lat/book/2351308/d6d46d",
            category: "general"
        },
        {
            year: 2010,
            title: "Computational Electronics: Semiclassical and Quantum Device Modeling and Simulation",
            link: "https://b-ok.lat/book/2491023/356dc8",
            category: "general"
        },
        {
            year: 2010,
            title: "Quantum Neural Computation",
            link: "https://b-ok.lat/book/2860265/0df1b7",
            category: "general"
        },
        {
            year: 2010,
            title: "Quantum Neural Computation",
            link: "https://b-ok.lat/book/3374567/ae3b02",
            category: "general"
        },
        {
            year: 2009,
            title: "Experimental aspects of quantum computing",
            link: "https://b-ok.lat/book/437926/4daa95",
            category: "general"
        },
        {
            year: 2009,
            title: "Classical and Quantum Information Theory: An Introduction for the Telecom Scientist",
            link: "https://b-ok.lat/book/573547/ef23c9",
            category: "beginner"
        },
        {
            year: 2009,
            title: "Molecular realizations of quantum computing 2007",
            link: "https://b-ok.lat/book/688166/8f95bf",
            category: "general"
        },
        {
            year: 2009,
            title: "Nonequilibrium Quantum Transport Physics in Nanosystems: Foundation of Computational Nonequilibrium Physics in Nanoscience and Nanotechnology",
            link: "https://b-ok.lat/book/763838/12f674",
            category: "academic"
        },
        {
            year: 2009,
            title: "Semantic Techniques in Quantum Computation",
            link: "https://b-ok.lat/book/862341/52cc1a",
            category: "general"
        },
        {
            year: 2009,
            title: "Advances in the Theory of Atomic and Molecular Systems: Conceptual and Computational Advances in Quantum Chemistry",
            link: "https://b-ok.lat/book/869664/b61d20",
            category: "academic"
        },
        {
            year: 2009,
            title: "Information, Physics, and Computation",
            link: "https://b-ok.lat/book/899073/e22af3",
            category: "academic"
        },
        {
            year: 2009,
            title: "Theory of Quantum Computation, Communication, and Cryptography: 4th Workshop,TQC 2009, Waterloo, Canada, May 11-13, 2009, Revised Selected Papers",
            link: "https://b-ok.lat/book/1266193/b7e464",
            category: "academic"
        },
        {
            year: 2009,
            title: "Nonequilibrium Quantum Transport Physics In Nanosystems: Foundation Of Computational Nonequilibrium Physics In Nanoscience And Nanotechnology",
            link: "https://b-ok.lat/book/1301922/34d488",
            category: "academic"
        },
        {
            year: 2009,
            title: "Theory of Quantum Computation, Communication, and Cryptography: 4th Workshop,TQC 2009, Waterloo, Canada, May 11-13, 2009, Revised Selected Papers",
            link: "https://b-ok.lat/book/2071825/02927f",
            category: "academic"
        },
        {
            year: 2009,
            title: "Advances in Quantum Computation: Representation Theory, Quantum Field Theory, Category Theory, Mathematical Physics, September 20-23, 2007, University of Texas at Tyler",
            link: "https://b-ok.lat/book/2382556/23ffd0",
            category: "academic"
        },
        {
            year: 2009,
            title: "The Third International Conference on Quantum, Nano and Micro Technologies : ICQNM 2009 : proceedings : 1-7 February 2009, Cancun, Mexico",
            link: "https://b-ok.lat/book/2473838/3d3b05",
            category: "general"
        },
        {
            year: 2009,
            title: "Quantum Computation aus algorithmischer Sicht",
            link: "https://b-ok.lat/book/2836017/70c01c",
            category: "general"
        },
        {
            year: 2009,
            title: "Dynamics, information and complexity in quantum systems",
            link: "https://b-ok.lat/book/4985628/72120b",
            category: "general"
        },
        {
            year: 2009,
            title: "Molecular realizations of quantum computing  2007",
            link: "https://b-ok.lat/book/4986305/99ab96",
            category: "general"
        },
        {
            year: 2008,
            title: "Mathematics of quantum computation and quantum technology",
            link: "https://b-ok.lat/book/437923/96c1ae",
            category: "general"
        },
        {
            year: 2008,
            title: "Quantum Computing Explained",
            link: "https://b-ok.lat/book/437935/11c00a",
            category: "general"
        },
        {
            year: 2008,
            title: "Parallel Computing in Quantum Chemistry",
            link: "https://b-ok.lat/book/504782/830205",
            category: "general"
        },
        {
            year: 2008,
            title: "Quantum Computing. From Linear Algebra to Physical Realizations",
            link: "https://b-ok.lat/book/510518/be1867",
            category: "general"
        },
        {
            year: 2008,
            title: "Quantum stochastics and information: statistics, filtering, and control: University of Nottingham, UK, 15-22 July 2006",
            link: "https://b-ok.lat/book/571502/a66431",
            category: "general"
        },
        {
            year: 2008,
            title: "Quantum Walks for Computer Scientists",
            link: "https://b-ok.lat/book/573054/f498a5",
            category: "general"
        },
        {
            year: 2008,
            title: "Quantum Computer Science",
            link: "https://b-ok.lat/book/573230/63fc4c",
            category: "general"
        },
        {
            year: 2008,
            title: "Theory of Quantum Computation, Communication, and Cryptography: Third Workshop, TQC 2008 Tokyo, Japan, January 30 - February 1, 2008. Revised Selected Papers",
            link: "https://b-ok.lat/book/613772/be1b7f",
            category: "academic"
        },
        {
            year: 2008,
            title: "Mathematics of Quantum Computation and Quantum Technology",
            link: "https://b-ok.lat/book/615530/520133",
            category: "general"
        },
        {
            year: 2008,
            title: "Quantum Computing without Magic: Devices",
            link: "https://b-ok.lat/book/632927/e78870",
            category: "general"
        },
        {
            year: 2008,
            title: "Hardware-based Computer Security Techniques to Defeat Hackers: From Biometrics to Quantum Cryptography",
            link: "https://b-ok.lat/book/633295/b4f5d1",
            category: "general"
        },
        {
            year: 2008,
            title: "Morgan Claypool Quantum Computer Science",
            link: "https://b-ok.lat/book/636182/098229",
            category: "general"
        },
        {
            year: 2008,
            title: "Hardware-based Computer Security Techniques to Defeat Hackers: From Biometrics to Quantum Cryptography",
            link: "https://b-ok.lat/book/637512/d0e5ad",
            category: "general"
        },
        {
            year: 2008,
            title: "Quantum Computing Explained",
            link: "https://b-ok.lat/book/684202/6b8f33",
            category: "general"
        },
        {
            year: 2008,
            title: "Parallel Computing in Quantum Chemistry",
            link: "https://b-ok.lat/book/696895/7e414f",
            category: "general"
        },
        {
            year: 2008,
            title: "Post-Quantum Cryptography",
            link: "https://b-ok.lat/book/698476/7fe9fb",
            category: "general"
        },
        {
            year: 2008,
            title: "Mathematical Aspects of Quantum Computing 2007",
            link: "https://b-ok.lat/book/763675/9e774e",
            category: "academic"
        },
        {
            year: 2008,
            title: "Mathematical Aspects Of Quantum Computing 2007",
            link: "https://b-ok.lat/book/807576/6911f2",
            category: "academic"
        },
        {
            year: 2008,
            title: "Quantum Computing without Magic: Devices",
            link: "https://b-ok.lat/book/807578/82f403",
            category: "general"
        },
        {
            year: 2008,
            title: "Parallel Computing in Quantum Chemistry",
            link: "https://b-ok.lat/book/810531/22304f",
            category: "general"
        },
        {
            year: 2008,
            title: "Quantum Computing without Magic: Devices (Scientific and Engineering Computation)",
            link: "https://b-ok.lat/book/871427/54bf4b",
            category: "general"
        },
        {
            year: 2008,
            title: "Mathematical Aspects of Quantum Computing 2007",
            link: "https://b-ok.lat/book/1230101/fc980d",
            category: "academic"
        },
        {
            year: 2008,
            title: "Computational Quantum Physics",
            link: "https://b-ok.lat/book/2044856/e49a92",
            category: "academic"
        },
        {
            year: 2008,
            title: "Topological quantum computation",
            link: "https://b-ok.lat/book/2059621/197de4",
            category: "general"
        },
        {
            year: 2008,
            title: "Quantum Computing for Computer Scientists",
            link: "https://b-ok.lat/book/2192783/85d754",
            category: "general"
        },
        {
            year: 2008,
            title: "Post-Quantum Cryptography: Second International Workshop, PQCrypto 2008 Cincinnati, OH, USA, October 17-19, 2008 Proceedings",
            link: "https://b-ok.lat/book/2303046/6622e4",
            category: "general"
        },
        {
            year: 2008,
            title: "Theory of Quantum Computation, Communication, and Cryptography: Third Workshop, TQC 2008 Tokyo, Japan, January 30 - February 1, 2008. Revised Selected Papers",
            link: "https://b-ok.lat/book/2303066/06f8e6",
            category: "academic"
        },
        {
            year: 2008,
            title: "Quantum Computing for Computer Scientists",
            link: "https://b-ok.lat/book/2323382/f44e34",
            category: "general"
        },
        {
            year: 2008,
            title: "Quantum Error Correction and Fault Tolerant Quantum Computing",
            link: "https://b-ok.lat/book/2383729/310ef5",
            category: "general"
        },
        {
            year: 2008,
            title: "Mathematics of quantum computation and quantum technology",
            link: "https://b-ok.lat/book/2420886/9f029e",
            category: "general"
        },
        {
            year: 2008,
            title: "Mathematical Aspects Of Quantum Computing 2007",
            link: "https://b-ok.lat/book/2421377/1efd4f",
            category: "academic"
        },
        {
            year: 2008,
            title: "Mathematical Aspects Of Quantum Computing 2007 (Kinki University Series on Quantum Computing)",
            link: "https://b-ok.lat/book/2441267/275a4e",
            category: "academic"
        },
        {
            year: 2008,
            title: "Quantum computing: From linear algebra to physical realizations",
            link: "https://b-ok.lat/book/2625195/6f546b",
            category: "general"
        },
        {
            year: 2008,
            title: "Parallel Computing in Quantum Chemistry",
            link: "https://b-ok.lat/book/3581167/6e523d",
            category: "general"
        },
        {
            year: 2008,
            title: "Mathematical aspects of quantum computing 2007",
            link: "https://b-ok.lat/book/4986180/cf10db",
            category: "academic"
        },
        {
            year: 2007,
            title: "Quantum computation",
            link: "https://b-ok.lat/book/437913/4ec9d8",
            category: "general"
        },
        {
            year: 2007,
            title: "An introduction to quantum computing",
            link: "https://b-ok.lat/book/437929/1d9da2",
            category: "beginner"
        },
        {
            year: 2007,
            title: "Quantum Computer Science: An Introduction",
            link: "https://b-ok.lat/book/437936/9dd67f",
            category: "beginner"
        },
        {
            year: 2007,
            title: "Quantum Monte-Carlo: origins, development, applications",
            link: "https://b-ok.lat/book/445344/9bff50",
            category: "general"
        },
        {
            year: 2007,
            title: "Introduction to Quantum Computing",
            link: "https://b-ok.lat/book/489077/0dd176",
            category: "beginner"
        },
        {
            year: 2007,
            title: "Computational Quantum Mechanics for Materials Engineers: The EMTO Method and Applications",
            link: "https://b-ok.lat/book/562622/2b3c00",
            category: "general"
        },
        {
            year: 2007,
            title: "Computational quantum mechanics for materials engineers: the EMTO method and applications",
            link: "https://b-ok.lat/book/609747/6d8cc5",
            category: "general"
        },
        {
            year: 2007,
            title: "An Introduction to Quantum Computing",
            link: "https://b-ok.lat/book/635796/febd0f",
            category: "beginner"
        },
        {
            year: 2007,
            title: "An Introduction to Quantum Computing",
            link: "https://b-ok.lat/book/636608/ea5355",
            category: "beginner"
        },
        {
            year: 2007,
            title: "Vitos - Computational quantum mechanics for materials engineers",
            link: "https://b-ok.lat/book/637444/91791c",
            category: "general"
        },
        {
            year: 2007,
            title: "Quantum Computer Science: An Introduction",
            link: "https://b-ok.lat/book/669195/6fe72a",
            category: "beginner"
        },
        {
            year: 2007,
            title: "An Introduction to Quantum Computing",
            link: "https://b-ok.lat/book/762410/6f568d",
            category: "beginner"
        },
        {
            year: 2007,
            title: "Physics and Theoretical Computer Science: From Numbers and Languages to (Quantum) Cryptography",
            link: "https://b-ok.lat/book/763989/6384fa",
            category: "academic"
        },
        {
            year: 2007,
            title: "Principles of Quantum Computation and Information: Basic Tools and Special Topics",
            link: "https://b-ok.lat/book/764026/a60036",
            category: "general"
        },
        {
            year: 2007,
            title: "An Introduction to Quantum Computing",
            link: "https://b-ok.lat/book/768481/aa93b6",
            category: "beginner"
        },
        {
            year: 2007,
            title: "Programming the Universe: A Quantum Computer Scientist Takes on the Cosmos",
            link: "https://b-ok.lat/book/823452/55c45b",
            category: "programming"
        },
        {
            year: 2007,
            title: "Quantum Computer Science: An Introduction",
            link: "https://b-ok.lat/book/852616/9462d6",
            category: "beginner"
        },
        {
            year: 2007,
            title: "Physics and Theoretical Computer Science:  From Numbers and Languages to (Quantum) Cryptography - Volume 7 NATO Security through Science Series: Information ... - Information and Communication Security)",
            link: "https://b-ok.lat/book/961299/f9956c",
            category: "academic"
        },
        {
            year: 2007,
            title: "Mathematics of Quantum Computation and Quantum Technology (Applied Mathematics and Nonlinear Science)",
            link: "https://b-ok.lat/book/970551/d8f4ba",
            category: "general"
        },
        {
            year: 2007,
            title: "Mathematics of quantum computation and quantum technology",
            link: "https://b-ok.lat/book/1225216/f4fead",
            category: "general"
        },
        {
            year: 2007,
            title: "Quantum Computing Devices: Principles, Designs, and Analysis",
            link: "https://b-ok.lat/book/1225752/9ca089",
            category: "general"
        },
        {
            year: 2007,
            title: "Mathematics of Quantum Computation and Quantum Technology",
            link: "https://b-ok.lat/book/1299169/bc51e6",
            category: "general"
        },
        {
            year: 2007,
            title: "An introduction to quantum computing",
            link: "https://b-ok.lat/book/2048525/e4883a",
            category: "beginner"
        },
        {
            year: 2007,
            title: "Automatic Quantum Computer Programming",
            link: "https://b-ok.lat/book/2056422/0157aa",
            category: "programming"
        },
        {
            year: 2007,
            title: "Relativistic Quantum Theory of Atoms and Molecules: Theory and Computation",
            link: "https://b-ok.lat/book/2103986/59c9c3",
            category: "academic"
        },
        {
            year: 2007,
            title: "Automatic Quantum Computer Programming: A Genetic Programming Approach",
            link: "https://b-ok.lat/book/2194635/d76379",
            category: "programming"
        },
        {
            year: 2007,
            title: "Principles of quantum computation and information. Vol. 2: Basic tools and special topics",
            link: "https://b-ok.lat/book/2625685/6135cd",
            category: "general"
        },
        {
            year: 2007,
            title: "Lectures on quantum information",
            link: "https://b-ok.lat/book/4986090/062757",
            category: "general"
        },
        {
            year: 2007,
            title: "Quantum computing devices: principles, designs, and analysis",
            link: "https://b-ok.lat/book/4986567/4b4364",
            category: "general"
        },
        {
            year: 2006,
            title: "Quantum computation and quantum communication: theory and experiments",
            link: "https://b-ok.lat/book/437938/91eb5c",
            category: "academic"
        },
        {
            year: 2006,
            title: "Quantum computation and information: From theory to experiment",
            link: "https://b-ok.lat/book/453500/2fd487",
            category: "academic"
        },
        {
            year: 2006,
            title: "A short introduction to quantum information and computation",
            link: "https://b-ok.lat/book/453523/2c70a7",
            category: "beginner"
        },
        {
            year: 2006,
            title: "A short introduction to quantum information and quantum computation: solutions of exercises",
            link: "https://b-ok.lat/book/453524/4d2efe",
            category: "beginner"
        },
        {
            year: 2006,
            title: "Quantum computing in solid state systems",
            link: "https://b-ok.lat/book/454152/a889de",
            category: "general"
        },
        {
            year: 2006,
            title: "A Short Introduction to Quantum Information and Quantum Computation",
            link: "https://b-ok.lat/book/489401/85322d",
            category: "beginner"
        },
        {
            year: 2006,
            title: "Automatic Quantum Computer Programming: A Genetic Programming Approach",
            link: "https://b-ok.lat/book/491394/968396",
            category: "programming"
        },
        {
            year: 2006,
            title: "Protecting Information: From Classical Error Correction to Quantum Cryptography",
            link: "https://b-ok.lat/book/503000/8dce07",
            category: "general"
        },
        {
            year: 2006,
            title: "Entangled world: the fascination of quantum information and computation",
            link: "https://b-ok.lat/book/503127/cb2300",
            category: "general"
        },
        {
            year: 2006,
            title: "Quantum information and computing",
            link: "https://b-ok.lat/book/537940/bd81db",
            category: "general"
        },
        {
            year: 2006,
            title: "Quantum information and computing",
            link: "https://b-ok.lat/book/537941/48bb94",
            category: "general"
        },
        {
            year: 2006,
            title: "Quantum information and computing",
            link: "https://b-ok.lat/book/574392/a49b6b",
            category: "general"
        },
        {
            year: 2006,
            title: "Quantum Computation and Quantum Communication: Theory and Experiments",
            link: "https://b-ok.lat/book/593967/f773f3",
            category: "academic"
        },
        {
            year: 2006,
            title: "Elements of Statistical Mechanics - With an Introduction to Quantum Field Theory and Numerical Simulation",
            link: "https://b-ok.lat/book/636793/5c1f27",
            category: "beginner"
        },
        {
            year: 2006,
            title: "Quantum Computing Devices: Principles, Designs, and Analysis",
            link: "https://b-ok.lat/book/692353/d5d830",
            category: "general"
        },
        {
            year: 2006,
            title: "Differential Equations and Quantum Groups: Andrey A. Bolibrukh Memorial Volume",
            link: "https://b-ok.lat/book/764683/24476a",
            category: "general"
        },
        {
            year: 2006,
            title: "Entangled World: The Fascination of Quantum Information and Computation",
            link: "https://b-ok.lat/book/824205/63ed87",
            category: "general"
        },
        {
            year: 2006,
            title: "Quantum Information And Computing (Quantum Probability and White Noise Analysis)",
            link: "https://b-ok.lat/book/897083/5e91b7",
            category: "general"
        },
        {
            year: 2006,
            title: "Physical Realizations of Quantum Computing: Are the Divincenzo Criteria Fulfilled in 2004?, Osaka, Japan, 7-8 May 2004",
            link: "https://b-ok.lat/book/910220/55e85b",
            category: "general"
        },
        {
            year: 2006,
            title: "Quantum Computing Devices: Principles, Designs, and Analysis (Chapman &amp; Hall Crc Applied Mathematics and Nonlinear Science Series)",
            link: "https://b-ok.lat/book/925902/2686ae",
            category: "general"
        },
        {
            year: 2006,
            title: "A Short Introduction to Quantum Information and Quantum Computation",
            link: "https://b-ok.lat/book/959582/012826",
            category: "beginner"
        },
        {
            year: 2006,
            title: "Automatic Quantum Computer Programming: A Genetic Programming Approach (Genetic Programming)",
            link: "https://b-ok.lat/book/969418/645082",
            category: "programming"
        },
        {
            year: 2006,
            title: "Quantum Information: An Overview",
            link: "https://b-ok.lat/book/1054062/3c1894",
            category: "general"
        },
        {
            year: 2006,
            title: "Quantum Computation and Information: From Theory to Experiment",
            link: "https://b-ok.lat/book/1061756/51f1f3",
            category: "academic"
        },
        {
            year: 2006,
            title: "Quantum Cryptography and Secret-Key Distillation",
            link: "https://b-ok.lat/book/1269609/f46633",
            category: "general"
        },
        {
            year: 2006,
            title: "Entangled world : the fascination of quantum information and computation",
            link: "https://b-ok.lat/book/2058843/6086c2",
            category: "general"
        },
        {
            year: 2006,
            title: "Quantum Computation and Quantum Communication: Theory and Experiments",
            link: "https://b-ok.lat/book/2095845/ffcbb2",
            category: "academic"
        },
        {
            year: 2006,
            title: "Quantum Computing in Solid State Systems",
            link: "https://b-ok.lat/book/2102466/cd8dac",
            category: "general"
        },
        {
            year: 2006,
            title: "A short introduction to quantum information and quantum computation",
            link: "https://b-ok.lat/book/2625194/7a66fe",
            category: "beginner"
        },
        {
            year: 2006,
            title: "Programming the Universe: A Quantum Computer Scientist Takes on the Cosmos",
            link: "https://b-ok.lat/book/3703710/760b26",
            category: "programming"
        },
        {
            year: 2006,
            title: "Quantum computation and information: from theory to experiment",
            link: "https://b-ok.lat/book/4986565/d2a7db",
            category: "academic"
        },
        {
            year: 2005,
            title: "Quantum-Statistical Models of Hot Dense Matter: Methods for Computation Opacity and Equation of State",
            link: "https://b-ok.lat/book/454601/f02ab9",
            category: "general"
        },
        {
            year: 2005,
            title: "Quantum Computing and Communications: An Engineering Approach",
            link: "https://b-ok.lat/book/488832/c41ea7",
            category: "general"
        },
        {
            year: 2005,
            title: "Quantum Wells, Wires and Dots: Theoretical and Computational Physics",
            link: "https://b-ok.lat/book/495602/71c090",
            category: "academic"
        },
        {
            year: 2005,
            title: "Handbook of Computational Quantum Chemistry",
            link: "https://b-ok.lat/book/563818/30b0d1",
            category: "general"
        },
        {
            year: 2005,
            title: "Quantum computation and quantum communication: Theory and experiments",
            link: "https://b-ok.lat/book/571607/624ecf",
            category: "academic"
        },
        {
            year: 2005,
            title: "Quantum wells, wires, and dots: theoretical and computational physics of semiconductor nanostructures",
            link: "https://b-ok.lat/book/594764/24d2a0",
            category: "academic"
        },
        {
            year: 2005,
            title: "Quantum Computation and Quantum Communication:: Theory and Experiments",
            link: "https://b-ok.lat/book/645506/dd9e77",
            category: "academic"
        },
        {
            year: 2005,
            title: "Quantum Computing in Solid State Systems",
            link: "https://b-ok.lat/book/655104/e6d5ec",
            category: "general"
        },
        {
            year: 2005,
            title: "Quantum Wells, Wires and Dots: Theoretical and Computational Physics of Semiconductor Nanostructures",
            link: "https://b-ok.lat/book/667541/85adbf",
            category: "academic"
        },
        {
            year: 2005,
            title: "Experimental aspects of quantum computing",
            link: "https://b-ok.lat/book/746464/384205",
            category: "general"
        },
        {
            year: 2005,
            title: "Quantum Computing and Communications: An Engineering Approach",
            link: "https://b-ok.lat/book/857774/e3c5c5",
            category: "general"
        },
        {
            year: 2005,
            title: "Experimental Aspects of Quantum Computing",
            link: "https://b-ok.lat/book/923746/cc07dd",
            category: "general"
        },
        {
            year: 2005,
            title: "Quantum Computing and Communications: An Engineering Approach",
            link: "https://b-ok.lat/book/963362/40f37b",
            category: "general"
        },
        {
            year: 2005,
            title: "Quantum Wells, Wires and Dots: Theoretical and Computational Physics, Second Edition",
            link: "https://b-ok.lat/book/1061640/0df728",
            category: "academic"
        },
        {
            year: 2005,
            title: "Quantum-Statistical Models of Hot Dense Matter: Methods for Computation Opacity and Equation of State (Progress in Mathematical Physics)",
            link: "https://b-ok.lat/book/1073804/780d41",
            category: "academic"
        },
        {
            year: 2005,
            title: "Introduction to quantum computing",
            link: "https://b-ok.lat/book/1299171/be68a8",
            category: "beginner"
        },
        {
            year: 2005,
            title: "Quantum Computation - A Computer Science Perspective",
            link: "https://b-ok.lat/book/2042937/25b5cd",
            category: "general"
        },
        {
            year: 2005,
            title: "Towards large scale quantum computation",
            link: "https://b-ok.lat/book/2061239/12ff4c",
            category: "general"
        },
        {
            year: 2005,
            title: "Quantum Computation, Complexity, and Many-Body Physics",
            link: "https://b-ok.lat/book/2062952/300abd",
            category: "academic"
        },
        {
            year: 2005,
            title: "The brain : fuzzy arithmetic to quantum computing",
            link: "https://b-ok.lat/book/2063267/ca44cb",
            category: "general"
        },
        {
            year: 2005,
            title: "Quantum computing for communications : an engineering approach",
            link: "https://b-ok.lat/book/2078947/089645",
            category: "general"
        },
        {
            year: 2005,
            title: "The Brain: Fuzzy Arithmetic to Quantum Computing",
            link: "https://b-ok.lat/book/2095339/b4a9fd",
            category: "general"
        },
        {
            year: 2005,
            title: "Quantum Wells, Wires and Dots: Theoretical and Computational Physics of Semiconductor Nanostructures, Second Edition",
            link: "https://b-ok.lat/book/2155596/88cdb4",
            category: "academic"
        },
        {
            year: 2005,
            title: "Computational Quantum Chemistry II. The Group Theory Calculator",
            link: "https://b-ok.lat/book/2170746/2df014",
            category: "academic"
        },
        {
            year: 2005,
            title: "Quantum-Statistical Models of Hot Dense Matter: Methods for Computation Opacity and Equation of State",
            link: "https://b-ok.lat/book/2206595/9660b3",
            category: "general"
        },
        {
            year: 2005,
            title: "Coding Theory And Quantum Computing: An International Conference On Coding Theory And Quantum Computing, May 20-24, 2003, University Of Virginia",
            link: "https://b-ok.lat/book/2382455/99f3e2",
            category: "academic"
        },
        {
            year: 2004,
            title: "Computational Chemistry: Introduction to the Theory and Applications of Molecular and Quantum Mechanics",
            link: "https://b-ok.lat/book/436909/43197e",
            category: "beginner"
        },
        {
            year: 2004,
            title: "Principles of quantum computation and information",
            link: "https://b-ok.lat/book/437917/9d8f01",
            category: "general"
        },
        {
            year: 2004,
            title: "Automatic Quantum Computer Programming",
            link: "https://b-ok.lat/book/437941/a2acec",
            category: "programming"
        },
        {
            year: 2004,
            title: "Quantum computation and quantum information",
            link: "https://b-ok.lat/book/453557/100713",
            category: "general"
        },
        {
            year: 2004,
            title: "Nano, Quantum and Molecular Computing Implications to High Level Design and Validation",
            link: "https://b-ok.lat/book/491259/8bf5cc",
            category: "general"
        },
        {
            year: 2004,
            title: "Problems and Solutions in Quantum Computing and Quantum Information",
            link: "https://b-ok.lat/book/503132/335203",
            category: "general"
        },
        {
            year: 2004,
            title: "Quantum computing: a short course from theory to experiment",
            link: "https://b-ok.lat/book/503133/7b1ac6",
            category: "academic"
        },
        {
            year: 2004,
            title: "Proceedings of the 1st International Conference on Experimental Implementation of Quantum Computation: Sydney, Australia, 16-19 January 2001",
            link: "https://b-ok.lat/book/594009/b71cfb",
            category: "general"
        },
        {
            year: 2004,
            title: "Quantum computing: a short course from theory to experiment",
            link: "https://b-ok.lat/book/594186/2b5e39",
            category: "academic"
        },
        {
            year: 2004,
            title: "Nano, Quantum and Molecular Computing: Implications to High Level Design and Validation (Solid Mechanics and Its Applications)",
            link: "https://b-ok.lat/book/648621/c716c5",
            category: "general"
        },
        {
            year: 2004,
            title: "Nano, Quantum And Molecular Computing",
            link: "https://b-ok.lat/book/673338/bc8fcc",
            category: "general"
        },
        {
            year: 2004,
            title: "Nano, Quantum And Molecular Computing-Implications To High Level Design And Validation",
            link: "https://b-ok.lat/book/674630/ca1f73",
            category: "general"
        },
        {
            year: 2004,
            title: "Principles of Quantum Computation and in: 1",
            link: "https://b-ok.lat/book/764025/fb09d8",
            category: "general"
        },
        {
            year: 2004,
            title: "Problems &amp; Solutions in Quantum Computing &amp; Quantum Information",
            link: "https://b-ok.lat/book/807577/702a26",
            category: "general"
        },
        {
            year: 2004,
            title: "Quantum Computing",
            link: "https://b-ok.lat/book/931275/1a1c31",
            category: "general"
        },
        {
            year: 2004,
            title: "Principles of Quantum Computation and Information Vol. 1: Basic Concepts",
            link: "https://b-ok.lat/book/1004023/8f2000",
            category: "general"
        },
        {
            year: 2004,
            title: "Nano, Quantum and Molecular Computing: Implications to High Level Design and Validation",
            link: "https://b-ok.lat/book/1192328/f31dcd",
            category: "general"
        },
        {
            year: 2004,
            title: "Nano, quantum, and molecular computing : implications to high level design and validation",
            link: "https://b-ok.lat/book/2052376/859f42",
            category: "general"
        },
        {
            year: 2004,
            title: "A Shortcut Through Time: The Path to the Quantum Computer",
            link: "https://b-ok.lat/book/2072657/28149f",
            category: "general"
        },
        {
            year: 2004,
            title: "Reversible Logic Synthesis: From Fundamentals to Quantum Computing",
            link: "https://b-ok.lat/book/2095174/8dc760",
            category: "general"
        },
        {
            year: 2004,
            title: "Quantum Computing and Quantum Bits in Mesoscopic Systems",
            link: "https://b-ok.lat/book/2102352/c632a5",
            category: "general"
        },
        {
            year: 2004,
            title: "Automatic Quantum Computer Programming: A Genetic Programming Approach",
            link: "https://b-ok.lat/book/2119223/8a5583",
            category: "programming"
        },
        {
            year: 2004,
            title: "Nano, Quantum and Molecular Computing: Implications to High Level Design and Validation (Solid Mechanics and Its Applications)",
            link: "https://b-ok.lat/book/2428734/6bf3fe",
            category: "general"
        },
        {
            year: 2004,
            title: "The Brain: Fuzzy Arithmetic to Quantum Computing",
            link: "https://b-ok.lat/book/2437161/b2b9ae",
            category: "general"
        },
        {
            year: 2004,
            title: "Principles of Quantum Computation and Information - Volume II: Basic Tools and Special Topics",
            link: "https://b-ok.lat/book/2552909/ed03b6",
            category: "general"
        },
        {
            year: 2004,
            title: "Principles of quantum computation and information. Vol. 1: Basic concepts",
            link: "https://b-ok.lat/book/2625191/44ef87",
            category: "general"
        },
        {
            year: 2004,
            title: "Reversible Logic Synthesis. From Fundamentals to Quantum Computing",
            link: "https://b-ok.lat/book/3389384/52199c",
            category: "general"
        },
        {
            year: 2004,
            title: "Automatic Quantum Computer Programming. A Genetic Programming Approach",
            link: "https://b-ok.lat/book/3688784/7dd5cb",
            category: "programming"
        },
        {
            year: 2004,
            title: "Automatic quantum computer programming. A genetic programming approach",
            link: "https://b-ok.lat/book/4985332/f87e2b",
            category: "programming"
        },
        {
            year: 2004,
            title: "Hacking Matter - Levitating Chairs, Quantum Mirages, and the Infinite Weirdness of Programmable A",
            link: "https://b-ok.lat/book/5098321/efa937",
            category: "general"
        },
        {
            year: 2003,
            title: "Entangled World. The Fascination of Quantum Information and Computation",
            link: "https://b-ok.lat/book/511947/9967c9",
            category: "general"
        },
        {
            year: 2003,
            title: "Computational Chemistry: Introduction to the Theory and Applications of Molecular and Quantum Mechanics",
            link: "https://b-ok.lat/book/655253/8ec919",
            category: "beginner"
        },
        {
            year: 2003,
            title: "Computational Chemistry Introduction To The Theory And Applications Of Molecular And Quantum Mechanics",
            link: "https://b-ok.lat/book/673502/db7254",
            category: "beginner"
        },
        {
            year: 2003,
            title: "Computational Chemistry: Introduction to the Theory and Applications of Molecular and Quantum Mechanics",
            link: "https://b-ok.lat/book/953171/091996",
            category: "beginner"
        },
        {
            year: 2003,
            title: "Introduction to quantum computers",
            link: "https://b-ok.lat/book/3560464/c4b4d7",
            category: "beginner"
        },
        {
            year: 2002,
            title: "Mathematics of quantum computation",
            link: "https://b-ok.lat/book/437922/244ba6",
            category: "general"
        },
        {
            year: 2002,
            title: "Quantum Simulations of Complex Many-Body Systems",
            link: "https://b-ok.lat/book/444918/3f7cad",
            category: "general"
        },
        {
            year: 2002,
            title: "Numerical Quantum Dynamics",
            link: "https://b-ok.lat/book/445181/81d36a",
            category: "general"
        },
        {
            year: 2002,
            title: "Numerical quantum dynamics",
            link: "https://b-ok.lat/book/445182/a4cd40",
            category: "general"
        },
        {
            year: 2002,
            title: "Finite Element and Boundary Element Applications in Quantum Mechanics",
            link: "https://b-ok.lat/book/445260/bf2c60",
            category: "general"
        },
        {
            year: 2002,
            title: "Maxwell's demon 2: entropy, classical and quantum information computing",
            link: "https://b-ok.lat/book/454571/b04095",
            category: "general"
        },
        {
            year: 2002,
            title: "Fundamentals of Quantum Information: Quantum Computation, Communication, Decoherence and All That",
            link: "https://b-ok.lat/book/455281/4df1ca",
            category: "general"
        },
        {
            year: 2002,
            title: "Classical and quantum computation",
            link: "https://b-ok.lat/book/503130/d6dacf",
            category: "general"
        },
        {
            year: 2002,
            title: "Maxwell's Demon 2: Entropy, Classical and Quantum Information, Computing",
            link: "https://b-ok.lat/book/668859/26ec51",
            category: "general"
        },
        {
            year: 2002,
            title: "Probing the structure of quantum mechanics: nonlinearity, nonlocality, computation, axiomatics: Brussels, Belgium, June 2000",
            link: "https://b-ok.lat/book/700478/3215b7",
            category: "general"
        },
        {
            year: 2002,
            title: "Experimental Quantum Computation and Information. Varenna Lectures",
            link: "https://b-ok.lat/book/718468/1f489a",
            category: "general"
        },
        {
            year: 2002,
            title: "Classical and Quantum Computation",
            link: "https://b-ok.lat/book/813493/270824",
            category: "general"
        },
        {
            year: 2002,
            title: "Classical and Quantum Computation",
            link: "https://b-ok.lat/book/869955/62a1df",
            category: "general"
        },
        {
            year: 2002,
            title: "Computational Quantum Chemistry: An Interactive Guide to Basis Set Theory",
            link: "https://b-ok.lat/book/879615/b5a1b7",
            category: "academic"
        },
        {
            year: 2002,
            title: "Practical Statecharts in C C++: Quantum Programming for Embedded Systems with CDROM",
            link: "https://b-ok.lat/book/1064685/45e11c",
            category: "programming"
        },
        {
            year: 2002,
            title: "Fundamentals of Quantum Information: Quantum Computation, Communication, Decoherence and All That",
            link: "https://b-ok.lat/book/1171485/4eacf1",
            category: "general"
        },
        {
            year: 2002,
            title: "Computational Quantum Chemistry: An Interactive Introduction to Basis Set Theory",
            link: "https://b-ok.lat/book/1242088/792881",
            category: "beginner"
        },
        {
            year: 2002,
            title: "Introduction to Quantum Computing",
            link: "https://b-ok.lat/book/2045905/0797e4",
            category: "beginner"
        },
        {
            year: 2002,
            title: "Quantum Communication, Computing, and Measurement 2",
            link: "https://b-ok.lat/book/2093923/43cfa6",
            category: "general"
        },
        {
            year: 2002,
            title: "Quantum Communication, Computing, and Measurement 3",
            link: "https://b-ok.lat/book/2094121/55f03c",
            category: "general"
        },
        {
            year: 2002,
            title: "Semiconductor Spintronics and Quantum Computation",
            link: "https://b-ok.lat/book/2102143/b9e98a",
            category: "general"
        },
        {
            year: 2002,
            title: "Practical Statecharts in C/C++: Quantum Programming for Embedded Systems with CDROM",
            link: "https://b-ok.lat/book/2226232/e7af4f",
            category: "programming"
        },
        {
            year: 2002,
            title: "Maxwell's Demon 2 Entropy, Classical and Quantum Information, Computing",
            link: "https://b-ok.lat/book/2226561/504b07",
            category: "general"
        },
        {
            year: 2002,
            title: "Quantum Computation: A Grand Mathematical Challenge for the Twenty-First Century and the Millennium",
            link: "https://b-ok.lat/book/2336001/68e7e8",
            category: "academic"
        },
        {
            year: 2002,
            title: "Quantum Computation and Information: Ams Special Session Quantum Computation and Information, Washington, D.C., January 19-21, 2000",
            link: "https://b-ok.lat/book/2382379/e338d9",
            category: "general"
        },
        {
            year: 2002,
            title: "Quantum Computation: A Grand Mathematical Challenge for the Twenty-First Century and the Millennium",
            link: "https://b-ok.lat/book/2382679/4ab801",
            category: "academic"
        },
        {
            year: 2002,
            title: "Classical and quantum computation",
            link: "https://b-ok.lat/book/2626164/09bfb3",
            category: "general"
        },
        {
            year: 2002,
            title: "Fundamentals of Quantum Information: Quantum Computation, Communication, Decoherence and All That",
            link: "https://b-ok.lat/book/2626173/2bf1cb",
            category: "general"
        },
        {
            year: 2001,
            title: "Fundamentals of Quantum Chemistry: Molecular Spectroscopy and Modern Electronic Structure Computations",
            link: "https://b-ok.lat/book/436805/6f6f49",
            category: "general"
        },
        {
            year: 2001,
            title: "Scalable quantum computers: paving the way to realization",
            link: "https://b-ok.lat/book/437920/5d46d2",
            category: "general"
        },
        {
            year: 2001,
            title: "Introduction to quantum computation and quantum information",
            link: "https://b-ok.lat/book/437932/5a2031",
            category: "beginner"
        },
        {
            year: 2001,
            title: "Scalable Quantum Computers: Paving the Way to Realization",
            link: "https://b-ok.lat/book/454053/667cc1",
            category: "general"
        },
        {
            year: 2001,
            title: "Fundamentals of Quantum Chemistry Molecular Spectroscopy and Modern Electronic Structure Computations",
            link: "https://b-ok.lat/book/463697/33e8f7",
            category: "general"
        },
        {
            year: 2001,
            title: "Fluid Dynamics: Theory, Computation, and Numerical Simulation",
            link: "https://b-ok.lat/book/667398/e4bf11",
            category: "academic"
        },
        {
            year: 2001,
            title: "Introduction to Quantum Computation and Information",
            link: "https://b-ok.lat/book/693169/2371bd",
            category: "beginner"
        },
        {
            year: 2001,
            title: "Quantum Computation and Quantum Information Theory",
            link: "https://b-ok.lat/book/718342/a94b27",
            category: "academic"
        },
        {
            year: 2001,
            title: "Quantum Computing",
            link: "https://b-ok.lat/book/767473/85b634",
            category: "general"
        },
        {
            year: 2001,
            title: "Introduction to Quantum Computation and Information ( World Scientific )",
            link: "https://b-ok.lat/book/899425/965994",
            category: "beginner"
        },
        {
            year: 2001,
            title: "Quantum Communication, Computing, and Measurement 3",
            link: "https://b-ok.lat/book/959074/3bab9b",
            category: "general"
        },
        {
            year: 2001,
            title: "Quantum Computation and Quantum Information Theory: 12-23 July 1999 Villa Gualino, Torino, Italy",
            link: "https://b-ok.lat/book/992767/79e53b",
            category: "academic"
        },
        {
            year: 2001,
            title: "Computing with cells and atoms : an introduction to quantum, DNA, and membrane computing",
            link: "https://b-ok.lat/book/2058503/55877a",
            category: "beginner"
        },
        {
            year: 2001,
            title: "Decoherence, control, and symmetry in quantum computers",
            link: "https://b-ok.lat/book/2058593/133554",
            category: "general"
        },
        {
            year: 2001,
            title: "The universal history of computing : from the abacus to the quantum computer",
            link: "https://b-ok.lat/book/2063620/e8af48",
            category: "general"
        },
        {
            year: 2001,
            title: "An Introduction to Quantum Computing Algorithms",
            link: "https://b-ok.lat/book/2098983/986ee6",
            category: "beginner"
        },
        {
            year: 2001,
            title: "Classical and Quantum Computing: with C++ and Java Simulations",
            link: "https://b-ok.lat/book/2099502/d019c9",
            category: "general"
        },
        {
            year: 2001,
            title: "Macroscopic Quantum Coherence and Quantum Computing",
            link: "https://b-ok.lat/book/2101978/02b1d6",
            category: "general"
        },
        {
            year: 2001,
            title: "Quantum Computation And Quantum Information Theory : Reprint Volume with Introductory Notes for ISI TMR Network School.",
            link: "https://b-ok.lat/book/5002066/8fa2d7",
            category: "academic"
        },
        {
            year: 2001,
            title: "Quantum Computation and Quantum Information Theory: 12-23 July 1999 Villa Gualino, Torino, Italy",
            link: "https://b-ok.lat/book/5004725/5c7e07",
            category: "academic"
        },
        {
            year: 2000,
            title: "Quantum Computing - Where Do We Want to Go Tomorrow",
            link: "https://b-ok.lat/book/437918/21cf20",
            category: "general"
        },
        {
            year: 2000,
            title: "Basic concepts in quantum computation",
            link: "https://b-ok.lat/book/437925/d2f9bd",
            category: "general"
        },
        {
            year: 2000,
            title: "Quantum communication, computing, and measurement 2",
            link: "https://b-ok.lat/book/437930/6f2275",
            category: "general"
        },
        {
            year: 2000,
            title: "The Bit and the Pendulum: From Quantum Computing to M Theory",
            link: "https://b-ok.lat/book/452371/f41043",
            category: "academic"
        },
        {
            year: 2000,
            title: "The physics of quantum information: quantum cryptography, teleportation, computation",
            link: "https://b-ok.lat/book/453416/ab2c71",
            category: "academic"
        },
        {
            year: 2000,
            title: "Visual quantum mechanics: selected topics with computer-generated animations of quantum-mechanical phenomena",
            link: "https://b-ok.lat/book/453785/db037f",
            category: "general"
        },
        {
            year: 2000,
            title: "Visual quantum mechanics: selected topics with computer-generated animations of quantum-mechanical phenomena",
            link: "https://b-ok.lat/book/453786/64803e",
            category: "general"
        },
        {
            year: 2000,
            title: "Visual quantum mechanics selected topics with computer generated animations of quantum mechanical phenomena",
            link: "https://b-ok.lat/book/542671/282079",
            category: "general"
        },
        {
            year: 2000,
            title: "Minds, Machines and the Multiverse. The Quest for the Quantum Computer",
            link: "https://b-ok.lat/book/550931/62403c",
            category: "general"
        },
        {
            year: 2000,
            title: "Quantum communication, computing, and measurement",
            link: "https://b-ok.lat/book/557708/14b3af",
            category: "general"
        },
        {
            year: 2000,
            title: "Visual quantum mechanics: selected topics with computer-generated animations of quantum-mechanical phenomena",
            link: "https://b-ok.lat/book/557909/b9634b",
            category: "general"
        },
        {
            year: 2000,
            title: "Minds, machines, and the multiverse: The quest for the quantum computer",
            link: "https://b-ok.lat/book/573903/f206ab",
            category: "general"
        },
        {
            year: 2000,
            title: "An Introduction to Quantum Computing Algorithms",
            link: "https://b-ok.lat/book/600080/4627fc",
            category: "beginner"
        },
        {
            year: 2000,
            title: "The Physics of Quantum Information: Quantum Cryptography, Quantum Teleportation, Quantum Computation",
            link: "https://b-ok.lat/book/665019/94a7ab",
            category: "academic"
        },
        {
            year: 2000,
            title: "Computing with Cells and Atoms: An Introduction to Quantum, DNA and Membrane Computing",
            link: "https://b-ok.lat/book/762687/6def6d",
            category: "beginner"
        },
        {
            year: 2000,
            title: "Computing with Cells and Atoms: An Introduction to Quantum, DNA and Membrane Computing",
            link: "https://b-ok.lat/book/765088/c19dcd",
            category: "beginner"
        },
        {
            year: 2000,
            title: "Quantum Computation and Quantum Information",
            link: "https://b-ok.lat/book/767472/1b2de4",
            category: "general"
        },
        {
            year: 2000,
            title: "The Universal History of Computing: From the Abacus to the Quantum Computer",
            link: "https://b-ok.lat/book/767778/c4fb53",
            category: "general"
        },
        {
            year: 2000,
            title: "Visual Quantum Mechanics: Selected Topics with Computer-Generated Animations of Quantum-Mechanical Phenomena",
            link: "https://b-ok.lat/book/916947/a61140",
            category: "general"
        },
        {
            year: 2000,
            title: "Quantum Computing: A Short Course from Theory to Experiment",
            link: "https://b-ok.lat/book/2043942/d76df1",
            category: "academic"
        },
        {
            year: 2000,
            title: "Visual quantum mechanics : selected topics with computer generated animations of quantum mechanical phenomena ; CD-ROM included",
            link: "https://b-ok.lat/book/2054809/3a1652",
            category: "general"
        },
        {
            year: 2000,
            title: "The Physics of Quantum Information: Quantum Cryptography, Quantum Teleportation, Quantum Computation",
            link: "https://b-ok.lat/book/2093270/cff08b",
            category: "academic"
        },
        {
            year: 2000,
            title: "Ultimate Zero and One: Computing at the Quantum Frontier",
            link: "https://b-ok.lat/book/2099258/5a7b05",
            category: "general"
        },
        {
            year: 2000,
            title: "Numerical Challenges in Lattice Quantum Chromodynamics: Joint Interdisciplinary Workshop of John von Neumann Institute for Computing, Jülich, and Institute of Applied Computer Science, Wuppertal University, August 1999",
            link: "https://b-ok.lat/book/2103241/020f4d",
            category: "general"
        },
        {
            year: 2000,
            title: "MINDS, MACHINES, AND THE MULTIVERSE: THE QUEST FOR THE QUANTUM COMPUTER",
            link: "https://b-ok.lat/book/2289092/2d5ced",
            category: "general"
        },
        {
            year: 2000,
            title: "The Universal History of Computing: From the Abacus to the Quantum Computer",
            link: "https://b-ok.lat/book/2290170/2ae7ae",
            category: "general"
        },
        {
            year: 2000,
            title: "Minds, machines, and the multiverse: the quest for the quantum computer",
            link: "https://b-ok.lat/book/5255017/cc795b",
            category: "general"
        },
        {
            year: 1999,
            title: "Quantum computing: where do we want to go tomorrow?",
            link: "https://b-ok.lat/book/437919/371563",
            category: "general"
        },
        {
            year: 1999,
            title: "An introduction to quantum computing algorithms",
            link: "https://b-ok.lat/book/746466/6c8d28",
            category: "beginner"
        },
        {
            year: 1999,
            title: "Quantum Computing and Communications",
            link: "https://b-ok.lat/book/765044/d6a78c",
            category: "general"
        },
        {
            year: 1999,
            title: "Quantum Computing and Quantum Communications: First NASA International Conference, QCQC’98 Palm Springs, California, USA February 17–20, 1998 Selected Papers",
            link: "https://b-ok.lat/book/765890/13d6de",
            category: "general"
        },
        {
            year: 1999,
            title: "An Introduction to Quantum Computing Algorithms",
            link: "https://b-ok.lat/book/766355/96665e",
            category: "beginner"
        },
        {
            year: 1999,
            title: "The Feynman Processor : Quantum Entanglement and the Computing Revolution",
            link: "https://b-ok.lat/book/767699/b6b13c",
            category: "general"
        },
        {
            year: 1999,
            title: "Ultimate Zero and One : Computing at the Quantum Frontier",
            link: "https://b-ok.lat/book/774918/6dd3c2",
            category: "general"
        },
        {
            year: 1999,
            title: "An introduction to quantum computing algorithms",
            link: "https://b-ok.lat/book/1023391/5b4f3f",
            category: "beginner"
        },
        {
            year: 1999,
            title: "Computational Chemistry: Reviews of Current Trends",
            link: "https://b-ok.lat/book/1274742/0c3517",
            category: "general"
        },
        {
            year: 1999,
            title: "Quantum Computing and Communications",
            link: "https://b-ok.lat/book/2098702/690bd3",
            category: "general"
        },
        {
            year: 1999,
            title: "Quantum Computing and Quantum Communications: First NASA International Conference, QCQC’98 Palm Springs, California, USA February 17–20, 1998 Selected Papers",
            link: "https://b-ok.lat/book/2098808/0e5587",
            category: "general"
        },
        {
            year: 1999,
            title: "Introduction to Quantum Computation and Information",
            link: "https://b-ok.lat/book/2423412/7fe911",
            category: "beginner"
        },
        {
            year: 1999,
            title: "Visual quantum mechanics.. selected topics with computer-generated animations of quantum-mechanical phenomena",
            link: "https://b-ok.lat/book/2424434/d8162c",
            category: "general"
        },
        {
            year: 1999,
            title: "Quantum computing : where do we want to go tomorrow?",
            link: "https://b-ok.lat/book/5411498/7edf5f",
            category: "general"
        },
        {
            year: 1998,
            title: "Non-standard computation: molecular computation, cellular automata, evolutionary algorithms, quantum computers",
            link: "https://b-ok.lat/book/437115/63c24c",
            category: "general"
        },
        {
            year: 1998,
            title: "Introduction to quantum computers",
            link: "https://b-ok.lat/book/437924/b8d51b",
            category: "beginner"
        },
        {
            year: 1998,
            title: "A quick glance at quantum cryptography",
            link: "https://b-ok.lat/book/437933/2bfaf3",
            category: "general"
        },
        {
            year: 1998,
            title: "Basics of quantum computation",
            link: "https://b-ok.lat/book/437946/54f34c",
            category: "general"
        },
        {
            year: 1998,
            title: "Explorations in quantum computing",
            link: "https://b-ok.lat/book/437948/30bb4e",
            category: "general"
        },
        {
            year: 1998,
            title: "Explorations in quantum computing (CD)",
            link: "https://b-ok.lat/book/437949/9e59d3",
            category: "general"
        },
        {
            year: 1998,
            title: "Handbook of computational quantum chemistry",
            link: "https://b-ok.lat/book/502787/888ddb",
            category: "general"
        },
        {
            year: 1998,
            title: "Introduction to Quantum Computers",
            link: "https://b-ok.lat/book/503128/893d97",
            category: "beginner"
        },
        {
            year: 1998,
            title: "Introduction to Quantum Computers",
            link: "https://b-ok.lat/book/510505/289bec",
            category: "beginner"
        },
        {
            year: 1998,
            title: "Introduction to quantum computers",
            link: "https://b-ok.lat/book/538332/03206e",
            category: "beginner"
        },
        {
            year: 1998,
            title: "Quantum mechanics on the personal computer",
            link: "https://b-ok.lat/book/574637/b6665a",
            category: "general"
        },
        {
            year: 1998,
            title: "Handbook Of Computational Quantum Chemistry",
            link: "https://b-ok.lat/book/644769/ba7cb6",
            category: "general"
        },
        {
            year: 1998,
            title: "Non-Standard Computation: Molecular Computation - Cellular Automata - Evolutionary Algorithms - Quantum Computers",
            link: "https://b-ok.lat/book/767323/bde5ba",
            category: "general"
        },
        {
            year: 1998,
            title: "Computational Chemistry: Reviews of Current Trends",
            link: "https://b-ok.lat/book/1274744/40049e",
            category: "general"
        },
        {
            year: 1998,
            title: "Explorations in quantum computing",
            link: "https://b-ok.lat/book/2058900/3b0c32",
            category: "general"
        },
        {
            year: 1998,
            title: "Handbook of Computational Quantum Chemistry",
            link: "https://b-ok.lat/book/2077162/6bd889",
            category: "general"
        },
        {
            year: 1997,
            title: "Quantum Communication, Computing, and Measurement",
            link: "https://b-ok.lat/book/2102947/bcb577",
            category: "general"
        },
        {
            year: 1996,
            title: "New Methods in Computational Quantum Mechanics",
            link: "https://b-ok.lat/book/571551/b5e42e",
            category: "general"
        },
        {
            year: 1996,
            title: "Advances in Chemical Physics, New Methods in Computational Quantum Mechanics (Volume 93)",
            link: "https://b-ok.lat/book/871656/2a39ed",
            category: "academic"
        },
        {
            year: 1995,
            title: "Computational Approaches to Novel Condensed Matter Systems: Applications to Classical and Quantum Systems",
            link: "https://b-ok.lat/book/2122375/f6609d",
            category: "general"
        },
        {
            year: 1995,
            title: "Quantum Mechanics Using Maple ®",
            link: "https://b-ok.lat/book/2125820/775e97",
            category: "general"
        },
        {
            year: 1994,
            title: "Basics of Quantum Computation",
            link: "https://b-ok.lat/book/551623/bb9c34",
            category: "general"
        },
        {
            year: 1994,
            title: "Quantum Methods with Mathematica",
            link: "https://b-ok.lat/book/753897/d29b11",
            category: "general"
        },
        {
            year: 1993,
            title: "Computational Nuclear Physics 2",
            link: "https://b-ok.lat/book/453519/48b059",
            category: "academic"
        },
        {
            year: 1992,
            title: "Quantum Mechanics on the Personal Computer",
            link: "https://b-ok.lat/book/2046978/c389a1",
            category: "general"
        },
        {
            year: 1992,
            title: "Quantum Mechanics on the Personal Computer",
            link: "https://b-ok.lat/book/2304736/ed0df4",
            category: "general"
        },
        {
            year: 1991,
            title: "Computational Nuclear Physics I",
            link: "https://b-ok.lat/book/645262/6f6b2c",
            category: "academic"
        },
        {
            year: 1984,
            title: "Whole Earth Software Catalog",
            link: "https://b-ok.lat/book/1268559/cfa5ce",
            category: "general"
        },
        {
            year: 1984,
            title: "Stochastic Methods and Computer Techniques in Quantum Dynamics",
            link: "https://b-ok.lat/book/2124323/b0bd5b",
            category: "general"
        },
        {
            year: 1982,
            title: "Quantum Computing",
            link: "https://b-ok.lat/book/765029/059de3",
            category: "general"
        },
        {
            year: 1975,
            title: "Computational Techniques in Quantum Chemistry and Molecular Physics: Proceedings of the NATO Advanced Study Institute held at Ramsau, Germany, 4–21 September, 1974",
            link: "https://b-ok.lat/book/2116106/68ad0b",
            category: "academic"
        },
        {
            year: 1972,
            title: "Computing Methods in Quantum Organic Chemistry",
            link: "https://b-ok.lat/book/601760/c72c21",
            category: "general"
        },
        {
            year: 1972,
            title: "Computing Methods in Quantum Organic Chemistry",
            link: "https://b-ok.lat/book/1181798/9e285e",
            category: "general"
        },
        {
            year: 1971,
            title: "Problems in Quantum Mechanics",
            link: "https://b-ok.lat/book/638250/854205",
            category: "general"
        }
    ];
}

function displayBooks(books) {
    const container = document.getElementById('books-container');
    
    if (books.length === 0) {
        container.innerHTML = '<p class="no-results">No se encontraron libros con los filtros seleccionados.</p>';
        return;
    }

    const html = books.map(book => `
        <div class="book-card" data-year="${book.year}">
            <div class="book-year">${book.year}</div>
            <h3>${book.title}</h3>
            <a href="${book.link}" class="book-link" target="_blank">
                <i class="fas fa-external-link-alt"></i>
                Ver libro
            </a>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

// Configurar filtros
function setupFilters() {
    // Filtros de recursos QML
    const resourceTabs = document.querySelectorAll('.tab-btn');
    resourceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            resourceTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            currentResourceFilter = category;
            filterQMLResources(category);
        });
    });

    // Filtros de libros
    const bookFilters = document.querySelectorAll('.filter-btn');
    bookFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            bookFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            const year = filter.dataset.year;
            currentBookFilter = year;
            filterBooks(year);
        });
    });
}

function filterQMLResources(category) {
    const filtered = category === 'all' ? qmlResources : qmlResources.filter(resource => resource.category === category);
    displayQMLResources(filtered);
}

function filterBooks(year) {
    let filtered;
    
    if (year === 'all') {
        filtered = allBooks;
    } else if (year === 'old') {
        filtered = allBooks.filter(book => book.year <= 2020);
    } else {
        filtered = allBooks.filter(book => book.year == year);
    }
    
    filteredBooks = filtered;
    displayBooks(filteredBooks);
}

// Configurar búsqueda
function setupSearch() {
    const searchInput = document.getElementById('book-search');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = e.target.value.toLowerCase().trim();
            searchBooks(query);
        }, 300);
    });
}

function searchBooks(query) {
    if (query === '') {
        filterBooks(currentBookFilter);
        return;
    }
    
    const searchResults = filteredBooks.filter(book => 
        book.title.toLowerCase().includes(query)
    );
    
    displayBooks(searchResults);
}

// Animar estadísticas
function animateStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
            }
        });
    });

    const statCards = document.querySelectorAll('.stat-card h3');
    statCards.forEach(card => observer.observe(card));
}

function animateCounter(element) {
    const target = element.textContent;
    const isNumber = /\d+/.test(target);
    
    if (isNumber) {
        const num = parseInt(target.match(/\d+/)[0]);
        const suffix = target.replace(/\d+/, '');
        let current = 0;
        const increment = num / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
                current = num;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 30);
    }
}

// Actualizar fecha
function updateLastUpdate() {
    const lastUpdateElement = document.getElementById('last-update');
    if (lastUpdateElement) {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        lastUpdateElement.textContent = now.toLocaleDateString('es-ES', options);
    }
}

// Actualizar conteo de libros
function updateBookCount() {
    const bookCountElement = document.getElementById('books-count');
    if (bookCountElement && allBooks.length > 0) {
        bookCountElement.textContent = allBooks.length + '+';
    }
}

// Efectos de scroll navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Lazy loading para imágenes (si las agregamos en el futuro)
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Utilidades
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export para testing (si es necesario)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        qmlResources,
        filterQMLResources,
        filterBooks,
        searchBooks
    };
} 