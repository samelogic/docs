---
id: samelogic-js.elementeventprops
title: ElementEventProps interface
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@samelogic/samelogic-js](./samelogic-js.md) &gt; [ElementEventProps](./samelogic-js.elementeventprops.md)

## ElementEventProps interface

The shape of the payload for the ElementClick and ElementMouseOver events.

<b>Signature:</b>

```typescript
export interface ElementEventProps extends TriggerEventProps 
```
<b>Extends:</b> [TriggerEventProps](./samelogic-js.triggereventprops.md)

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [cssSelector](./samelogic-js.elementeventprops.cssselector.md) | string | The CSS Selector of the element that was clicked or hovered over. |
|  [delayDefaultBehavior?](./samelogic-js.elementeventprops.delaydefaultbehavior.md) | boolean | <i>(Optional)</i> If the element had a default behavior, it will be delayed until the workflow is completed. |
|  [event](./samelogic-js.elementeventprops.event.md) | 'ElementClick' &#124; 'ElementMouseOver' |  |
