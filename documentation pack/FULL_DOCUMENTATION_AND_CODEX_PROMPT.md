# Submission Helper for FAB Documentation Pack

This file contains the Codex prompt, suggested MkDocs navigation, and all documentation page contents.

## Codex Prompt

```text
You are editing the MkDocs documentation site for the Submission Helper for FAB Unreal Engine plugin.

Goal:
Add a complete, organized English documentation set explaining installation, first startup, target selection, submission types, validation workflow, results, validation rules, build/package workflow, common errors, troubleshooting, FAQ, and changelog.

Important:
- Do not modify the Unreal Engine plugin code.
- Do not change validation logic.
- Do not change UI code.
- Only update MkDocs documentation files.
- Keep the documentation clear for Fab sellers who may not be technical experts.
- Use consistent product naming: "Submission Helper for FAB".
- If the current site title is "Submission Helper for FAB", keep the site title only if already configured, but use "Submission Helper for FAB" as the plugin/tool name in the docs unless instructed otherwise.
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
```

## Suggested mkdocs.yml navigation

```yaml
# Suggested mkdocs.yml navigation

site_name: Submission Helper for FAB
site_description: Documentation for the Submission Helper for FAB Unreal Engine plugin.
theme:
  name: material
  palette:
    scheme: slate
    primary: teal
    accent: lime
  features:
    - navigation.sections
    - navigation.expand
    - navigation.top
    - search.highlight
    - search.suggest
extra_css:
  - stylesheets/extra.css

nav:
  - Home: index.md
  - Getting Started:
      - Getting Started: getting-started.md
      - Installation: installation.md
      - First Startup: first-startup.md
      - Interface Overview: interface-overview.md
  - Usage:
      - Submission Types: submission-types.md
      - Running Validation: running-validation.md
      - Results: results.md
  - Reference:
      - Validation Rules: validation-rules.md
      - Common Errors: common-errors.md
      - Troubleshooting: troubleshooting.md
      - FAQ: faq.md
      - Changelog: changelog.md
```


---

## File: `docs/changelog.md`

```markdown
# Changelog

## 1.0.0

Initial documentation set.

Highlights:

- Installation guide
- First startup workflow
- Interface overview
- Submission type explanation
- Validation workflow
- Result type explanation
- Validation rule summary
- Common errors
- Troubleshooting
- FAQ
```

---

## File: `docs/common-errors.md`

```markdown
# Common Errors

## The plugin validates itself instead of my product

Open **Settings** and check **Validation Target**.

For a seller code plugin, select the seller plugin target, not Submission Helper for FAB.

If the project only contains Submission Helper for FAB, the helper may be the only available plugin target.

## My target dropdown has confusing entries

The dropdown should show clean targets such as:

```text
Project Content / Game
MySellerPlugin
FabSubmissionHelper
```

Submission type should be selected separately.

It should not show combined entries such as:

```text
Project Content / Game - Asset Pack
Project Content / Game - Complete Project
MyPlugin - Code Plugin
```

If combined entries appear, update the plugin to a version where target identity and submission type are separated.

## Build fails because the package path is too long

Windows and UnrealBuildTool can fail when generated action paths are longer than 260 characters.

Common causes:

- Project folder is too deep
- Output folder name is too long
- Display labels are accidentally used in folder names
- Build output is nested too deeply

Recommended fixes:

- Move the project to a shorter path.
- Use a shorter output folder.
- Make sure UI-only labels such as `(this helper plugin)` are not used in build paths.
- Avoid very long plugin names when possible.

## Build fails while Live Coding is active

Unreal may refuse to build while Live Coding is active.

Fix:

1. Close the editor, or disable Live Coding.
2. Rebuild from your IDE or run packaging again.
3. Reopen the editor.

## Visual Studio toolchain warning

UnrealBuildTool may warn that your Visual Studio compiler is not a preferred version.

Warnings do not always fail the build, but compiler errors do.

If UnrealBuildTool says a toolchain is banned or unsupported, install a supported Visual Studio toolchain for your Unreal Engine version.

## Auto Fix page is empty

The Auto Fix page only shows checks with real previewable or applicable fixes.

If a warning does not have a safe automated operation, it should not appear there.

Use the Validation page to review warnings that require manual work.

## Preview Fix says no preview is available

A card should only show Preview Fix when a meaningful preview exists.

If you see this message, update the plugin or review the check manually.

## Generated folders are detected

Generated folders such as Binaries and Intermediate can appear during local development.

They are usually removed from the final submission package.

If the plugin is loaded in the editor, these folders may be locked until the editor is closed.

## FilterPlugin.ini warning

If your plugin contains distributable files outside Content, Resources, or Source, add a `Config/FilterPlugin.ini` file.

Example:

```ini
[FilterPlugin]
/Docs/...
/MyOtherFolder/...
```

## Dependency warning

Dependency checks may warn when Build.cs references external libraries or integration paths.

This does not always mean the project is broken. It means you should confirm that all required dependency files are present and portable.
```

