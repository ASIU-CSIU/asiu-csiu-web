# Implementation Checklist for Advocates for Science @ IU Website

## 1. Add Image Property to Events Sanity CMS Schema

### Subtasks:
- [x] Add image field to event schema
- [x] Update event type definitions
- [x] Update event queries to include image data

### AI Prompt Sequence:
```
1. "Add an image field to the Sanity CMS event schema in asiu-cms/schemaTypes/event.ts. The field should be named 'image', type 'image', title 'Event Image', and include validation to make it required."

2. "Update the Event type definition in lib/types.ts to include the new image property with proper TypeScript typing."

3. "Update the getEvents query in lib/sanity.ts to include the image URL in the response using the urlFor helper function."
```

---

## 2. Implement Latest News and Activities Section with Past Events

### Subtasks:
- [x] Create new card component for home page past events called latest-news-card
- [x] Add query to fetch past events from Sanity
- [x] Update home page to use real data instead of hardcoded cards
- [x] Implement proper date filtering for past events
<!-- - [ ] Add loading states and error handling -->

### AI Prompt Sequence:
```
1. "Create a new card component called 'latest-news-card' in components/cards/past-event-card.tsx that displays past events with a different design than the regular event card. Include image, title, date, description, and participant count and button. make it the essentially the same as the NewsActivityCard."

2. "Add a new query function 'getPastEvents' in lib/sanity.ts that fetches events where the date is before today, ordered by date descending (most recent first). Include the image URL in the query."

3. "Update the home page (app/page.tsx) to fetch and display real past events data instead of the hardcoded NewsActivityCard components. Use the new latest-news-card component and implement proper loading states."

4. "Add error handling for the past events section and implement a fallback display when no past events are available."
```

---

## 3. Implement Upcoming Events Section with Real Data

### Subtasks:
- [x] Add query to fetch upcoming events from Sanity (if not already there)
- [x] Update home page to use real upcoming events data
- [x] Implement proper date filtering for upcoming events
- [x] use existing event-card.tsx for upcoming events
- [x] Add loading states and error handling

### AI Prompt Sequence:
```
1. "Add a new query function 'getUpcomingEvents' in lib/sanity.ts that fetches events where the date is today or in the future, ordered by date ascending (earliest first). Include the image URL in the query."

2. "Update the existing EventCard component in components/cards/event-card.tsx to display the event image if available, with proper fallback handling."

3. "Update the home page (app/page.tsx) to fetch and display real upcoming events data instead of the hardcoded cards. Use the existing EventCard component and implement proper loading states."

4. "Add error handling for the upcoming events section and implement a fallback display when no upcoming events are available."
```

---

## 4. Fix All Hyperlinks and Call-to-Action Buttons

### Subtasks:
- [x] Audit all pages for broken links
- [x] Fix navigation menu links
- [x] Update CTA buttons to point to correct destinations
- [x] Test all external links
- [x] Implement proper link tracking

### AI Prompt Sequence:
```
1. "Go through each page in the app/(routes) directory and identify all hyperlinks and call-to-action buttons. Create a list of broken or incorrect links that need to be fixed."

2. "Fix the navigation menu links in components/layout/navigation.tsx to ensure all menu items point to the correct pages and work properly."

3. "Update all call-to-action buttons throughout the site to point to the correct destinations. Pay special attention to buttons like 'Get Involved', 'Learn More', 'Contact Us', etc."

4. "Test all external links and update any that are broken or pointing to incorrect destinations. Implement proper rel attributes for external links."

5. "Add proper link tracking or analytics for important CTA buttons to measure user engagement."
```

---

## 5. Redo Newsletter Subscription with Vercel Blob

### Subtasks:
- [x] Install Vercel Blob package
- [x] Create new API route for newsletter subscription
- [x] Update newsletter signup form
- [x] Implement proper error handling and validation
- [x] Test the new subscription flow

### AI Prompt Sequence:
```
1. "Install the @vercel/blob package and update the package.json dependencies."

2. "Create a new API route in app/(api)/newsletter-subscribe/route.ts that uses Vercel Blob instead of Mailgun. Store subscription requests as JSON files in the blob storage with the email as the filename and include a timestamp."

3. "Update the newsletter signup form component in components/forms/newsletter-signup.tsx to work with the new API endpoint and provide better user feedback."

4. "Implement proper error handling, email validation, and success/error messages in the newsletter subscription flow."

5. "Test the complete newsletter subscription flow to ensure it works correctly with Vercel Blob storage."
```

---

## 6. Fix Instagram Posts Display in Social Media Section

### Subtasks:
- [x] Research Instagram API alternatives
- [x] Implement Instagram Basic Display API or alternative solution
- [x] Create Instagram post component
- [x] Update social media section with real Instagram data
- [x] Add fallback for when Instagram data is unavailable

### AI Prompt Sequence:
```
1. "Research and implement a solution to display Instagram posts from @asiu.indiana. Since the current Instagram embed isn't working, explore alternatives like Instagram Basic Display API, scraping (if allowed), or using a third-party service."

2. "Create a new component called 'InstagramFeed' in components/sections/instagram-feed.tsx that can fetch and display Instagram posts from the @asiu.indiana account."

3. "Update the social media section in app/(routes)/news/page.tsx to use the new InstagramFeed component instead of the broken Instagram embed."

4. "Implement proper error handling and loading states for the Instagram feed, with a fallback display when Instagram data is unavailable."

5. "Add caching for Instagram data to improve performance and reduce API calls."
```

---

## 7. Additional Improvements and Testing

### Subtasks:
- [x] Add proper TypeScript types for all new components
- [x] Implement responsive design improvements
- [x] Add accessibility features
- [x] Performance optimization
- [x] Cross-browser testing

### AI Prompt Sequence:
```
1. "Review and update all TypeScript type definitions in lib/types.ts to include proper types for the new components and data structures."

2. "Implement responsive design improvements for all new components, ensuring they work well on mobile, tablet, and desktop devices."

3. "Add accessibility features like proper ARIA labels, keyboard navigation, and screen reader support to all new components."

4. "Optimize performance by implementing proper image optimization, lazy loading, and code splitting where appropriate."

5. "Test the website across different browsers (Chrome, Firefox, Safari, Edge) to ensure compatibility and consistent functionality."
```

---

## Implementation Priority Order:

1. **High Priority**: Tasks 1-3 (CMS and data integration)
2. **Medium Priority**: Tasks 4-5 (Link fixes and newsletter)
3. **Low Priority**: Task 6 (Instagram integration)
4. **Ongoing**: Task 7 (Testing and improvements)

## Notes:

- Each task should be implemented and tested before moving to the next
- Use proper error handling and loading states throughout
- Maintain consistent code style and follow existing patterns
- Test thoroughly after each implementation
- Document any API keys or environment variables needed
- Consider implementing proper SEO meta tags for new pages/sections
