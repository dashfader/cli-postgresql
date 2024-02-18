const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const prompts = require('prompts')

async function addData() {
    const userInput = [
        {
            type: 'text',
            name: 'username',
            message: 'What is your username?'
        },
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'text',
            name: 'description',
            message: 'Explain about yourself? (Optional)'
        }
    ]
    const userInfo = await prompts(userInput)
    const newData = await prisma.userData.create({
        data: {
            username: userInfo.username,
            name: userInfo.name,
            description: userInfo.description
        }
    })
    console.log(newData)
}

async function askUser() {
    const choice = await prompts({
        type: 'number',
        name: 'value',
        message: 'What will you do?'
    })
    switch (choice.value) {
        case 0:
            process.exit();

        case 1:
            addData()
            break;
    
        default:
            console.log('Please input a number!')
            return askUser()
    }
}

askUser()
