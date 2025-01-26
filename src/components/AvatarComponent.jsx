import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const AvatarComponent = ({ src, alt, fallbackText }) => {
  return (
    <Avatar className="w-24 h-24 border" >
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};