"use client"

import { useEffect, useState } from "react"


export default function Login() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setI(i => (i + 1) % 100);
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return <div>
        Hello WOrld {i}
    </div>
}