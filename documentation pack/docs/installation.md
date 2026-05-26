# Installation

## Install in a project

1. Close Unreal Editor.
2. Copy the plugin folder into your project:

```text
YourProject/Plugins/FabSubmissionHelper/
```

3. Open the project in Unreal Editor.
4. Go to **Edit > Plugins**.
5. Search for **Submission Helper for FAB** or **Fab Helper**.
6. Enable the plugin.
7. Restart Unreal Editor if prompted.

## Verify installation

After restart, the plugin should appear as a dockable editor tab or toolbar/menu entry named **Fab Helper**.

If you cannot find it:

- Confirm the plugin folder contains a `.uplugin` file.
- Confirm it is inside the project `Plugins` folder.
- Regenerate project files if needed.
- Rebuild the project if it contains C++.
- Restart Unreal Editor.

## Recommended setup

For code plugin validation and packaging, make sure your machine has:

- Unreal Engine 5.x
- The matching Visual Studio toolchain for your Unreal Engine version
- Windows SDK required by your Unreal Engine version
- A short project path when possible

Long Windows paths can break packaging when output folders become too deep. Use shorter folders for Unreal projects and build output when possible.
