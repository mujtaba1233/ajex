import React, { useEffect, useRef } from "react";
import Prism from "prismjs";

type SupportedLanguage = 'js' | 'css' | 'html';

type PrismCodeProps = {
    code: string,
    language: SupportedLanguage,
    plugins?: string[]
  };

const PrismCode = (props: PrismCodeProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        highlight();
    }, []);

    const highlight = () => {
        if (ref && ref.current) {
            Prism.highlightElement(ref.current);
        }
    };

    const { code, language } = props;
    
    return (
        <React.Fragment>
            <pre>
                <code ref={ref} className={`language-${language}`}>
                    {code.trim()}
                </code>
            </pre>
        </React.Fragment>
    );
};

export default PrismCode;

