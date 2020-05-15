# Agile Task Board

## Changelog

- [Version 2.2.3.0](#version-2230)
- [Version 2.2.2.0](#version-2220)
- [Version 2.2.1.0](#version-2210)
- [Version 2.2.0.0](#version-2200)
- [Version 2.1.0.0](#version-2100)
- [Version 2.0.0.0](#version-2000)
- [Version 1.4.0.0](#version-1400)
- [Version 1.3.0.0](#version-1300)
- [Version 1.2.0.0](#version-1200)
- [Version 1.1.0.0](#version-1100)
- [Version 1.0.0.0](#version-1000)

---


### Version 2.2.3.0

> New Features

- Wizard Templating mechanism to generate pre-configured boards
  - Empty Template: Set up your own board by starting with an empty template.
  - Kanban - Simple Board: The simple Kanban board template is an easy starting point for agile planning methods.
  - Scrum - Sprint Board: Use the scrum sprint board together with the scrum planning board for lightweight scrum processes.
  - Scrum - Planning Board: Use the scrum planning board together with the scrum sprint board for lightweight scrum processes.
- Status field choices editable inside the settings panel
- Preferred Tags changeable within the mobile view

> Changes

- Redesign of the document upload
  - the UI is now closer to the SharePoint (online) styles
  - removed categories (documents subdivision): "Documents / Documents to Upload / Documents to Attach"
  - uploading documents now on drop / select (upload button), previously the upload was triggered on save button click
- Removed "SupportedLocales" from AppManifest, because of the error: "The app package used for upgrade does not support the culture 'xx-XX' used for installation."
  - The WebPart still supports the languages English and German

> Bug Fixes

- Minor bug fixes

> Known Issues

- Touch DnD partial support for ie11 and Edge
- IE11 input cursor position on task (card) inputs only changeable with keyboard


### Version 2.2.2.0

> New Features

- Extended document handling with "Check In"/"Publish"/"Approve" functionality
- Refresh button in header bar
- Document drag'n'drop on card
- Reset preferred tag color

> Changes

- Doing/Done presentation in mobile view
- Exception/Performance reporting (changes to app insights functionality)
- Window size optimizations
- Allow "Tenant-scoped" deployment for SharePoint 2019

> Bug Fixes

- Some UI and theming fixes
- Minor bug fixes

> Known Issues

- Touch DnD partial support for ie11 and Edge
- IE11 input cursor position on task (card) inputs

> Update info `SharePoint 2019`

if the `agiletaskboard-sp2016.sppkg` is installed in the App Catalog please follow the steps below:

- Select the `agiletaskboard-sp2016.sppkg` list entry
- Use the Ribbon or Item Menu to select `Rename` or `Edit Properties`
- Change the Name property from `agiletaskboard-sp2016` to `agiletaskboard-sp2019`
- Upload and Deploy the `agiletaskboard-sp2019.sppkg` file


### Version 2.2.1.0

> New Features

- Reset tag color
- Check required fields while editing task
- Optimizations for various window sizes

> Bug Fixes

- "fixed headerbar" position after page edit
- Board gets stuck while trying to add more than 10 files
- Automatically assigned face pile colors not consistent
- First input not getting initial focus in edit task panel
- People picker on task not getting initial focus
- Checklist on task not closing for visitors (they now have to open the task to see the checklist)
- No label for second user field on task card
- Various theme related bugs
- Lots of minor fixes

> Known Issues

- Touch DnD partial support for ie11 and Edge
- IE11 input cursor position on task (card) inputs


### Version 2.2.0.0

> New Features

- Teams integration
- Theming SPFx and AddIn SP2016+
- "First Steps" dialog
- Doing/Done mobile view

> Bugfixes

- JSOM ClientContext.get_current() issue
- Minor fixes

> Known Issues

- "fixed headerbar" position after page edit/publish, fixed after page refresh
- Touch DnD partial support for ie11 and Edge
- IE11 input cursor position on task (card) inputs


### Version 2.1.0.0

> New Features

- Doing/Done (Enhanced Features)
- History & Comments
- Fixed HeaderBar
  - AddIn FullPage only

> Changes

- Exception/Performance reporting (changes to app insights functionality)
  - If app insights had been switched off, performance reporting will be off on default

> Bugfixes

- Document linking
- Styling fixes across browsers
- Many other fixes

> Known Issues

- Touch DnD partial support for IE11 and Edge


### Version 2.0.0.0

> New Features

- SPFx support SharePoint 2016
- German language support
- Configuration Overlay (SPFx SharePoint 2016 only)

> Changes

- People coloring (headerbar)
- Code restructuring
- Settings Panel structure
- Tag-/People-Picker DnD improvements

> Bugfixes

- Fixed "Work In Progress"
- Minor fixes


### Version 1.4.x.0

> New Features

- Added collapse all swimlanes button
- Work in Progress (Enhanced Features)

> Bugfixes

- EditPanel loading if a configured field is missing
- IE11 focus problem with tooltips
- Attachments link parsing
- Collapse swimlanes behavior
- Invalid Requestdigest after 30min
- Strip html on description field
- Task coloring

### Version 1.4.0.0

> New Features

- Attachments tab with Documents and Links

> Changes

- UI improvements
  - Settings Panel structure
  - Card attachments clip
  - Panel icons only in mobile view
- Show label for sub heading
- Task fullwidth switch
- Task sorting
- Show due date always with offset

> Bugfixes

- Ampersand ＆ fix for tags
- FieldType Error on sub webs
- Show login prompt for 304,401 user profile image


### Version 1.3.0.0

> New Features

- Link documents to task
- Upload documents to library
- Select existing documents from SharePoint
- Read-Only view if user does not have the necessary permissions
- Implemented Touch-Drag-and-Drop

> Changes

- New design for Edit Task Panel
- Select default for collapse/expand empty Swimlanes
- Reduced calls to get UserInfos
- Prevent Drag-and-Drop between different Taskboards

> Bugfixes

- "Link to Address" in RTE does not work in Chrome
- Swimlanes switch instead of reorder
- Swimlanes not sortable in Chrome

> Known Issues

- Edit Task Panel opens multiple times if task is shown in multiple swimlanes
- IE only: Overwrite-Callout closes on first button click instead of execute button action


### Version 1.2.0.0

> New Features

- Pin swimlanes to top
- Collapse swimlanes
- Links to tasks
- Set editable CAML filter for last column
- Fixed headerbar while scrolling (not available for AddIn Webpart)
- Customize editfields in editpanel (reorder fields, hide fields, etc.)

> Changes

- New RTE editor
- Improved Checklist editor
  - Editable entries
  - Reorder entries
- Customizable Tasks
  - Select which notefield is used as default
- SubTitle is now info-only but every fieldtype can be chosen

> Bugfixes

- Taskboard not loading, when standard Sharepoint columns from Tasks got removed.
- SingleUserField for Editpanel


### Version 1.1.0.0

> New Features

- Customizable Tasks
- RTE Editor for notefields
- Checklist Editor
- Headerbar
  - Assign users or tags to tasks with drag and drop
  - Filter options for tasks

> Improvements

- Task Board settings options
  - Reorder of swimlanes, preferred tags and people with drag and drop

> Bugfixes


### Version 1.0.0.0

> Features

- Create and modify new tasks on the board
- Change status with drag and drop
- Add tags to tasks
- Colorize tasks with tags
- Creating swimlanes on the board
- Customizable appearance of Tasklists per board


