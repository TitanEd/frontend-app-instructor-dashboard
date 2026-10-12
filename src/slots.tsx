import {
  helpButtonSlotOperation, LayoutOperationTypes, SlotOperation, WidgetOperationTypes,
} from '@openedx/frontend-base';
import CourseInfoSlot from '@src/slots/CourseInfoSlot/CourseInfoSlot';
import EnrollmentActionsSlot from '@src/slots/EnrollmentActionsSlot/EnrollmentActionsSlot';
import TelsLayout from '@src/telsLayout/TelsLayout';
import { appId, enrollmentActionsSlotId, enrollmentActionsWidgetId, instructorDashboardRole } from '@src/constants';

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
];

export default slots;
