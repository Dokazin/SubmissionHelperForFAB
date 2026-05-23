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
