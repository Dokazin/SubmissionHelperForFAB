# Results

Validation results are shown as cards.

Read result cards from highest severity to lowest. A clean workflow usually means resolving errors, reviewing warnings, acknowledging manual review items, and then checking informational messages.

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

## How to use actions safely

Use **View Details** when you do not understand why a result appeared.

Use **Preview Fix** before any automatic change. The preview should show what the plugin intends to change, move, create, or update.

Use **Apply Fix** only when the preview matches what you want. After applying a fix, run validation again.

Use **Mark Reviewed** only after you have personally checked the item. Manual review items are not automatically proven by the plugin.

## Auto-fix results

An auto-fix badge appears only when the check has a real previewable or applicable fix.

If a check does not appear on the Auto Fix page, it should not show an auto-fix badge in Validation.

## Manual review results

Manual review results are reminders. They may affect readiness, but they usually require human confirmation rather than automatic scanning.

Examples include product page review, legal rights review, media preview review, unused asset review, and documentation review.
