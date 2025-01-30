import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
interface Blogs {
    content: string,
    title: string,
    id: string,
    author: {
        name: null | string
    }
}

export interface Blog {
    id: string,
    title: string,
    content: string,
    author: {
        name: null | string
    }
}

export const useBlog = ({id}: {id: string | undefined})=>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    if(id === undefined){
        id = ""
    }
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        })
        .then((res)=>{
            setBlog(res.data.post)
            setLoading(false)
        })
    }, [])
    return {loading, blog};
}

export const useBlogs = ()=>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogs[]>([]);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        })
        .then((res)=>{
            setBlogs(res.data.posts);
            setLoading(false)
        })
    },[]);
    return { loading, blogs }
}

export const useGetDetails = () => {
    const [name,setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [catchphrase, setCatchphrase] = useState(" ")
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/user/info`, {
            headers: {
                Authorization: localStorage.getItem('Authorization')
            }
        }).then((res)=>{
            setName(res.data.name);
            setEmail(res.data.email);
            setCatchphrase(res.data.catchphrase)
        })
    },[]);
    return {name, email, catchphrase};
}