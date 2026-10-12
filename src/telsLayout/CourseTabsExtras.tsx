/*
 * "Bookmarks" and "Updates" in the course tabs.
 *
 * The Learning MFE adds these two tabs itself (src/course-tabs/customCourseTabs.js there): the
 * tab list of the LMS does not have them. The course tabs of this page are drawn by the site
 * shell from that same list, so without this the two tabs disappear as soon as "Instructor" is
 * opened. They are placed where the Learning MFE puts them: before "Instructor".
 */
import { useEffect } from 'react';

import { useIntl } from '@openedx/frontend-base';

import messages from './messages';

const MARK = 'data-tels-course-tab';

const CourseTabsExtras = () => {
  const intl = useIntl();
  const bookmarks = intl.formatMessage(messages.bookmarksTab);
  const updates = intl.formatMessage(messages.updatesTab);

  useEffect(() => {
    const place = () => {
      const nav = document.getElementById('course-nav');
      if (!nav || nav.querySelector(`[${MARK}]`)) {
        return;
      }
      // The "Course" tab gives the address of the Learning MFE: …/learning/course/<id>/home
      const home = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a.nav-link'))
        .find((link) => /\/course\/[^/]+\/home\/?$/.test(link.href));
      if (!home) {
        return;
      }
      const base = home.href.replace(/\/home\/?$/, '');
      const current = nav.querySelector('a.nav-link.active')?.closest('.nav-item') ?? null;
      [['bookmarks', bookmarks], ['updates', updates]].forEach(([slug, label]) => {
        const item = document.createElement('div');
        item.className = 'nav-item';
        item.setAttribute(MARK, slug);
        const link = document.createElement('a');
        link.className = 'nav-link';
        link.href = `${base}/${slug}`;
        link.textContent = label;
        item.appendChild(link);
        nav.insertBefore(item, current);
      });
    };
    place();
    const observer = new MutationObserver(place);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      document.querySelectorAll(`[${MARK}]`).forEach((item) => item.remove());
    };
  }, [bookmarks, updates]);

  return null;
};

export default CourseTabsExtras;
