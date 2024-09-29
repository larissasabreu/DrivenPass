import prisma from "../src/config/db";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv'
dotenv.config();

async function DefaultUser() {
    const passwordHash = bcrypt.hashSync("demo123", 10)

    await prisma.users.upsert({
        where: { email: "demo@driven.com.br" },
        update: {},
        create: {
            user_name: "Demo",
            email: "demo@driven.com.br",
            password: passwordHash
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