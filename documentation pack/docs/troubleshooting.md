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
