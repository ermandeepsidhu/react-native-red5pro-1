import { NativeModules } from 'react-native'
import R5PublishType from '../enum/R5VideoView.publishtype'
const { R5VideoViewManager } = NativeModules

export const subscribe = (handle, streamName) => R5VideoViewManager.subscribe(streamName)
export const unsubscribe = (handle) => R5VideoViewManager.unsubscribe()
export const publish = (handle, streamName, streamType = R5PublishType.LIVE) => R5VideoViewManager.publish(streamName, streamType)
export const unpublish = (handle) => R5VideoViewManager.unpublish()
export const swapCamera = (handle) => R5VideoViewManager.swapCamera()
export const updateScaleMode = (handle, scale) => R5VideoViewManager.updateScaleMode(scale)

