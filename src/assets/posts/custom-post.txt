We can create custom blog style articles by writing in different folders
(divided by year for instance).
The articles are written in the following way.

```
---
title: Custom post
date: 2017-06-01
page: post
paths:
  - /custom-post
  - /custom-post-alias
  - /subpath/custom-post-alias
---

An [alias](/subpath/custom-post-alias)

And another [alias](/custom-post-alias)
```
