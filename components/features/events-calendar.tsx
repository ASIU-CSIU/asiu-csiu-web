"use client"

import { useState, useMemo, useEffect } from "react"
import { ChevronLeft, ChevronRight, Clock, MapPin, Users, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/primitives/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/composite/card"
import { Badge } from "@/components/ui/primitives/badge"
import { EventCard } from "@/components/cards/event-card"
import type { Event } from "@/lib/types"
import { parseLocalDate, formatLocalDate } from "@/lib/utils"

interface EventsCalendarProps {
    events: Event[]
}

function CondensedEventCard({
    event,
    onExpand
}: {
    event: Event
    onExpand: (event: Event) => void
}) {
    const formatTime = (dateTimeString: string) => {
        const date = new Date(dateTimeString)
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        })
    }

    const getButtonColor = (tags: string[]) => {
        // All events are red for now - color tagging will be added later
        return 'bg-science-red hover:bg-science-red/90'
    }

    return (
        <div className="relative">
            <Card className="transition-all duration-200 ease-in-out">
                <CardContent className="px-3 -my-3">
                    <div className="flex items-stretch min-h-[80px]">
                        {/* Left content - takes up 4/5 of the space */}
                        <div className="flex-1 min-w-0 space-y-2 pr-3 flex flex-col justify-center">
                            {/* Title */}
                            <h4 className="font-semibold text-sm line-clamp-1">
                                {event.title}
                            </h4>

                            {/* Location and Time */}
                            <div className="space-y-1">
                                <div className="flex items-center space-x-1.5 text-xs text-gray-600">
                                    <MapPin className="h-3 w-3 flex-shrink-0" />
                                    <span className="truncate">{event.location}</span>
                                </div>

                                <div className="flex items-center space-x-1.5 text-xs text-gray-600">
                                    <Clock className="h-3 w-3 flex-shrink-0" />
                                    <span>{formatTime(event.startTime)} - {formatTime(event.endTime)}</span>
                                </div>
                            </div>

                            {/* Button */}
                            <Button
                                size="sm"
                                className={`text-xs h-7 ${getButtonColor(event.tags)}`}
                                asChild
                            >
                                <a href={event.btnUrl} target="_blank" rel="noopener noreferrer">
                                    {event.btnText}
                                </a>
                            </Button>
                        </div>

                        {/* Right clickable area - takes up 1/5 of the space */}
                        <div className="w-1/8 left-2.5 flex items-center justify-center relative z-10 pointer-events-none">
                            <ArrowRight className="h-4 w-4 text-gray-500" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Invisible clickable overlay for the right portion */}
            <div
                className="absolute top-0 right-0 w-1/8 h-full cursor-pointer hover:bg-accent rounded-tr-xl rounded-br-xl border border-gray transition-colors duration-200"
                onClick={() => onExpand(event)}
            />
        </div>
    )
}

