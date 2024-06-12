import { useState, useCallback, useEffect } from 'react';

const DiscountCodeGenerator = () => {
    const [generatedCode, setGeneratedCode] = useState<number>(0);
    const [copied, setCopied] = useState<boolean>(false);

    const generateCode = useCallback(() => {
        setGeneratedCode((prevState) => prevState + 1);
    }, []);
    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(`NEWCODE${generatedCode}`);
        setCopied(true);
    };

    useEffect(() => {
        if (copied) {
            setTimeout(() => setCopied(false), 1000);
        }
    }, [copied]);

    return (
        <div className="flex flex-col w-full gap-1">
            <div className="relative">
                <input
                    type="text"
                    id="discount-generator"
                    name="discount-generator"
                    className="block w-full p-2 text-gray-900 border border-gray-200 rounded-lg bg-white text-sm hover:cursor-not-allowed"
                    value={generatedCode ? `NEWCODE${generatedCode}` : ''}
                    disabled
                />
                <button
                    className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 hover:bg-gray-100 rounded-lg p-2 inline-flex items-center justify-center"
                    disabled={!generatedCode}
                    onClick={copyCodeToClipboard}
                >
                    <span id="copy-icon" className={copied ? "hidden" : ""}>
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="currentColor"
                             viewBox="0 0 18 20">
                            <path
                                d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                        </svg>
                    </span>
                    <span id="success-icon" className={`${copied ? "" : "hidden"} inline-flex items-center`}>
                        <svg className="w-3.5 h-3.5 text-blue-700" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                </button>
            </div>
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2"
                onClick={generateCode}
            >
                Generate Code
            </button>
        </div>
    );
};

export default DiscountCodeGenerator;