---

## File: `docs/faq.md`

```markdown
# FAQ

## Does this plugin guarantee Fab approval?

No. It helps identify common issues before submission, but final approval depends on Fab review and the official requirements.

## Can I use it for code plugins?

Yes. Select **Code Plugin** as the submission type and select the plugin target.

## Can I use it for asset packs?

Yes. Select **Asset Pack** and validate **Project Content / Game**.

## Can I use it for complete projects?

Yes. Select **Complete Project** and validate **Project Content / Game**.

## Why does the helper plugin appear as a target?

Submission Helper for FAB is itself a project plugin when installed in the project Plugins folder.

It may appear as a target for development or testing. Select it only if you intentionally want to validate the helper plugin itself.

## Should I use Auto Detect?

Auto Detect is useful for early setup, but explicit submission type selection is recommended before final review.

## Should I apply every auto-fix?

No. Always preview a fix before applying it.

Use source control or backups for important projects.

## Are all warnings required to be fixed?

Not always. Warnings indicate something that should be reviewed. Some warnings are recommendations, while others point to likely review issues.

## Why is power-of-two a warning for textures?

Power-of-two texture sizing is often recommended, but not always a blocking issue. The plugin treats it as a warning unless your own project rules make it stricter.

## Why are some items manual review?

Some things require human judgment, such as legal rights, visual quality, unused assets, documentation quality, and product page readiness.

## Where are packaged plugins saved?

The Build / Package page shows the output folder. By default, it uses a folder under the project such as:

```text
YourProject/FabSubmissionBuilds/YourPluginName/
```

The output folder should use a clean filesystem-safe name.
```

---

## File: `docs/first-startup.md`

```markdown
# First Startup

When the plugin first opens, it may not know what you want to validate.

Before running validation, open **Settings** and configure the target.

## Choose Submission Type

The **Submission Type** tells the plugin how to interpret the selected target.

| Submission Type | Use for |
|---|---|
| Auto Detect | Let the plugin infer the most likely type from the target. |
| Code Plugin | A project plugin with a `.uplugin` file and optional Source, Content, Resources, and Config folders. |
| Asset Pack | A content-only product distributed as assets. |
| Complete Project | A full Unreal Engine project distributed as a project. |

## Choose Validation Target

The **Validation Target** tells the plugin what to scan.

Examples:

| Target | Meaning |
|---|---|
| Project Content / Game | Validates project content, usually used for Asset Pack or Complete Project submissions. |
| SellerPluginName | Validates that project plugin. |
| FabSubmissionHelper | Validates the helper plugin itself, usually only for development or testing. |

Submission Type and Validation Target are different:

- Submission Type means **how to validate**.
- Validation Target means **what to validate**.

## Do not validate the wrong target

If Submission Helper for FAB is installed in a project that also contains a seller plugin, make sure the seller plugin is selected as the target.

The helper plugin may appear in the target list because it is also a project plugin, but it should not be selected unless you intentionally want to test the helper itself.

## Save settings

Settings are stored so the plugin can restore them next time. If a previously selected target is missing, select a new one before running validation.
```

---

## File: `docs/getting-started.md`

