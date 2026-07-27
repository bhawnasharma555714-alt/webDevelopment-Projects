import bcrypt from 'bcryptjs';

const SALT_ROUND = 10;

async function tryBcrypt() {
    try{
        const user= { password:"123"};
        let hashedPwd = await bcrypt.hash(user.password, SALT_ROUND);
        console.log(hashedPwd);

        user.password = "123";
        hashedPwd = await bcrypt.hash(user.password, SALT_ROUND);;
        console.log(hashedPwd);

        user.password = "abc";
        hashedPwd = await bcrypt.hash(user.password, SALT_ROUND);;
        console.log(hashedPwd);
    const h1 = "$2b$10$JILYLFHzOzzTLpnVI6ow6.xA9igHTcDjR9lDYbtYp6Gs1pGG3yJ32";
    const h2 = "$2b$10$VTUsyUAu6p2DWhi/f/kXAuYuWqaYaPBK85EjpP5iJpAg1dfhBLugy";
    const h3 = "$2b$10$t2BEOyxqp53aIyo2v8fFF.K3f3TZGbihu9vvys4NmFoowziBmk33q";
    console.log(await bcrypt.compare("123",h1));
    console.log(await bcrypt.compare("123",h2));
    console.log(await bcrypt.compare("123",h3));
    console.log(await bcrypt.compare("abc",h1));
    console.log(await bcrypt.compare("abc",h2));
    console.log(await bcrypt.compare("abc",h3));
    }catch(err){
        console.log(err);
    }
}

tryBcrypt();

