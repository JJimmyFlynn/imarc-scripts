#!/usr/bin/env node

const { Command } = require('commander')
const CreateSassComponent = require('./scripts/create-sass-component.js')
require('dotenv').config()

const program = new Command

program.version('1.0.0')
    .command('create-sass-component')
    .action((env, options) => {
        CreateSassComponent()
    })

program.parse()
