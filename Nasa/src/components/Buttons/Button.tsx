import { ComponentProps } from "react"

export type ButtonProps = ComponentProps<'button'>

export default function Button(props: ButtonProps){
    return(
        <button 
        className="text-3xl border-none p-4 rounded-3xl bg-sky-950 italic hover:bg-sky-800 hover:text-sky-950 hover:translate-y-4 hover:rotate-6 duration-1000 shadow-lg shadow-white hover:shadow-sm "
        {...props}></button>
    )
}



