# ⏱️ Chronos — Real-Time World Clock Dashboard

Chronos is a modern, responsive **real-time clock dashboard built with React and Vite**. It combines an analog clock, digital clock, world time zones, alarm management, theme controls, and persistent user settings into a single dashboard.

The application is designed to simulate a professional world-clock system with live time updates across multiple regions.

---

## ✨ Features

### 🕐 Real-Time Clock

* Live analog clock
* Live digital clock
* Smooth clock-hand movement
* Displays current date and time
* Updates every second

### 🌍 World Clock

* Display multiple time zones simultaneously
* Add new cities/time zones
* Remove time zones
* Automatically handles time-zone differences
* Uses JavaScript `Intl.DateTimeFormat`
* Supports regions with daylight-saving changes

### ⏰ Alarm System

* Create alarms
* Enable/disable alarms
* Delete alarms
* Alarm notification when the scheduled time is reached
* Alarm settings persist using `localStorage`

### 🎨 Dynamic UI

* Light mode
* Dark mode
* Responsive layout
* Mobile-friendly interface
* Interactive buttons and cards
* Modern dashboard design

### 💾 Persistent Settings

The application stores the following information in browser `localStorage`:

* Selected theme
* Selected world clocks
* Configured alarms

Your settings remain available after refreshing the page.

---

# 🛠️ Technologies Used

* **React**
* **JavaScript**
* **Vite**
* **CSS3**
* **HTML5**
* **Browser Intl API**
* **LocalStorage API**

---

# 📁 Project Structure

```text
world-clock-dashboard/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── AlarmPanel.jsx
│   │   ├── AnalogClock.jsx
│   │   ├── DigitalClock.jsx
│   │   ├── Header.jsx
│   │   ├── TimeZoneCard.jsx
│   │   └── TimeZoneManager.jsx
│   │
│   ├── hooks/
│   │   └── useClock.js
│   │
│   ├── utils/
│   │   └── timezones.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/world-clock-dashboard.git
```

Move into the project directory:

```bash
cd world-clock-dashboard
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

The generated production files will be placed inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

# 🧠 Application Architecture

The application follows a component-based React architecture.

```text
                         App.jsx
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
      Header.jsx       Main Clock       TimeZoneManager
                            │                 │
                   ┌────────┴────────┐        │
                   │                 │        ▼
                   ▼                 ▼   TimeZoneCard
             AnalogClock       DigitalClock
                   │
                   └──────────┐
                              │
                              ▼
                         useClock.js
                              │
                              ▼
                     Current Date/Time
                              │
                         Every 1 second
```

The alarm system is handled separately:

```text
AlarmPanel
    │
    ├── Create Alarm
    ├── Enable/Disable
    ├── Delete
    └── Trigger Notification
            │
            ▼
       localStorage
```

---

# 🌎 Time Zone Handling

Chronos uses the browser's built-in `Intl.DateTimeFormat` API.

Example:

```javascript
const time = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
}).format(new Date());
```

This avoids manually calculating UTC offsets and provides better support for daylight-saving changes.

---

# ⚡ Performance

Chronos uses a single shared clock update instead of creating a separate timer for every world clock.

```text
                    useClock()
                        │
                   Every 1 second
                        │
                        ▼
                   Current Date
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
        India         London        Tokyo
```

This keeps the application simple and avoids unnecessary `setInterval()` instances.

---

# 📱 Responsive Design

The dashboard adapts to:

* Desktop
* Laptop
* Tablet
* Mobile

CSS media queries automatically change the layout based on screen width.

---

# 💾 Local Storage

Chronos stores user preferences in the browser.

Example:

```javascript
localStorage.setItem(
    "clock-theme",
    "dark"
);
```

Stored data includes:

```text
clock-theme
clock-zones
clock-alarms
```

No backend or database is required for the current version.

---

# 🔔 Alarm Workflow

The alarm system checks the current time every second.

```text
Current Time
     │
     ▼
Compare with Alarm
     │
     ├── Not Equal → Continue
     │
     └── Equal
          │
          ▼
       Trigger
          │
          ▼
      Notification
```

---

# 🔮 Future Improvements

Possible improvements include:

* [ ] Browser Notification API
* [ ] Snooze functionality
* [ ] Recurring alarms
* [ ] Alarm labels
* [ ] Stopwatch
* [ ] Countdown timer
* [ ] Searchable time zones
* [ ] Favorite cities
* [ ] World map visualization
* [ ] Time difference calculator
* [ ] Meeting planner
* [ ] Working-hours overlap
* [ ] 12-hour / 24-hour format switch
* [ ] Custom accent colors
* [ ] Keyboard shortcuts
* [ ] PWA support
* [ ] Offline support
* [ ] User authentication
* [ ] Cloud synchronization

---

# 🔐 Backend

The current version is a **frontend-only React application**.

No backend is required for:

* Clock functionality
* Time-zone conversion
* Theme settings
* Local alarms
* User preferences

A backend could be added later for:

* User accounts
* Cloud-saved alarms
* Synchronization across devices
* Shared world-clock dashboards
* Calendar integration

---

# 📦 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm install`     | Install dependencies     |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |

---

# 👨‍💻 Author

**Shubham**

React / Frontend Development Project

---

# 📄 License

This project is intended for educational and project-development purposes.

You may modify and extend the project according to your requirements.

---

## ⭐ If you like this project

Consider giving the repository a ⭐ on GitHub.
