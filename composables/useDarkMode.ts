const useDarkMode = () => {
  const isDarkMode = useState("darkMode", () => false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    // using this function to change the global value of isDarkMode
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkMode;
