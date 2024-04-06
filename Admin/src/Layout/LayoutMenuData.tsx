



import React, { useEffect, useState } from "react";

const Navdata = () => {
    //state data
    const [isInvoiceManagement, setIsInvoiceManagement] = useState(false);

    const [isAuthentication, setIsAuthentication] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isProducts, setIsProducts] = useState(false);
    const [isReport, setIsReport] = useState(false);
    const [isTransaction, setIsTransaction] = useState(false);
    
    // Components
    const [isBootstrapUi, setIsBootstrapUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);



    const [isOrder, setIsOrder] = useState(false);
    
    const [isAuth, setIsAuth] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id: any = item.getAttribute("sub-items");
                var menusId = document.getElementById(id);
                if (menusId){
                    (menusId.parentElement as HTMLElement).classList.remove("show");
                }
            });
            e.target.classList.add("active");
        }
    }
    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');

        
        if (iscurrentState !== 'Invoice Management') {
            setIsInvoiceManagement(false);
        }
        
        if (iscurrentState !== 'Authentication') {
            setIsAuthentication(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'Bootstrap UI') {
            setIsBootstrapUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        // if (iscurrentState !== 'Products') {
        //     setIsProducts(false);
        // }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }


        if (iscurrentState !== 'Orders') {
            setIsOrder(false);
        }

        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
    }, [
        iscurrentState,       
        isInvoiceManagement,        
        isOrder,        
        isAuth,
        isProducts,
        isReport,
        isMultiLevel,
        isAuthentication,
        isPages,
        isBootstrapUi,
        isAdvanceUi,        
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps
    ]);

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },        
        {
            id: "dashboard",
            label: "Dashboard",
            icon: "las la-house-damage",
            link: "/dashboard",           

        },
        {
            label: "Pages",
            isHeader: true,
        },
        
        {
            id: "invoiceManagement",
            label: "Invoices Management",
            icon: "las la-file-invoice",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsInvoiceManagement(!isInvoiceManagement);
                setIscurrentState('Invoice Management');
                updateIconSidebar(e);
            },
            stateVariables: isInvoiceManagement,
            subItems: [
                { id: 1, label: "Invoice", link: "/invoice", parentId: "invoiceManagement" },
                // { id: 2, label: "Add Invoice", link: "/invoice-add", parentId: "invoiceManagement" },
                // { id: 2, label: "Invoice Details", link: "/invoice-details", parentId: "invoiceManagement" },
                { id: 7, label: "Users", link: "/user", parentId: "invoiceManagement" },
            ],
        },
        
        // {
        //     id: "authentication",
        //     label: "Authentication",
        //     icon: "las la-cog",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsAuthentication(!isAuthentication);
        //         setIscurrentState('Authentication');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isAuthentication,
        //     subItems: [
        //         {
        //             id: "signin",
        //             label: "Sign In",
        //             link: "/auth-signin",
        //             parentId: "authentication"
        //         },
        //         {
        //             id: "sign up",
        //             label: "Sign Up",
        //             link: "/auth-signup",
        //             parentId: "authentication"
        //         },
        //         {
        //             id: "password-reset",
        //             label: "Password Reset",
        //             link: "/auth-pass-reset",
        //             parentId: "authentication"
        //         },      
        //         {
        //             id: "lock-screen",
        //             label: "Lock Screen",
        //             link: "/auth-lockscreen",
        //             parentId: "authentication"
        //         },             
        //     ],
        // },
        
        // {
        //     label: "Components",
        //     isHeader: true,
        // },
        // {
        //     id: "bootstrapui",
        //     label: "Bootstrap UI",
        //     icon: "las la-pen-nib",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsBootstrapUi(!isBootstrapUi);
        //         setIscurrentState('Bootstrap UI');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isBootstrapUi,
        //     subItems: [
        //         {
        //             id: "alerts",
        //             label: "Alerts",
        //             link: "/ui-alerts",
        //             parentId: "boostrapui",
        //         },
        //         { id: 2, label: "Badges", link: "/ui-badges", parentId: "boostrapui" },
        //         { id: 3, label: "Buttons", link: "/ui-buttons", parentId: "boostrapui" },
        //         { id: 4, label: "Colors", link: "/ui-colors", parentId: "boostrapui" },
        //         { id: 5, label: "Cards", link: "/ui-cards", parentId: "boostrapui" },
        //         { id: 6, label: "Carousel", link: "/ui-carousel", parentId: "boostrapui" },
        //         { id: 7, label: "Dropdowns", link: "/ui-dropdowns", parentId: "boostrapui" },
        //         { id: 8, label: "Grid", link: "/ui-grid", parentId: "boostrapui" },
        //         { id: 9, label: "Images", link: "/ui-images", parentId: "boostrapui" },
        //         { id: 10, label: "Tabs", link: "/ui-tabs", parentId: "boostrapui" },
        //         { id: 11, label: "Accordions & Collapse", link: "/ui-accordions", parentId: "boostrapui" },
        //         { id: 12, label: "Modals", link: "/ui-modals", parentId: "boostrapui" },
        //         { id: 13, label: "Offcanvas", link: "/ui-offcanvas", parentId: "boostrapui" },
        //         { id: 14, label: "Placeholders", link: "/ui-placeholders", parentId: "boostrapui" },
        //         { id: 15, label: "Progress", link: "/ui-progress", parentId: "boostrapui" },
        //         { id: 16, label: "Notifications", link: "/ui-notifications", parentId: "boostrapui" },
        //         { id: 17, label: "Media Object", link: "/ui-media", parentId: "boostrapui" },
        //         { id: 18, label: "Embed Video", link: "/ui-embed-video", parentId: "boostrapui" },
        //         { id: 19, label: "Typography", link: "/ui-typography", parentId: "boostrapui" },
        //         { id: 20, label: "Lists", link: "/ui-lists", parentId: "boostrapui" },
        //         { id: 22, label: "General", link: "/ui-general", parentId: "boostrapui" },
        //         { id: 23, label: "Utilities", link: "/ui-utilities", parentId: "boostrapui" },


        //     ],
        // },
        // {
        //     id: "advanceui",
        //     label: "Advance UI",
        //     icon: "las la-share-alt",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsAdvanceUi(!isAdvanceUi);
        //         setIscurrentState('AdvanceUi');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isAdvanceUi,
        //     subItems: [
        //         { id: 1, label: "Scrollbar", link: "/advance-ui-scrollbar", parentId: "advanceui" },
        //         { id: 2, label: "Swiper Slider", link: "/advance-ui-swiper", parentId: "advanceui" },
        //         { id: 3, label: "Ratings", link: "/advance-ui-ratings", parentId: "advanceui" },
        //         { id: 4, label: "Highlight", link: "/advance-ui-highlight", parentId: "advanceui" },
        //     ],
        // },
        
        // {
        //     id: "forms",
        //     label: "Forms",
        //     icon: "lab la-wpforms",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsForms(!isForms);
        //         setIscurrentState('Forms');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isForms,
        //     subItems: [
        //         {
        //             id: "basicElements",
        //             label: "Basic Elements",
        //             link: "/forms-elements",
        //             parentId: "forms",
        //         },
        //         { id: 2, label: "Form Select", link: "/forms-select", parentId: "forms" },
        //         { id: 3, label: "Checkboxs & Radios", link: "/forms-checkboxs-radios", parentId: "forms" },
        //         { id: 4, label: "Pickers", link: "/forms-pickers", parentId: "forms" },
        //         { id: 5, label: "Input Masks", link: "/forms-masks", parentId: "forms" },
        //         { id: 6, label: "Advanced", link: "/forms-advanced", parentId: "forms" },
        //         { id: 7, label: "Validation", link: "/forms-validation", parentId: "forms" },
        //         { id: 8, label: "Wizard", link: "/forms-wizard", parentId: "forms" },
        //         { id: 9, label: "Editors", link: "/forms-editors", parentId: "forms" },
        //         { id: 10, label: "File Uploads", link: "/forms-file-uploads", parentId: "forms" },
        //         { id: 11, label: "Form Layouts", link: "/forms-layouts", parentId: "forms" },
        //     ],
        // },
        // {
        //     id: "tables",
        //     label: "Tables",
        //     icon: "las la-table",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsTables(!isTables);
        //         setIscurrentState('Tables');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isTables,
        //     subItems: [
        //         { id: "basicTables", label: "Basic Tables",  link: "/tables-basic",parentId: "tables"},
        //         { id: 2, label: "React Tables", link: "/tables-react", parentId: "tables" },
        //     ],
        // },
        // {
        //     id: "apexcharts",
        //     label: "Apexcharts",
        //     icon: "las la-chart-pie",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsCharts(!isCharts);
        //         setIscurrentState('Charts');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isCharts,
        //     subItems: [
        //         {
        //             id: "line",
        //             label: "Line",
        //             link: "/charts-apex-line",
        //             parentId: "apexcharts",
        //         },
        //         { id: 2, label: "Area", link: "/charts-apex-area", parentId: "apexcharts" },
        //         { id: 3, label: "Column", link: "/charts-apex-column", parentId: "apexcharts" },
        //         { id: 4, label: "Bar", link: "/charts-apex-bar", parentId: "apexcharts" },
        //         { id: 5, label: "Mixed", link: "/charts-apex-mixed", parentId: "apexcharts" },
        //         { id: 6, label: "Timeline", link: "/charts-apex-timeline", parentId: "apexcharts" },
        //         { id: 7, label: "Candlestick", link: "/charts-apex-candlestick", parentId: "apexcharts" },
        //         { id: 8, label: "Boxplot", link: "/charts-apex-boxplot", parentId: "apexcharts" },
        //         { id: 9, label: "Bubble", link: "/charts-apex-bubble", parentId: "apexcharts" },
        //         { id: 10, label: "Scatter", link: "/charts-apex-scatter", parentId: "apexcharts" },
        //         { id: 11, label: "Heatmap", link: "/charts-apex-heatmap", parentId: "apexcharts" },
        //         { id: 12, label: "Treemap", link: "/charts-apex-treemap", parentId: "apexcharts" },
        //         { id: 13, label: "Pie", link: "/charts-apex-pie", parentId: "apexcharts" },
        //         { id: 14, label: "Radialbar", link: "/charts-apex-radialbar", parentId: "apexcharts" },
        //         { id: 15, label: "Radar", link: "/charts-apex-radar", parentId: "apexcharts" },
        //         { id: 16, label: "Polar Area", link: "/charts-apex-polar", parentId: "apexcharts" },
        //     ],
        // },
        // {
        //     id: "icons",
        //     label: "Icons",
        //     icon: "las la-gift",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsIcons(!isIcons);
        //         setIscurrentState('Icons');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isIcons,
        //     subItems: [
        //         {
        //             id: "remix",
        //             label: "Remix",
        //             link: "/icons-remix",
        //             parentId: "icons",
        //         },
        //         { id: 2, label: "BoxIcons", link: "/icons-boxicons", parentId: "icons" },
        //         { id: 3, label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
        //         { id: 4, label: "Bootstrap", link: "/icons-bootstrap", parentId: "icons" }
        //     ],
        // },
        // {
        //     id: "maps",
        //     label: "Maps",
        //     icon: "las la-map-marked",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsMaps(!isMaps);
        //         setIscurrentState('Maps');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isMaps,
        //     subItems: [
        //         {
        //             id: "googleMaps",
        //             label: "Google",
        //             link: "/maps-google",
        //             parentId: "maps",
        //         }
        //     ],
        // },

        // {
        //     id: "multilevel",
        //     label: "Multi Level",
        //     icon: "las la-share-square",
        //     link: "/#",
        //     click: function (e: any) {
        //         e.preventDefault();
        //         setIsMultiLevel(!isMultiLevel);
        //         setIscurrentState('MuliLevel');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isMultiLevel,
        //     subItems: [
        //         { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
        //         {
        //             id: "level1.2",
        //             label: "Level 1.2",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e: any) {
        //                 e.preventDefault();
        //                 setIsLevel1(!isLevel1);
        //             },
        //             stateVariables: isLevel1,
        //             childItems: [
        //                 { id: 1, label: "Level 2.1", link: "/#" },
        //                 {
        //                     id: "level2.2",
        //                     label: "Level 2.2",
        //                     link: "/#",
        //                     isChildItem: true,
        //                     click: function (e: any) {
        //                         e.preventDefault();
        //                         setIsLevel2(!isLevel2);
        //                     },
        //                     stateVariables: isLevel2,
        //                     childItems: [
        //                         { id: 1, label: "Level 3.1", link: "/#" },
        //                         { id: 2, label: "Level 3.2", link: "/#" },
        //                     ]
        //                 },
        //             ]
        //         },
        //     ],
        // },

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};

export default Navdata;