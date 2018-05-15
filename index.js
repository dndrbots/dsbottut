//variables
const Discord = require('discord.js');
const { promisify } = require('util');
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");

const client = new Discord.Client();
client.config = require('./config.js');

client.logger = require("./Logger");