```markdown
# Getting Started

This guide explains the normal workflow for using Submission Helper for FAB inside Unreal Editor.

## Quick start

1. Open your Unreal Engine project.
2. Open the **Fab Helper** tab.
3. Go to **Settings**.
4. Choose the **Submission Type**.
5. Choose the **Validation Target**.
6. Choose the **Product Category** if category-specific rules apply.
7. Go back to **Overview** or **Validation**.
8. Click **Validate** or **Run Validation**.
9. Review the results.
10. Fix blocking errors first.
11. Review warnings and manual review reminders.
12. Use **Build / Package** for code plugins.
13. Export a report when ready.

## Recommended order

Use this order for the cleanest workflow:

1. **Settings**
   - Select the correct target and submission type.
   - Set product category and manual acknowledgments.

2. **Validation**
   - Run validation.
   - Review errors first.
   - Review warnings.
   - Open details when you need the reason and next step.

3. **Auto Fix**
   - Preview safe fixes.
   - Apply fixes only after checking what will change.

4. **Build / Package**
   - Package code plugins locally.
   - Review build output and build logs.

5. **Overview**
   - Check the final readiness state.

6. **Export Report**
   - Save a report for your records or internal review.

## Result types

Submission Helper for FAB uses several result types:

| Type | Meaning |
|---|---|
| Error | Blocking issue. Fix before packaging or submission. |
| Warning | Review issue. It may not block packaging, but should be checked. |
| Info | Informational result or recommendation. |
| Passed | The check completed successfully. |
| Manual Review | A checklist item that cannot be reliably validated automatically. |

## Safe fix workflow

Some checks can provide a safe fix.

The recommended flow is:

1. Click **Preview Fix**.
2. Review the proposed change.
3. Click **Apply Fix** only if the preview is correct.
4. Run validation again.

Use source control or a backup before applying fixes to important projects.
```

---

## File: `docs/index.md`

```markdown
# Submission Helper for FAB

## Unreal Engine Fab submission readiness

Submission Helper for FAB is a pre-submission validation assistant for Unreal Engine projects, plugins, asset packs, and complete projects before Fab review.

It helps sellers catch common packaging and review blockers before submitting a product.

<div class="hero-actions">
<a href="getting-started/" class="md-button md-button--primary">Get Started</a>
<a href="troubleshooting/" class="md-button">Troubleshooting</a>
</div>

---

## What it helps you catch

Submission Helper for FAB checks the selected validation target for common issues such as:

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

Submission Helper for FAB is a preparation tool. It helps you find likely issues before submission, but it does not guarantee approval. Always review the official Fab documentation and your final package before submitting.
```

---

## File: `docs/installation.md`

```markdown
# Installation

## Install in a project

1. Close Unreal Editor.
2. Copy the plugin folder into your project:

```text
YourProject/Plugins/FabSubmissionHelper/
```

3. Open the project in Unreal Editor.
4. Go to **Edit > Plugins**.
5. Search for **Submission Helper for FAB** or **Fab Helper**.
6. Enable the plugin.
7. Restart Unreal Editor if prompted.

## Verify installation

After restart, the plugin should appear as a dockable editor tab or toolbar/menu entry named **Fab Helper**.

If you cannot find it:

- Confirm the plugin folder contains a `.uplugin` file.
- Confirm it is inside the project `Plugins` folder.
- Regenerate project files if needed.
- Rebuild the project if it contains C++.
- Restart Unreal Editor.

## Recommended setup

For code plugin validation and packaging, make sure your machine has:

- Unreal Engine 5.x
- The matching Visual Studio toolchain for your Unreal Engine version
- Windows SDK required by your Unreal Engine version
- A short project path when possible

Long Windows paths can break packaging when output folders become too deep. Use shorter folders for Unreal projects and build output when possible.
```

---

## File: `docs/interface-overview.md`

```markdown
# Interface Overview

Submission Helper for FAB is organized into several pages.

## Overview

The Overview page summarizes the current readiness state.

It shows:

- Readiness status
- Selected target
- Submission type
- Product category
- Engine information
- Counts for errors, warnings, info, passed checks, auto-fix availability, and manual review

Use this page to quickly understand whether the target is ready for the next step.

## Validation

The Validation page shows all validation results.

Use filters to focus on:

- All
- Errors
- Warnings
- Manual Review
- Passed
- Info

Each card can show details explaining:

- Why the result was triggered
- What to do next
- Affected items when useful

## Auto Fix

The Auto Fix page lists checks that have real previewable or applicable fixes.

Auto fixes should be reviewed before applying.

If the page says bulk apply is not available, use the per-check preview and apply buttons.

## Build / Package

The Build / Package page is used mainly for code plugin packaging.

It shows:

- Build result
- Exit code
- Duration
- Errors and warnings
- Selected plugin descriptor
- Plugin root
- Engine root
- Output folder
- Target platforms
- Packaging options
- Build logs and output

Build warnings are shown separately from errors. Warnings should be reviewed, but errors are the blocking build failure.

## Project Info

The Project Info page shows the currently selected target context.

It can include:

- Selected target
- Submission type
- Product category
- Project root
- Plugin root
- Plugin descriptor
- Content root
- Source root
- Engine root
- Path length limit
- Last validation state

Use this page to confirm the plugin is scanning the correct project or plugin.

## Settings

The Settings page contains:

- Submission Type
- Validation Target
- Product Category
- Distribution Method
- Supported Engine Versions
- Latest Engine Version Included
- Manual review acknowledgments
- Copyright header settings
- Build/package defaults
- Reset options

Use Settings before your first validation pass and whenever the selected target or product type changes.
```

