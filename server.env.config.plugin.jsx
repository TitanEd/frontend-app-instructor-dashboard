from tutor import hooks  # noqa: F401
from tutormfe.hooks import FRONTEND_APPS

# The instructor dashboard is a frontend-base app (Tutor MFE 22.1): Tutor builds it into the
# shared frontend site, not as a classic MFE, and it has no env.config.jsx. The TELS layout
# (src/telsLayout/TelsLayout.tsx: left navigation, header, course header and tabs, footer) is
# registered by the app itself in src/slots.tsx (slot org.openedx.frontend.slot.layout.main.v1),
# so the only thing Tutor needs is to build the app from this fork instead of the npm package.
#
# Do not add "instructor-dashboard" to MFE_APPS: as a classic MFE it would be built wrongly.


@FRONTEND_APPS.add()
def _instructor_dashboard_fork(apps):
    if "instructor-dashboard" in apps:
        apps["instructor-dashboard"]["source"] = (
            "https://github.com/TitanEd/frontend-app-instructor-dashboard.git#tels/verawood.1"
        )
    return apps
