import prisma from "../src/config/db";

async function DefaultUser() {
    await prisma.users.upsert({
        where: { email: "demo@driven.com.br" },
        update: {},
        create: {
            user_name: "Demo",
            email: "demo@driven.com.br",
            password: "demo123"
        }
    })
}

DefaultUser()
.then(async() => {
    await prisma.$disconnect();
})
.catch(async(e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
})