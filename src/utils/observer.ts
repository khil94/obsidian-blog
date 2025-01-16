export const getIntersectionObserver = (
  setter: (entry: IntersectionObserverEntry) => void
) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setter(entry);
      }
    });
  });
  return observer;
};
