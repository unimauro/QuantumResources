// ============================================================
// DATA
// ============================================================

const youtubeData = [
    { title: "Qiskit", desc: "IBM's open-source quantum SDK. 100K+ subs, tutorials, Summer School recordings", url: "https://www.youtube.com/@qiskit", category: "official" },
    { title: "Google Quantum AI", desc: "Research talks, Cirq tutorials, Willow processor announcements", url: "https://www.youtube.com/@GoogleQuantumAI", category: "official" },
    { title: "PennyLane (Xanadu)", desc: "Quantum machine learning, variational algorithms, PennyLane tutorials", url: "https://www.youtube.com/@PennyLaneAI", category: "official" },
    { title: "Microsoft Azure Quantum", desc: "Q# programming, topological qubits, hybrid workflows", url: "https://www.youtube.com/@MicrosoftAzureQuantum", category: "official" },
    { title: "IonQ", desc: "Trapped-ion quantum computing, hardware updates", url: "https://www.youtube.com/@IonQinc", category: "official" },
    { title: "QuEra Computing", desc: "Neutral-atom quantum computing, Bloqade framework", url: "https://www.youtube.com/@queracomputing", category: "official" },
    { title: "3Blue1Brown", desc: "8.2M+ subs. Essential linear algebra foundations for quantum computing", url: "https://www.youtube.com/@3blue1brown", category: "educational" },
    { title: "Quantum Sense", desc: "Quantum computing math and concepts from scratch, clean visual style", url: "https://www.youtube.com/@QuantumSense", category: "educational" },
    { title: "Sabine Hossenfelder", desc: "Critical, balanced takes on quantum computing progress and hype", url: "https://www.youtube.com/@SabineHossenfelder", category: "educational" },
    { title: "Looking Glass Universe", desc: "Intuitive quantum mechanics explanations", url: "https://www.youtube.com/@LookingGlassUniverse", category: "educational" },
    { title: "Anastasia Marchenkova", desc: "Accessible quantum concepts, industry news, career advice", url: "https://www.youtube.com/@AnastasiaMarchenkova", category: "educational" },
    { title: "MIT OpenCourseWare", desc: "5M+ subs. Full quantum computing courses (8.370, 8.371)", url: "https://www.youtube.com/@mitocw", category: "academic" },
    { title: "Simons Institute", desc: "1,750+ research talks on quantum algorithms and complexity theory", url: "https://www.youtube.com/@SimonsInstitute", category: "academic" },
    { title: "Perimeter Institute", desc: "Research-level talks on quantum information and foundations", url: "https://www.youtube.com/@PIOutreach", category: "academic" },
];

const coursesData = [
    { title: "IBM Quantum Learning", desc: "15+ courses, learning pathways, Qiskit coding, real quantum processors", url: "https://quantum.cloud.ibm.com/learning/en", category: "interactive", level: "All levels" },
    { title: "PennyLane Codebook", desc: "15 interactive modules from fundamentals to Shor's Algorithm and QEC", url: "https://pennylane.ai/codebook", category: "interactive", level: "Beginner-Intermediate" },
    { title: "Microsoft Quantum Katas", desc: "Self-paced Q# tutorials with AI assistant", url: "https://quantum.microsoft.com/en-us/tools/quantum-katas", category: "interactive", level: "Beginner-Intermediate" },
    { title: "Google Cirq Tutorials", desc: "Circuit building, simulation, hardware integration", url: "https://quantumai.google/cirq", category: "interactive", level: "Beginner-Intermediate" },
    { title: "Understanding Quantum Information (IBM)", desc: "Video lecture series by John Watrous", url: "https://quantum.cloud.ibm.com/learning/en", category: "free", level: "Beginner-Intermediate" },
    { title: "Quantum Computing in Practice (IBM)", desc: "Using 100+ qubit processors, realistic use cases", url: "https://quantum.cloud.ibm.com/learning/en/courses/quantum-computing-in-practice/introduction", category: "free", level: "Intermediate-Advanced" },
    { title: "Quantum Machine Learning (IBM)", desc: "Data encoding, quantum kernels, variational circuits for ML", url: "https://quantum.cloud.ibm.com/learning/en/courses/quantum-machine-learning", category: "free", level: "Intermediate" },
    { title: "Hands-on Quantum Error Correction (Google)", desc: "Quantum states, circuits, stabilizers, surface codes, Stim", url: "https://www.coursera.org/learn/quantum-error-correction", category: "free", level: "Intermediate" },
    { title: "Introduction to Quantum Computing (OpenLearn)", desc: "Free course: superposition, entanglement, quantum gates", url: "https://www.open.edu/openlearn/science-maths-technology/introduction-quantum-computing/content-section-0", category: "free", level: "Beginner" },
    { title: "The Quantum Internet (TU Delft / QuTech)", desc: "6-week course, 2-3 hours/week, free audit", url: "https://www.edx.org/learn/quantum-computing", category: "free", level: "Beginner" },
    { title: "Quantum Computing for Everyone (U. Chicago)", desc: "Demystifies quantum without heavy math", url: "https://www.edx.org/learn/quantum-computing", category: "free", level: "Beginner" },
    { title: "Qiskit Global Summer School 2025", desc: "Free annual intensive on quantum computing", url: "https://www.ibm.com/quantum/blog/qiskit-summer-school-2025", category: "free", level: "Intermediate" },
    { title: "IBM Certified Developer - Qiskit", desc: "Industry's first quantum developer certification", url: "https://www.ibm.com/training/certification/ibm-certified-associate-developer-quantum-computation-using-qiskit-v02x-C0010300", category: "certification", level: "Intermediate" },
    { title: "Azure Quantum Developer Certification", desc: "Q# programming, algorithms, resource estimation", url: "https://learn.microsoft.com/en-us/azure/quantum/", category: "certification", level: "Beginner-Intermediate" },
    { title: "MIT xPRO Professional Certificate", desc: "Professional Certificate with 4.0 CEUs from MIT", url: "https://learn-xpro.mit.edu/quantum-computing", category: "certification", level: "Intermediate" },
    { title: "Graduate Certificate - U. Maryland", desc: "12-credit graduate program, completable in <1 year", url: "https://cmns.umd.edu/graduate/science-academy/quantum-computing/graduate-certificate", category: "certification", level: "Advanced" },
];

