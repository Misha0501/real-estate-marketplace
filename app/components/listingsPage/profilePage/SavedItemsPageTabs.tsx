'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@tremor/react";
import { useState } from "react";
import { useAuthContext } from "@/app/context/AuthContext";
import { SavedListings } from "@/app/components/listingsPage/profilePage/SavedListings";
import { SavedSearches } from "@/app/components/listingsPage/profilePage/SavedSearches";

export const SavedItemsPageTabs = () => {
    const {authToken} = useAuthContext()
    const handleTabChange = (tabIndex: number) => {
        console.log("Tab changed")
    }
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    return (
      <div className="w-full">
          <TabGroup onIndexChange={handleTabChange}>
              <TabList className="space-x-0 w-min">
                  <Tab
                    className={"ui-selected:bg-gray-100 ui-selected:rounded-t-lg w-full justify-center px-4 pt-3"}>Properties</Tab>
                  <Tab
                    className={"ui-selected:bg-gray-100 ui-selected:rounded-t-lg w-full justify-center px-4 pt-3"}>Searches</Tab>
              </TabList>
              <TabPanels>
                  <TabPanel>
                      <SavedListings />
                  </TabPanel>
                  <TabPanel>
                      <SavedSearches />
                  </TabPanel>
              </TabPanels>
          </TabGroup>
      </div>
    );
}