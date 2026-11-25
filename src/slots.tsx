import {
  helpButtonSlotOperation, LayoutOperationTypes, SlotOperation, WidgetOperationTypes,
} from '@openedx/frontend-base';
import CourseInfoSlot from '@src/slots/CourseInfoSlot/CourseInfoSlot';
import EnrollmentActionsSlot from '@src/slots/EnrollmentActionsSlot/EnrollmentActionsSlot';
import TelsLayout from '@src/telsLayout/TelsLayout';
import { appId, enrollmentActionsSlotId, enrollmentActionsWidgetId, instructorDashboardRole, instructorDashboardRoutesSlotId } from '@src/constants';
import { TelsDashboardRoute } from '@src/telsLayout/dataDownloads/TelsDashboardRoute';
import CustomDataDownloadsPage from '@src/telsLayout/dataDownloads/CustomDataDownloadsPage';

const slots: SlotOperation[] = [
  // TitanEd header and left navigation instead of the site shell's layout, on this app's routes.
  {
    slotId: 'org.openedx.frontend.slot.layout.main.v1',
    op: LayoutOperationTypes.REPLACE,
    component: TelsLayout,
    condition: { active: [instructorDashboardRole] },
  },
  helpButtonSlotOperation({ appId, role: instructorDashboardRole }),
  {
    slotId: 'org.openedx.frontend.slot.header.primaryLinks.v1',
    id: 'org.openedx.frontend.widget.slotShowcase.headerLink',
    op: WidgetOperationTypes.APPEND,
    element: <CourseInfoSlot />,
  },
  {
    slotId: enrollmentActionsSlotId,
    id: enrollmentActionsWidgetId,
    op: WidgetOperationTypes.APPEND,
    component: EnrollmentActionsSlot,
  },
  // TSD-129: TitanEd Data Downloads page (readable Date Generated) in place of the stock tab.
  {
    slotId: instructorDashboardRoutesSlotId,
    id: 'org.openedx.frontend.widget.instructorDashboard.tels.dataDownloads',
    op: WidgetOperationTypes.APPEND,
    element: <TelsDashboardRoute tabId="data_downloads" content={<CustomDataDownloadsPage />} />,
  },
];

export default slots;