const reposData = [
    { title: "Qiskit/qiskit", desc: "IBM's open-source SDK for quantum circuits and primitives", url: "https://github.com/Qiskit/qiskit", stars: 7181, category: "framework" },
    { title: "quantumlib/Cirq", desc: "Google's Python framework for NISQ circuits", url: "https://github.com/quantumlib/Cirq", stars: 4903, category: "framework" },
    { title: "microsoft/Quantum", desc: "Microsoft Quantum Development Kit Samples", url: "https://github.com/microsoft/Quantum", stars: 4016, category: "framework" },
    { title: "PennyLaneAI/pennylane", desc: "Xanadu's platform for QML and quantum computing", url: "https://github.com/PennyLaneAI/pennylane", stars: 3120, category: "framework" },
    { title: "tensorflow/quantum", desc: "Hybrid quantum-classical ML framework", url: "https://github.com/tensorflow/quantum", stars: 2106, category: "framework" },
    { title: "Classiq/classiq-library", desc: "Largest collection of quantum algorithms", url: "https://github.com/Classiq/classiq-library", stars: 1984, category: "framework" },
    { title: "qutip/qutip", desc: "Quantum Toolbox in Python for open quantum systems", url: "https://github.com/qutip/qutip", stars: 1980, category: "framework" },
    { title: "rigetti/pyquil", desc: "Python library for quantum programming (Rigetti)", url: "https://github.com/rigetti/pyquil", stars: 1480, category: "framework" },
    { title: "ProjectQ-Framework/ProjectQ", desc: "Open source QC framework (ETH Zurich)", url: "https://github.com/ProjectQ-Framework/ProjectQ", stars: 966, category: "framework" },
    { title: "amazon-braket/amazon-braket-sdk-python", desc: "Python SDK for Amazon Braket", url: "https://github.com/amazon-braket/amazon-braket-sdk-python", stars: 359, category: "framework" },
    { title: "eclipse-qrisp/Qrisp", desc: "Next-gen quantum algorithm dev framework", url: "https://github.com/eclipse-qrisp/Qrisp", stars: 239, category: "framework" },
    { title: "awesome-quantum-machine-learning", desc: "QML basics, algorithms, study materials and projects", url: "https://github.com/krishnakumarsekar/awesome-quantum-machine-learning", stars: 3323, category: "awesome" },
    { title: "awesome-quantum-computing", desc: "Curated list of QC learning and developing resources", url: "https://github.com/desireevl/awesome-quantum-computing", stars: 3134, category: "awesome" },
    { title: "awesome-quantum-software", desc: "Open-source quantum software projects", url: "https://github.com/qosf/awesome-quantum-software", stars: 1990, category: "awesome" },
    { title: "awesome-quantum-ml", desc: "Curated QML papers and resources", url: "https://github.com/artix41/awesome-quantum-ml", stars: 407, category: "awesome" },
    { title: "awesome-post-quantum", desc: "Post-quantum cryptography resources", url: "https://github.com/veorq/awesome-post-quantum", stars: 368, category: "awesome" },
    { title: "microsoft/QuantumKatas", desc: "Tutorials and exercises for Q# and QC", url: "https://github.com/microsoft/QuantumKatas", stars: 4838, category: "educational" },
    { title: "qiskit-community/qiskit-textbook", desc: "University QC course based on Qiskit", url: "https://github.com/qiskit-community/qiskit-textbook", stars: 1018, category: "educational" },
    { title: "JackHidary/quantumcomputingbook", desc: "Companion for 'QC: An Applied Approach'", url: "https://github.com/JackHidary/quantumcomputingbook", stars: 909, category: "educational" },
    { title: "PennyLaneAI/demos", desc: "Quantum programming concepts and research demos", url: "https://github.com/PennyLaneAI/demos", stars: 657, category: "educational" },
    { title: "amazon-braket-examples", desc: "Example notebooks for Amazon Braket", url: "https://github.com/amazon-braket/amazon-braket-examples", stars: 573, category: "educational" },
    { title: "qosf/qml-mooc", desc: "QML MOOC notebooks (Peter Wittek, EdX)", url: "https://github.com/qosf/qml-mooc", stars: 305, category: "educational" },
    { title: "mit-han-lab/torchquantum", desc: "PyTorch quantum simulation, QML, QNNs", url: "https://github.com/mit-han-lab/torchquantum", stars: 1610, category: "simulator" },
    { title: "Strilanc/Quirk", desc: "Drag-and-drop circuit simulator in browser", url: "https://github.com/Strilanc/Quirk", stars: 1065, category: "simulator" },
    { title: "QuantumBFS/Yao.jl", desc: "Quantum algorithm design in Julia", url: "https://github.com/QuantumBFS/Yao.jl", stars: 1022, category: "simulator" },
    { title: "quantumlib/Stim", desc: "Google's fast stabilizer circuit library", url: "https://github.com/quantumlib/Stim", stars: 680, category: "simulator" },
    { title: "quantumlib/qsim", desc: "Google's fast state-vector simulator", url: "https://github.com/quantumlib/qsim", stars: 647, category: "simulator" },
    { title: "unitaryfoundation/mitiq", desc: "Error mitigation for NISQ computers", url: "https://github.com/unitaryfoundation/mitiq", stars: 421, category: "simulator" },
    { title: "quantumlib/Qualtran", desc: "Fault-tolerant quantum algorithms (Google)", url: "https://github.com/quantumlib/Qualtran", stars: 323, category: "simulator" },
    { title: "qiskit-machine-learning", desc: "QML tasks at scale on quantum hardware", url: "https://github.com/qiskit-community/qiskit-machine-learning", stars: 954, category: "qml" },
    { title: "quantumlib/OpenFermion", desc: "Quantum simulation of electronic structures", url: "https://github.com/quantumlib/OpenFermion", stars: 1669, category: "qml" },
    { title: "deepchem/deepchem", desc: "Deep Learning for Drug Discovery & Quantum Chemistry", url: "https://github.com/deepchem/deepchem", stars: 6641, category: "qml" },
    { title: "tqec/tqec", desc: "Design automation for Topological QEC", url: "https://github.com/tqec/tqec", stars: 345, category: "qec" },
    { title: "quantumlib/tesseract-decoder", desc: "Google's search-based QEC decoder", url: "https://github.com/quantumlib/tesseract-decoder", stars: 101, category: "qec" },
    { title: "qecsim/qecsim", desc: "QEC simulation with stabilizer codes", url: "https://github.com/qecsim/qecsim", stars: 91, category: "qec" },
    { title: "yuewuo/fusion-blossom", desc: "Fast MWPM solver for QEC", url: "https://github.com/yuewuo/fusion-blossom", stars: 80, category: "qec" },
    { title: "open-quantum-safe/liboqs", desc: "C library for quantum-resistant cryptography", url: "https://github.com/open-quantum-safe/liboqs", stars: 2839, category: "pqc" },
    { title: "rosenpass/rosenpass", desc: "Post-quantum-secure VPN with WireGuard", url: "https://github.com/rosenpass/rosenpass", stars: 1325, category: "pqc" },
    { title: "PQClean/PQClean", desc: "Clean, portable PQC implementations", url: "https://github.com/PQClean/PQClean", stars: 893, category: "pqc" },
    { title: "paulmillr/noble-post-quantum", desc: "Minimal JS implementation of PQC", url: "https://github.com/paulmillr/noble-post-quantum", stars: 291, category: "pqc" },
];

