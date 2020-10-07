# Imarc Project Scripts

A collection of command line utilities to help perform common tasks on Imarc projects

## Installation
Project scripts must be installed as a global NPM module.

`npm install -g imarc/project-scripts`

## Usage
Project scripts are invoked using the command `imarc <script-name>`. Currently, all scripts must be run from the
 root of the project.
 
 ## Scripts
 `create-sass-component`
 
 Creates a SASS component per Imarc's Fractal pattern library setup. The script will ask you for information on your
  component.
 
 You may choose to create an atom, molecule, or organism. You may optionally create a javascript file for the component.
 
 Creates:
 - component-name (dir)
    - component-name.twig
    - component-name.scss
    - component-name.js (optional)
    
N.B. The script will create the components in the appropriate atomic folder in `/resources/styles` by default. You
 may override the base location of styles by using the `SASS_DIRECTORY` environment variable.
 
 e.g. `SASS_DIRECTORY=different-dir/sass`
