<div align="center">
  <img src="https://raw.githubusercontent.com/bhavish-codes/Kitsune-cli/main/assets/logo.png" alt="Kitsune CLI" width="200" onerror="this.style.display='none'"/>
  
  <h1>🦊 Kitsune CLI</h1>
  <p><b>A mystical, fox-spirit themed command-line interface companion.</b></p>

  <p>
    <a href="https://github.com/bhavish-codes/Kitsune-cli/issues"><img src="https://img.shields.io/github/issues/bhavish-codes/Kitsune-cli?style=flat-square&color=magenta" alt="Issues"></a>
    <a href="https://github.com/bhavish-codes/Kitsune-cli/stargazers"><img src="https://img.shields.io/github/stars/bhavish-codes/Kitsune-cli?style=flat-square&color=cyan" alt="Stars"></a>
    <a href="https://github.com/bhavish-codes/Kitsune-cli/blob/main/LICENSE"><img src="https://img.shields.io/github/license/bhavish-codes/Kitsune-cli?style=flat-square&color=yellow" alt="License"></a>
  </p>
</div>

---

**Kitsune CLI** (`kit`) is a beautifully crafted, terminal-based companion. Channeling the ancient wisdom of the Kitsune (fox spirit), this CLI tool provides mystical advice, speaks to you directly through your terminal, and offers a visually stunning experience using gradients, beautiful boxes, and terminal animations.

> ⚠️ **Note:** This project is currently in active development. Some mystical abilities are still being conjured!

##  Features

- 🦊 **Mystical Aesthetic:** Beautiful terminal styling using `chalk`, `gradient-string`, and `boxen`.
- 🗣️ **Auditory Responses:** The spirit actually speaks to you using the `say` package.
- 🧘‍♂️ **Wisdom & Quotes:** Summons random wisdom and philosophical quotes via the API Ninjas service.
- 🛠️ **Modular Architecture:** Built with TypeScript and Node.js using `commander`.

##  Installation

Ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bhavish-codes/Kitsune-cli.git
   cd Kitsune-cli
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your environment variables:**
   Create a `.env` file in the root directory and add your API Ninjas Key:
   ```env
   API_NINJAS_KEY=your_api_key_here
   ```

4. **Build the TypeScript files:**
   ```bash
   npx tsc
   ```

5. **Link the package globally:**
   ```bash
   npm link
   ```

Now you can summon the spirit from anywhere using the `kit` command!

##  Usage & Commands

Here are the currently active incantations you can use:

### 1. Speak
Have the Kitsune channel ancient wisdom and speak your words aloud.

```bash
kit speak "Hello traveler, welcome to my realm."
```

### 2. Spirit
Summon the Kitsune spirit to receive a piece of wisdom, philosophy, or truth. Optionally, have the spirit speak the quote out loud.

```bash
kit spirit
# Or to hear the spirit speak:
kit spirit speak
```

### 3. Help
Summon the mystical help menu for detailed information about a specific command.

```bash
kit help speak
```

### 4. Loud
Make the Kitsune shout your message across the digital realm, using large text.

```bash
kit loud "Wake up!"
# Or to hear the spirit speak loud:
kit loud "Wake up!" speak
```

### 5. Riddle
The cunning fox presents a puzzle for your mind. You can provide a timer in seconds.

```bash
kit riddle 30
```

---

##  Roadmap (In Development)

The Kitsune is still learning new tricks. The following commands are currently being forged in the spirit realm:

- [ ] `joke` - A touch of kitsune mischief.
- [ ] `fortune` - Look into the mystical future.
- [ ] `weather` - Read the winds and skies.
- [ ] `vanish` - The spirit disappears without a trace.
- [ ] `whisper` - The spirit whispers to you.

##  Built With

- [TypeScript](https://www.typescriptlang.org/) - For robust, strongly-typed code.
- [Commander.js](https://github.com/tj/commander.js) - The complete solution for node.js command-line interfaces.
- [Chalk](https://github.com/chalk/chalk) & [Gradient-String](https://github.com/bokub/gradient-string) - For beautiful terminal styling.
- [Boxen](https://github.com/sindresorhus/boxen) - For creating terminal boxes.
- [Ora](https://github.com/sindresorhus/ora) - Elegant terminal spinners.
- [Say](https://github.com/Marak/say.js) - TTS (Text To Speech) wrapper.

##  Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/bhavish-codes/Kitsune-cli/issues) if you want to contribute.

##  License

This project is licensed under the ISC License.
