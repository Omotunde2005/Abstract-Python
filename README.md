## Overview

The `abstract-python` library is a Python SDK for APIs by [AbstractAPI](https://www.abstractapi.com/).
It has helper classes that allow Python developers integrate these APIs easily in their apps. Read the documentation [here](https://abstract-python.vercel.app/).

It currently supports the following APIs:

- [Exchange Rates API](https://docs.abstractapi.com/exchange-rates)
- [IP Geolocation API](https://docs.abstractapi.com/ip-geolocation)
- [VAT API](https://docs.abstractapi.com/vat-validation)

## Installation

```bash
pip install abstract-python
```

## Usage

```python
from abstract_python import *

vatAPI = VatAPI()
```

## Technologies

The following technologies were used in developing this documentation:

- **Astro-starlight**: The `abstract-python` documentation was built using Astro-starlight.
- **Vale**: Used for documentation linting and style-guide enforcement
- **Vercel**: Used for deploying the documentation

## Contribute

Want to contribute to this documentation? Open an issue and the task will be assigned to you.

## Local Development

### Installation

```bash
npm install
```

### Start the local server

```bash
npm run dev
```

Open the url in the terminal to view the documentation locally.
