import Link from 'next/link';
import React from 'react'

interface LoginButtonProps {
    text: string;
    href: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ text, href }) => {
    return (
        <div className="Login-button">
            <Link href={href} title="Login-button" type="submit" className="ring-[0.8px] ring-white px-16 py-2 rounded-3xl bg-transparent hover:bg-white/15 transition-all duration-300 text-sm">
                {text}
            </Link>
        </div>
    )
}

export default LoginButton