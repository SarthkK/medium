import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify} from 'hono/jwt';
import { Hono } from "hono";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_PASS: string
      },
      Variables: {
        userId: string
      }
}>();

userRouter.post("/signup", async (c)=>{

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name
        }
      });
    
      let token = await sign({id: user.id}, c.env.JWT_PASS)
    
      return c.json({
        jwt: token
      })
    } catch (error) {
      c.status(403);
      return c.json({
        error: "error while signing up"
      })
    }
  })
  
userRouter.post("/signin", async (c)=>{
const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
}).$extends(withAccelerate());

const body = await c.req.json();
try {
    let user = await prisma.user.findFirst({
    where: {
        email: body.email,
        password: body.password
    }
    })

    if(!user){
    c.status(403)
    return c.json({
        error: "Error siging in"
    });
    }
    let token = await sign({id: user.id}, c.env.JWT_PASS);

    return c.json({
    jwt: token
    })
} catch (error) {
    return c.json({
    error: "Database error"
    })
}

})
  

export default userRouter;