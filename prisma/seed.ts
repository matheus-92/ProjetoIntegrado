import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const alesson = await prisma.user.upsert({
        where: { email: '9SgHU9UACFlV9P3g/0TejYILr8FYhKkVWImBmb/jSg4=' },
        update: {},
        create: {
            email: '9SgHU9UACFlV9P3g/0TejYILr8FYhKkVWImBmb/jSg4=',
            name: 'Matheus',
            password:
                '106e12c1d806686601aaeb30492739216b6a738b3aaee7862bbb91bb8c6c77e5',
            isAdmin: true,
            created_by: '',
        },
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