const papersData = [
    { title: "Quantum error correction below the surface code threshold", desc: "Google Willow - ~607 citations. First demo of QEC below threshold", authors: "Acharya, Arute et al.", year: 2024, url: "https://arxiv.org/abs/2408.13687", category: "landmark" },
    { title: "High-threshold fault-tolerant quantum memory", desc: "IBM - 10x qubit reduction vs surface code. Nature cover", authors: "Bravyi, Cross, Gambetta et al.", year: 2024, url: "https://arxiv.org/abs/2308.07915", category: "landmark" },
    { title: "Logical quantum processor based on atom arrays", desc: "Harvard/QuEra - 280 physical, 48 logical qubits. Nature 2024", authors: "Bluvstein, Evered, Lukin et al.", year: 2023, url: "https://arxiv.org/abs/2312.03982", category: "landmark" },
    { title: "Certified randomness with trapped-ion processor", desc: "First commercial QC use case. 71,313 certified random bits", authors: "Liu, Shaydulin et al.", year: 2025, url: "https://arxiv.org/abs/2503.20498", category: "landmark" },
    { title: "Roadmap to fault tolerant QC with topological qubits", desc: "Microsoft Majorana 1 architecture", authors: "Aasen, Aghaee et al.", year: 2025, url: "https://arxiv.org/abs/2502.12252", category: "landmark" },
    { title: "AlphaQubit: AI-powered quantum error decoding", desc: "Google DeepMind - AI for QEC. Nature 2024", authors: "Bausch, Senior et al.", year: 2024, url: "https://www.nature.com/articles/s41586-024-08148-8", category: "landmark" },
    { title: "Logical qubits with better-than-physical error rates", desc: "Quantinuum H2 - 9.8x to 500x below physical", authors: "Paetznick, da Silva et al.", year: 2024, url: "https://arxiv.org/abs/2404.02280", category: "qec" },
    { title: "Hardware-efficient QEC via concatenated bosonic qubits", desc: "AWS - Concatenated cat qubits, ~1.65% logical error", authors: "Putterman et al.", year: 2025, url: "https://arxiv.org/abs/2409.13025", category: "qec" },
    { title: "Logical computation with neutral atom processor", desc: "QuEra/Harvard neutral atom demo", authors: "QuEra/Harvard", year: 2024, url: "https://arxiv.org/abs/2411.11822", category: "qec" },
    { title: "QEC-Corrected Molecular Energies", desc: "Quantinuum error-corrected quantum chemistry", authors: "Yamamoto, Kikuchi et al.", year: 2025, url: "https://arxiv.org/abs/2505.09133", category: "qec" },
    { title: "Comprehensive review of QML: NISQ to Fault Tolerance", desc: "Major review of QML techniques", authors: "Wang, Liu", year: 2024, url: "https://arxiv.org/abs/2401.11351", category: "qml" },
    { title: "Barren Plateaus in Variational Quantum Computing", desc: "Nature Reviews Physics", authors: "Larocca, Cerezo et al.", year: 2024, url: "https://arxiv.org/abs/2405.00781", category: "qml" },
    { title: "QKAN: Quantum Kolmogorov-Arnold Networks", desc: "Novel quantum architecture based on KAN", authors: "Ivashkov, Huang et al.", year: 2024, url: "https://www.semanticscholar.org/paper/ebb267fa91fe54bebde362c2a64918d35596ebf2", category: "qml" },
    { title: "Quantum advantage for learning shallow NNs", desc: "Advantage with natural data distributions", authors: "Gil-Fuster, Eisert et al.", year: 2025, url: "https://arxiv.org/abs/2503.20879", category: "qml" },
    { title: "Quantum algorithms: survey of applications", desc: "End-to-end complexity analysis", authors: "Dalzell, McArdle et al.", year: 2023, url: "https://arxiv.org/abs/2310.03011", category: "algorithms" },
    { title: "Quantum Computing: Vision and Challenges", desc: "Broad QC overview", authors: "Gill et al.", year: 2024, url: "https://arxiv.org/abs/2403.02240", category: "algorithms" },
    { title: "Efficient Thermalization with Quantum Gibbs Samplers", desc: "69 citations - Universal QC via Gibbs sampling", authors: "Rouze, Stilck Franca et al.", year: 2024, url: "https://www.semanticscholar.org/paper/ab38d797e2bb769ade768b67d143996535072bd5", category: "algorithms" },
    { title: "MQT Handbook: Design Automation for QC", desc: "61 citations - QC design automation tools", authors: "Wille, Berent et al.", year: 2024, url: "https://www.semanticscholar.org/paper/3bd031ad93f5c1d013170a51050d6657f24fbb81", category: "algorithms" },
    { title: "IQM's 20-Qubit Quantum Computer Benchmarks", desc: "Performance benchmarks for IQM", authors: "Abdurakhimov et al.", year: 2024, url: "https://arxiv.org/abs/2408.12433", category: "hardware" },
    { title: "IBM Quantum: Evolution and Future", desc: "IBM QC evolution and directions", authors: "Multiple authors", year: 2024, url: "https://arxiv.org/abs/2410.00916", category: "hardware" },
    { title: "PQC and quantum future of cybersecurity", desc: "Physical Review Applied", authors: "Liu, Moody", year: 2024, url: "https://www.semanticscholar.org/paper/e156b888700d83130369434571d7cd056a51ca2b", category: "pqc" },
    { title: "PQC and Quantum-Safe Security: Survey", desc: "Complete survey of PQC", authors: "Multiple authors", year: 2025, url: "https://arxiv.org/abs/2510.10436", category: "pqc" },
];

