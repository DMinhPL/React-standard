// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [{
        type: 'select',
        name: 'level',
        message: 'Choose the atomic level of component you will generate',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
    },
    {
        type: 'input',
        name: 'name',
        message: "Input your component's name",
    },
];