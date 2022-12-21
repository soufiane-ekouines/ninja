import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () =>{
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1) //go back
            router.push('/');
        },5000)
    },[])

    return (
        <div className="Not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found.</h2>
            <p><Link href="/"> Go back to page</Link></p>
        </div>
    )
}
export default NotFound