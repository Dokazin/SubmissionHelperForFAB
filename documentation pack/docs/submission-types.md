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
