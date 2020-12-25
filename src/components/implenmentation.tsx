/* eslint-disable no-unused-vars */
import React from "react";

const unmountTree = function (containerNode: any) {
  // Read the internal instance from a DOM node:
  // (This doesn't work yet, we will need to change mountTree() to store it.)
  const node = containerNode.firstChild;
  const rootComponent = node._internalInstance;

  // Unmount the tree and clear the container
  rootComponent.unmount();
  containerNode.innerHTML = '';
}

export default unmountTree;