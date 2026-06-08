# Nisar Ahmed | Clinical Data Analyst & Healthcare Data Engineer
> **13+ Years Healthcare Operations | Specialized in ABDM 2.0 Workflows & DPDP Data Privacy Compliance**

![Healthcare](https://img.shields.io/badge/Domain-Healthcare_Operations-0284c7.svg?style=for-the-badge)
![Compliance](https://img.shields.io/badge/Compliance-DPDP_%26_ABDM-red.svg?style=for-the-badge)
![Portfolio](https://img.shields.io/badge/Site-nisar46.github.io%2Fportfolio-black.svg?style=for-the-badge)

📄 **[View CV](https://nisar46.github.io/portfolio/cv.html)**

---

## 🏥 Professional Narrative

I am a domain-first data specialist transitioning 13 years of active "ground-truth" clinical operations experience into the health-tech data space. My focus is helping engineering teams organize unstructured clinical records, eliminate database schema bottlenecks, and build high-performance, legally compliant data pipelines.

I specialize in mapping real-world medical workflows to relational systems, ensuring information is standardized, structured, and fully compliant with national digital health standards.

---

## 🛠️ Core Functional Focus Areas

### 1. Healthcare Data Management & Standardization
Mapping dynamic, non-standard medical terminologies and polymorphic vendor formats into clean, structured data tables. Ensuring incoming medical parameters line up perfectly with standard electronic health record (EHR) requirements and FHIR standards.

### 2. Operational Data Integrity (ABDM 2.0 Workflows)
Coordinating data flows that align cleanly with India's **Ayushman Bharat Digital Mission (ABDM)** standards, focusing on patient records organisation, 14-digit ABHA token mapping, and seamless clinical database synchronisation.

### 3. Programmatic Privacy Triage (DPDP Act Compliance)
Enforcing programmatic data safety rails natively inside ingestion scripts. I focus on building automated data triage loops (Processed, Quarantined) that validate patient consent parameters under the **DPDP Act 2023** before any records are committed to production storage.

---

## 🚀 Featured Projects

### ✅ Healthcare Suite — Completed (Independent Research)

> Projects 1 & 2 are tightly coupled. OmniIngest handles back-office ingestion; Clinosyn is the front-end clinical intelligence layer that reads from it.

#### 1. OmniIngest Clinical Data Engine (ABDM 2.0)
A high-performance clinical data middleware designed to solve the "Dark Data" crisis in healthcare.

* **Repository:** [nisar46/OmniIngest-Clinical-Engine](https://github.com/nisar46/OmniIngest-Clinical-Engine)
* **Core Ingestion:** Standardizes heterogeneous EHR payloads, 14-digit ABHA tokens, and explicit consent metadata strictly in accordance with DPDP Act mandates.
* **Database Strategy:** Uses a Hybrid Relational-JSON schema utilizing Polars LazyFrames to safely pack polymorphic clinical variables into a single `payload_vault` column, mitigating 99.9% of database schema crashes.
* **Compliance Engine:** Enforces DPDP Rule 8.3 via autonomous PII shredding and a cascading cryptographic **"Kill-Switch"** that instantly purges revoked-consent records.
* **Tech:** Python · Polars (Rust-accelerated) · SQLite · Streamlit · FHIR R5 · ABDM 2.0

#### 2. Clinosyn Healthcare OS
An interactive clinical intelligence terminal acting as the secure AI top-layer over the OmniIngest database.

* **Repository:** [nisar46/Clinosyn-Healthcare-OS](https://github.com/nisar46/Clinosyn-Healthcare-OS)
* **Conversational AI:** Offline, privacy-first Natural Language-to-SQL (NL-to-SQL) Generative RAG pipeline leveraging local **Llama3** (via Ollama) to query historic ABDM tables — zero cloud, zero data leakage.
* **Extraction Logic:** Executes native `json_extract()` querying algorithms to translate conversational prompts into optimized SQLite commands directly against unstructured payload vaults.
* **Interface Layer:** Streamlit-powered terminal featuring real-time ingestion analytics, active patient PII masking arrays, and a validated **98.2%** high-integrity FHIR pipeline success metric.
* **Tech:** Python · LangChain · Llama3/Ollama · RAG · SQLite · Streamlit

---

### 🚧 Enterprise Universal Suite — In Progress (Independent Research)

> Projects 3 & 4 evolve the healthcare pipeline to a cross-sector commercial scale. Currently at README/architecture stage with active development ongoing.

#### 3. OmniIngest Universal
Scaling the core clinical ingestion engine beyond healthcare to a 5-sector interoperability framework.

* **Repository:** [nisar46/OmniIngest_Universal](https://github.com/nisar46/OmniIngest_Universal)
* **Pipeline Scale:** Designed for Hospital, Pharma, Diagnostics, Insurance, and Public Health — reducing manual cross-department data wrangling by an estimated **80%**.
* **Real-Time Layer:** Asynchronous FastAPI ingress webhook listener fortified with AES-256-CBC decryption for split-second floor transactions into `omniingest_master.db`.

#### 4. Clinosyn Universal
The cross-sector intelligence dashboard above OmniIngest Universal.

* **Repository:** [nisar46/Clinosyn_Universal](https://github.com/nisar46/Clinosyn_Universal)
* **Intelligence Layer:** Multi-sector GenAI RAG queries, real-time analytics dashboards, and operational summaries via local Llama3.

---

## 👨‍💻 Professional Profile

**Nisar Ahmed**
*Clinical Data Analyst | Healthcare Data Engineer | BCA — Final Year (University of Mysore)*
📍 Bengaluru, India

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/nisar-ahmed-8440763a3)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-black?style=flat)](https://nisar46.github.io/portfolio)
[![CV](https://img.shields.io/badge/Resume%20%2F%20CV-View-0284c7?style=flat)](https://nisar46.github.io/portfolio/cv.html)

> *"Bridging the gap between active clinical operations and practical digital data solutions."*



*© 2026 Nisar Ahmed · Licensed under MIT*
