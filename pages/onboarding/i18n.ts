// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import type { TutorialPanelProps } from '~components/tutorial-panel';
import type { AnnotationContextProps } from '~components/annotation-context';

export const tutorialPanelStrings: TutorialPanelProps.I18nStrings = {
  labelsTaskStatus: { pending: 'Pending', 'in-progress': 'In progress', success: 'Success' },
  loadingText: 'Loading',
  tutorialListTitle: 'Choose a tutorial',
  tutorialListDescription:
    'Use our walk-through tutorials to learn how to achieve your desired objectives within Amazon Transcribe.',
  tutorialListDownloadLinkText: 'Download PDF version',
  tutorialCompletedText: 'Tutorial completed',
  labelExitTutorial: 'dismiss tutorial',
  learnMoreLinkText: 'Learn more',
  startTutorialButtonText: 'Start tutorial',
  restartTutorialButtonText: 'Restart tutorial',
  completionScreenTitle: 'Congratulations! You completed the tutorial',
  feedbackLinkText: 'Feedback',
  dismissTutorialButtonText: 'Dismiss tutorial',
  taskTitle: (taskIndex, taskTitle) => `Task ${taskIndex + 1}: ${taskTitle}`,
  stepTitle: (stepIndex, stepTitle) => `Step ${stepIndex + 1}: ${stepTitle}`,
  labelTotalSteps: totalStepCount => `Total steps: ${totalStepCount}`,
  labelLearnMoreExternalIcon: 'Opens in a new tab',
};

export const annotationContextStrings: AnnotationContextProps.I18nStrings = {
  stepCounterText: (stepIndex, totalStepCount) => `Step ${stepIndex + 1}/${totalStepCount}`,
  taskTitle: (taskIndex, taskTitle) => `Task ${taskIndex + 1}: ${taskTitle}`,
  labelHotspot: openState => (openState ? 'close annotation' : 'open annotation'),
  nextButtonText: 'Next',
  previousButtonText: 'Previous',
  finishButtonText: 'Finish',
  labelDismissAnnotation: 'dismiss annotation',
};
