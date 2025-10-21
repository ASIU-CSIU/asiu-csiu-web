import React from 'react';

interface CustomLink {
  word: string;
  url: string;
}

interface LinkifiedTextProps {
  text: string;
  className?: string;
  customLinks?: CustomLink[];

}

export function LinkifiedText({ text, className, customLinks = [] }: LinkifiedTextProps) {
  if (!text) {
    return <p className={className} />;
  }

  // Handle null/undefined customLinks
  const safeCustomLinks = customLinks ?? [];

  const linkMap = new Map<string, string>();
  safeCustomLinks.forEach(link => {
    linkMap.set(link.word.toLowerCase(), link.url);
  });

  const customWordsForRegex = safeCustomLinks
    .map(link => link.word)
    .sort((a, b) => b.length - a.length)
    .map(word =>
      word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    );

  const urlRegexString = `https?:\\/\\/[^\\s]+`;
  const patterns = [...customWordsForRegex, urlRegexString];
  const combinedRegex = new RegExp(`(${patterns.join('|')})`, 'gi');
  const parts = text.split(combinedRegex);

  return (
    <p className={className}>
      {parts.map((part, index) => {
        if (!part) return null;
        const lowerPart = part.toLowerCase();

        if (linkMap.has(lowerPart)) {
          return (
            <a key={index} href={linkMap.get(lowerPart)!} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {part}
            </a>
          );
        }

        if (part.match(new RegExp(`^${urlRegexString}$`, 'i'))) {
          return (
            <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {part}
            </a>
          );
        }

        return part;
      })}
    </p>
  );
}
