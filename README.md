# eslint-plugin-dabapps

**Custom DabApps ESLint rules**

## Installation

```shell
npm i eslint-plugin-dabapps -D
```

## Config

Include the plugin in your eslint config:

```json
{
  "plugins": ["dabapps"]
}
```

Enable some rules:

```json
{
  "rules": {
    "dabapps/no-relative-parent-import": 2
  }
}
```

## Rules

### no-relative-parent-import

Prevents the use of `../relative-parent` imports.
