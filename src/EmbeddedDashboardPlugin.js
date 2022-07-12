import React from "react";
import { Flex, QueuesStatsView, TeamsView, View } from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";
import QueuesStatsNavButton from "./QueuesStatsNavButton";
import TeamsViewNavButton from "./TeamsViewNavButton";

const PLUGIN_NAME = "EmbeddedDashboardPlugin";

export default class EmbeddedDashboardPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    flex.CRMContainer.Content.replace(
      <flex.Insights.Dashboard key="some-key" dashboardId="a770a674769b" />
    );


    //Teams View side nav button and new view
    flex.SideNav.Content.add(
      <TeamsViewNavButton key="teams-view-sidenav-button" />,
      { sortOrder: 2 }
    );

    flex.ViewCollection.Content.add(
      <View name="new-teams-view" key="new-teams-view">
        <TeamsView />
      </View>
    );

    //Queue Stats side nav button and new view
    flex.SideNav.Content.add(
      <QueuesStatsNavButton key="queues-stats-sidenav-button" />,
      { sortOrder: 3 }
    );

    flex.ViewCollection.Content.add(
      <View name="new-queues-stats" key="new-queues-stats">
        <QueuesStatsView />
      </View>
    );
  }
}
