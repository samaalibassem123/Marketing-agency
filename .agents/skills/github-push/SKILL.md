---
name: github-push
description: >-
  Standardized workflow and verification protocol for staging, committing, and pushing changes to GitHub for the KONTRAST repository. Use whenever the user asks to push to GitHub, commit changes, or sync with remote origin.
---

# GitHub Push & Deployment Workflow Skill

Use this skill whenever you need to stage, commit, and push changes to the GitHub remote repository (`https://github.com/samaalibassem123/Marketing-agency.git`).

---

## 1. Mandatory Pre-Push Verification Protocol

Before staging or committing any code, you **MUST** run and verify the standard 3-tier validation suite specified in [`AGENTS.md`](file:///c:/Users/micro/Documents/GitHub/Marketing-agency/AGENTS.md):

```bash
# 1. ESLint Check (Must exit with code 0, zero errors and zero warnings)
npm run lint

# 2. TypeScript Strict Typecheck (Must exit with code 0)
npx tsc --noEmit

# 3. Production Turbopack Build (Must exit with code 0 and compile all static routes)
npm run build
```

> [!CAUTION]
> Never push code that fails any of these three checks. If a check fails, diagnose and fix the error before proceeding to git staging.

---

## 2. Git Status & Inspection

Always inspect the working tree to ensure only intentional files are being committed and no temporary files (e.g., test dumps, `.next/`, scratch files) are accidentally staged:

```bash
# Check working tree status
git status

# Inspect modified files summary
git diff --stat
```

---

## 3. Staging & Conventional Commit

Follow Conventional Commits guidelines to maintain a clean, readable git history:

| Prefix | Usage | Example |
| :--- | :--- | :--- |
| `feat:` | New feature or capability | `feat: add trilingual language switcher (EN, FR, TN)` |
| `fix:` | Bug fix or hydration issue | `fix: resolve cascading re-render in LanguageContext` |
| `refactor:` | Code restructuring with no behavior change | `refactor: extract client view components for SSR routes` |
| `style:` | Pure styling, glassmorphism, or layout tweaks | `style: refine Apple Liquid Glass specular highlights` |
| `docs:` | Documentation or rule updates | `docs: add github-push workflow skill` |

### Staging & Committing:
```bash
# Stage all changes
git add .

# Commit with a clear, descriptive message
git commit -m "<prefix>: <concise description of changes>"
```

---

## 4. Push to Remote Origin

Push commits to the default `main` branch:

```bash
git push origin main
```

### Post-Push Verification:
Verify that the remote and local working trees are clean and in sync:
```bash
git status
# Output must indicate: "Your branch is up to date with 'origin/main'."
# "nothing to commit, working tree clean"
```

---

## 5. Troubleshooting & Conflict Handling

- **Divergent Branches / Rejected Push**:
  If the remote contains commits not present locally:
  ```bash
  git pull --rebase origin main
  # Resolve any merge conflicts, verify with `npm run build`, then push:
  git push origin main
  ```
- **Line Ending Warnings (LF to CRLF)**:
  On Windows environments, Git may warn about replacing LF with CRLF. This is normal and safe; do not modify `.gitattributes` or force-convert line endings unless requested.
