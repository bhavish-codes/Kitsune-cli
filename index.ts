#!/usr/bin/env node
import CLI from "./cli_engin/cli_engin";
import speak from "./commands/speak";
import help from "./commands/help";
import Spirit from "./commands/spirit";
import loud from "./commands/loud";
import whisper from "./commands/whisper";
import riddle from "./commands/riddle";
import joke from "./commands/joke";
import weather from "./commands/weather";
import fortune from "./commands/fortune";
import vanish from "./commands/vanish";
const cli = new CLI();
cli.registerCommand([speak, help, Spirit, loud, whisper, riddle, joke, weather, fortune, vanish]);
cli.run();