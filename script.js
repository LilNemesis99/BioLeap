// Wait for DOM content to load fully before running scripts
document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // 1. SINGLE-PAGE NAVIGATION & SMOOTH SCROLLING
  // ==========================================
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");

      // Update active nav styling
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // Smooth scroll to target section
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ==========================================
  // 2. PAST PAPER FILTER & QUESTION DATABASE
  // ==========================================
  const yearSelect = document.getElementById("year-select");
  const paperSelect = document.getElementById("paper-select");
  const topicSelect = document.getElementById("topic-select");
  const activeQuestionBox = document.getElementById("active-question-box");

  // CAIE Biology Past Paper Question Database
  const questionDatabase = {
    "cell-structure": {
      title: "Cell Structure & Ultrastructure",
      question: "<strong>Question (4 Marks):</strong> Describe the structural differences between eukaryotic and prokaryotic cells, with specific reference to organelle compartmentalization, cell wall composition, and ribosomal size."
    },
    "biological-molecules": {
      title: "Biological Molecules",
      question: "<strong>Question (3 Marks):</strong> Explain how the molecular structure of starch (amylose and amylopectin) relates to its function as a storage carbohydrate in plant cells."
    },
    "enzymes": {
      title: "Enzymes & Kinetics",
      question: "<strong>Question (5 Marks):</strong> Describe and explain the effect of competitive and non-competitive inhibitors on the rate of an enzyme-catalysed reaction as substrate concentration increases."
    },
    "cell-membranes": {
      title: "Cell Membranes & Transport",
      question: "<strong>Question (4 Marks):</strong> Outline the process of active transport across a cell surface membrane, referencing carrier proteins, conformational changes, and ATP hydrolysis."
    },
    "mitotic-cell-cycle": {
      title: "Mitotic Cell Cycle",
      question: "<strong>Question (3 Marks):</strong> Explain the importance of mitosis and the maintenance of chromosome number in growth, tissue repair, and asexual reproduction."
    },
    "protein-synthesis": {
      title: "Protein Synthesis",
      question: "<strong>Question (4 Marks):</strong> Outline the process of transcription in eukaryotic cells, explaining the role of RNA polymerase and complementary base pairing."
    },
    "plant-transport": {
      title: "Plant Transport",
      question: "<strong>Question (4 Marks):</strong> Explain how the cohesion-tension theory accounts for the movement of water upwards through xylem vessels from roots to leaves."
    },
    "human-transport": {
      title: "Human Transport",
      question: "<strong>Question (3 Marks):</strong> Describe the events of the cardiac cycle, emphasizing the pressure changes in the left atrium and left ventricle during ventricular systole."
    },
    "gas-exchange": {
      title: "Gas Exchange",
      question: "<strong>Question (4 Marks):</strong> Explain how the structural features of human alveoli and pulmonary capillaries adapt them for maximum rate of gas diffusion."
    },
    "infectious-diseases": {
      title: "Infectious Diseases",
      question: "<strong>Question (3 Marks):</strong> Discuss the biological mechanism by which penicillin acts on bacterial cell walls and why penicillin is ineffective against viral infections."
    },
    "immune-system": {
      title: "Immune System",
      question: "<strong>Question (5 Marks):</strong> Describe the secondary immune response triggered upon re-exposure to a pathogen, comparing it to the primary response in terms of speed, antibody concentration, and memory B-lymphocytes."
    },
    "Respiration": {
      title: "Respiration",
      question: "<strong>Question (4 Marks):</strong> Outline the main stages of glycolysis in eukaryotic cytoplasm, stating the net production of ATP, reduced NAD, and pyruvate per glucose molecule."
    }
  };

  function updateQuestionDisplay() {
    const selectedTopic = topicSelect ? topicSelect.value : "";
    const selectedYear = yearSelect ? yearSelect.value : "";
    const selectedPaper = paperSelect ? paperSelect.value : "";

    if (selectedTopic && questionDatabase[selectedTopic]) {
      const qData = questionDatabase[selectedTopic];
      const paperName = selectedPaper ? selectedPaper.toUpperCase() : "Paper";
      const yearName = selectedYear ? selectedYear : "2024";

      activeQuestionBox.innerHTML = `
        <div style="border-bottom: 1px solid rgba(115,144,114,0.3); padding-bottom: 8px; margin-bottom: 12px; color: #A9DFBF; font-weight: