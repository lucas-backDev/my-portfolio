import Image from "next/image";

import "./header.scss"

export function Header(){

    return(

        <div className="header">
            <div>
            <h1>Lucas Gomes</h1>
            <h2>Full Stack Developer</h2>
            </div>

            <Image
            src="/me.png"
            alt="Next.js logo"
            width={325}
            height={325}
            priority
            />

        </div>
    )
}