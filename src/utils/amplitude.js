import { init, track, setUserId } from '@amplitude/analytics-browser';

// Replace 'YOUR_API_KEY' with your actual Amplitude API key
// You can get this from https://app.amplitude.com/data/sources
// In development, you can create a .env file with: VITE_AMPLITUDE_API_KEY=your_api_key_here
const AMPLITUDE_API_KEY = import.meta.env?.VITE_AMPLITUDE_API_KEY || 'YOUR_API_KEY';

// Initialize Amplitude
export const initializeAmplitude = () => {
  if (AMPLITUDE_API_KEY === 'YOUR_API_KEY') {
    console.warn('⚠️ Please add your Amplitude API key to environment variables or replace YOUR_API_KEY');
    return;
  }

  try {
    init(AMPLITUDE_API_KEY, undefined, {
      autocapture: {
        elementInteractions: true, // Enables click tracking
        pageViews: true,           // Enables page view tracking
        sessions: true,            // Enables session tracking
        formInteractions: true,    // Enables form tracking
        fileDownloads: true        // Enables file download tracking
      },
      trackingOptions: {
        ipAddress: false, // Disable IP tracking for privacy
      }
    });
    
    console.log('✅ Amplitude initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize Amplitude:', error);
  }
};

// Set user ID (optional - for authenticated users)
export const setAmplitudeUserId = (userId) => {
  try {
    setUserId(userId);
  } catch (error) {
    console.error('Failed to set Amplitude user ID:', error);
  }
};

// Custom event tracking functions
export const trackEvent = (eventName, properties = {}) => {
  try {
    track(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title
    });
  } catch (error) {
    console.error('Failed to track event:', error);
  }
};

// Predefined tracking functions for your portfolio
export const trackPageView = (pageName) => {
  trackEvent('Page Viewed', {
    page_name: pageName,
    referrer: document.referrer
  });
};

export const trackProjectView = (projectName) => {
  trackEvent('Project Viewed', {
    project_name: projectName
  });
};

export const trackContactFormSubmit = (formType = 'contact') => {
  trackEvent('Contact Form Submitted', {
    form_type: formType
  });
};

export const trackButtonClick = (buttonName, section) => {
  trackEvent('Button Clicked', {
    button_name: buttonName,
    section: section
  });
};

export const trackNavigationClick = (linkName, destination) => {
  trackEvent('Navigation Clicked', {
    link_name: linkName,
    destination: destination
  });
};

export const trackServiceView = (serviceName) => {
  trackEvent('Service Viewed', {
    service_name: serviceName
  });
};

export const trackTestimonialInteraction = (clientName, action = 'viewed') => {
  trackEvent('Testimonial Interaction', {
    client_name: clientName,
    action: action
  });
};

export const trackSkillsSection = () => {
  trackEvent('Skills Section Viewed');
};

export const trackDownload = (fileName, fileType) => {
  trackEvent('File Downloaded', {
    file_name: fileName,
    file_type: fileType
  });
};

export const trackSocialClick = (platform, url) => {
  trackEvent('Social Link Clicked', {
    platform: platform,
    url: url
  });
};

// Portfolio-specific tracking
export const trackHeroInteraction = (action) => {
  trackEvent('Hero Section Interaction', {
    action: action
  });
};

export const trackProjectFilter = (filterType) => {
  trackEvent('Project Filter Used', {
    filter_type: filterType
  });
};
