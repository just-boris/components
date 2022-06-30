// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
export const MAIN_PANEL_MIN_HEIGHT = 250; // approximate height of breadcrumb, table header, and the first table row
/**
 * Estimate a default split panel size for the first render based on the document size.
 */
export function getSplitPanelDefaultSize(position: 'side' | 'bottom') {
  if (typeof document === 'undefined') {
    return 0; // render the split panel in its minimum possible size
  }
  return position === 'side' ? document.documentElement.clientWidth / 3 : document.documentElement.clientHeight / 2;
}

export function getLimitedValue(min: number, value: number, max: number) {
  if (min > max) {
    return min;
  }
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}
