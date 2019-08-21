# Agile Task Board

## Changelog

- [Version 2.1.0.0](#version-2100)
- [Version 2.0.0.0](#version-2000)
- [Version 1.4.0.0](#version-1400)
- [Version 1.3.0.0](#version-1300)
- [Version 1.2.0.0](#version-1200)
- [Version 1.1.0.0](#version-1100)
- [Version 1.0.0.0](#version-1000)

---

#### Version 2.1.0.0

> New Features

- Doing/Done (Enhanced Features)
- History & Comments
- Fixed HeaderBar
  - AddIn FullPage only

> Bugfixes

- document linking
- styling fixes across browsers
- many other fixes

> Known Issues

- Touch DnD partial support for ie11 and Edge

#### Version 2.0.0.0

> New Features

- SPFx support SharePoint 2016
- German language support
- Configuration Overlay (SPFx SharePoint 2016 only)

> Changes

- People coloring (headerbar)
- Code restructuring
- Settings Panel structure
- Tag-/People-Picker DnD improvments

> Bugfixes

- Fixed "Work In Progress"
- Minor fixes

#### Version 1.4.x.0

> New Features

- Added collapse all swimlanes button
- Work in Progress (Enhanced Features)

> Bugfixes

- EditPanel loading if a configured Field is missing
- ie11 focus problem with tooltips
- attachments link parsing
- collapse swimlanes behavior
- invalid Requestdigest after 30min
- strip html on description Field
- task coloring

### Version 1.4.0.0

> New Features

- Attachments Tab with Documents and Links

> Changes

- UI improvements
  - Settings Panel structure
  - Card Attachments Clip
  - Panel Icons Only in mobile view
- Show Label for sub heading
- Task fullwidth switch
- Task sorting
- Show due date always with offset

> Bugfixes

- Ampersand ＆ Fix for Tags
- FieldType Error on sub webs
- Show Login promt for 304,401 user profile image

### Version 1.3.0.0

> New Features

- link Documents to Task
- upload Documents to Library
- select existing Documents from SharePoint
- Read-Only View if User has not the necessary permissions
- implemented Touch-Drag-and-Drop

> Changes

- new design for Edit Task Panel
- select default for collapse/expand empty Swimlanes
- reduced Calls to get UserInfos
- prevent Drag-and-Drop between different Taskboards

> Bugfixes

- "Link to Adress" in RTE does not work in Chrome
- Swimlanes switch instead of reorder
- Swimlanes not sortable in Chrome

> Known Issues

- Edit Task Panel opens multiple times if task is shown in multiple swimlanes
- IE only: Overwrite-Callout closes on first button click instead of execute button action

---

### Version 1.2.0.0

> New Features

- pin swimlanes to top
- collapse swimlanes
- links to tasks
- set editable CAML filter for last column
- fixed headerbar while scrolling (not available for AddIn Webpart)
- customize editfields in editpanel (reorder fields, hide fields, etc.)

> Changes

- new RTE editor
- improved Checklist editor
  - editable entries
  - reorder entries
- customizable Tasks
  - select which notefield is used for default
- subTitle is now info-only but every fieldtype can be chosen

> Bugfixes

- Taskboard not loading, when standard Sharepoint columns from Tasks got removed.
- singleuserfield for Editpanel

---

### Version 1.1.0.0

> New Features

- customizable Tasks
- RTE Editor for notefields
- Checklist Editor
- Headerbar
  - assign users or tags to tasks with drag and drop
  - filter options for tasks

> Improvents

- Task Board settings options
  - reorder of swimlanes, preferred tags and people with drag and drop

> Bugs

---

### Version 1.0.0.0

> Features

- create and modify new tasks on the board
- change status with drag and drop
- add tags to tasks
- colorize tasks with tags
- creating swimlanes on the board
- customizable appearance of Tasklists per board
