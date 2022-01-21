import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  margin: 0 0 4px;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 8px;
  user-select: none;
  cursor: pointer;
  z-index: 9999;
  background-color: white;
  width: 100%;
  margin-top: 16px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
  }
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  min-height: 40vh;
  border: 1px solid #ccc;
  box-shadow: 0 0 .3em rgba(0, 0, 0, .3);
  padding: 16px;
  margin-top: -5px;
  display: none;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