---

## File: `docs/results.md`

```markdown
# Results

Validation results are shown as cards.

## Result severity

| Severity | Meaning |
|---|---|
| Error | A blocking issue that should be fixed before final packaging or submission. |
| Warning | A review issue or recommendation. It may not block packaging, but it should be reviewed. |
| Info | Informational result or context. |
| Passed | The check passed. |
| Manual Review | The plugin needs you to confirm something manually. |

## Card actions

Depending on the check, a card may show:

| Action | Meaning |
|---|---|
| View Details | Opens the explanation, reason, and next step. |
| Preview Fix | Shows a proposed safe fix before applying it. |
| Apply Fix | Applies a safe fix. Use after previewing. |
| Mark Reviewed | Marks a manual review item as completed. |

## Details section

Details should answer:

1. Why was this triggered?
2. What should I do next?
3. Which items are affected?

The UI avoids showing internal debug fields by default.

## Auto-fix results

An auto-fix badge appears only when the check has a real previewable or applicable fix.

If a check does not appear on the Auto Fix page, it should not show an auto-fix badge in Validation.

## Manual review results

Manual review results are reminders. They may affect readiness, but they usually require human confirmation rather than automatic scanning.
```

---

## File: `docs/running-validation.md`

```markdown
# Running Validation

## Before you run validation

Check these settings first:

1. **Submission Type**
2. **Validation Target**
3. **Product Category**
4. **Distribution Method**
5. Manual review acknowledgments, if applicable

Make sure the selected target is the product you want to submit.

## Run validation

Click **Validate** on Overview or **Run Validation** on the Validation page.

The plugin scans the selected target and updates the results.

## What to fix first

Recommended order:

1. Errors
2. Build errors
3. Missing dependencies
4. Required structure issues
5. Warnings
6. Manual review items
7. Info items

## Re-run validation

After fixing issues or applying safe fixes, run validation again.

This confirms whether the issue was resolved and updates the Overview counts.

## Marking manual review items

Some items cannot be reliably checked automatically, such as:

- Product page content
- Media and previews
- Legal and content rights review
- Visual quality review
- Unused asset review
- Documentation review

When you complete one of these tasks, mark it as reviewed in the plugin.
```

---

## File: `docs/stylesheets/extra.css`

```css
/* Optional MkDocs polish for the Submission Helper for FAB documentation. */

:root {
  --fab-accent: #2dd4bf;
  --fab-accent-2: #a3e635;
  --fab-bg-card: rgba(12, 18, 24, 0.76);
  --fab-border: rgba(45, 212, 191, 0.28);
}

.md-typeset .hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin: 1.25rem 0 1rem;
}

.md-typeset .md-button {
  border-radius: 0.5rem;
}

.md-typeset table:not([class]) {
  border-radius: 0.5rem;
  overflow: hidden;
}

.md-typeset code {
  border-radius: 0.25rem;
}
```

---

## File: `docs/submission-types.md`

```markdown
# Submission Types

Submission Helper for FAB supports several submission workflows.

## Code Plugin

Use **Code Plugin** for products that ship as Unreal Engine plugins.

A code plugin target usually contains:

```text
YourProject/Plugins/YourPlugin/YourPlugin.uplugin
YourProject/Plugins/YourPlugin/Source/
YourProject/Plugins/YourPlugin/Content/        optional
YourProject/Plugins/YourPlugin/Resources/      optional
YourProject/Plugins/YourPlugin/Config/         optional
```

Code Plugin validation can check:

- `.uplugin` metadata
- Plugin dependencies
- Build.cs dependency declarations
- Source copyright headers
- Third-party folders and bundled libraries
- Generated folders such as Binaries and Intermediate
- FilterPlugin.ini coverage
- Plugin content folder organization
- Packaging with Unreal Automation Tool

## Asset Pack

Use **Asset Pack** for content-only submissions.

Asset Pack validation focuses on project content, usually under `/Game`.

It can check:

- Content folder structure
- Project-named content folder requirements
- Asset naming conventions
- Asset type folder organization
- Redirectors
- Textures
- Maps, previews, and manual review items
- Unused asset review reminders

## Complete Project

Use **Complete Project** for submissions that ship as a full Unreal Engine project.

Complete Project validation can check:

- Project content structure
- Project-named content folder requirements
- Required folders and metadata
- Asset organization
- Redirectors
- Textures
- Maps
- Manual review readiness
- Final pre-package checklist items

## Auto Detect

Use **Auto Detect** when you want the plugin to infer the most likely validation mode from the selected target.

Auto Detect can be helpful during early setup, but for final review, explicitly selecting the correct submission type is recommended.
```

