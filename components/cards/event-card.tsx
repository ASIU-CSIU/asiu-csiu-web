import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { Clock, MapPin, Users, ExternalLink } from "lucide-react"
import Image from "next/image"
import type { Event } from "@/lib/types"
import { ClampedText } from "@/components/cards/clamped-text"

interface EventCardProps {
    event: Event
    isPast?: boolean
}

export function EventCard({ event, isPast = false }: EventCardProps) {
    // Format date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    // Format time
    const formatTime = (dateTimeString: string) => {
        const date = new Date(dateTimeString)
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        })
    }

    // Get badge color based on first tag
    const getBadgeColor = (tags: string[]) => {
        const firstTag = tags[0]?.toLowerCase() || ''
        if (firstTag.includes('training') || firstTag.includes('workshop')) return 'bg-science-blue'
        if (firstTag.includes('forum') || firstTag.includes('discussion')) return 'bg-science-green'
        if (firstTag.includes('meeting') || firstTag.includes('assembly')) return 'bg-science-red'
        if (firstTag.includes('special') || firstTag.includes('panel')) return 'bg-purple-600'
        return 'bg-science-blue'
    }

    // Get border color based on first tag
    const getBorderColor = (tags: string[]) => {
        const firstTag = tags[0]?.toLowerCase() || ''
        if (firstTag.includes('training') || firstTag.includes('workshop')) return 'border-l-science-blue'
        if (firstTag.includes('forum') || firstTag.includes('discussion')) return 'border-l-science-green'
        if (firstTag.includes('meeting') || firstTag.includes('assembly')) return 'border-l-science-red'
        if (firstTag.includes('special') || firstTag.includes('panel')) return 'border-l-purple-600'
        return 'border-l-science-blue'
    }

    // Get button color based on first tag
    const getButtonColor = (tags: string[]) => {
        const firstTag = tags[0]?.toLowerCase() || ''
        if (firstTag.includes('training') || firstTag.includes('workshop')) return 'bg-science-blue'
        if (firstTag.includes('forum') || firstTag.includes('discussion')) return 'bg-science-green'
        if (firstTag.includes('meeting') || firstTag.includes('assembly')) return 'bg-science-red'
        if (firstTag.includes('special') || firstTag.includes('panel')) return 'bg-purple-600'
        return 'bg-science-blue'
    }

    // Get outline button color for past events
    const getOutlineButtonColor = (tags: string[]) => {
        const firstTag = tags[0]?.toLowerCase() || ''
        if (firstTag.includes('training') || firstTag.includes('workshop')) return 'border-science-blue text-science-blue'
        if (firstTag.includes('forum') || firstTag.includes('discussion')) return 'border-science-green text-science-green'
        if (firstTag.includes('meeting') || firstTag.includes('assembly')) return 'border-science-red text-science-red'
        if (firstTag.includes('special') || firstTag.includes('panel')) return 'border-purple-600 text-purple-600'
        return 'border-science-blue text-science-blue'
    }

    const badgeColor = getBadgeColor(event.tags)
    const borderColor = getBorderColor(event.tags)
    const buttonColor = getButtonColor(event.tags)
    const outlineButtonColor = getOutlineButtonColor(event.tags)

    return (
        <Card className={`${borderColor} hover:shadow-lg transition-shadow overflow-hidden p-0 pb-6 gap-0`}>
            {event.imageUrl && (
                <div className="relative h-48 w-full">
                    <Image
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}
            <CardHeader className="pb-3 pt-4 px-6">
                <div className="flex items-center justify-between mb-2">
                    <Badge className={badgeColor}>{event.tags[0] || 'Event'}</Badge>
                    <span className="text-sm text-gray-500">{formatDate(event.date)}</span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <ClampedText
                    text={event.subtitle}
                    className="text-sm text-muted-foreground line-clamp-2"
                    asChild
                >
                    <CardDescription />
                </ClampedText>
            </CardHeader>
            <CardContent className="pt-0 px-6">
                <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">
                            {formatTime(event.startTime)} - {formatTime(event.endTime)}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">
                            {event.locationUrl ? (
                                <a
                                    href={event.locationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-science-blue hover:text-science-green transition-colors"
                                >
                                    {event.location} <ExternalLink className="inline h-3 w-3 ml-1" />
                                </a>
                            ) : (
                                event.location
                            )}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">
                            {isPast ? (
                                event.participantCount
                                    ? `${event.participantCount} participants`
                                    : `${event.audience.join(', ')}`
                            ) : (
                                event.participantCount
                                    ? `Open to ${event.audience.join(', ')} (${event.participantCount} participants)`
                                    : `Open to ${event.audience.join(', ')}`
                            )}
                        </span>
                    </div>
                </div>
                <ClampedText
                    text={event.description}
                    className="text-gray-600 text-sm mb-4 line-clamp-3"
                />
                <Button
                    size="sm"
                    variant={isPast ? "outline" : "default"}
                    className={isPast ? outlineButtonColor : buttonColor}
                    asChild
                >
                    <a href={event.btnUrl} target="_blank" rel="noopener noreferrer">
                        {event.btnText}
                    </a>
                </Button>
            </CardContent>
        </Card>
    )
}
