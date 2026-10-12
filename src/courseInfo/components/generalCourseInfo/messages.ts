import { defineMessages } from '@openedx/frontend-base';

const messages = defineMessages({
  courseInfoNotSetFallback: {
    id: 'instruct.courseInfo.generalInfo.notSetFallback',
    defaultMessage: 'Not Set',
    description: 'Fallback text used in case any of the course information is not available or provided',
  },
  courseStatusActive: {
    id: 'instruct.courseInfo.generalInfo.status.active',
    defaultMessage: 'Active',
    description: 'Status of a course that has started and has not ended',
  },
  courseStatusArchived: {
    id: 'instruct.courseInfo.generalInfo.status.archived',
    defaultMessage: 'Archived',
    description: 'Status of a course that has ended',
  },
  courseStatusUpcoming: {
    id: 'instruct.courseInfo.generalInfo.status.upcoming',
    defaultMessage: 'Upcoming',
    description: 'Status of a course that has not started yet',
  },
});

export default messages;
