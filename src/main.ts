import 'preact/devtools';
import { render } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import { html } from 'htm/preact';

function useCounter() {
    const [value, setValue] = useState(0);
    const increment = useCallback(() => {
        // throw new Error('FUCK');
        setValue(value + 1);
    }, [value]);
    return { value, increment };
}

function Counter() {
    const { value, increment } = useCounter();

    return html`
        <div>
            Counter: ${value}
            <br />
            <button onClick=${increment}>Increment</button>
        </div>
    `;
}

render(html`<${Counter} />`, document.getElementById('root') as HTMLElement);

console.log('Hello');
