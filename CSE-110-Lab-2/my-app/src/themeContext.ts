import React from 'react';

export const themes = {
 light: {
   foreground: '#000000',
   background: '#eeeeee',
   noteBackground: '#f9f9f9',
   noteText: '#000000',
 },
 dark: {
   foreground: '#ffffff',
   background: '#333333',
   noteBackground: '#444444',
   noteText: '#ffffff',
 },
};

export const ThemeContext = React.createContext(themes.light);