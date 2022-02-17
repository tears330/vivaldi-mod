import { addStyleToHtml } from "../utils";

export const moveExtToTabbar = () => {
  const extTabElements = document.querySelector('.toolbar-extensions');
  const tabsElements = document.querySelector('#tabs-container').children;
  if (tabsElements.length === 0 || !extTabElements) {
    return;
  }

  // Set extension tab style
  extTabElements.setAttribute(
    'class',
    'toolbar toolbar-tabbar toolbar-extensions toolbar-large',
  );

  // Set hidden extension style
  addStyleToHtml(`
    .ExtensionIcon--Hidden {
      background-color: transparent !important;
    }
    .ExtensionIcon--Hidden:hover {
      background-color: transparent !important;
    }
  `)

  // Move extension tab to the end of the tabs
  tabsElements[tabsElements.length - 1].after(extTabElements);
};
