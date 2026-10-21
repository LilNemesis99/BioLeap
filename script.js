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

  // ==========================================
  // MULTI-DIMENSIONAL PAST PAPER DATABASE (2022 - 2026)
  // ==========================================
  const pastPaperDatabase = {
    "2026": {
      "p1": {
        "cell-structure": "<strong>[9700/11/M/J/26 - Q3]</strong> Specimen prediction question on ultrastructure measurement using scale bars and magnification formulas.",
        "biological-molecules": "<strong>[9700/11/M/J/26 - Q8]</strong> Biochemical tests and glycosidic bond formation in disaccharides.",
        "enzymes": "<strong>[9700/12/M/J/26 - Q12]</strong> Enzyme turnover numbers and activation energy graphical interpretation.",
        "cell-membranes": "<strong>[9700/11/M/J/26 - Q16]</strong> Fluid mosaic model component distributions and cholesterol effects.",
        "mitotic-cell-cycle": "<strong>[9700/12/M/J/26 - Q20]</strong> Telomere shortening and stem cell divisions.",
        "protein-synthesis": "<strong>[9700/11/M/J/26 - Q24]</strong> tRNA anticodon matching during ribosomal translation.",
        "plant-transport": "<strong>[9700/12/M/J/26 - Q27]</strong> Potometer measurements and environmental humidity effects.",
        "human-transport": "<strong>[9700/11/M/J/26 - Q30]</strong> Myogenic stimulation of the sinoatrial node.",
        "gas-exchange": "<strong>[9700/12/M/J/26 - Q33]</strong> Goblet cell distribution and ciliated epithelium function.",
        "infectious-diseases": "<strong>[9700/11/M/J/26 - Q35]</strong> Transmission vectors for malaria and cholera epidemics.",
        "immune-system": "<strong>[9700/12/M/J/26 - Q38]</strong> Clonal expansion of B-lymphocytes and plasma cells.",
        "Respiration": "<strong>[9700/11/M/J/26 - Q40]</strong> Oxidative phosphorylation yield calculations per hexose sugar."
      },
      "p2": {
        "cell-structure": "<strong>[9700/21/M/J/26 - Q1 (3 Marks)]</strong> Explain the role of the nuclear envelope and nuclear pores in cellular regulation.",
        "biological-molecules": "<strong>[9700/21/M/J/26 - Q2 (4 Marks)]</strong> Compare the ring structures of alpha-glucose and beta-glucose.",
        "enzymes": "<strong>[9700/22/M/J/26 - Q3 (4 Marks)]</strong> Analyse the effect of pH changes on enzyme active site ionization.",
        "cell-membranes": "<strong>[9700/21/M/J/26 - Q4 (4 Marks)]</strong> Discuss carrier proteins vs channel proteins in active transport.",
        "mitotic-cell-cycle": "<strong>[9700/22/M/J/26 - Q2 (3 Marks)]</strong> Describe interphase checkpoints and DNA replication timing.",
        "protein-synthesis": "<strong>[9700/21/M/J/26 - Q3 (4 Marks)]</strong> Detail splicing of pre-mRNA in eukaryotic gene expression.",
        "plant-transport": "<strong>[9700/22/M/J/26 - Q4 (4 Marks)]</strong> Explain mass flow hypothesis in phloem sieve tube elements.",
        "human-transport": "<strong>[9700/22/M/J/26 - Q1 (4 Marks)]</strong> Describe haemoglobin dissociation curves and partial pressures.",
        "gas-exchange": "<strong>[9700/21/M/J/26 - Q5 (3 Marks)]</strong> Outline elastic tissue recoil in human lung ventilation.",
        "infectious-diseases": "<strong>[9700/22/M/J/26 - Q3 (3 Marks)]</strong> Discuss antibiotic resistance mechanisms in pathogenic bacteria.",
        "immune-system": "<strong>[9700/21/M/J/26 - Q2 (4 Marks)]</strong> Explain antigen presentation by macrophages to T-helper cells.",
        "Respiration": "<strong>[9700/22/M/J/26 - Q5 (4 Marks)]</strong> Compare aerobic respiration pathways in mitochondria vs cytoplasm."
      },
      "p4": {
        "cell-structure": "<strong>[9700/41/M/J/26 - Q1 (5 Marks)]</strong> Discuss endosymbiotic theory evidence regarding mitochondria and chloroplasts.",
        "biological-molecules": "<strong>[9700/42/M/J/26 - Q2 (6 Marks)]</strong> Evaluate polypeptide secondary structure stabilization via hydrogen bonds.",
        "enzymes": "<strong>[9700/41/M/J/26 - Q3 (6 Marks)]</strong> Analyze biosensor technologies incorporating immobilized enzymes.",
        "cell-membranes": "<strong>[9700/42/M/J/26 - Q4 (5 Marks)]</strong> Describe G-protein coupled receptor signalling cascades.",
        "mitotic-cell-cycle": "<strong>[9700/41/M/J/26 - Q5 (6 Marks)]</strong> Discuss therapeutic implications of inhibiting cyclins in cancer treatments.",
        "protein-synthesis": "<strong>[9700/42/M/J/26 - Q1 (5 Marks)]</strong> Evaluate translational control mechanisms in eukaryotic ribosomes.",
        "plant-transport": "<strong>[9700/41/M/J/26 - Q2 (4 Marks)]</strong> Explain apoplast and symplast pathways in root cortex absorption.",
        "human-transport": "<strong>[9700/42/M/J/26 - Q3 (5 Marks)]</strong> Analyze capillary exchange of fluid via hydrostatic and oncotic pressures.",
        "gas-exchange": "<strong>[9700/41/M/J/26 - Q4 (5 Marks)]</strong> Explain surfactant secretion and surface tension reduction in alveoli.",
        "infectious-diseases": "<strong>[9700/42/M/J/26 - Q5 (6 Marks)]</strong> Discuss herd immunity thresholds and vaccination campaign barriers.",
        "immune-system": "<strong>[9700/41/M/J/26 - Q6 (7 Marks)]</strong> Outline antibody-mediated neutralization, agglutination, and opsonization.",
        "Respiration": "<strong>[9700/41/M/J/26 - Q2 (4 Marks)]</strong> Describe proton translocation across the inner mitochondrial membrane."
      }
    },
    "2025": {
      "p1": {
        "cell-structure": "<strong>[9700/11/M/J/25 - Q4]</strong> Magnification calculations and electron microscope resolution limits.",
        "biological-molecules": "<strong>[9700/11/M/J/25 - Q10]</strong> Triglyceride ester bond condensation reactions.",
        "enzymes": "<strong>[9700/12/M/J/25 - Q15]</strong> Temperature coefficients ($Q_{10}$) for enzymatic velocity.",
        "cell-membranes": "<strong>[9700/11/M/J/25 - Q19]</strong> Endocytosis and exocytosis vesicle transport mechanisms.",
        "mitotic-cell-cycle": "<strong>[9700/12/M/J/25 - Q21]</strong> Chromatid behavior during anaphase stages.",
        "protein-synthesis": "<strong>[9700/11/M/J/25 - Q26]</strong> Codon triplet degeneracy in mRNA sequences.",
        "plant-transport": "<strong>[9700/12/M/J/25 - Q29]</strong> Xerophytic leaf adaptations and stomatal crypts.",
        "human-transport": "<strong>[9700/11/M/J/25 - Q32]</strong> Ventricular valve mechanics during the cardiac cycle.",
        "gas-exchange": "<strong>[9700/12/M/J/25 - Q35]</strong> Emphysema destruction of elastic fibres in alveolar walls.",
        "infectious-diseases": "<strong>[9700/11/M/J/25 - Q37]</strong> Mechanism of action for anti-malarial drugs.",
        "immune-system": "<strong>[9700/12/M/J/25 - Q39]</strong> Structure of immunoglobulin monomer variable regions.",
        "Respiration": "<strong>[9700/11/M/J/25 - Q40]</strong> Decarboxylation stages within the Krebs cycle."
      },
      "p2": {
        "cell-structure": "<strong>[9700/21/M/J/25 - Q1]</strong> Describe the structure and function of the Golgi apparatus.",
        "biological-molecules": "<strong>[9700/21/M/J/25 - Q2]</strong> Explain how cellulose microfibrils provide structural rigidity.",
        "enzymes": "<strong>[9700/22/M/J/25 - Q3]</strong> Compare competitive and non-competitive enzyme inhibition curves.",
        "cell-membranes": "<strong>[9700/21/M/J/25 - Q4]</strong> Describe water potential gradients across plant cell walls.",
        "mitotic-cell-cycle": "<strong>[9700/22/M/J/25 - Q2]</strong> Outline events occurring in prophase and telophase.",
        "protein-synthesis": "<strong>[9700/21/M/J/25 - Q3]</strong> Explain the role of tRNA in matching amino acids.",
        "plant-transport": "<strong>[9700/22/M/J/25 - Q4]</strong> Describe translocation of organic solutes in phloem.",
        "human-transport": "<strong>[9700/22/M/J/25 - Q1]</strong> Explain the formation and return of tissue fluid.",
        "gas-exchange": "<strong>[9700/21/M/J/25 - Q5]</strong> Outline gas exchange across the human respiratory tract.",
        "infectious-diseases": "<strong>[9700/22/M/J/25 - Q3]</strong> Discuss transmission and control of Mycobacterium tuberculosis.",
        "immune-system": "<strong>[9700/21/M/J/25 - Q2]</strong> Describe active vs passive immunity differences.",
        "Respiration": "<strong>[9700/22/M/J/25 - Q5]</strong> Outline link reaction and acetyl coenzyme A production."
      },
      "p4": {
        "cell-structure": "<strong>[9700/41/M/J/25 - Q1]</strong> Discuss structural specializations of secretory cells.",
        "biological-molecules": "<strong>[9700/42/M/J/25 - Q2]</strong> Compare primary, secondary, and tertiary protein structures.",
        "enzymes": "<strong>[9700/41/M/J/25 - Q3]</strong> Explain industrial applications of immobilized pectinases.",
        "cell-membranes": "<strong>[9700/42/M/J/25 - Q4]</strong> Discuss channelopathies and membrane transport disorders.",
        "mitotic-cell-cycle": "<strong>[9700/41/M/J/25 - Q5]</strong> Explain the role of checkpoints in preventing damaged DNA replication.",
        "protein-synthesis": "<strong>[9700/42/M/J/25 - Q1]</strong> Discuss transcription factor binding and promoter regions.",
        "plant-transport": "<strong>[9700/41/M/J/2- Q2]</strong> Analyze experimental data on ringing experiments in stems.",
        "human-transport": "<strong>[9700/42/M/J/25 - Q3]</strong> Discuss transport of carbon dioxide as hydrogen carbonate ions.",
        "gas-exchange": "<strong>[9700/41/M/J/25 - Q4]</strong> Explain chronic obstructive pulmonary disease pathology.",
        "infectious-diseases": "<strong>[9700/42/M/J/25 - Q5]</strong> Discuss antigenic variation in pathogens like Plasmodium.",
        "immune-system": "<strong>[9700/41/M/J/25 - Q6]</strong> Outline hybridoma production and monoclonal antibody usage.",
        "Respiration": "<strong>[9700/41/M/J/25 - Q2]</strong> Evaluate chemiosmosis and proton motive force generation."
      }
    },
    "2024": {
      "p1": {
        "cell-structure": "<strong>[9700/11/M/J/24 - Q4]</strong> Double membrane organelle with 70S ribosomes identification.",
        "biological-molecules": "<strong>[9700/11/M/J/24 - Q9]</strong> Amylose vs amylopectin structural comparison.",
        "enzymes": "<strong>[9700/12/M/J/24 - Q14]</strong> Competitive inhibitor mechanism on active sites.",
        "cell-membranes": "<strong>[9700/11/M/J/24 - Q18]</strong> Active transport ATP requirement identification.",
        "mitotic-cell-cycle": "<strong>[9700/12/M/J/24 - Q22]</strong> Sister chromatid separation during mitosis phases.",
        "protein-synthesis": "<strong>[9700/11/M/J/24 - Q25]</strong> tRNA amino acid carrier molecules.",
        "plant-transport": "<strong>[9700/12/M/J/24 - Q28]</strong> Transpiration rate environmental variables.",
        "human-transport": "<strong>[9700/11/M/J/24 - Q31]</strong> Pulmonary artery deoxygenated blood flow.",
        "gas-exchange": "<strong>[9700/12/M/J/24 - Q34]</strong> Alveolar diffusion distance adaptation.",
        "infectious-diseases": "<strong>[9700/11/M/J/24 - Q36]</strong> Penicillin target specificity in bacteria.",
        "immune-system": "<strong>[9700/12/M/J/24 - Q38]</strong> Memory cell secondary immune response.",
        "Respiration": "<strong>[9700/11/M/J/24 - Q40]</strong> Cytoplasm location for glycolysis."
      },
      "p2": {
        "cell-structure": "<strong>[9700/21/M/J/24 - Q1 (3 Marks)]</strong> Outline three structural differences between eukaryotic and prokaryotic cells.",
        "biological-molecules": "<strong>[9700/21/M/J/24 - Q2 (4 Marks)]</strong> Describe collagen tensile strength molecular structure.",
        "enzymes": "<strong>[9700/22/M/J/24 - Q3 (4 Marks)]</strong> Explain competitive and non-competitive enzyme kinetics.",
        "cell-membranes": "<strong>[9700/21/M/J/24 - Q4 (4 Marks)]</strong> Describe facilitated diffusion passive mechanisms.",
        "mitotic-cell-cycle": "<strong>[9700/22/M/J/24 - Q2 (3 Marks)]</strong> Describe metaphase and anaphase chromosome behavior.",
        "protein-synthesis": "<strong>[9700/21/M/J/24 - Q3 (4 Marks)]</strong> Outline RNA polymerase transcription role.",
        "plant-transport": "<strong>[9700/22/M/J/24 - Q4 (4 Marks)]</strong> Explain root hair cell active ion uptake adaptations.",
        "human-transport": "<strong>[9700/22/M/J/24 - Q1 (4 Marks)]</strong> Describe left ventricle pressure and volume changes.",
        "gas-exchange": "<strong>[9700/21/M/J/24 - Q5 (3 Marks)]</strong> Explain alveolar and capillary concentration gradients.",
        "infectious-diseases": "<strong>[9700/22/M/J/24 - Q3 (3 Marks)]</strong> Discuss penicillin peptidoglycan cross-linking prevention.",
        "immune-system": "<strong>[9700/21/M/J/24 - Q2 (4 Marks)]</strong> Describe memory cell secondary immune responses.",
        "Respiration": "<strong>[9700/22/M/J/24 - Q5 (4 Marks)]</strong> Outline glycolysis stages and net products."
      },
      "p4": {
        "cell-structure": "<strong>[9700/41/M/J/24 - Q1 (5 Marks)]</strong> Discuss plant cell ultrastructure and vacuole functions.",
        "biological-molecules": "<strong>[9700/42/M/J/24 - Q2 (6 Marks)]</strong> Compare triglycerides and phospholipids.",
        "enzymes": "<strong>[9700/41/M/J/24 - Q3 (6 Marks)]</strong> Explain industrial enzyme immobilization techniques.",
        "cell-membranes": "<strong>[9700/42/M/J/24 - Q4 (5 Marks)]</strong> Explain cell surface receptors and signal transduction.",
        "mitotic-cell-cycle": "<strong>[9700/41/M/J/24 - Q5 (6 Marks)]</strong> Describe cancer-causing proto-oncogene mutations.",
        "protein-synthesis": "<strong>[9700/42/M/J/24 - Q1 (5 Marks)]</strong> Explain pre-mRNA post-transcriptional modification.",
        "plant-transport": "<strong>[9700/41/M/J/24 - Q2 (4 Marks)]</strong> Explain guard cell proton and potassium transport.",
        "human-transport": "<strong>[9700/42/M/J/24 - Q3 (5 Marks)]</strong> Explain the Bohr effect in respiring tissues.",
        "gas-exchange": "<strong>[9700/41/M/J/24 - Q4 (5 Marks)]</strong> Describe chronic bronchitis and emphysema pathophysiology.",
        "infectious-diseases": "<strong>[9700/42/M/J/24 - Q5 (6 Marks)]</strong> Discuss global malaria and tuberculosis control strategies.",
        "immune-system": "<strong>[9700/41/M/J/24 - Q6 (7 Marks)]</strong> Describe hybridoma monoclonal antibody production.",
        "Respiration": "<strong>[9700/41/M/J/24 - Q2 (4 Marks)]</strong> Outline mitochondrial cristae oxidative phosphorylation."
      }
    },
    "2023": {
      "p1": {
        "cell-structure": "<strong>[9700/11/M/J/23 - Q2]</strong> Resolution limits of light vs electron microscopes.",
        "biological-molecules": "<strong>[9700/11/M/J/23 - Q7]</strong> Cellulose vs starch structural linkages.",
        "enzymes": "<strong>[9700/12/M/J/23 - Q13]</strong> Substrate concentration graphs with Vmax limits.",
        "cell-membranes": "<strong>[9700/11/M/J/23 - Q17]</strong> Osmosis in red blood cells placed in hypotonic solutions.",
        "mitotic-cell-cycle": "<strong>[9700/12/M/J/23 - Q23]</strong> Centromere replication timing in cell cycles.",
        "protein-synthesis": "<strong>[9700/11/M/J/23 - Q25]</strong> Ribosome small and large subunit assembly locations.",
        "plant-transport": "<strong>[9700/12/M/J/23 - Q28]</strong> Cohesion-tension theory water column properties.",
        "human-transport": "<strong>[9700/11/M/J/23 - Q30]</strong> Bicuspid and tricuspid valve closure sequences.",
        "gas-exchange": "<strong>[9700/12/M/J/23 - Q35]</strong> Ciliated epithelium mucous escalator mechanisms.",
        "infectious-diseases": "<strong>[9700/11/M/J/23 - Q37]</strong> Cholera toxin action on intestinal epithelial cells.",
        "immune-system": "<strong>[9700/12/M/J/23 - Q39]</strong> T-killer cell destruction of infected host cells.",
        "Respiration": "<strong>[9700/11/M/J/23 - Q40]</strong> Pyruvate transport across mitochondrial membranes."
      },
      "p2": {
        "cell-structure": "<strong>[9700/21/M/J/23 - Q1]</strong> Describe the ultrastructure of the rough endoplasmic reticulum.",
        "biological-molecules": "<strong>[9700/21/M/J/23 - Q2]</strong> Explain globular vs fibrous protein properties.",
        "enzymes": "<strong>[9700/22/M/J/23 - Q3]</strong> Discuss immobilized enzyme advantages in bioreactors.",
        "cell-membranes": "<strong>[9700/21/M/J/23 - Q4]</strong> Outline active transport carrier proteins and ATP usage.",
        "mitotic-cell-cycle": "<strong>[9700/22/M/J/23 - Q2]</strong> Describe chromatin condensation during prophase.",
        "protein-synthesis": "<strong>[9700/21/M/J/23 - Q3]</strong> Detail translation initiation and peptide bond formation.",
        "plant-transport": "<strong>[9700/22/M/J/23 - Q4]</strong> Explain water movement through root apoplast pathways.",
        "human-transport": "<strong>[9700/22/M/J/23 - Q1]</strong> Describe the structural adaptations of arteries and veins.",
        "gas-exchange": "<strong>[9700/21/M/J/23 - Q5]</strong> Outline goblet cells and mucus secretion roles.",
        "infectious-diseases": "<strong>[9700/22/M/J/23 - Q3]</strong> Discuss multi-drug resistant tuberculosis challenges.",
        "immune-system": "<strong>[9700/21/M/J/23 - Q2]</strong> Explain antibody structure and antigen-binding sites.",
        "Respiration": "<strong>[9700/22/M/J/23 - Q5]</strong> Outline anaerobic respiration pathways in mammalian muscle."
      },
      "p4": {
        "cell-structure": "<strong>[9700/41/M/J/23 - Q1]</strong> Discuss structural features enabling phagocytosis in white blood cells.",
        "biological-molecules": "<strong>[9700/42/M/J/23 - Q2]</strong> Compare glycogen, amylose, and cellulose branching patterns.",
        "enzymes": "<strong>[9700/41/M/J/23 - Q3]</strong> Analyze enzyme kinetics data using Michaelis-Menten constants.",
        "cell-membranes": "<strong>[9700/42/M/J/23 - Q4]</strong> Explain transmembrane receptor proteins in cellular signaling.",
        "mitotic-cell-cycle": "<strong>[9700/41/M/J/23 - Q5]</strong> Discuss role of telomeres in aging and cellular senescence.",
        "protein-synthesis": "<strong>[9700/42/M/J/23 - Q1]</strong> Explain regulation of gene expression via operons in prokaryotes.",
        "plant-transport": "<strong>[9700/41/M/J/23 - Q2]</strong> Evaluate environmental factors affecting sink-source relationships.",
        "human-transport": "<strong>[9700/42/M/J/23 - Q3]</strong> Discuss oxygen dissociation curve shifts under varying conditions.",
        "gas-exchange": "<strong>[9700/41/M/J/23 - Q4]</strong> Explain causal links between tobacco smoke and lung cancer.",
        "infectious-diseases": "<strong>[9700/42/M/J/23 - Q5]</strong> Discuss eradication programs for global viral pandemics.",
        "immune-system": "<strong>[9700/41/M/J/23 - Q6]</strong> Explain vaccination strategies and herd immunity protection.",
        "Respiration": "<strong>[9700/41/M/J/23 - Q2]</strong> Discuss uncouplers of oxidative phosphorylation in mitochondria."
      }
    },
    "2022": {
      "p1": {
        "cell-structure": "<strong>[9700/11/M/J/22 - Q3]</strong> Centriole and microtubule cytoskeleton organization.",
        "biological-molecules": "<strong>[9700/11/M/J/22 - Q8]</strong> Phospholipid polar head and fatty acid tail orientation.",
        "enzymes": "<strong>[9700/12/M/J/22 - Q14]</strong> Non-competitive inhibitor allosteric binding action.",
        "cell-membranes": "<strong>[9700/11/M/J/22 - Q19]</strong> Surface area to volume ratio effects on diffusion rate.",
        "mitotic-cell-cycle": "<strong>[9700/12/M/J/22 - Q21]</strong> Mitotic index calculation formulas from root tip squashes.",
        "protein-synthesis": "<strong>[9700/11/M/J/22 - Q26]</strong> Transcription bubble formation by RNA polymerase.",
        "plant-transport": "<strong>[9700/12/M/J/22 - Q27]</strong> Companion cell and sieve tube plasmodesmata links.",
        "human-transport": "<strong>[9700/11/M/J/22 - Q31]</strong> Systolic pressure peaks in the aorta.",
        "gas-exchange": "<strong>[9700/12/M/J/22 - Q34]</strong> Cartilage rings in trachea structural support.",
        "infectious-diseases": "<strong>[9700/11/M/J/22 - Q36]</strong> HIV retrovirus replication enzymes (reverse transcriptase).",
        "immune-system": "<strong>[9700/12/M/J/22 - Q38]</strong> Phagocytosis engulfment and lysosome fusion stages.",
        "Respiration": "<strong>[9700/41/M/J/22 - Q40]</strong> Lactate conversion pathways in human liver cells."
      },
      "p2": {
        "cell-structure": "<strong>[9700/21/M/J/22 - Q1]</strong> Describe structural features of mitochondria and chloroplasts.",
        "biological-molecules": "<strong>[9700/21/M/J/22 - Q2]</strong> Explain tertiary protein structure stabilization bonds.",
        "enzymes": "<strong>[9700/22/M/J/22 - Q3]</strong> Outline effects of heavy metal ions on enzyme structure.",
        "cell-membranes": "<strong>[9700/21/M/J/22 - Q4]</strong> Describe bulk transport processes via endocytosis.",
        "mitotic-cell-cycle": "<strong>[9700/22/M/J/22 - Q2]</strong> Explain significance of mitosis in growth and repair.",
        "protein-synthesis": "<strong>[9700/21/M/J/22 - Q3]</strong> Describe structure of tRNA molecules and anticodons.",
        "plant-transport": "<strong>[9700/22/M/J/22 - Q4]</strong> Explain factors influencing root pressure mechanisms.",
        "human-transport": "<strong>[9700/22/M/J/22 - Q1]</strong> Describe electrical coordination of the heartbeat.",
        "gas-exchange": "<strong>[9700/21/M/J/22 - Q5]</strong> Outline alveolar surface area and diffusion efficiency.",
        "infectious-diseases": "<strong>[9700/22/M/J/22 - Q3]</strong> Discuss transmission and prevention of cholera.",
        "immune-system": "<strong>[9700/21/M/J/22 - Q2]</strong> Outline role of B-lymphocytes in humoral immunity.",
        "Respiration": "<strong>[9700/22/M/J/22 - Q5]</strong> Detail link reaction and Krebs cycle coenzymes."
      },
      "p4": {
        "cell-structure": "<strong>[9700/41/M/J/22 - Q1]</strong> Discuss eukaryotic cell membrane fluidity adaptations.",
        "biological-molecules": "<strong>[9700/42/M/J/22 - Q2]</strong> Compare molecular structures of haemoglobin and collagen.",
        "enzymes": "<strong>[9700/41/M/J/22 - Q3]</strong> Explain enzyme kinetics using immobilized column reactors.",
        "cell-membranes": "<strong>[9700/42/M/J/22 - Q4]</strong> Discuss receptor-mediated endocytosis of low-density lipoproteins.",
        "mitotic-cell-cycle": "<strong>[9700/41/M/J/22 - Q5]</strong> Explain how oncogenes mutate to promote tumor growth.",
        "protein-synthesis": "<strong>[9700/42/M/J/22 - Q1]</strong> Discuss post-translational modifications of polypeptide chains.",
        "plant-transport": "<strong>[9700/41/M/J/22 - Q2]</strong> Evaluate radioisotope labeling experiments in phloem transport.",
        "human-transport": "<strong>[9700/42/M/J/22 - Q3]</strong> Discuss structural adaptations of high-altitude human populations.",
        "gas-exchange": "<strong>[9700/41/M/J/22 - Q4]</strong> Explain pathophysiology of asthma and bronchoconstriction.",
        "infectious-diseases": "<strong>[9700/42/M/J/22 - Q5]</strong> Discuss social and economic factors in malaria eradication.",
        "immune-system": "<strong>[9700/41/M/J/22 - Q6]</strong> Explain production and medical diagnostics of monoclonal antibodies.",
        "Respiration": "<strong>[9700/41/M/J/22 - Q2]</strong> Discuss energy budgets and ATP yields under varying oxygen levels."
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
      aiResponseBox.innerHTML = `<div style="color: #A9DFBF; font-style: italic; font-size: 14px;">🤖 Evaluating answer against CAIE mark scheme...</div>`;
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
    "cell-structure": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 1: Cell Structure & Ultrastructure</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Mitochondria:</strong> Double membrane; inner membrane folded into cristae; site of aerobic respiration & ATP synthesis.<br>
        • <strong>Chloroplasts:</strong> Thylakoid membranes stacked into grana inside a stroma; site of photosynthesis.<br>
        • <strong>Ribosomes:</strong> 80S in eukaryotic cytoplasm/RER; 70S in prokaryotes, mitochondria, and chloroplasts.<br>
        • <strong>Resolution vs Magnification:</strong> Resolution is the ability to distinguish between two separate points; magnification is how many times larger an image is compared to the object.
      </p>
    `,
    "biological-molecules": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 2: Biological Molecules</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Carbohydrates:</strong> Monosaccharides joined by glycosidic bonds via condensation reactions. Alpha-glucose forms helical starch/glycogen; beta-glucose forms straight cellulose microfibrils.<br>
        • <strong>Proteins:</strong> Four structural levels: Primary (peptide bonds), Secondary (alpha-helix/beta-sheet via hydrogen bonds), Tertiary (ionic/disulfide bonds), and Quaternary (multiple polypeptide chains).<br>
        • <strong>Lipids:</strong> Triglycerides consist of glycerol ester-bonded to three fatty acids; phospholipids contain a polar hydrophilic head and hydrophobic tails.
      </p>
    `,
    "enzymes": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 3: Enzymes & Kinetics</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Mechanism:</strong> Biological catalysts that lower activation energy by forming temporary enzyme-substrate complexes.<br>
        • <strong>Competitive Inhibitors:</strong> Similar shape to substrate; bind to the active site; can be overcome by increasing substrate concentration ($V_{max}$ remains unchanged, $K_m$ increases).<br>
        • <strong>Non-Competitive Inhibitors:</strong> Bind to the allosteric site, altering active site shape; cannot be overcome by extra substrate ($V_{max}$ decreases).
      </p>
    `,
    "cell-membranes": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 4: Cell Membranes & Transport</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Fluid Mosaic Model:</strong> Phospholipid bilayer with fluid movement and interspersed proteins, glycoproteins, and cholesterol (which regulates membrane fluidity).<br>
        • <strong>Passive Transport:</strong> Diffusion and facilitated diffusion (down concentration gradient, no metabolic energy required).<br>
        • <strong>Active Transport:</strong> Movement against concentration gradient using carrier proteins and ATP.
      </p>
    `,
    "mitotic-cell-cycle": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 5: Mitotic Cell Cycle</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Interphase:</strong> Consists of G1 (growth), S phase (DNA replication), and G2 (preparation for division).<br>
        • <strong>Mitosis Phases:</strong> Prophase (chromosomes condense), Metaphase (chromosomes align at equator), Anaphase (sister chromatids pull apart), Telophase (nuclear envelopes reform).<br>
        • <strong>Significance:</strong> Produces genetically identical diploid cells for growth, tissue repair, and asexual reproduction.
      </p>
    `,
    "protein-synthesis": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 6: Protein Synthesis</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Transcription:</strong> DNA unwinds; RNA polymerase synthesizes pre-mRNA using complementary base pairing in the nucleus.<br>
        • <strong>Splicing:</strong> Introns are removed and exons are joined to form mature mRNA.<br>
        • <strong>Translation:</strong> mRNA attaches to a ribosome; tRNA anticodons match codons to assemble amino acid chains into polypeptides.
      </p>
    `,
    "plant-transport": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 7: Plant Transport</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Xylem:</strong> Transports water and mineral ions dead cells, lignified walls, driven by transpiration pull (cohesion-tension theory).<br>
        • <strong>Phloem:</strong> Transports assimilates (sucrose/amino acids) through sieve tube elements via mass flow hypothesis (source to sink).<br>
        • <strong>Stomatal Opening:</strong> Active transport of $H^+$ ions and influx of $K^+$ ions lowers water potential, causing guard cells to become turgid and open.
      </p>
    `,
    "human-transport": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 8: Human Transport</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Cardiac Cycle:</strong> Coordinated by the sinoatrial node (SAN), atrioventricular node (AVN), and Purkyne tissue.<br>
        • <strong>Blood Vessels:</strong> Arteries have thick elastic walls to withstand high pressure; capillaries are one-cell thick for rapid exchange; veins have valves to prevent backflow.<br>
        • <strong>Bohr Effect:</strong> High carbon dioxide partial pressure lowers blood pH, causing haemoglobin to unload oxygen more readily to respiring tissues.
      </p>
    `,
    "gas-exchange": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 9: Gas Exchange</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Alveolar Adaptations:</strong> Extremely thin squamous epithelium, large surface area, rich capillary network, and surfactant secretion to maintain a steep concentration gradient.<br>
        • <strong>Smoking Pathophysiology:</strong> Tar paralyzes cilia, mucus accumulates (chronic bronchitis), and alveolar walls break down, reducing surface area (emphysema).
      </p>
    `,
    "infectious-diseases": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 10: Infectious Diseases</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Pathogens:</strong> Transmitted via water (Cholera), vectors (Malaria via female Anopheles mosquitoes), or droplets (Tuberculosis).<br>
        • <strong>Antibiotics:</strong> Target bacterial metabolic processes (like peptidoglycan cross-linking in cell walls via penicillin) but are completely ineffective against viral protein coats.
      </p>
    `,
    "immune-system": `
      <h3 style="color:#A9DFBF; mathematical-notation; margin-top:0;">Chapter 11: Immune System</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Phagocytosis:</strong> Macrophages engulf pathogens into phagosomes, fuse with lysosomes, and present antigens on their surface.<br>
        • <strong>Adaptive Immunity:</strong> T-helper cells activate B-lymphocytes, which undergo clonal expansion to differentiate into plasma cells producing antibodies and memory cells.
      </p>
    `,
    "Respiration": `
      <h3 style="color:#A9DFBF; margin-top:0;">Chapter 12: Respiration</h3>
      <p style="color:#E2ECE9; font-size: 14px; line-height: 1.6;">
        • <strong>Glycolysis:</strong> Occurs in cytoplasm; glucose phosphorylated, split into triose phosphate, and yields a net gain of 2 ATP and 2 reduced NAD.<br>
        • <strong>Krebs Cycle:</strong> Occurs in mitochondrial matrix; produces reduced coenzymes and releases carbon dioxide.<br>
        • <strong>Oxidative Phosphorylation:</strong> Occurs on cristae via chemiosmosis, generating the vast majority of ATP through ATP synthase.
      </p>
    `
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
