import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { get } from 'lodash';

// import Images
import flagus from "../assets/images/flags/us.svg";

//i18n
import i18n from "../Common/i18n";
import languages from "../Common/data/languages";

const Language = () => {

    const [selectedLang, setSelectedLang] = useState<any>("");

    useEffect(() => {
        const currentLanguage = localStorage.getItem("I18N_LANGUAGE");
        setSelectedLang(currentLanguage);
    }, []);

    const changeLanguageAction = (lang: any) => {
        //set language as i18n
        i18n.changeLanguage(lang);
        localStorage.setItem("I18N_LANGUAGE", lang);
        setSelectedLang(lang);
    };

    return (
        <React.Fragment>
            <Dropdown className="ms-1 topbar-head-dropdown header-item">
                <Dropdown.Toggle as='button' type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle arrow-none">
                    <img
                        src={get(languages, `${selectedLang}.flag`) || flagus}
                        id="header-lang-img"
                        alt="Header Language"
                        height="20"
                        className="rounded"
                    />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end">
                    {Object.keys(languages).map(key => (
                        <Dropdown.Item
                            key={key}
                            onClick={() => changeLanguageAction(key)}
                            className={`notify-item language ${selectedLang === key ? "active" : "none"}`}
                        >
                            <img
                                src={get(languages, `${key}.flag`) || flagus}
                                alt="Ajex"
                                className="me-2 rounded"
                                height="18"
                            />
                            <span className="align-middle">
                                {get(languages, `${key}.label`)}
                            </span>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    );
};

export default Language;