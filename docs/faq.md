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

Fab Submission Helper is itself a project plugin when installed in the project Plugins folder.

It may appear as a target for development or testing. Select it only if you intentionally want to validate the helper plugin itself.

## Should I use Auto Detect?

Auto Detect is useful for early setup, but explicit submission type selection is recommended before final review.

## Should I apply every auto-fix?

No. Always preview a fix before applying it.

Use source control or backups for important projects.

## Are all warnings required to be fixed?

Not always. Warnings indicate something that should be reviewed. Some warnings are recommendations, while others point to likely review issues.

## What should I fix first?

Fix errors first. Then fix build errors, missing dependencies, required structure problems, and warnings. Manual review items should be completed before final submission.

## Why is the Auto Fix page empty?

The Auto Fix page only shows checks that have a safe previewable or applicable fix. Many warnings require seller judgment and must be handled manually.

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

## Should I validate again after packaging?

Yes. Run validation again after applying fixes, changing dependencies, deleting generated folders, or packaging a code plugin. This confirms that the current state still matches the selected target and submission type.
