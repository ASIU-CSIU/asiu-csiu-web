'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useToast } from "@/components/ui/toast"

interface NewsletterSignupProps {
    className?: string
    placeholder?: string
    buttonText?: string
}

export function NewsletterSignup({
    className = "",
    placeholder = "johndoe@example.com",
    buttonText = "Subscribe"
}: NewsletterSignupProps) {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { showToast } = useToast()

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleSubscribe = async () => {
        // Validate email
        if (!email.trim()) {
            showToast("Please enter an email address", "error")
            return
        }

        if (!validateEmail(email)) {
            showToast("Please enter a valid email address", "error")
            return
        }

        setIsLoading(true)

        try {
            // Send subscription email
            const response = await fetch('/api/newsletter-subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            if (response.ok) {
                showToast("Successfully subscribed to our newsletter!", "success")
                setEmail("")
            } else {
                const error = await response.json()
                showToast(error.message || "Failed to subscribe. Please try again.", "error")
            }
        } catch (error) {
            showToast("Network error. Please check your connection and try again.", "error")
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubscribe()
        }
    }

    return (
        <div className={`flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto ${className}`}>
            <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
                disabled={isLoading}
            />
            <Button
                onClick={handleSubscribe}
                disabled={isLoading}
                className="bg-science-blue text-white"
            >
                {isLoading ? (
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Subscribing...
                    </div>
                ) : (
                    <>
                        <Mail className="mr-2 h-4 w-4" />
                        {buttonText}
                    </>
                )}
            </Button>
        </div>
    )
}
