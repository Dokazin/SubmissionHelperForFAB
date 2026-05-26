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
