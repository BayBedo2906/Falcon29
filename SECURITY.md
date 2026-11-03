# Security Policy

Falcon 29 LLC and the Falcon 29 team take security and user privacy very seriously. We appreciate the efforts of security researchers and community members who help keep our games, websites, and infrastructure secure through responsible disclosure.

---

## Supported Versions

We actively provide security updates and patches for the following projects and release branches:

| Project / Component | Supported Versions | Status |
| :--- | :--- | :--- |
| **Falcon 29 Web Portal** (`falcon29.com`) | Latest (`main` branch) | :white_check_mark: Supported |
| **Tilt: Gravity Block Puzzle (Web Edition)** | Latest release | :white_check_mark: Supported |
| **Tilt: Gravity Block Puzzle (Android / Google Play)** | Latest Google Play version | :white_check_mark: Supported |
| **Legacy / Archived Builds** | Deprecated versions | :x: Not supported |

---

## Reporting a Vulnerability

> [!IMPORTANT]
> **Please do NOT open public GitHub issues, pull requests, or discussions for suspected security vulnerabilities.** Publicly disclosing a flaw before a fix is available puts users and infrastructure at risk.

If you have discovered a security vulnerability in any Falcon 29 service, game, or repository, please report it privately using one of the following methods:

### Method 1: GitHub Private Vulnerability Reporting (Recommended)
If enabled on this repository:
1. Navigate to the **Security** tab of the repository on GitHub.
2. Click **Advisories** under "Reporting".
3. Click **Report a vulnerability** to open a private advisory draft directly with our maintainers.

### Method 2: Direct Security Contact
Send an email to:
- **Email:** [contact@falcon29.com](mailto:contact@falcon29.com)
- **Subject line format:** `[SECURITY] Vulnerability Report - <Brief Description>`

### Information to Include in Your Report
To help us triage and resolve the issue quickly, please provide:
1. **Component affected:** Website (`falcon29.com`), Tilt Web Edition, Android game client, build pipeline, etc.
2. **Type of vulnerability:** (e.g., XSS, CORS/CSP misconfiguration, sensitive data exposure, API entitlement bypass, injection).
3. **Step-by-step reproduction instructions:** A clear, concise description of how to reproduce the issue.
4. **Proof of Concept (PoC):** Sample requests, scripts, or non-destructive payloads.
5. **Impact assessment:** An explanation of what an attacker could achieve if exploiting the flaw.
6. **Suggested remediation (optional):** Any recommendations on how to patch the issue.

---

## Response & Remediation Process

When we receive a vulnerability report, our team adheres to the following coordinated disclosure timeline:

1. **Initial Acknowledgment:** Within **24–48 hours**, we will confirm receipt of your report.
2. **Assessment & Triage:** Within **3–5 business days**, we will evaluate the report, verify the issue, and assign a severity rating.
3. **Remediation & Patching:** We will work on a fix in a private branch or advisory. We aim to release high-severity patches within 7–14 days.
4. **Disclosure & Release:** Once the patch is deployed and verified, we will notify you and, if appropriate, publish a security advisory with proper attribution.

---

## Scope & Safe Harbor

### In-Scope
- `https://falcon29.com` and its sub-paths.
- Tilt Web Edition game runtime and client assets.
- Official client configurations and build pipelines.

### Out-of-Scope
- Denial of Service (DoS/DDoS) attacks against our web host or CDNs.
- Social engineering, phishing, or physical attacks against Falcon 29 team members.
- Issues related to third-party ad networks (Google AdMob, Unity Ads) or external platforms (Google Play Services) outside our direct implementation.
- Automated scanner spam without reproducible, non-destructive proof-of-concept.

### Safe Harbor Policy
If you conduct vulnerability research in good faith and in compliance with this policy:
- We will not pursue legal action against you.
- We will work collaboratively with you to understand and resolve the issue.
- We will publicly acknowledge your contribution (with your permission) once the vulnerability has been resolved.

---

## Secret Scanning & Key Management

- **Client Identifiers:** Certain files (such as `google-services.json`) contain client-side identifiers for mobile services (e.g., Firebase, Google Play Games). These keys are restricted to specific Android package names and certificate SHA-1 fingerprints by design.
- **Secret Protection:** Our automated CI/CD and export presets strictly exclude private service credentials, keystores, and internal tokens from all public web and client distributions.
- If you notice an exposed private secret or token, please report it immediately to [contact@falcon29.com](mailto:contact@falcon29.com).

---

*Last updated: November 2026*  
*Falcon 29 LLC — Independent Software & Game Studio*
