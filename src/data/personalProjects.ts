import type { Project } from "./projects";

export const personalProjects: Project[] = [
  {
    name: "Chat-App",
    description: "Full-stack chat workspace pairing a Next.js 15 frontend with a Flask API, MongoDB, and Socket.IO for realtime collaboration.",
    highlights: [
      "Uses Zustand stores and DaisyUI/Tailwind CSS 4 components so the React 19 client can manage friend lists, presence pills, and message panes without prop drilling.",
      "Backed by Flask-MongoEngine REST endpoints plus Flask-SocketIO channels that broadcast `new_message` events the client subscribes to via `socket.io-client`.",
      "Ships Docker Compose manifests that boot the Next.js app, Flask API, and MongoDB together and exposes `/api/health` for container probes."
    ],
    stack: ["Next.js", "React", "TypeScript", "Zustand", "Tailwind CSS", "Flask", "MongoDB", "Flask-SocketIO", "Docker Compose"],
    repo: "https://github.com/Shriram-Iyer/Chat-App"
  },
  {
    name: "TODO-APP",
    description: "Python learning project that offers CLI, PySimpleGUI, and Streamlit frontends on top of the same todo persistence helpers.",
    highlights: [
      "Centralises file-backed storage in `functions.py` so every interface reads and writes todos consistently no matter the client.",
      "Streamlit view (`webapp.py`) wires up checkboxes, edit dialogs, and session state callbacks to let users maintain tasks from the browser.",
      "Desktop GUI (`GUI.py`) relies on PySimpleGUI timers to refresh a live clock while handling add, edit, and complete events in the same window."
    ],
    stack: ["Python", "Streamlit", "PySimpleGUI", "Standard Library"],
    repo: "https://github.com/Shriram-Iyer/TODO-APP"
  },
  {
    name: "MotionDetection",
    description: "OpenCV motion detector that captures frames from a webcam and emails evidence whenever activity is spotted.",
    highlights: [
      "Applies Gaussian blur, frame differencing, and a 2,000 px contour threshold in `webcam.py` before drawing bounding boxes on detected motion.",
      "Queues mid-sequence screenshots and mails them through Gmail SMTP using credentials loaded with `python-dotenv` in `send_mail.py`.",
      "Runs alert sending and image clean-up on background threads so the capture loop in OpenCV never blocks."
    ],
    stack: ["Python", "OpenCV", "threading", "SMTP", "python-dotenv"],
    repo: "https://github.com/Shriram-Iyer/MotionDetection"
  },
  {
    name: "Weather_Forcast_App",
    description: "Streamlit dashboard that calls the OpenWeather API and visualises temperature trends with Plotly charts and weather icons.",
    highlights: [
      "`function.py` pulls the API key from `.env` and fetches five-day forecasts via `requests`, slicing results per slider selection.",
      "Users can switch among Celsius, Fahrenheit, and Kelvin in `weather.py`, with conversions applied before plotting the line chart.",
  "Maps forecast codes to local `images/` assets so each hourly panel renders the matching weather icon."
    ],
    stack: ["Python", "Streamlit", "Plotly", "Requests", "python-dotenv"],
    repo: "https://github.com/Shriram-Iyer/Weather_Forcast_App"
  },
  {
    name: "File_Compress_App",
    description: "PySimpleGUI utility that bundles selected files into ZIP archives via Python's standard library.",
    highlights: [
      "`Filetozip.py` collects multiple paths, destination folders, and archive names from the GUI before invoking the converter helper.",
      "`converter.py` wraps `zipfile.ZipFile` so file iteration and archive creation can be reused from other scripts.",
      "Clears form controls and posts completion messages to keep the compression workflow obvious for non-technical users."
    ],
    stack: ["Python", "PySimpleGUI", "zipfile", "pathlib"],
    repo: "https://github.com/Shriram-Iyer/File_Compress_App"
  },
  {
    name: "Table_Undo_Redo",
    description: "React playground built with `react-table` that lets users edit rows, paginate data, and travel through undo/redo history.",
    highlights: [
      "Overrides the default cell renderer with an `EditableCell` so every change pushes through the shared `updateMyData` handler.",
      "Maintains undo and redo stacks in local state, toggling a `skipPageReset` flag to keep pagination stable during edits.",
      "Provides page size selectors and navigation buttons from `usePagination`, showing how editing behaves alongside table controls."
    ],
    stack: ["React", "JavaScript", "react-table", "styled-components"],
    repo: "https://github.com/Shriram-Iyer/Table_Undo_Redo"
  },
  {
    name: "Shopping Cart Patterns",
    description: "Twin shopping cart demos comparing React state lifting against a Redux-style reducer layer using the same UI.",
    highlights: [
      "`Shopping_Cart_UseStateReact` keeps item quantities, totals, and modal toggles in component-level `useState` hooks for a lightweight baseline.",
      "`Shopping_Cart_ReduxReact` introduces action creators and reducer modules (`productCounter`, `subtotal`, `total`) to coordinate the identical components.",
      "Both builds share the same catalog data and counter components so teams can contrast per-feature changes when migrating to Redux."
    ],
    stack: ["React", "JavaScript", "Redux", "CodeSandbox"],
    repo: "https://github.com/Shriram-Iyer/Shopping_Cart_ReduxReact"
  }
];
