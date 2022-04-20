# React Brasileirão Logos

![npm](https://img.shields.io/npm/v/react-brasileirao-logos)


<img width="1390" alt="Captura de Tela 2022-04-20 às 19 12 32" src="https://user-images.githubusercontent.com/29429658/164333641-9dbd4292-f8b9-46d5-8c2c-44a8e1c5fd11.png">


## Install

```shell
$ npm i react-brasileirao-logos
```

## Usage

```js
import React from "react";
import { FLA } from "react-brasileirao-logos";

const Example = () => {
  return <FLA />; // Loads the Flamengo logo
};

export default Example;
```

or include all icons

```js

import React from "react";
import * as Icons from "react-brasileirao-logos";

const Example = () => {
  return <Icons.FLA />; // Loads the Flamengo logo
};

export default Example;
```

## Configuration

Size can be easily configured (Default of 100px)

```js
import React from "react";
import { FLA } from "react-brasileirao-logos";

const Example = () => {
  return (
    <div>
      <FLA size={60} />
      <FLA /> // Default of 100px
      <FLA size={140} />
    </div>
  );
};

export default Example;

```


Results in
<img width="1383" alt="Captura de Tela 2022-04-20 às 19 14 10" src="https://user-images.githubusercontent.com/29429658/164333809-177276b1-ca9f-4331-aa8e-7f933264c3db.png">

