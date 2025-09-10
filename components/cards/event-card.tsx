import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { Button } from "@/components/ui/primitives/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/composite/dropdown-menu"
import { Clock, MapPin, Users, ExternalLink, Bookmark } from "lucide-react"
import Image from "next/image"
import type { Event } from "@/lib/types"
import { ClampedText } from "@/components/cards/clamped-text"
import { formatLocalDate, formatDateForCalendar as formatDateForCalendarUtil } from "@/lib/utils"

interface EventCardProps {
    event: Event
    isPast?: boolean
}

export function EventCard({ event, isPast = false }: EventCardProps) {
    // Format date - use timezone-safe parsing to prevent date shifts
    const formatDate = (dateString: string) => {
        return formatLocalDate(dateString)
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

    // Format date for calendar links (YYYYMMDD format) - timezone-safe
    const formatDateForCalendar = (dateString: string) => {
        return formatDateForCalendarUtil(dateString)
    }

    // Format time for calendar links (HHMM format)
    const formatTimeForCalendar = (dateTimeString: string) => {
        const date = new Date(dateTimeString)
        return date.toTimeString().slice(0, 5).replace(/:/g, '')
    }

    // Generate calendar links
    const generateCalendarLinks = () => {
        const startDate = formatDateForCalendar(event.date)
        const endDate = formatDateForCalendar(event.date)
        const startTime = formatTimeForCalendar(event.startTime)
        const endTime = formatTimeForCalendar(event.endTime)

        const title = encodeURIComponent(event.title)
        const description = encodeURIComponent(event.description)
        const location = encodeURIComponent(event.location)

        // Google Calendar
        const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}T${startTime}00/${endDate}T${endTime}00&details=${description}&location=${location}`

        // Apple Calendar (iCal format)
        const appleCalendarUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${event.btnUrl}
DTSTART:${startDate}T${startTime}00
DTEND:${endDate}T${endTime}00
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`

        // Outlook Calendar
        const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${event.date}T${event.startTime}&enddt=${event.date}T${event.endTime}&body=${description}&location=${location}`

        return {
            google: googleCalendarUrl,
            apple: appleCalendarUrl,
            outlook: outlookCalendarUrl
        }
    }

    // Get badge color based on first tag
    const getBadgeColor = (tags: string[]) => {
        // All events are red for now - color tagging will be added later
        return 'bg-science-red'
    }

    // Get border color based on first tag
    const getBorderColor = (tags: string[]) => {
        return ''
    }

    // Get button color based on first tag
    const getButtonColor = (tags: string[]) => {
        // All events are red for now - color tagging will be added later
        return 'bg-science-red'
    }

    // Get outline button color for past events
    const getOutlineButtonColor = (tags: string[]) => {
        // All events are red for now - color tagging will be added later
        return 'border-science-red text-science-red'
    }

    const badgeColor = getBadgeColor(event.tags)
    const borderColor = getBorderColor(event.tags)
    const buttonColor = getButtonColor(event.tags)
    const outlineButtonColor = getOutlineButtonColor(event.tags)
    const calendarLinks = generateCalendarLinks()

    return (
        <Card className={`${borderColor} overflow-hidden p-0 pb-6 gap-0`}>
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
                    <div className="flex gap-2">
                        {event.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} className={badgeColor}>
                                {tag}
                            </Badge>
                        ))}
                        {event.tags.length === 0 && (
                            <Badge className={badgeColor}>Event</Badge>
                        )}
                    </div>
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
                    className="text-gray-600 text-base mb-4 line-clamp-3"
                />

                <div className="flex gap-2">
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
                    {!isPast && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    size="sm"
                                    variant="default"
                                    className={buttonColor}
                                >
                                    <Bookmark className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <a href={calendarLinks.google} target="_blank" rel="noopener noreferrer">
                                        Add to Google Calendar
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href={calendarLinks.outlook} target="_blank" rel="noopener noreferrer">
                                        Add to Outlook Calendar
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <a href={calendarLinks.apple} download={`${event.title}.ics`}>
                                        Add toApple Calendar
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
