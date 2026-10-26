export interface PlaybackState {
  readonly paused: boolean;
  readonly keyboardFocus: boolean;
}

export type PlaybackEvent =
  | { type: 'toggle' }
  | { type: 'focus'; keyboard: boolean }
  | { type: 'blur' };

export const initialPlaybackState: PlaybackState = { paused: false, keyboardFocus: false };

/** 鼠标焦点不会阻止移出后的恢复；键盘暂停可以由明确的播放操作解除。 */
export function playbackReducer(state: PlaybackState, event: PlaybackEvent): PlaybackState {
  switch (event.type) {
    case 'toggle':
      return state.paused || state.keyboardFocus
        ? initialPlaybackState
        : { ...state, paused: true };
    case 'focus':
      return state.keyboardFocus === event.keyboard
        ? state
        : { ...state, keyboardFocus: event.keyboard };
    case 'blur':
      return state.keyboardFocus ? { ...state, keyboardFocus: false } : state;
  }
}

export function rotationStopped(state: PlaybackState, reducedMotion: boolean): boolean {
  return state.paused || state.keyboardFocus || reducedMotion;
}
