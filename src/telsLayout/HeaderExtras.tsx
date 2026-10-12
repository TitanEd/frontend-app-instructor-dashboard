/*
 * Additions to the custom header (MainHeader of titaned-frontend-library): the frontend-base
 * version of src/customHeaderExtras.jsx of the other TitanEd MFE forks. Keep the two in step.
 *
 *  - headerUser(): the name and picture the header shows (full name and profile picture from
 *    the user-dropdown-menu API of control-hub).
 *  - <HeaderExtras />: the notification bell and the light / dark mode switch, placed next to
 *    the user menu, the styles that put the profile picture before the name, and the logo link
 *    to the site's home page (LMS).
 *
 * The notification bell is the one the site already has: the widget the notifications app
 * (@openedx/frontend-app-notifications) registers for the stock header. When that app is not
 * part of the site, there is no bell.
 */
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import {
  getSiteConfig, useIntl, useWidgetOperations, User,
} from '@openedx/frontend-base';
import { Icon, IconButton } from '@openedx/paragon';
import { Nightlight, WbSunny } from '@openedx/paragon/icons';

import messages from './messages';

// Names frontend-base (selected-theme-variant) and frontend-platform read the theme variant from.
const THEME_KEYS = ['selected-paragon-theme-variant', 'selected-theme-variant'];
const THEME_ATTRIBUTES = ['data-paragon-theme-variant', 'data-theme-variant'];
const THEME_COOKIE_DAYS = 90;

// The stock header's slot the notifications app puts its bell in.
const STOCK_HEADER_RIGHT_SLOT_ID = 'org.openedx.frontend.slot.header.desktopRight.v1';
const NOTIFICATIONS_WIDGET_MARK = 'notificationsBell';

export interface UserMenuResponse {
  full_name?: string,
  username?: string,
  profile_image?: { image_url_small?: string },
  menu_items?: { label: string, url: string }[],
}

type ThemeVariant = 'light' | 'dark';

const readCookie = (name: string): ThemeVariant | null => {
  const match = new RegExp(`(?:^|; )${name}=(light|dark)(?:;|$)`).exec(document.cookie);
  return match ? (match[1] as ThemeVariant) : null;
};

const readStorage = (): string | null => {
  try {
    return window.localStorage.getItem(THEME_KEYS[0]);
  } catch {
    return null; // storage blocked (private mode): the cookie alone decides
  }
};

const writeStorage = (variant: ThemeVariant) => {
  try {
    THEME_KEYS.forEach((key) => window.localStorage.setItem(key, variant));
  } catch {
    // storage blocked: nothing to remember here
  }
};

const cookieDomain = (): string => {
  try {
    const lmsHost = new URL(getSiteConfig().lmsBaseUrl).hostname;
    // Only a domain this page belongs to can be set; otherwise keep the cookie on this host.
    return window.location.hostname.endsWith(lmsHost) ? lmsHost : window.location.hostname;
  } catch {
    return window.location.hostname;
  }
};

const writeCookie = (variant: ThemeVariant) => {
  const expires = new Date(Date.now() + THEME_COOKIE_DAYS * 24 * 60 * 60 * 1000).toUTCString();
  THEME_KEYS.forEach((key) => {
    document.cookie = `${key}=${variant}; domain=${cookieDomain()}; path=/; expires=${expires}; SameSite=Lax`;
  });
};

export const currentThemeVariant = (): ThemeVariant => {
  const variant = readCookie(THEME_KEYS[0]) ?? readStorage()
    ?? THEME_ATTRIBUTES.map((attribute) => document.documentElement.getAttribute(attribute)).find(Boolean);
  return variant === 'dark' ? 'dark' : 'light';
};

/**
 * The user as the header shows it: full name (the username when no name is set) and the
 * profile picture. `menu` is the response of /titaned/api/v1/user-dropdown-menu/.
 */
export const headerUser = (authenticatedUser: User | null, menu: UserMenuResponse) => ({
  ...authenticatedUser,
  username: menu?.full_name || menu?.username || authenticatedUser?.name || authenticatedUser?.username || '',
  avatar: menu?.profile_image?.image_url_small || authenticatedUser?.avatar,
});

/** The bell of the notifications app, taken from the widgets it registers for the stock header. */
const NotificationsBell = () => {
  const operations = useWidgetOperations(STOCK_HEADER_RIGHT_SLOT_ID);
  const bell = operations.find((operation) => 'id' in operation && operation.id.includes(NOTIFICATIONS_WIDGET_MARK));
  if (!bell) {
    return null;
  }
  if ('element' in bell) {
    return <>{bell.element as ReactNode}</>;
  }
  if ('component' in bell) {
    const Component = bell.component;
    return <Component />;
  }
  return null;
};