const qmlData = [
    { title: "QML MOOC by Petter Wittek", desc: "EdX MOOC on quantum machine learning", url: "https://www.youtube.com/watch?v=QtWCmO_KIlg&list=PLmRxgFnCIhaMgvot-Xuym_hn69lmzIokg", category: "video" },
    { title: "The Emerging Role of QC in ML", desc: "Overview of QC's role in machine learning (Recommended)", url: "https://www.youtube.com/watch?v=V2WRdU56WIc", category: "video" },
    { title: "Intro to QML - Aroosa Ijaz", desc: "Webinar introduction to quantum ML", url: "https://www.youtube.com/watch?v=-DWng3jyBIM", category: "video" },
    { title: "QML talk 2020: Maria Schuld", desc: "QML concepts by leading researcher", url: "https://www.youtube.com/watch?v=C_lBYKV_pJo", category: "video" },
    { title: "QML and Pennylane - Maria Schuld", desc: "Hands-on with PennyLane framework", url: "https://www.youtube.com/watch?v=pe1d0RyCNxY", category: "video" },
    { title: "What Can We Expect from QML? - Wittek", desc: "QML expectations and challenges", url: "https://www.youtube.com/watch?v=EKWGLERVLuc", category: "video" },
    { title: "QML: Prospects and challenges", desc: "Panel on QML prospects", url: "https://www.youtube.com/watch?v=Ycy40s4aXxs", category: "video" },
    { title: "NITheP QML mini-school - Amira Abbas", desc: "First session of QML mini-school", url: "https://www.youtube.com/watch?v=iWrGVHwXPSI", category: "video" },
    { title: "Dequantizing QML - Classical Framework", desc: "Classical algorithms for dequantizing QML", url: "https://www.youtube.com/watch?v=j4k6aVihQXE", category: "video" },
    { title: "An introduction to QML - Schuld (2014)", desc: "Foundational QML paper", url: "https://arxiv.org/pdf/1409.3097.pdf", category: "paper" },
    { title: "QML by Biamonte and Wittek (2016)", desc: "Key QML framework paper", url: "https://arxiv.org/pdf/1611.09347.pdf", category: "paper" },
    { title: "QML Algorithms: Read the Fine Print - Aaronson", desc: "Critical analysis of QML claims", url: "https://www.scottaaronson.com/papers/qml.pdf", category: "paper" },
    { title: "QML: a classical perspective (2017)", desc: "Classical viewpoint on quantum ML", url: "https://arxiv.org/pdf/1707.08561.pdf", category: "paper" },
    { title: "QML for data scientists (2018)", desc: "Practical QML for data science", url: "https://arxiv.org/pdf/1804.10068.pdf", category: "paper" },
    { title: "Data re-uploading for quantum classifier", desc: "Novel quantum classification approach", url: "https://arxiv.org/pdf/1907.02085.pdf", category: "paper" },
    { title: "Quantum embeddings for ML (2020)", desc: "Embedding classical data into quantum states", url: "https://arxiv.org/pdf/2001.03622.pdf", category: "paper" },
    { title: "Parameterized quantum circuits as ML models", desc: "PQCs as machine learning models", url: "https://iopscience.iop.org/article/10.1088/2058-9565/ab4eb5/meta", category: "paper" },
    { title: "No Free Lunch for QML", desc: "Theoretical limitations of QML", url: "https://scirate.com/arxiv/2003.14103", category: "paper" },
    { title: "QML 101 - Medium", desc: "Beginner-friendly QML introduction", url: "https://towardsdatascience.com/quantum-machine-learning-101-1058f24c3487", category: "tutorial" },
    { title: "QML with PyTorch and Qiskit", desc: "Hybrid quantum-classical ML tutorial", url: "https://blog.usejournal.com/quantum-machine-learning-hybrid-quantum-classical-machine-learning-with-pytorch-and-qiskit-d03da758d58b", category: "tutorial" },
    { title: "Implementing QSVM on IBM QC", desc: "Step-by-step QSVM tutorial with Qiskit", url: "https://quantumcomputinguk.org/tutorials/how-to-implement-qsvm-algorithm-on-ibms-quantum-computers-with-qiskit", category: "tutorial" },
    { title: "Training QNNs with PennyLane, PyTorch, TF", desc: "Multi-framework quantum neural network training", url: "https://medium.com/xanaduai/training-quantum-neural-networks-with-pennylane-pytorch-and-tensorflow-c669108118cc", category: "tutorial" },
    { title: "Quantum Transfer Learning (PennyLane)", desc: "Transfer learning demo", url: "https://pennylane.ai/qml/demos/tutorial_quantum_transfer_learning.html", category: "tutorial" },
    { title: "Quantum Gradients for Classification", desc: "Calculating quantum gradients for classifiers", url: "https://colab.research.google.com/github/kareem1925/Ismailia-school-of-AI/blob/master/quantum_gradients/universal_qubit_classifier_using_gradient_descent.ipynb", category: "tutorial" },
];

