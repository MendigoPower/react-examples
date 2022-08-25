# TypeScript

## What is TypeScript?

- Open source language and is a superset of JavaScript
- Offers additional features to JS including static types
- Using types is completely **optional**
- Compiles down to regular JS
- Can be used for frontend or backend
- Includes most features from ES6 and ES7

## Dynamic vs Static Typing

In dynamically typed languages, the types are associated with run-time values and not named explicitly in your code

In static typed languages, you explicitly assign types to variables, function parameters, return values, etc

> Static examples: Java, C, C++

> Dynamic examples: JS, Python, Ruby, PHP

## When to use it?

- Open Source Projects
- Scalable projects

## TypeScript with React

```
npx create-react-app appName --template typescript
```

## JavaScript vs TypeScript

### Variables

```js
const name = 'Arthur';
const age = 31;
const isLogged = true;
const hobbies = ['soccer', 'swimming', 'hiking'];
```

```ts
const name: string = 'Arthur';
const age: number = 31;
const isLogged: boolean = true;
const hobbies: string[] = ['soccer', 'swimming', 'hiking'];
```

### Functions

```js
const addHobby = (newHobby) => {
  hobbies.push(newHobby);
};
```

```ts
const addHobby = (newHobby: string): void => {
  hobbies.push(newHobby);
};
```

### Components

```js
const App = () => {
  return <div className='App'></div>;
};
```

```tsx
import { FC } from 'react';
const App: FC = () => {
  return <div className='App'></div>;
};
```

### Props

```js
const Person = (props) => {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h1>Email:{props.email || 'No email registered.'}</h1>
    </div>
  );
};
```

```tsx
import { FC } from 'react';

interface IPersonProps {
  name: string;
  email?: string;
}

const Person: FC<IPersonProps> = (props) => {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h1>Email:{props.email || 'No email registered.'}</h1>
    </div>
  );
};
```

### useState

```js
const [input, setInput] = useState(null);
```

```tsx
const [input, setInput] = useState<string | null>(null);
```

### Events

```js
const Form = () => {
  const [input, setInput] = useState(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form>
      <input type='text' value={input} onChange={handleChange} />
    </form>
  );
};
```

```tsx
import { FC, ChangeEvent } from 'react';
const Form: FC = () => {
  const [input, setInput] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <form>
      <input type='text' value={input} onChange={handleChange} />
    </form>
  );
};
```

### Enum

```ts
enum Colors{
    primaryColor = '#fff'
    secondaryColor = '#000'
}
```

### Type

```ts
type SizeType = 'small' | 'medium' | 'large';
//correct
const pizzaSize: SizeType = 'large';
//wrong
const pizzaSize: SizeType = 'extra large';
```

## Exercise - OrderPizza

```
Pizza Place<h1>
<form>
  Client Name:<input:text>
  Toppings:<input:text>Add<button>
  Size:<input:radio>[small,medium,large]
  Total:$<p>
  Place order<button>
</form>
<table>
Order ID<th>
Client<th>
Total<th>
Order Status<th>
Next Step<button><th>
```

- Create a `form` to take orders from users.
- Add button to change the status of the order. For example: `Order placed`, `Pizza in the oven`, `Ready to pick up`.
- Update price for every change in the form
- Add order to the table after submit
