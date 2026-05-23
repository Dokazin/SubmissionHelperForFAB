You are editing the MkDocs documentation site for the Fab Submission Helper Unreal Engine plugin.

Goal:
Add a complete, organized English documentation set explaining installation, first startup, target selection, submission types, validation workflow, results, validation rules, build/package workflow, common errors, troubleshooting, FAQ, and changelog.

Important:
- Do not modify the Unreal Engine plugin code.
- Do not change validation logic.
- Do not change UI code.
- Only update MkDocs documentation files.
- Keep the documentation clear for Fab sellers who may not be technical experts.
- Use consistent product naming: "Fab Submission Helper".
- If the current site title is "FAB Validation Plugin", keep the site title only if already configured, but use "Fab Submission Helper" as the plugin/tool name in the docs unless instructed otherwise.
- Preserve the current MkDocs Material dark visual style.
- Do not add copyrighted content.
- Use concise, practical, user-facing explanations.

Files to create or update under docs/:
- index.md
- getting-started.md
- installation.md
- first-startup.md
- interface-overview.md
- submission-types.md
- running-validation.md
- results.md
- validation-rules.md
- common-errors.md
- troubleshooting.md
- faq.md
- changelog.md
- stylesheets/extra.css

Also update mkdocs.yml navigation to include these pages in this order:

Home:
- index.md

Getting Started:
- getting-started.md
- installation.md
- first-startup.md
- interface-overview.md

Usage:
- submission-types.md
- running-validation.md
- results.md

Reference:
- validation-rules.md
- common-errors.md
- troubleshooting.md
- faq.md
- changelog.md

Documentation requirements:
1. Installation must explain where to copy the plugin, how to enable it, and how to verify it loaded.
2. First Startup must explain Submission Type vs Validation Target.
3. Submission Types must explain Code Plugin, Asset Pack, Complete Project, and Auto Detect.
4. Running Validation must explain the recommended workflow and what to fix first.
5. Results must explain Error, Warning, Info, Passed, Manual Review, View Details, Preview Fix, Apply Fix, and Mark Reviewed.
6. Validation Rules must summarize all implemented rule groups, including:
   - target setup
   - plugin descriptor metadata
   - plugin dependencies
   - generated folders
   - source copyright headers
   - third-party files and bundled libraries
   - Build.cs dependency review
   - FilterPlugin.ini
   - content folder structure
   - asset naming conventions
   - asset type folder organization
   - redirectors
   - texture validation
   - blueprint validation
   - audio category checks
   - MetaSound support
   - documentation reminder
   - manual review checks
7. Common Errors must include:
   - plugin validates itself instead of seller target
   - confusing target dropdown entries
   - build path too long
   - Live Coding blocking build
   - Visual Studio toolchain warnings
   - Auto Fix page empty
   - generated folders detected
   - FilterPlugin.ini warnings
   - dependency warnings
8. Troubleshooting must provide practical fixes.
9. FAQ must answer common seller questions.
10. Changelog can start with version 1.0.0.

Use the provided documentation source from this file/package as the source of truth.
After writing files:
- Run `mkdocs build`.
- If port 8000 is already in use, do not treat it as a documentation error.
- If build succeeds, summarize files changed.
- If build fails, report the exact file and line causing the issue.
