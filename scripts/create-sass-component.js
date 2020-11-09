const fs = require('fs')
const inquirer = require('inquirer')
const slugify = require('slugify')

const command = () => {
  const sassDirectory = process.env.SASS_DIRECTORY || 'resources/styles'
  inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Create which type of component?',
      choices: [
        {
          name: 'Atom',
          value: 'atoms'
        },
        {
          name: 'Molecule',
          value: 'molecules'
        },
        {
          name: 'Organism',
          value: 'organisms'
        },
        {
          name: 'Utility',
          value: 'utilities'
        }
      ]
    },
    {
      type: 'input',
      name: 'name',
      message: 'Provide a component name (e.g. image-row)'
    },
    {
      type: 'confirm',
      name: 'createJs',
      message: 'Create a JS file for the component?',
      default: false
    }
  ]).then((answers) => {
    const componentName = slugify(answers.name)
    const componentType = answers.type
    const componentTypePath = `./${sassDirectory}/${componentType}`
    const componentPath = `${componentTypePath}/${componentName}`

    if (!fs.existsSync(componentTypePath)) {
      fs.mkdirSync(componentTypePath)
    }

    fs.mkdirSync(componentPath)
    fs.writeFile(`${componentPath}/${componentName}.scss`,
            `/*
/* General/Mobile
/**********************************************************************/`,
            (error) => {
              if (error) throw error
            }
    )
    fs.writeFile(`${componentPath}/${componentName}.twig`, '', (error) => {
      if (error) throw error
    })

    fs.writeFile(`${componentPath}/${componentName}.config.json`, '{}', (error) => {
      if (error) throw error
    })

    fs.writeFile(`${componentPath}/README.md`, '', (error) => {
      if (error) throw error
    })

    if (answers.createJs) {
      fs.writeFile(`${componentPath}/${componentName}.js`, '', (error) => {
        if (error) throw error
      })
    }
  }).catch((error) => {
    console.error(error)
  })
}

module.exports = command
