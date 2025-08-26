'use client'

interface AffiliateOutcropProps {
    className?: string
}

export function AffiliateOutcrop({ className = "" }: AffiliateOutcropProps) {
    return (
        <div className={`absolute bottom-0 right-0 z-30 ${className}`}>
            {/* Main white outcrop container */}
            <div className="relative bg-white shadow-lg rounded-l-lg">
                {/* Sigmoid curve on the left side */}
                <div className="absolute -left-3 top-0 w-6 h-full">
                    <svg
                        width="24"
                        height="100%"
                        viewBox="0 0 24 100"
                        className="h-full"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 100
       C 24 100, 0 10, 24 0
       L24 100"
                            fill="white"
                            stroke="white"
                            strokeWidth="0.5"
                        />
                    </svg>


                </div>

                {/* Text content */}
                <div className="pl-5 pr-6 pt-2 pb-1">
                    <p className="text-sm text-gray-600 whitespace-nowrap">
                        Backed by Leading Researchers at Indiana University
                    </p>
                </div>
            </div>
        </div>
    )
}