const booksData = [
    { title: "Quantum Nation: India's Leap into the Future", year: 2025, url: "https://amzn.to/3PkRN8N", category: "2025" },
    { title: "Introduction to QC: From Layperson to Programmer in 30 Steps", year: 2025, url: "https://www.amazon.com/Introduction-Quantum-Computing-Layperson-Programmer/dp/303136984X", category: "2025" },
    { title: "A Gentle Introduction to Quantum Computing", year: 2024, url: "https://www.amazon.com/Gentle-Introduction-Quantum-Computing-Beginners/dp/B0D31B9NMF", category: "2024" },
    { title: "Quantum Computing for Programmers", year: 2024, url: "https://www.cambridge.org/core/books/quantum-computing-for-programmers/BA1C887BE4AC0D0D5653E71FFBEF61C6", category: "2024" },
    { title: "Essential Mathematics for Quantum Computing", year: 2024, url: "https://amzn.to/4cWP0xb", category: "2024" },
    { title: "A Practical Guide to QML and Quantum Optimization", year: 2024, url: "https://amzn.to/3U15njD", category: "2024" },
    { title: "Quantum Chemistry and Computing for the Curious", year: 2024, url: "https://amzn.to/3Jum020", category: "2024" },
    { title: "Learn QC with Python and IBM Quantum (2nd Ed)", year: 2024, url: "https://www.amazon.com/Learn-Quantum-Computing-Python-IBM-dp-1803244801/dp/1803244801", category: "2024" },
    { title: "Quantum Supremacy (Michio Kaku)", year: 2023, url: "https://mitpressbookstore.mit.edu/book/9780593744239", category: "2023" },
    { title: "QC Experimentation with Amazon Braket", year: 2023, url: "https://amzn.to/443O3yW", category: "2023" },
    { title: "Quantum Information Science", year: 2023, url: "https://amzn.to/4bj1xcL", category: "2023" },
    { title: "Law and Policy for the Quantum Age", year: 2023, url: "https://amzn.to/3xI1Krd", category: "2023" },
    { title: "Quantum Networks: A Primer", year: 2023, url: "https://amzn.to/443r3Qu", category: "2023" },
    { title: "Quantum Excellence", year: 2023, url: "https://amzn.to/4d0KL3A", category: "2023" },
    { title: "Fundamentals of QC: Theory and Practice", year: 2023, url: "https://amzn.to/49JQmby", category: "2023" },
    { title: "Dancing with Qubits, Second Edition", year: 2022, url: "https://amzn.to/4gWNv37", category: "2022" },
    { title: "Quantum Computing in Action", year: 2022, url: "https://amzn.to/3JnOlqU", category: "2022" },
    { title: "QC and Information: A Scaffolding Approach", year: 2022, url: "https://amzn.to/3UmLYe8", category: "2022" },
    { title: "Quantum Computing for the Quantum Curious", year: 2022, url: "https://amzn.to/3W5ByRx", category: "2022" },
    { title: "Mathematics of Quantum Computing", year: 2022, url: "https://amzn.to/447oMUC", category: "2022" },
    { title: "Understanding Quantum Technologies", year: 2021, url: "https://arxiv.org/abs/2111.15352v1", category: "2021" },
    { title: "Programming Quantum Computers", year: 2021, url: "https://amzn.to/4aC5Pf6", category: "2021" },
    { title: "Learn QC with Python and Q#", year: 2021, url: "https://amzn.to/3xEl5tw", category: "2021" },
    { title: "Quantum in Pictures", year: 2021, url: "https://amzn.to/448LqvY", category: "2021" },
    { title: "Q is for Quantum", year: 2021, url: "https://amzn.to/3vYLAJs", category: "2021" },
    { title: "Picturing Quantum Processes", year: 2021, url: "https://amzn.to/3Uqiuwd", category: "2021" },
    { title: "QC: An Applied Approach (Hidary, 2019)", year: 2019, url: "https://www.amazon.com/dp/3030239217", category: "classic" },
    { title: "Programming QC: Essential Algorithms (2019)", year: 2019, url: "https://www.amazon.com/Programming-Quantum-Computers-Essential-Algorithms/dp/1492039683", category: "classic" },
    { title: "Quantum computing for everyone (2019)", year: 2019, url: "https://www.amazon.com/dp/0262539535", category: "classic" },
    { title: "Supervised Learning with QC (2018)", year: 2018, url: "https://www.amazon.com/dp/3319964232", category: "classic" },
    { title: "Quantum ML (Wittek, 2014)", year: 2014, url: "https://www.amazon.com/dp/0128009535", category: "classic" },
    { title: "QC since Democritus (Aaronson, 2013)", year: 2013, url: "https://www.amazon.com/Quantum-Computing-since-Democritus-Aaronson/dp/0521199565", category: "classic" },
    { title: "Quantum Computation and QI (Nielsen & Chuang, 2011)", year: 2011, url: "https://www.amazon.com/Quantum-Computation-Information-10th-Anniversary/dp/1107002176", category: "classic" },
    { title: "QC: A Gentle Introduction (2011)", year: 2011, url: "https://www.amazon.com/Quantum-Computing-Introduction-Engineering-Computation/dp/0262526670", category: "classic" },
    { title: "QC Explained (McMahon, 2008)", year: 2008, url: "https://www.amazon.com/Quantum-Computing-Explained-David-McMahon/dp/0470096993", category: "classic" },
    { title: "QC for Computer Scientists (2008)", year: 2008, url: "https://www.amazon.com/Quantum-Computing-Computer-Scientists-Yanofsky/dp/0521879965", category: "classic" },
    { title: "An Introduction to QC (2007)", year: 2007, url: "https://www.amazon.com/dp/019857049X", category: "classic" },
];

