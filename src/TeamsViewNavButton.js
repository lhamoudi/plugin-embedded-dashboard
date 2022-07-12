import React from 'react';
import { SideLink, Actions } from '@twilio/flex-ui';
 
const TeamsViewNavButton = ({ activeView }) => {
   function navigate() {
       Actions.invokeAction('NavigateToView', { viewName: 'new-teams-view'});
   }
 
   return (
       <SideLink
       showLabel={true}
       icon="Agents"
       iconActive="AgentsBold"
       isActive={activeView === 'new-teams-view'}
       onClick={navigate}>
       Teams View
       </SideLink>
   )
}
export default TeamsViewNavButton;