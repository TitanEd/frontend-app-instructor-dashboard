/*
 * The layout every TitanEd MFE shares, for the instructor dashboard: custom header (MainHeader
 * of titaned-frontend-library), left navigation (Sidebar) and the page in the main area.
 *
 * It replaces the layout of the site shell (slot org.openedx.frontend.slot.layout.main.v1)
 * while a route of this app is active: see src/slots.tsx. The stock header is not rendered;
 * its course bar (masquerade bar, course tabs) and the site footer keep their slots, so
 * whatever the site puts there still shows.
 */
import { useEffect, useState } from 'react';

import {
  DefaultMain, getAuthenticatedHttpClient, getSiteConfig, Slot, useAuthenticatedUser, useIntl,
} from '@openedx/frontend-base';
import { Spinner } from '@openedx/paragon';
import { Home, LmsBook } from '@openedx/paragon/icons';
import { useLocation } from 'react-router-dom';
import { MainHeader, Sidebar, SidebarProvider } from './vendor/titaned-frontend-library';

import CourseHeader from './CourseHeader';
import CourseTabsExtras from './CourseTabsExtras';
import HeaderExtras, { currentThemeVariant, headerUser, UserMenuResponse } from './HeaderExtras';
import messages from './messages';

import './vendor/titaned-frontend-library/index.css';
import './telsLayout.scss';

// Design tokens for the custom UI are scoped to this class
// (tels-brand-openedx paragon/custom_instructor-dashboard.scss).
const CUSTOM_UI_CLASS = 'tels-custom-instructor-dashboard';

interface MenuConfig {
  enabled_re_sync?: boolean,
  enable_switch_to_learner?: boolean,
  enable_help_center?: boolean,
  language_selector_is_enabled?: boolean,
  notification_is_enabled?: boolean,
  enabled_languages?: { code: string, name: string }[],
}

const commonConfig = (name: string): string | undefined => (
  getSiteConfig().commonAppConfig?.[name] as string | undefined
);

/**
 * URL of a page in the learner dashboard MFE: LEARNER_HOME_MICROFRONTEND_URL when the site
 * configuration has it, otherwise the LMS dashboard URL (the LMS redirects to the MFE).
 */
const learnerDashboardUrl = (path: string): string => {
  const base = commonConfig('LEARNER_HOME_MICROFRONTEND_URL');
  if (base) {
    return `${base.replace(/\/+$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
  }
  return `${getSiteConfig().lmsBaseUrl}/dashboard`;
};

const fetchMenuConfig = async (): Promise<MenuConfig> => {
  try {
    const { data } = await getAuthenticatedHttpClient().get(`${getSiteConfig().cmsBaseUrl}/titaned/api/v1/menu-config/`);
    return data as MenuConfig;
  } catch {
    return {}; // header without the optional buttons
  }
};

const fetchUserMenu = async (): Promise<UserMenuResponse> => {
  try {
    const { data } = await getAuthenticatedHttpClient().get(`${getSiteConfig().lmsBaseUrl}/titaned/api/v1/user-dropdown-menu/`);
    return (data ?? {}) as UserMenuResponse;
  } catch {
    return {};
  }
};

const TelsLayout = () => {
  const intl = useIntl();
  const location = useLocation();
  const authenticatedUser = useAuthenticatedUser();
  const siteConfig = getSiteConfig();
  // /instructor-dashboard/<course id>/<page>
  const courseId = decodeURIComponent(location.pathname.split('/').find((part) => /^course-v1(:|%3A)/i.test(part)) ?? '');

  const [loadingSidebar, setLoadingSidebar] = useState(true);
  const [menuConfig, setMenuConfig] = useState<MenuConfig>({});
  const [userMenu, setUserMenu] = useState<UserMenuResponse>({});

  useEffect(() => {
    // The brand CSS (tels-brand-openedx) keys its dark-mode rules on the attribute the legacy
    // MFEs set; frontend-base only sets data-theme-variant.
    document.documentElement.setAttribute('data-paragon-theme-variant', currentThemeVariant());
    document.documentElement.classList.add(CUSTOM_UI_CLASS);
    document.body.classList.add(CUSTOM_UI_CLASS);
    return () => {
      document.documentElement.classList.remove(CUSTOM_UI_CLASS);
      document.body.classList.remove(CUSTOM_UI_CLASS);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    void fetchUserMenu().then((data) => {
      if (isMounted) {
        setUserMenu(data);
      }
    });
    void fetchMenuConfig().then((data) => {
      if (isMounted) {
        setMenuConfig(data);
        setLoadingSidebar(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Sidebar items open pages of the learner dashboard MFE.
  const sidebarItems = [
    { label: intl.formatMessage(messages.sidebarDashboardTitle), path: '/', icon: <Home /> },
    { label: intl.formatMessage(messages.sidebarMyCoursesTitle), path: '/my-courses', icon: <LmsBook /> },
  ];

  // Items come from the user-dropdown-menu API (control-hub); without it only "Logout" is left.
  const userMenuItems = userMenu.menu_items?.length
    ? userMenu.menu_items.map((item) => ({ href: item.url, title: item.label }))
    : [{ href: siteConfig.logoutUrl, title: intl.formatMessage(messages.logout) }];

  const headerButtons = {
    reSync: menuConfig.enabled_re_sync ?? false,
    contextSwitcher: menuConfig.enable_switch_to_learner ?? false,
    help: menuConfig.enable_help_center ?? false,
    translation: menuConfig.language_selector_is_enabled ?? false,
    notification: menuConfig.notification_is_enabled ?? false,
  };

  return (
    <div className={`app-container ${CUSTOM_UI_CLASS}`}>
      <SidebarProvider>
        <div className="header-container">
          <MainHeader
            logoUrl={siteConfig.headerLogoImageUrl}
            authenticatedUser={headerUser(authenticatedUser, userMenu)}
            userMenuItems={userMenuItems}
            onLanguageChange={() => window.location.reload()}
            headerButtons={headerButtons}
            languageSelectorList={menuConfig.enabled_languages ?? []}
          />
          <HeaderExtras />
        </div>
        <div className="content-wrapper">
          <div className="sidebar-container">
            {loadingSidebar ? (
              <div className="d-flex justify-content-center sidebar-loading">
                <Spinner
                  animation="border"
                  variant="primary"
                  screenReaderText={intl.formatMessage(messages.sidebarLoading)}
                />
              </div>
            ) : (
              <Sidebar
                buttons={sidebarItems}
                onNavigate={(path: string) => {
                  window.location.href = learnerDashboardUrl(path);
                }}
                // A course page: "My Courses" is the current entry, as in the Learning MFE.
                presentPath={courseId ? '/my-courses' : location.pathname}
              />
            )}
          </div>
          <div className="main-content">
            <div className="page-content">
              {/* As on the Course and Progress tabs of the Learning MFE: the masquerade bar
                  spans the page; breadcrumb, title, course tabs and content share one column. */}
              <Slot id="org.openedx.frontend.slot.header.masqueradeBar.v1" />
              <div className="tels-page-column">
                <CourseHeader courseId={courseId} myCoursesUrl={learnerDashboardUrl('/my-courses')} />
                <Slot id="org.openedx.frontend.slot.header.courseNavigationBar.v1" />
                <CourseTabsExtras />
                <div id="main-content">
                  <Slot id="org.openedx.frontend.slot.content.main.v1" layout={DefaultMain} />
                </div>
              </div>
            </div>
            <Slot id="org.openedx.frontend.slot.footer.main.v1" />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default TelsLayout;
