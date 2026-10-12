/*
 * Breadcrumb ("My Courses / <course>") and course title above the course tabs: the same block
 * the Learning MFE shows on its Course, Progress and Dates pages
 * (frontend-app-learning src/tab-page/CustomCourseHeader.jsx), so the Instructor tab reads as
 * one more tab of the same page. Keep the markup of the two in step: the brand styles both
 * through the same class names.
 */
import { useEffect, useState } from 'react';

import { getAuthenticatedHttpClient, getSiteConfig, useIntl } from '@openedx/frontend-base';
import { LmsBook } from '@openedx/paragon/icons';

import messages from './messages';

interface Props {
  courseId: string,
  myCoursesUrl: string,
}

const CourseHeader = ({ courseId, myCoursesUrl }: Props) => {
  const intl = useIntl();
  const [title, setTitle] = useState('');

  useEffect(() => {
    let isMounted = true;
    setTitle('');
    if (!courseId) {
      return undefined;
    }
    // The endpoint the Learning MFE takes the course title from.
    getAuthenticatedHttpClient()
      .get(`${getSiteConfig().lmsBaseUrl}/api/course_home/course_metadata/${courseId}`)
      .then(({ data }: { data: { title?: string } }) => {
        if (isMounted && data?.title) {
          setTitle(data.title);
        }
      })
      .catch(() => { /* the block then shows the course id */ });
    return () => {
      isMounted = false;
    };
  }, [courseId]);

  if (!courseId) {
    return null;
  }
  const shownTitle = title || intl.formatMessage(messages.sidebarLoading);
  const goToMyCourses = () => {
    window.location.href = myCoursesUrl;
  };

  return (
    <div className="course-header mb-2">
      <div className="ca-breadcrumb-bg">
        <div className="ca-breadcrumb-container">
          <div className="ca-breadcrumb">
            <span
              className="ca-breadcrumb-icon"
              role="link"
              tabIndex={0}
              onClick={goToMyCourses}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  goToMyCourses();
                }
              }}
            >
              <LmsBook className="custom-icon" />
              {intl.formatMessage(messages.sidebarMyCoursesTitle)}
            </span>
            <span className="ca-breadcrumb-divider">/</span>
            <span className="ca-breadcrumb-current">{shownTitle}</span>
          </div>
          <div className="ca-title">{shownTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
