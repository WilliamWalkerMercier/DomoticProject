# 🎵 Custom Music Player

A fully custom, responsive and animated web-based music player.  
Built with **HTML**, **CSS**, and **JavaScript**, it features:

- 🎧 Playlist loaded from a local `music.json` file
- 🎚️ Interactive custom progress bar
- 🔀 Shuffle mode with visual toggle
- 🕒 Time display (elapsed / total)
- 💿 Animated vinyl (pulse effect + color-changing center)
- 📱 Touch-friendly UI (works on tablets too)

---

## 🖼️ Preview

![music-player-demo](preview.png)  
*(Replace this with your screenshot)*

---

## 🚀 Features

| Feature                  | Description                                         |
|--------------------------|-----------------------------------------------------|
| 🎼 Playlist JSON         | Dynamic playlist loaded from a `music.json` file    |
| 🔁 Play controls         | Play, Pause, Next, Previous                         |
| ⏱️ Time indicator        | Shows elapsed time / total time                     |
| 🔀 Shuffle mode          | Toggleable shuffle button with visual feedback      |
| 💡 Vinyl animation       | Central disc pulses and changes color per track     |
| ⚙️ Custom progress bar   | Clickable and animated using pure JS/CSS            |

---

## 📁 File Structure
project/
├── index.html
├── styles.css
├── scriptMusic.js
├── music.json
├── music/ # your .mp3, .wav, etc.
└── preview.png # optional screenshot for GitHub

## 📦 Setup

1. Put your audio files in the `music/` folder  
2. Generate the `music.json` file using a Python script, or manually create it:
   ```json
   [
     {
       "title": "Track 1",
       "author": "Artist",
       "duration": "3:45",
       "path": "music/track1.mp3"
     }
   ]
   Open index.html in a local server (to allow fetch):

Using Python:

bash
Copier
Modifier
python -m http.server
Then go to: http://localhost:8000

🎨 Customization Ideas
Add album covers

Theme switch (light/dark)

Auto-scroll playlist with currently playing track

Volume slider

Keyboard shortcuts

📄 License
MIT License — use it freely, modify and share!

🙌 Credits
Created by William Walker--Mercier
Feel free to contribute or fork the project!