---

## File: `docs/troubleshooting.md`

```markdown
# Troubleshooting

## I cannot find the Fab Helper tab

Try these steps:

1. Confirm the plugin is enabled in **Edit > Plugins**.
2. Restart Unreal Editor.
3. Check the Window menu for the plugin tab.
4. Rebuild the project if it is a C++ project.
5. Check the Output Log for plugin loading errors.

## The target I want is missing

For code plugins:

- Confirm the plugin is inside the project `Plugins` folder.
- Confirm the plugin has a `.uplugin` descriptor.
- Restart Unreal Editor after adding the plugin.
- Regenerate project files if needed.

For asset packs or complete projects:

- Select **Project Content / Game** as the target.
- Make sure the project has content under `/Game`.

## The wrong target is selected

Open **Settings > Target and Product** and choose the correct **Validation Target**.

For a seller plugin, select the seller plugin name.

For content submissions, select **Project Content / Game**.

## Validation results look outdated

Run validation again after making changes.

If results still look outdated:

- Save all assets.
- Restart the editor.
- Make sure the correct target is selected.
- Check whether the issue is in generated files or a stale build folder.

## Apply Fix is disabled

Apply Fix is only enabled when the plugin has a safe operation for that check.

Some results are warnings or manual review items and cannot be fixed automatically.

## Bulk apply is disabled

Bulk apply may not be implemented.

Use each check's **Preview Fix** and **Apply Fix** buttons.

## Build / Package is disabled

Build / Package is available for Code Plugin targets.

If you selected Project Content / Game, switch the submission type and target to a plugin target.

## Build succeeds with warnings

Warnings should be reviewed, but build errors are what usually fail packaging.

The Build / Package page separates errors and warnings so you can focus on blocking issues first.

## Build fails with long paths

Use a shorter project path or output folder.

Example shorter paths:

```text
D:/UEProjects/MyProject/
D:/FabBuilds/MyPlugin/
```

Avoid adding UI notes or long labels to output folder names.

## My generated folders are locked

Close Unreal Editor and try again.

Folders such as Binaries and Intermediate may be locked while the plugin is loaded.

## The UI looks wrong after an update

Try:

1. Restart Unreal Editor.
2. Delete temporary editor layout state if necessary.
3. Rebuild the plugin.
4. Confirm the latest plugin files were copied correctly.
```

---

## File: `docs/validation-rules.md`