// ============================================================
// ALL RESOURCES (for global search)
// ============================================================

const allResources = [
    ...youtubeData.map(r => ({ ...r, type: "youtube", icon: "fab fa-youtube", iconClass: "icon-youtube", tagClass: "tag-youtube", tagLabel: "YouTube" })),
    ...coursesData.map(r => ({ ...r, type: "course", icon: "fas fa-graduation-cap", iconClass: "icon-course", tagClass: "tag-course", tagLabel: "Curso" })),
    ...reposData.map(r => ({ ...r, type: "github", icon: "fab fa-github", iconClass: "icon-github", tagClass: "tag-github", tagLabel: "GitHub" })),
    ...papersData.map(r => ({ ...r, type: "paper", icon: "fas fa-file-alt", iconClass: "icon-paper", tagClass: "tag-paper", tagLabel: "Paper" })),
    ...qmlData.map(r => ({ ...r, type: "qml", icon: "fas fa-brain", iconClass: "icon-qml", tagClass: "tag-qml", tagLabel: "QML" })),
    ...booksData.map(r => ({ ...r, type: "book", icon: "fas fa-book", iconClass: "icon-book", tagClass: "tag-book", tagLabel: "Libro" })),
];

// ============================================================
// RENDER
// ============================================================

function createCard(item) {
    const starsHtml = item.stars ? `<span class="stars-badge"><i class="fas fa-star"></i> ${item.stars.toLocaleString()}</span>` : "";
    const levelHtml = item.level ? `<span class="resource-tag tag-course">${item.level}</span> ` : "";
    const yearHtml = item.year ? `<span class="resource-tag tag-paper">${item.year}</span> ` : "";
    const authorsHtml = item.authors ? `<div style="font-size:0.75rem;color:#64748b;margin-bottom:8px;">${item.authors}</div>` : "";

    return `
        <div class="resource-card" data-category="${item.category}">
            <div class="resource-card-header">
                <div class="resource-card-icon ${item.iconClass}"><i class="${item.icon}"></i></div>
                <div class="resource-card-title">${item.title}</div>
            </div>
            <div class="resource-card-desc">${item.desc}</div>
            ${authorsHtml}
            <div class="resource-card-footer">
                <div>${levelHtml}${yearHtml}<span class="resource-tag ${item.tagClass}">${item.tagLabel}</span></div>
                <div style="display:flex;align-items:center;gap:8px;">
                    ${starsHtml}
                    <a href="${item.url}" target="_blank" class="resource-card-link">Abrir <i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>`;
}

