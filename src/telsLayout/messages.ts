import { defineMessages } from '@openedx/frontend-base';

// Texts of the TitanEd layout (same ids as in the other TitanEd MFE forks, so their
// translations apply).
const messages = defineMessages({
  sidebarDashboardTitle: {
    id: 'sidebar.dashboard.title',
    defaultMessage: 'Dashboard',
    description: 'Title of the dashboard sidebar item',
  },
  sidebarMyCoursesTitle: {
    id: 'sidebar.my-courses.title',
    defaultMessage: 'My Courses',
    description: 'Title of the my courses sidebar item',
  },
  sidebarMyAssessmentsTitle: {
    id: 'sidebar.my-assessments.title',
    defaultMessage: 'My Assessments',
    description: 'Title of the my assessments sidebar item',
  },
  sidebarMyAchievementsTitle: {
    id: 'sidebar.my-achievements.title',
    defaultMessage: 'My Achievements',
    description: 'Title of the my achievements sidebar item',
  },
  sidebarLoading: {
    id: 'sidebar.loading',
    defaultMessage: 'Loading...',
    description: 'Screen reader text while the sidebar menu loads',
  },
  logout: {
    id: 'header.user.menu.logout',
    defaultMessage: 'Logout',
    description: 'Logout link',
  },
  switchToDark: {
    id: 'tels.header.theme.switchToDark',
    defaultMessage: 'Switch to dark mode',
    description: 'Label of the header button that turns dark mode on',
  },
  switchToLight: {
    id: 'tels.header.theme.switchToLight',
    defaultMessage: 'Switch to light mode',
    description: 'Label of the header button that turns light mode on',
  },
  bookmarksTab: {
    id: 'learning.custom.tabs.bookmarks',
    defaultMessage: 'Bookmarks',
    description: 'Course tab that opens the bookmarks page of the Learning MFE',
  },
  updatesTab: {
    id: 'learning.custom.tabs.updates',
    defaultMessage: 'Updates',
    description: 'Course tab that opens the course updates page of the Learning MFE',
  },
  toggleSidebar: {
    id: 'tels.header.sidebar.toggle',
    defaultMessage: 'Toggle sidebar',
    description: 'Accessible name of the header button that opens and closes the left navigation',
  },
  logoAlt: {
    id: 'tels.header.logo.named',
    defaultMessage: '{siteName} logo',
    description: 'Text alternative of the logo in the header. {siteName} is the name of the platform.',
  },
});

export default messages;
