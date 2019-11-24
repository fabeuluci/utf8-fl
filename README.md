utf8-fl
====

Simple utf8 encoder/decoder which using TextEncoder/TextDecoder classes.

Example
---

```typescript
import {Utf8} from "utf8-fl";

let text = "Some text";

let array = Utf8.encode(text);
let res = Utf8.decode(array);

console.log(text == res, text, array, res);
```

License
---

The MIT License (MIT)