```markdown
# Validation Rules

This page summarizes the main rule groups used by Submission Helper for FAB.

The exact results can depend on the selected submission type, target, product category, and project structure.

## Target and submission setup

The plugin checks that a valid validation target is selected.

Common targets:

- Project Content / Game
- Project plugins under the project Plugins folder

For code plugins, the selected target should be the plugin you want to validate or package.

## Plugin descriptor metadata

For code plugins, the `.uplugin` descriptor may be checked for useful or required fields.

Common fields include:

- FriendlyName
- Description
- Category
- CreatedBy
- CreatedByURL
- DocsURL
- SupportURL
- MarketplaceURL or FabURL
- Engine version information
- Modules
- Plugins dependencies

Missing fields may appear as warnings or errors depending on the rule.

## Plugin dependencies

Plugin dependencies are reviewed to identify missing or external dependencies.

Allowed dependency patterns include:

- Unreal Engine plugins that are available with the engine
- Plugins bundled with the project
- Dependencies whose files are present in the submission

Problem cases include:

- External plugin dependencies not included with the project
- Missing plugin files
- Descriptor dependencies that cannot be resolved

A local build often catches missing code plugin dependencies because UnrealBuildTool fails when required files are unavailable.

## Generated folders

Generated local development folders should not be included in the final submitted plugin package.

Common generated folders:

```text
Binaries/
Intermediate/
Saved/
DerivedDataCache/
```

These are commonly created by Unreal during local development.

For code plugins, Binaries and Intermediate may exist while developing, but sellers generally remove them from the final submission package unless the official requirements say otherwise for a specific case.

## Source copyright headers

Source files should have an acceptable copyright header.

The default Epic header may be accepted when generated by Unreal, but sellers are encouraged to use their own publisher copyright header.

Typical behavior:

- Missing header should be treated as a blocking issue for source files that require it.
- Epic default placeholder can be allowed, but may trigger a recommendation to replace it with the seller's own header.
- User-defined header can be configured in Settings and applied where safe.

## Third-party files and bundled libraries

Code plugins can include third-party code or libraries, but they must be organized and bundled correctly.

Expected examples:

```text
Source/ThirdParty/
Content/Lib/
Content/site-packages/
```

The plugin may detect suspicious binary or library files outside expected locations.

Common file types include:

```text
.dll
.lib
.a
.so
.dylib
```

If the product depends on a third-party library, the required files must be included or documented correctly.

## Build.cs dependency review

Build.cs files are reviewed for dependency declarations and possible third-party integration paths.

Examples include:

- PublicDependencyModuleNames
- PrivateDependencyModuleNames
- PublicIncludePaths
- PublicAdditionalLibraries
- RuntimeDependencies
- DynamicallyLoadedModuleNames

This check may warn because dependency handling can be valid but still require human review.

## FilterPlugin.ini coverage

For plugin folders outside the default included folders, `FilterPlugin.ini` may be required.

Default included folders are:

```text
Content/
Resources/
Source/
```

Folders outside those may not be included in a packaged plugin unless configured.

Example:

```ini
[FilterPlugin]
/Docs/...
/MyOtherFolder/...
```

Use this when the plugin contains distributable folders such as Docs or other package-required files outside Content, Resources, and Source.

## Content folder structure

For Asset Pack and Complete Project submissions, content should be organized under a project-named folder inside Content.

Example:

```text
Content/MyProductName/
```

For Code Plugin submissions, this specific project-named content folder rule is not enforced the same way, but assets should still be organized in their proper folders.

Examples:

```text
Content/Blueprints/
Content/Textures/
Content/Materials/
Content/Meshes/
```

## Asset naming conventions

The plugin can check common Unreal asset prefixes.

Examples:

| Asset Type | Example Prefix |
|---|---|
| Blueprint | BP_ |
| Material | M_ |
| Material Instance | MI_ |
| Texture | T_ |
| Static Mesh | SM_ |
| Skeletal Mesh | SK_ |
| Widget Blueprint | WBP_ |
| Niagara System | NS_ |
| Sound Cue | SC_ |

Naming rules help reviewers and buyers understand content quickly.

## Asset type folder organization

Assets should be placed in folders that match their type or purpose.

Examples:

```text
Blueprints/
Textures/
Materials/
Meshes/
Audio/
Animations/
Maps/
```

This check may provide a safe move preview when supported.

## Redirectors

Unresolved redirectors should be fixed before submission.

Redirectors often appear after moving or renaming assets in Unreal Editor.

Use Unreal's built-in **Fix Up Redirectors** workflow before final packaging.

## Texture validation

Texture checks can include:

- Maximum texture size
- Power-of-two recommendations

Texture size issues can be errors when they exceed configured limits.

Power-of-two issues should be warnings because they are usually recommendations, not always blocking issues.

## Blueprint validation

Blueprint review can include:

- Broken references
- Compile status
- Missing parent classes
- Editor-only references
- Setup issues that require a demo or documentation

Blueprint validation can vary depending on project type and Unreal Engine version.

## Audio category checks

For Music products:

- Minimum content is expected to include at least 5 tracks.
- Product page should contain a way for users to listen to samples.
- Overview Map is not required.
- Demo Map is not required.

For Sound Effects products:

- Standard sound effects should include approximately 20 or more high-quality sounds.
- Ambient sound products should include at least 10 tracks.
- Product page should contain a way for users to listen to samples.
- Overview Map is not required.
- Demo Map is not required.

## MetaSound support

Only Unreal Engine 5.0 or newer products can support MetaSounds.

If a product includes UE4 project files, Sound Cues should still be included.

## Documentation reminder

For Blueprint products and Code Plugins, sellers should provide documentation explaining how to set up, use, and understand the product.

Documentation can be text, external documentation, or video, depending on the product.

The plugin can show a manual reminder that the user can mark as reviewed.

## Manual review checks

Some checks are intentionally manual because the plugin cannot reliably verify them.

Examples:

- Product page reviewed
- Media and previews reviewed
- Legal and content rights reviewed
- Visual quality reviewed
- Unused assets reviewed
- Supported engine versions reviewed
- Distribution method reviewed
- Final pre-package checklist completed

These items are reminders for the final seller review pass.
```