export function EventsCalendar({ events }: EventsCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [expandedEvent, setExpandedEvent] = useState<Event | null>(null)

    // Auto-set calendar to next upcoming event's month and select that day
    useEffect(() => {
        if (events && events.length > 0) {
            const today = new Date()
            today.setHours(0, 0, 0, 0) // Reset time to start of day for accurate comparison

            // Find the next upcoming event
            const upcomingEvents = events
                .map(event => ({
                    ...event,
                    eventDate: parseLocalDate(event.date)
                }))
                .filter(event => event.eventDate >= today)
                .sort((a, b) => a.eventDate.getTime() - b.eventDate.getTime())

            // If there's an upcoming event, set calendar to that month and select that day
            if (upcomingEvents.length > 0) {
                const nextEventDate = upcomingEvents[0].eventDate
                setCurrentDate(new Date(nextEventDate.getFullYear(), nextEventDate.getMonth(), 1))
                setSelectedDate(nextEventDate) // Auto-select the day with the upcoming event
            }
        }
    }, [events])

    // Get events for the selected date
    const selectedDateEvents = useMemo(() => {
        if (!selectedDate) return []

        return events.filter((event) => {
            const eventDate = parseLocalDate(event.date)
            return (
                eventDate.getFullYear() === selectedDate.getFullYear() &&
                eventDate.getMonth() === selectedDate.getMonth() &&
                eventDate.getDate() === selectedDate.getDate()
            )
        })
    }, [events, selectedDate])

    // Get events for the current month
    const monthEvents = useMemo(() => {
        return events.filter((event) => {
            const eventDate = parseLocalDate(event.date)
            return (
                eventDate.getFullYear() === currentDate.getFullYear() &&
                eventDate.getMonth() === currentDate.getMonth()
            )
        })
    }, [events, currentDate])

    // Generate calendar days
    const calendarDays = useMemo(() => {
        const year = currentDate.getFullYear()
        const month = currentDate.getMonth()

        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)
        const startDate = new Date(firstDay)
        startDate.setDate(startDate.getDate() - firstDay.getDay())

        const days = []
        const current = new Date(startDate)

        // Generate 42 days (6 weeks)
        for (let i = 0; i < 42; i++) {
            const dayEvents = monthEvents.filter((event) => {
                const eventDate = parseLocalDate(event.date)
                return (
                    eventDate.getDate() === current.getDate() &&
                    eventDate.getMonth() === current.getMonth() &&
                    eventDate.getFullYear() === current.getFullYear()
                )
            })

            days.push({
                date: new Date(current),
                isCurrentMonth: current.getMonth() === month,
                isToday: current.toDateString() === new Date().toDateString(),
                isSelected: selectedDate?.toDateString() === current.toDateString(),
                events: dayEvents
            })

            current.setDate(current.getDate() + 1)
        }

        return days
    }, [currentDate, monthEvents, selectedDate])

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    const handleDateClick = (date: Date) => {
        setSelectedDate(date)
        setExpandedEvent(null) // Reset expanded event when selecting a new date
    }

    const handleExpandEvent = (event: Event) => {
        setExpandedEvent(event)
    }

    const handleBackToEvents = () => {
        setExpandedEvent(null)
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Calendar */}
            <div className="flex-1">
                <Card className="h-fit">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl">
                                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                            </CardTitle>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={goToPreviousMonth}
                                    aria-label="Previous month"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={goToNextMonth}
                                    aria-label="Next month"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {/* Day headers */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                            {dayNames.map((day) => (
                                <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar grid */}
                        <div className="grid grid-cols-7 gap-1">
                            {calendarDays.map((day, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDateClick(day.date)}
                                    className={`
                    p-2 text-sm border rounded-md min-h-[40px] flex flex-col items-center justify-start
                    transition-colors duration-200
                    ${!day.isCurrentMonth
                                            ? 'text-gray-300 bg-gray-50'
                                            : day.isToday
                                                ? 'border-2 border-science-blue text-science-blue font-semibold bg-white'
                                                : day.isSelected
                                                    ? 'bg-science-red text-white font-semibold'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                        }
                  `}
                                >
                                    <span className="mb-1">{day.date.getDate()}</span>
                                    {day.events.length > 0 && (
                                        <div className="flex gap-1">
                                            {day.events.slice(0, 2).map((_, eventIndex) => (
                                                <div
                                                    key={eventIndex}
                                                    className={`w-1.5 h-1.5 rounded-full ${day.isToday ? 'bg-science-blue' : day.isSelected ? 'bg-white' : 'bg-science-blue'
                                                        }`}
                                                />
                                            ))}
                                            {day.events.length > 2 && (
                                                <div
                                                    className={`w-1.5 h-1.5 rounded-full ${day.isToday ? 'bg-science-blue' : day.isSelected ? 'bg-white' : 'bg-science-blue'
                                                        }`}
                                                />
                                            )}
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Event Details */}
            <div className="lg:w-96">
                <Card className="h-fit flex flex-col">
                    <CardHeader>
                        <CardTitle>
                            {expandedEvent ? (
                                <div className="flex items-center gap-2 -m-3">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={handleBackToEvents}
                                        className="text-md font-semibold hover:bg-gray-100 "
                                    >
                                        <ArrowLeft className="h-5 w-5" />
                                        Back to Events List
                                    </Button>
                                </div>
                            ) : selectedDate ? (
                                `Events for ${selectedDate.toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}`
                            ) : (
                                'Select a date to view events'
                            )}
                        </CardTitle>
                        {selectedDate && selectedDateEvents.length === 0 && !expandedEvent && (
                            <CardDescription>No events scheduled for this date.</CardDescription>
                        )}
                    </CardHeader>
                    <CardContent>
                        {expandedEvent ? (
                            <div className="transition-all duration-300 ease-in-out">
                                <EventCard event={expandedEvent} />
                            </div>
                        ) : selectedDate && selectedDateEvents.length > 0 ? (
                            <div className="space-y-3 transition-all duration-300 ease-in-out">
                                {selectedDateEvents.map((event) => (
                                    <CondensedEventCard
                                        key={event._id}
                                        event={event}
                                        onExpand={handleExpandEvent}
                                    />
                                ))}
                            </div>
                        ) : selectedDate ? (
                            <div className="text-center py-8 text-gray-500">
                                <p>No events scheduled for this date.</p>
                            </div>
                        ) : (
                            <div className="text-center py-8 text-gray-500">
                                <p>Click on a date in the calendar to view events.</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
