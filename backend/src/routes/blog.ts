import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt';
import { Hono } from "hono";
import { createBlogInput, updateBlogInput } from "@sarthkkharwal/medium-common";


const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_PASS: string
      },
      Variables: {
        userId: string
      }
}>();

blogRouter.use("/*", async (c, next)=>{
    let header = c.req.header("authorization");

    if(!header){
      c.status(403)
      return c.json({
        error: "Couldn't verify user"
      })
    }

    let token = await verify(header, c.env.JWT_PASS);

    if(token.id && typeof token.id === "string"){
      c.set('userId', token.id);
      await next()
    } else {
      c.status(403)
      return c.json({
        error: "Couldn't verify user"
      })
    }
})

blogRouter.post("/", async (c)=>{
    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if(!success){
      return c.json({
        message: "inputs not correct"
      })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        let post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get("userId")    
            }
        })
        return c.json({
            id: post.id
        })
    } catch (error) {
        c.status(500);
        return c.json({
            message: "couldn't create post"
        })
    }
})

blogRouter.put("/", async (c)=>{
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if(!success){
      return c.json({
        message: "inputs not correct"
      })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        let post = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        return c.json({
            id: post.id
        })
    } catch (error) {
        c.status(500);
        return c.json({
            message: "couldn't update post"
        })
    }
})

// maybe add pagionation
blogRouter.get("/bulk", async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        let post = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            posts: post
        })
    } catch (error) {
        c.status(500);
        return c.json({
            message: "couldn't find posts"
        })
    }
})

blogRouter.get("/:id", async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const id = c.req.param("id");
    try {
        let post = await prisma.post.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            post
        })
    } catch (error) {
        c.status(500);
        return c.json({
            message: "couldn't find post"
        })
    }
})

export default blogRouter;