# Getting Started

This guide explains the normal workflow for using Fab Submission Helper inside Unreal Editor.

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

Fab Submission Helper uses several result types:

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
