import { createContext, useContext, useState } from "react";

const LanguageContext = createContext()

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider = ({children, ...props}) => {
    const [selectedLang, setSelectedLang] = useState('en');
    
    return (
        <LanguageContext.Provider value={{...props, selectedLang, setSelectedLang}}>{children}</LanguageContext.Provider>
    )
}