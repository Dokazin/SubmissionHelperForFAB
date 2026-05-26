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
