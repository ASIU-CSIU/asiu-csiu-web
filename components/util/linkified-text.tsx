import React from 'react';

interface LinkifiedTextProps {
  text: string;
  className?: string;
}

export function LinkifiedText({ text, className }: LinkifiedTextProps) {
  const urlRegex = /(https?:\[^\]+)/g;
  const parts = text.split(urlRegex);

  return (
    <p className={className}>
      {parts.map((part, index) => {
        if (part.match(urlRegex)) {
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
