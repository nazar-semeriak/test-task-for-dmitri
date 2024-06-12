import type { ChangeEvent } from 'react';
import { useState } from 'react';

const validateDiscountCode = (code: string) => {
    return /^[A-Z]{5,10}[0-9]{1,4}$/.test(code);
};

const DiscountCodeInputField = () => {
    const [discountCode, setDiscountCode] = useState<string>('');

    const handleDiscountCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDiscountCode(e.target.value);
    };

    const borderColor = discountCode ? validateDiscountCode(discountCode) ? 'green' : 'red' : undefined;

    return (
        <input
            type="text"
            id="discount-code-input"
            name="discount-code-input"
            className={`block w-full p-2 text-gray-900 border border-${borderColor || "gray"}-200 rounded-lg bg-white text-sm outline-none focus:ring-${borderColor || "blue"}-600 focus:border-${borderColor || "blue"}-600`}
            value={discountCode}
            onChange={handleDiscountCodeChange}
        />
    );
};

export default DiscountCodeInputField;
