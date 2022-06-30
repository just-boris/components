// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { screen } from '@testing-library/react';
import createWrapper from '../../../lib/components/test-utils/dom';
import { i18nStrings } from './common';
import { renderCodeEditor } from './util';

function submitPreferences() {
  screen.getByText(i18nStrings.preferencesModalConfirm).click();
}

function cancelPreferences() {
  screen.getByText(i18nStrings.preferencesModalCancel).click();
}

function findWrapLinesCheckbox() {
  return createWrapper().findModal()!.findContent().findCheckbox()!;
}

test('should not render modal when preferences are not displayed', () => {
  const { wrapper } = renderCodeEditor({});
  expect(createWrapper().findModal()).toBeFalsy();
  wrapper.findSettingsButton()!.click();
  expect(createWrapper().findModal()).toBeTruthy();
  cancelPreferences();
  expect(createWrapper().findModal()).toBeFalsy();
});

test('should change wrap lines preference via modal', () => {
  const onPreferencesChange = jest.fn();
  const { wrapper } = renderCodeEditor({ onPreferencesChange: event => onPreferencesChange(event.detail) });
  wrapper.findSettingsButton()!.click();
  const checkbox = findWrapLinesCheckbox();
  // this preference is enabled by default
  expect(checkbox.findNativeInput().getElement()).toBeChecked();
  checkbox.findLabel().click();
  expect(checkbox.findNativeInput().getElement()).not.toBeChecked();
  submitPreferences();
  expect(onPreferencesChange).toHaveBeenCalledWith({ theme: 'dawn', wrapLines: false });
});

test('allows to set wrap lines to false by default', () => {
  const onPreferencesChange = jest.fn();
  const { wrapper } = renderCodeEditor({
    onPreferencesChange: event => onPreferencesChange(event.detail),
    preferences: { wrapLines: false },
  });
  wrapper.findSettingsButton()!.click();
  const checkbox = findWrapLinesCheckbox();
  expect(checkbox.findNativeInput().getElement()).not.toBeChecked();
});

test('should change syntax theme preference via modal', () => {
  const onPreferencesChange = jest.fn();
  const { wrapper } = renderCodeEditor({ onPreferencesChange: event => onPreferencesChange(event.detail) });
  wrapper.findSettingsButton()!.click();
  const select = createWrapper().findModal()!.findContent().findSelect()!;
  expect(select.findTrigger().getElement()).toHaveTextContent('Dawn');
  select.openDropdown();
  select.selectOptionByValue('chrome');
  expect(select.findTrigger().getElement()).toHaveTextContent('Chrome');
  submitPreferences();
  expect(onPreferencesChange).toHaveBeenCalledWith({ theme: 'chrome', wrapLines: true });
});

test('should reset pending changes when modal dismisses', () => {
  const onPreferencesChange = jest.fn();
  const { wrapper } = renderCodeEditor({ onPreferencesChange: event => onPreferencesChange(event.detail) });
  wrapper.findSettingsButton()!.click();
  const checkbox = findWrapLinesCheckbox();
  checkbox.findLabel().click();
  expect(checkbox.findNativeInput().getElement()).not.toBeChecked();
  cancelPreferences();
  wrapper.findSettingsButton()!.click();
  expect(findWrapLinesCheckbox().findNativeInput().getElement()).toBeChecked();
  expect(onPreferencesChange).not.toHaveBeenCalled();
});
