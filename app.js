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

addData()