# Common Errors

## The plugin validates itself instead of my product

Open **Settings** and check **Validation Target**.

For a seller code plugin, select the seller plugin target, not Fab Submission Helper.

If the project only contains Fab Submission Helper, the helper may be the only available plugin target.

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
