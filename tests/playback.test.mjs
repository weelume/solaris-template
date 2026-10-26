import { test } from 'node:test';
import assert from 'node:assert/strict';
import { initialPlaybackState, playbackReducer, rotationStopped } from '../src/features/site-templates/catalog/solaris/components/playback.ts';

test('鼠标点击暂停再播放，保留按钮焦点时也能恢复', () => {
  let state = playbackReducer(initialPlaybackState, { type: 'focus', keyboard: false });
  state = playbackReducer(state, { type: 'toggle' });
  assert.equal(rotationStopped(state, false), true);
  state = playbackReducer(state, { type: 'toggle' });
  assert.equal(rotationStopped(state, false), false);
});

test('键盘进入时暂停，明确播放不要求先丢失焦点', () => {
  const focused = playbackReducer(initialPlaybackState, { type: 'focus', keyboard: true });
  assert.equal(rotationStopped(focused, false), true);
  assert.equal(rotationStopped(playbackReducer(focused, { type: 'toggle' }), false), false);
  assert.deepEqual(initialPlaybackState, { paused: false, keyboardFocus: false });
});

test('移除键盘焦点只解除焦点暂停，不取消用户手动暂停', () => {
  let state = playbackReducer(initialPlaybackState, { type: 'toggle' });
  state = playbackReducer(state, { type: 'focus', keyboard: true });
  assert.equal(rotationStopped(playbackReducer(state, { type: 'blur' }), false), true);
  assert.equal(rotationStopped(playbackReducer({ paused: false, keyboardFocus: true }, { type: 'blur' }), false), false);
});

test('减少动态效果持续禁止自动播放，即使用户状态为运行', () => {
  assert.equal(rotationStopped(initialPlaybackState, true), true);
  assert.equal(rotationStopped(playbackReducer({ paused: true, keyboardFocus: true }, { type: 'toggle' }), true), true);
});
