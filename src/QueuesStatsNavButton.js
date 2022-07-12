import React from 'react';
import { SideLink, Actions } from '@twilio/flex-ui';
 
const QueuesStatsNavButton = ({ activeView }) => {
   function navigate() {
       Actions.invokeAction('NavigateToView', { viewName: 'new-queues-stats'});
   }
 
   return (
       <SideLink
       showLabel={true}
       icon="Queues"
       iconActive="Queues"
       isActive={activeView === 'new-queues-stats'}
       onClick={navigate}>
       Queues Stats
       </SideLink>
   )
}
export default QueuesStatsNavButton;