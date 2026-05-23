# Running Validation

Run validation whenever you change the selected product, move content, edit plugin metadata, update dependencies, or prepare a final package.

## Before you run validation

Check these settings first:

1. **Submission Type**
2. **Validation Target**
3. **Product Category**
4. **Distribution Method**
5. Manual review acknowledgments, if applicable

Make sure the selected target is the product you want to submit.

## Recommended full workflow

For most sellers, use this workflow from start to finish:

1. Open **Settings**.
2. Select the correct **Submission Type**.
3. Select the correct **Validation Target**.
4. Select the **Product Category** if the product needs category-specific checks.
5. Run validation.
6. Fix errors first.
7. Review warnings and manual review items.
8. Use **Auto Fix** only after previewing each proposed fix.
9. Run validation again.
10. For code plugins, use **Build / Package** after validation errors are resolved.
11. Export a report for your records.

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

Errors should be treated as blocking until proven otherwise. Warnings are usually review items, but some warnings can still point to problems that affect the buyer experience or Fab review.

## Re-run validation

After fixing issues or applying safe fixes, run validation again.

This confirms whether the issue was resolved and updates the Overview counts.

## Build and package workflow

Use **Build / Package** for Code Plugin submissions after the main validation pass is clean enough to continue.

Recommended packaging order:

1. Confirm **Submission Type** is **Code Plugin**.
2. Confirm **Validation Target** is the seller plugin, not Fab Submission Helper.
3. Fix validation errors related to plugin metadata, dependencies, generated folders, and source files.
4. Close or disable Live Coding if Unreal blocks the build.
5. Choose a short output folder.
6. Run the package action.
7. Review build errors first, then warnings.
8. Re-run validation on the packaged or cleaned plugin state if needed.

If packaging fails, read the first build error before fixing later warnings. Later messages are often caused by the first failure.

## Marking manual review items

Some items cannot be reliably checked automatically, such as:

- Product page content
- Media and previews
- Legal and content rights review
- Visual quality review
- Unused asset review
- Documentation review

When you complete one of these tasks, mark it as reviewed in the plugin.

## Exporting a report

Export a report after the final validation pass. This gives you a record of what was checked, which warnings were reviewed, and what manual items were acknowledged before submission.
