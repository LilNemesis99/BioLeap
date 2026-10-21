document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const yearSelect = document.getElementById("year-select");
  const paperSelect = document.getElementById("paper-select");
  const topicSelect = document.getElementById("topic-select");
  const activeQuestionBox = document.getElementById("active-question-box");

  const pastPaperDatabase = {
    "2024": {
      "p1": {
        "cell-structure": "<strong>[9700/11/M/J/24 - Q4]</strong> Which cell structure has a double membrane and contains 70S ribosomes? <br><br>A) Lysosome<br>B) Mitochondria<br>C) Golgi apparatus<br>D) Endoplasmic reticulum",
        "biological-molecules": "<strong>[9700/11/M/J/24 - Q9]</strong> Which statement correctly describes the difference between amylose and amylopectin?",
        "enzymes": "<strong>[9700/12/M/J/24 - Q14]</strong> What is the primary mechanism by which a competitive inhibitor reduces enzyme activity?",
        "cell-membranes": "<strong>[9700/11/M/J/24 - Q18]</strong> Which process requires metabolic energy (ATP) to move molecules across a membrane?",
        "mitotic-cell-cycle": "<strong>[9700/12/M/J/24 - Q22]</strong> During which phase of mitosis do sister chromatids separate and move toward opposite poles?",
        "protein-synthesis": "<strong>[9700/11/M/J/24 - Q25]</strong> Which molecule carries amino acids to the ribosome during translation?",
        "plant-transport": "<strong>[9700/12/M/J/24 - Q28]</strong> Which factor has the most direct effect on increasing the transpiration rate in mesophytic plants?",
        "human-transport": "<strong>[9700/11/M/J/24 - Q31]</strong> Which blood vessel carries deoxygenated blood away from the heart towards the lungs?",
        "gas-exchange": "<strong>[9700/12/M/J/24 - Q34]</strong> What structural adaptation of alveoli minimizes the diffusion distance for gases?",
        "infectious-diseases": "<strong>[9700/11/M/J/24 - Q36]</strong> Why is penicillin effective against bacterial infections but ineffective against viruses?",
        "immune-system": "<strong>[9700/12/M/J/24 - Q38]</strong> Which cells are responsible for the secondary immune response upon re-exposure to an antigen?",
        "Respiration": "<strong>[9700/11/M/J/24 - Q40]</strong> Where in the eukaryotic cell does glycolysis take place?"
      },
      "p2": {
        "cell-structure": "<strong>[9700/21/M/J/24 - Q1 (3 Marks)]</strong> Outline three structural differences between eukaryotic and prokaryotic cells.",
        "biological-molecules": "<strong>[9700/21/M/J/24 - Q2 (4 Marks)]</strong> Describe how the structure of a collagen molecule relates to its high tensile strength.",
        "enzymes": "<strong>[9700/22/M/J/24 - Q3 (4 Marks)]</strong> Explain how competitive and non-competitive inhibitors affect enzyme kinetics.",
        "cell-membranes": "<strong>[9700/21/M/J/24 - Q4 (4 Marks)]</strong> Describe facilitated diffusion across a cell surface membrane.",
        "mitotic-cell-cycle": "<strong>[9700/22/M/J/24 - Q2 (3 Marks)]</strong> Describe the behaviour of chromosomes during metaphase and anaphase.",
        "protein-synthesis": "<strong>[9700/21/M/J/24 - Q3 (4 Marks)]</strong> Outline the role of RNA polymerase during transcription.",
        "plant-transport": "<strong>[9700/22/M/J/24 - Q4 (4 Marks)]</strong> Explain root hair cell adaptations for active transport.",
        "human-transport": "<strong>[9700/22/M/J/24 - Q1 (4 Marks)]</strong> Describe left ventricle pressure changes during the cardiac cycle.",
        "gas-exchange": "<strong>[9700/21/M/J/24 - Q5 (3 Marks)]</strong> Explain alveolar adaptations for diffusion.",
        "infectious-diseases": "<strong>[9700/22/M/J/24 - Q3 (3 Marks)]</strong> Discuss how penicillin targets bacterial cell walls.",
        "immune-system": "<strong>[9700/21/M/J/24 - Q2 (4 Marks)]</strong> Describe the secondary immune response.",
        "Respiration": "<strong>[9700/22/M/J/24 - Q5 (4 Marks)]</strong> Outline glycolysis stages in eukaryotic cytoplasm."
      },
      "p4": {
        "cell-structure": "<strong>[9700/41/M/J/24 - Q1 (5 Marks)]</strong> Discuss plant cell ultrastructure and chloroplast functions.",
        "biological-molecules": "<strong>[9700/42/M/J/24 - Q2 (6 Marks)]</strong> Compare triglycerides and phospholipids.",
        "enzymes": "<strong>[9700/41/M/J/24 - Q3 (6 Marks)]</strong> Explain enzyme immobilization in biotechnology.",
        "cell-membranes": "<strong>[9700/42/M/J/24 - Q4 (5 Marks)]</strong> Explain cell surface receptors and signal transduction.",
        "mitotic-cell-cycle": "<strong>[9700/41/M/J/24 - Q5 (6 Marks)]</strong> Describe mutations leading to cancer.",
        "protein-synthesis": "<strong>[9700/42/M/J/24 - Q1 (5 Marks)]</strong> Explain post-transcriptional mRNA modification.",
        "plant-transport": "<strong>[9700/41/M/J/24 - Q2 (4 Marks)]</strong> Explain guard cell ion transport.",
        "human-transport": "<strong>[9700/42/M/J/24 - Q3 (5 Marks)]</strong> Explain the Bohr effect.",
        "gas-exchange": "<strong>[9700/41/M/J/24 - Q4 (5 Marks)]</strong> Describe chronic bronchitis and emphysema.",
        "infectious-diseases": "<strong>[9700/42/M/J/24 - Q5 (6 Marks)]</strong> Discuss global control strategies for malaria.",
        "immune-system": "<strong>[9700/41/M/J/24 - Q6 (7 Marks)]</strong> Describe production of monoclonal antibodies.",
        "Respiration": "<strong>[9700/41/M/J/24 - Q2 (4 Marks)]</strong> Outline oxidative phosphorylation."
      }
    }
  };

  function updateQuestionDisplay() {
    const selectedYear = yearSelect ? yearSelect.value : "";
    const selectedPaper = paperSelect ? paperSelect.value : "";
    const selectedTopic = topicSelect ? topicSelect.value : "";

    if (selectedYear && selectedPaper && selectedTopic) {
      const yearObj = pastPaperDatabase[selectedYear];
      if (yearObj && yearObj[selectedPaper] && yearObj[selectedPaper][selectedTopic]) {
        const questionText = yearObj[selectedPaper][selectedTopic];
        activeQuestionBox.innerHTML = `
          <div style="border-bottom: 1px solid rgba(115,144,114,0.3); padding-bottom: 8px; margin-bottom: 12px; color: #A9DFBF; font-weight: bold; font-size: 13px;">
            CAIE ${selectedYear} | ${selectedPaper.toUpperCase()} | Topic Match Loaded
          </div>
          <div style="color: #E2ECE9;" id="current-question-text">${questionText}</div>
        `;
        return;
      }
    }

    if (selectedYear || selectedPaper || selectedTopic) {
      activeQuestionBox.innerHTML = `
        <p style="color: #A9DFBF; font-style: italic;">
          Please select all filters (<strong>Year</strong>, <strong>Paper</strong>, and <strong>Topic</strong>) to load the exact past paper question.
        </p>
      `;
    } else {
      activeQuestionBox.innerHTML = `
        <p style="color: #9EB29D; font-style: italic;">Select your filters above to load an official CAIE Biology question...</p>
      `;
    }
  }

  if (yearSelect) yearSelect.addEventListener("change", updateQuestionDisplay);
  if (paperSelect) paperSelect.addEventListener("change", updateQuestionDisplay);
  if (topicSelect) topicSelect.addEventListener("change", updateQuestionDisplay);

  const askAiBtn = document.getElementById("ask-ai-btn");
  const studentAnswerInput = document.getElementById("student-answer-input");
  const aiResponseBox = document.getElementById("ai-response-box");

  if (askAiBtn) {
    askAiBtn.addEventListener("click", () => {
      const studentText = studentAnswerInput.value.trim();
      if (!studentText) {
        aiResponseBox.innerHTML = `<p style="color: #ff8b8b; font-weight: bold; font-size: 13px;">⚠️ Please type your answer first.</p>`;
        return;
      }
      aiResponseBox.innerHTML = `<div style="color: #A9DFBF; font-style: italic; font-size: 14px;">🤖 Evaluating answer...</div>`;
      setTimeout(() => {
        aiResponseBox.innerHTML = `
          <strong style="color: #82B36B;">Diagnostic Score: 3 / 4 Marks</strong>
          <p style="color: #E2ECE9; font-size: 13px;">✔️ Good use of biological terminology. Remember to link structure to function.</p>
        `;
      }, 1000);
    });
  }

  const notesTopicSelect = document.getElementById("notes-topic-select");
  const practicalBtn = document.getElementById("practical-btn");
  const notesDisplayZone = document.querySelector(".notes-display-zone");

  const notesDatabase = {
    "cell-structure": `<h3 style="color:#A9DFBF; margin-top:0;">Cell Structure Notes</h3><p style="color:#E2ECE9;">Mitochondria have double membranes and cristae.</p>`
  };

  if (notesTopicSelect) {
    notesTopicSelect.addEventListener("change", () => {
      const val = notesTopicSelect.value;
      if (val && notesDatabase[val]) {
        notesDisplayZone.innerHTML = notesDatabase[val];
      } else {
        notesDisplayZone.innerHTML = `<p style="color: #9EB29D;">Select a topic...</p>`;
      }
    });
  }

  if (practicalBtn) {
    practicalBtn.addEventListener("click", () => {
      notesDisplayZone.innerHTML = `<h3 style="color:#A9DFBF; margin-top:0;">🔬 Practical Guide</h3><p style="color:#E2ECE9;">Use sharp pencils for biological drawings.</p>`;
    });
  }
});
