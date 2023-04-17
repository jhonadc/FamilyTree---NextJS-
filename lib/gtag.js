export const GA_MEASUREMENT_ID = 'G-Q91LKR3HT0';
export const pageview = () => {
  window.gtag('config', 'G-Q91LKR3HT0', {
    page_path: url,
  });
};
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
