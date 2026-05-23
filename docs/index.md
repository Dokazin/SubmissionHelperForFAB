# Fab Submission Helper

## Unreal Engine Fab review preparation

Fab Submission Helper is a pre-submission validation assistant for Unreal Engine projects, plugins, asset packs, and complete projects before Fab review.

It helps sellers catch common packaging and review blockers before submitting a product.

<div class="hero-actions">
<a href="getting-started/" class="md-button md-button--primary">Get Started</a>
<a href="troubleshooting/" class="md-button">Troubleshooting</a>
<a href="https://support.fab.com/s/article/FAB-TECHNICAL-REQUIREMENTS?language=en_US" class="md-button" target="_blank" rel="noopener">Fab Technical Requirements</a>
<a href="https://dev.epicgames.com/documentation/fab/asset-file-format-and-structure-requirements-in-fab" class="md-button" target="_blank" rel="noopener">Asset File Format & Structure</a>
</div>

---

## What it helps you catch

Fab Submission Helper checks the selected validation target for common issues such as:

- Project and plugin structure problems
- Missing or incomplete plugin metadata
- Generated folders that should not be submitted
- External or unresolved plugin dependencies
- Missing or misplaced bundled third-party files
- Content folder structure problems
- Asset naming and folder organization issues
- Redirectors
- Texture size and power-of-two recommendations
- FilterPlugin.ini coverage for distributable folders outside Content, Resources, and Source
- Build and packaging errors for code plugins
- Manual review items that cannot be reliably validated automatically

The plugin is designed to guide sellers through a clean pre-submission workflow without replacing the official Fab requirements.

---

## Main workflow

1. Install and enable the plugin.
2. Open the Fab Helper tab in Unreal Editor.
3. Select the submission type and validation target.
4. Run validation.
5. Review errors, warnings, info, passed checks, and manual review items.
6. Preview and apply safe fixes where available.
7. Complete manual review acknowledgments.
8. Build or package the selected code plugin when applicable.
9. Export a report for your records.

---

## Important note

Fab Submission Helper is a preparation tool. It helps you find likely issues before submission, but it does not guarantee approval. Always review the official Fab documentation and your final package before submitting.