function renderSection(gridId, data, type) {
    const meta = {
        youtube: { icon: "fab fa-youtube", iconClass: "icon-youtube", tagClass: "tag-youtube", tagLabel: "YouTube" },
        course: { icon: "fas fa-graduation-cap", iconClass: "icon-course", tagClass: "tag-course", tagLabel: "Curso" },
        github: { icon: "fab fa-github", iconClass: "icon-github", tagClass: "tag-github", tagLabel: "GitHub" },
        paper: { icon: "fas fa-file-alt", iconClass: "icon-paper", tagClass: "tag-paper", tagLabel: "Paper" },
        qml: { icon: "fas fa-brain", iconClass: "icon-qml", tagClass: "tag-qml", tagLabel: "QML" },
        book: { icon: "fas fa-book", iconClass: "icon-book", tagClass: "tag-book", tagLabel: "Libro" },
    };
    const m = meta[type];
    const grid = document.getElementById(gridId);
    if (grid) grid.innerHTML = data.map(item => createCard({ ...item, ...m })).join("");
}

// ============================================================
// FILTERING
// ============================================================

function setupFilters() {
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const section = this.dataset.section;
            const category = this.dataset.category;
            this.parentElement.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const gridMap = { youtube: "youtube-grid", courses: "courses-grid", repos: "repos-grid", papers: "papers-grid", qml: "qml-grid", books: "books-grid" };
            const dataMap = { youtube: youtubeData, courses: coursesData, repos: reposData, papers: papersData, qml: qmlData, books: booksData };
            const typeMap = { youtube: "youtube", courses: "course", repos: "github", papers: "paper", qml: "qml", books: "book" };

            const filtered = category === "all" ? dataMap[section] : dataMap[section].filter(item => item.category === category);
            renderSection(gridMap[section], filtered, typeMap[section]);
        });
    });
}

