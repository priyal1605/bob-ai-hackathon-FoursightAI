# 🚀 Drug Safety Signal Detector & Regulatory Submission Readiness Checker

---

## 👥 Team

| Field | Value |
|---|---|
| **Team Name** | FoursightAI |
| **Track** | AI |
| **Team Lead** | Priyal Patel — 26dcs098@charusat.edu.in |
| **Members** | Khushi Shah, Honey Piludaria, Tithi Vadgama |

---

## 🎯 Problem Statement:-
FDA's FAERS database has 20M+ adverse event reports. Vioxx caused 27,000+ heart
attacks before its signal was acted on. Separately, a drug approval CTD dossier spans
100,000+ pages across 5 modules — one missing section gets it rejected, costing 6–12
months and $50–100M. Both problems share the same root cause: too much complex
data for manual review.


> What problem does our project solve? Who experiences this problem?

Pharmaceutical companies and regulators struggle to manually detect adverse drug event signals from thousands of reports and verify regulatory submission completeness. This app automates PRR-based signal detection and ICH M4 CTD submission readiness checking.

---

## 💡 Solution

> What did we build? How does it solve the problem above?

We built a web app that automatically detects adverse drug safety signals using the PRR (Proportional Reporting Ratio) algorithm and checks ICH M4 CTD regulatory submission completeness. It groups events into clinical clusters, ranks signals by priority, and generates downloadable gap reports — all using mock pharmaceutical data.

---

## ✨ Key Features

- **Feature 1:** PRR-based adverse event signal detection with 2x2 table calculation
- **Feature 2:** Automatic event clustering into 6 clinical categories
- **Feature 3:** ICH M4 CTD submission completeness checker with progress bars
- **Feature 4:** Automated gap report generation with downloadable TXT export
- **Feature 5:** Drag and drop CTD document upload with simulated analysis

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | HTML5, CSS3, JavaScript |
| **Frameworks** | Vanilla JavaScript — No frameworks |
| **IBM Technologies** | Built using IBM Bob AI Assistant |
| **Databases** | Mock data layer — No database required |
| **Other** | GitHub Pages for deployment |

---

## 📁 Repository Structure

```
├── src/                  # All source code
├── docs/                 # Written documentation
│   ├── problem-statement.md
│   ├── solution-overview.md
│   ├── architecture.md
│   └── setup-guide.md
├── demo/                 # Demo artifacts
│   ├── screenshots/      # App screenshots
│   └── demo-video-link.txt  # Link to demo video
├── presentation/         # Slide deck
└── submission.yaml       # Structured submission metadata
```

---

## ⚡ How to Run

```bash
# 1. Clone the repo
git clone https://github.com/priyal1605/bob-ai-hackathon-FoursightAI.git
cd bob-ai-hackathon-FoursightAI
# No installation needed
# Open index.html with VS Code Live Server
# OR visit the live demo directly

# 2. No installation needed
# This is a pure HTML/CSS/JavaScript project
# No dependencies, no npm, no frameworks

# 3. Open in VS Code
# Install Live Server extension in VS Code

# 4. Run the project
# Click index.html → then click "Go Live" at bottom right of VS Code
# App opens at http://127.0.0.1:5500/index.html

# OR simply visit the live demo
# https://priyal1605.github.io/bob-ai-hackathon-FoursightAI/
```

---

## 🖥️ Demo

| Artifact | Link |
|---|---|
| 📹 Demo Video | [Watch Demo video](https://drive.google.com/file/d/1bc_2sDHQPzz_z0Ld92c83rvRHmqyU6Ze/view?usp=sharing) |
| 🌐 Live Demo | [👉Click Here to View Live Demo ](https://priyal1605.github.io/bob-ai-hackathon-FoursightAI/) |
| 🖼️ Screenshots | [View screenshots](demo/screenshots/) |
| 📊 Presentation | [View Presentation](presentation/) |
| 📄 Documentation| [View Documentation](docs/)|
---

## ⚠️ Known Limitations

- Uses synthetic mock data — not connected to real FDA FAERS database yet
- Document upload analysis is simulated — no real PDF parsing
- PRR threshold is simplified for demo purposes only

---

## 🏅 What We're Most Proud Of

The fully working PRR signal detection algorithm with real 2x2 table calculations, automatic event clustering, and the complete ICH M4 CTD gap report generator — all running in a clean responsive UI with zero external dependencies.

---
