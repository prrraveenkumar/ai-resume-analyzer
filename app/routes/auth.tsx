import { title } from 'process'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { usePuterStore } from '~/lib/puter'
import { useNavigate } from 'react-router'

export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'Description', content: 'LOg into your account' }
])


function auth() {
    const { isLoading, auth } = usePuterStore()
    const location = useLocation()
    const next = location.search.split('next=')[1]
    const navigate = useNavigate()

    useEffect(()=>{
        if(auth.isAuthenticated) navigate(next)

    },[auth.isAuthenticated,next])
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex justify-center items-center">
            <div className="gradient-border shadow-ld">
                <section className="flex flex-col bg-white gap-9 rounded-2xl p-10">
                    <div className="flex flex-col items-center text-center gap-2">
                        <h1>Welcome</h1>
                        <h2>Log in to continue Your job journey</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">
                                <p> Signing you in.....</p>

                            </button>
                        ) : (
                            <>
                                {auth.isAuthenticated ? (
                                    <button className="auth-button " onClick={auth.signOut}>
                                        <p>Log out</p>
                                    </button>
                                ) : (
                                    <button className="auth-button " onClick={auth.signIn}>
                                        <p>Log In</p>
                                    </button>
                                )}
                            </>
                        )}
                    </div>

                </section>

            </div>

        </main>
    )
}

export default auth