// ============================================================
// GLOBAL SEARCH
// ============================================================

function setupSearch() {
    const input = document.getElementById("global-search");
    const dropdown = document.getElementById("search-dropdown");

    input.addEventListener("input", function () {
        const q = this.value.toLowerCase().trim();
        if (q.length < 2) { dropdown.classList.remove("active"); return; }

        const results = allResources.filter(r =>
            r.title.toLowerCase().includes(q) ||
            (r.desc && r.desc.toLowerCase().includes(q)) ||
            (r.authors && r.authors.toLowerCase().includes(q))
        ).slice(0, 12);

        if (results.length === 0) {
            dropdown.innerHTML = '<div class="search-no-results">No se encontraron resultados</div>';
        } else {
            dropdown.innerHTML = results.map(r => `
                <a href="${r.url}" target="_blank" class="search-result-item">
                    <div class="result-icon ${r.iconClass}"><i class="${r.icon}"></i></div>
                    <div class="result-info">
                        <div class="result-title">${r.title}</div>
                        <div class="result-meta">${r.tagLabel}${r.year ? " · " + r.year : ""}${r.stars ? " · " + r.stars.toLocaleString() + " stars" : ""}</div>
                    </div>
                </a>`).join("");
        }
        dropdown.classList.add("active");
    });

    document.addEventListener("click", e => { if (!e.target.closest(".global-search")) dropdown.classList.remove("active"); });
    document.addEventListener("keydown", e => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") { e.preventDefault(); input.focus(); }
        if (e.key === "Escape") { dropdown.classList.remove("active"); input.blur(); }
    });
}

// ============================================================
// UI
// ============================================================

function setupHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    if (hamburger) {
        hamburger.addEventListener("click", () => { navMenu.classList.toggle("active"); });
        document.querySelectorAll(".nav-link").forEach(link =>
            link.addEventListener("click", () => navMenu.classList.remove("active"))
        );
    }
}

function setupScrollTop() {
    const btn = document.getElementById("scroll-top");
    window.addEventListener("scroll", () => btn.classList.toggle("visible", window.scrollY > 400));
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

// ============================================================
// INIT
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
    renderSection("youtube-grid", youtubeData, "youtube");
    renderSection("courses-grid", coursesData, "course");
    renderSection("repos-grid", reposData, "github");
    renderSection("papers-grid", papersData, "paper");
    renderSection("qml-grid", qmlData, "qml");
    renderSection("books-grid", booksData, "book");
    setupFilters();
    setupSearch();
    setupHamburger();
    setupScrollTop();
    setupSmoothScroll();
});