const HeaderExtras = () => {
  const intl = useIntl();
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [variant] = useState<ThemeVariant>(currentThemeVariant);

  // A mode chosen in another MFE or on an LMS page arrives in the cookie: adopt it.
  useEffect(() => {
    const fromCookie = readCookie(THEME_KEYS[0]);
    if (fromCookie && fromCookie !== readStorage()) {
      writeStorage(fromCookie);
      window.location.reload();
    }
  }, []);

  // MainHeader has no place for extra buttons, so they are put before its user menu.
  useEffect(() => {
    const element = document.createElement('div');
    element.className = 'tels-header-extras';
    // The logo of MainHeader points to "/" of the MFE host: send it to the site's home page.
    const homeUrl = `${getSiteConfig().lmsBaseUrl}/`;
    const goHome = () => {
      window.location.href = homeUrl;
    };
    const place = () => {
      const anchor = document.querySelector('.header-container .usermenu-dropdown')
        ?? document.getElementById('user-dropdown-menu')?.closest('.dropdown');
      if (anchor?.parentNode && element.nextSibling !== anchor) {
        anchor.parentNode.insertBefore(element, anchor);
      }
      // In dark mode the header shows the logo made for dark backgrounds (theme page: "Logo for
      // dark backgrounds"); the library only knows one logo.
      const darkLogo = getSiteConfig().commonAppConfig?.LOGO_WHITE_URL as string | undefined;
      const logoImage = document.querySelector('.header-container .navbar-brand img');
      if (logoImage && darkLogo && currentThemeVariant() === 'dark' && logoImage.getAttribute('src') !== darkLogo) {
        logoImage.setAttribute('src', darkLogo);
      }
      // The library writes alt="Logo" and "Toggle Sidebar" in English, and index.html says
      // lang="en-us" whatever the language: give all three the language of the page.
      const logoAlt = intl.formatMessage(messages.logoAlt, { siteName: getSiteConfig().siteName });
      if (logoImage && logoImage.getAttribute('alt') !== logoAlt) {
        logoImage.setAttribute('alt', logoAlt);
      }
      const sidebarButton = document.querySelector('.header-container .toggle-sidebar-icon button');
      const sidebarLabel = intl.formatMessage(messages.toggleSidebar);
      if (sidebarButton && sidebarButton.getAttribute('aria-label') !== sidebarLabel) {
        sidebarButton.setAttribute('aria-label', sidebarLabel);
      }
      if (intl.locale && document.documentElement.lang !== intl.locale) {
        document.documentElement.lang = intl.locale;
      }
      // The library draws the logo as a <nav href="/"> element, which is not a link.
      const logo = document.querySelector<HTMLElement>('.header-container .navbar-brand');
      if (logo && logo.dataset.telsHome !== homeUrl) {
        logo.dataset.telsHome = homeUrl;
        logo.setAttribute('href', homeUrl);
        if (logo.tagName !== 'A') {
          logo.setAttribute('role', 'link');
          logo.setAttribute('tabindex', '0');
          logo.style.cursor = 'pointer';
          logo.addEventListener('click', goHome);
          logo.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
              goHome();
            }
          });
        }
      }
    };
    place();
    const observer = new MutationObserver(place);
    observer.observe(document.querySelector('.header-container') ?? document.body, { childList: true, subtree: true });
    setHost(element);
    return () => {
      observer.disconnect();
      element.remove();
    };
  }, []);

  const toggle = () => {
    const next: ThemeVariant = variant === 'dark' ? 'light' : 'dark';
    writeStorage(next);
    writeCookie(next);
    THEME_ATTRIBUTES.forEach((attribute) => document.documentElement.setAttribute(attribute, next));
    // The stylesheets of the variant are loaded when the page starts.
    window.location.reload();
  };

  const label = intl.formatMessage(variant === 'dark' ? messages.switchToLight : messages.switchToDark);
  return host && createPortal(
    <>
      <NotificationsBell />
      <IconButton
        className="tels-theme-toggle"
        src={variant === 'dark' ? WbSunny : Nightlight}
        iconAs={Icon}
        alt={label}
        title={label}
        variant="primary"
        onClick={toggle}
      />
    </>,
    host,
  );
};

export default HeaderExtras;
