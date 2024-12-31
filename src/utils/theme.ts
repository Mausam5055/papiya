export const getThemeClass = (theme: 'light' | 'dark', type: 'bg' | 'text') => {
  const classes = {
    bg: {
      light: 'bg-yellow-50', // Light background color
      dark: 'bg-blue-900',   // Dark background color
    },
    text: {
      light: 'text-gray-900', // Light text color
      dark: 'text-white',     // Dark text color
    },
  };

  return classes[type][theme]; // Returns the appropriate class based on theme
};
