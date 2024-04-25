import { Navigate } from "react-router-dom";

// Dashboard

import Dashboard from "../pages/Dashboard/Index";
import Signin from "../pages/AuthenticationInner/Signin";
import Signup from "../pages/AuthenticationInner/Signup";
import PasswordReset from "../pages/AuthenticationInner/PasswordReset";
import Lockscreen from "../pages/AuthenticationInner/Lockscreen";
import Alerts from "../pages/Components/BootstrapUI/Alert/index";
import Badges from "../pages/Components/BootstrapUI/Badges/index";
import Button from "../pages/Components/BootstrapUI/Buttons/index";
import Colors from "../pages/Components/BootstrapUI/Colors/index";
import Cards from "../pages/Components/BootstrapUI/Cards/index";
import Carousel from "../pages/Components/BootstrapUI/Carousel/index";
import DropDown from "../pages/Components/BootstrapUI/Dropdowns/index";
import Grid from "../pages/Components/BootstrapUI/Grid/index";
import Images from "../pages/Components/BootstrapUI/Images/index";
import Tabs from "../pages/Components/BootstrapUI/Tabs/index";
import AccordianCollapse from "../pages/Components/BootstrapUI/Accordion&Collapse/index";
import Modals from "../pages/Components/BootstrapUI/Modals/index";
import Offcanvas from "../pages/Components/BootstrapUI/Offcanvas/index";
import PlaceHolder from "../pages/Components/BootstrapUI/Placeholder/index";
import Progress from "../pages/Components/BootstrapUI/Progress/index";
import Notifications from "../pages/Components/BootstrapUI/Notifications/index";
import Media from "../pages/Components/BootstrapUI/MediaObject/index";
import Video from "../pages/Components/BootstrapUI/EmbededVideo/index";
import Typography from "../pages/Components/BootstrapUI/Typography/index";
import Lists from "../pages/Components/BootstrapUI/Lists/index";
import General from "../pages/Components/BootstrapUI/General/index";
import Utilities from "../pages/Components/BootstrapUI/Utilities/index";
import ScrollBar from "../pages/Components/AdvanceUI/Scrollbar/index";
import SwiperSlider from "../pages/Components/AdvanceUI/Swiper/index";
import Ratings from "../pages/Components/AdvanceUI/Ratings/index";
import HightLights from "../pages/Components/AdvanceUI/Highlight/index";
import BasicForm from "../pages/Components/Forms/BasicElements/index";
import FormSelect from "../pages/Components/Forms/FormSelect/index";
import FormCheckboxRadio from "../pages/Components/Forms/Checkbox&radio/index";
import FormPickers from "../pages/Components/Forms/Pickers/index";
import FormInputMask from "../pages/Components/Forms/InputMasks/index";
import FormAdvanced from "../pages/Components/Forms/Advanced/index";
import FormValidation from "../pages/Components/Forms/Validation/index";
import FormWizard from "../pages/Components/Forms/Wizard/index";
import EditorForm from "../pages/Components/Forms/Editors/index";
import FileUpload from "../pages/Components/Forms/FileUpload/index";
import FormLayout from "../pages/Components/Forms/Formslayout/index";
import BasicTables from "../pages/Components/Tables/BasicTable/index";
import ReactTable from "../pages/Components/Tables/ReactTable/index";
import Linechart from "../pages/Components/Apexcharts/LineChart/Index";
import RemixIcons from "../pages/Components/Icons/RemixIcon/Iconremix";
import BootstrapIcon from "../pages/Components/Icons/BootstrapIcon/BootstrapIcon";
import BoxIcons from "../pages/Components/Icons/BoxIcon/BoxIcons";
import MaterialDesign from "../pages/Components/Icons/MaterialdesignIcon/MaterialDesign";
import GoogleMap from "../pages/Components/Maps/GoogleMap/GoogleMap";
import AreaChart from "../pages/Components/Apexcharts/Area/Index";
import ColumnChart from "../pages/Components/Apexcharts/Column/Index";
import BarChart from "../pages/Components/Apexcharts/Bar/Index";
import MixedChart from "../pages/Components/Apexcharts/Mixed/Index";
import TimelineChart from "../pages/Components/Apexcharts/Timeline/Index";
import Candlestick from "../pages/Components/Apexcharts/CandleStick/Index";
import BoxPlot from "../pages/Components/Apexcharts/Boxplot/Index";
import BubbleChart from "../pages/Components/Apexcharts/Bubble/Index";
import ScatterChart from "../pages/Components/Apexcharts/Scatter/Index";
import HeatMap from "../pages/Components/Apexcharts/Heatmap/Index";
import TreemapChart from "../pages/Components/Apexcharts/Treemap/Index";
import PieChart from "../pages/Components/Apexcharts/Pie/Index";
import RadialbarChart from "../pages/Components/Apexcharts/Radialbar/Index";
import RadarChart from "../pages/Components/Apexcharts/Radar/Index";
import PolarChart from "../pages/Components/Apexcharts/PolarArea/Index";
import AddInvoice from "../pages/InvoiceManagement/AddInvoice/index";
import InvoiceDetails from "../pages/InvoiceManagement/InvoiceDetails/index";
import AddProduct from "../pages/InvoiceManagement/AddProduct";
import NewTransaction from "../pages/InvoiceManagement/NewTransaction/index";
import TransactionList from "../pages/InvoiceManagement/TransactionList/index";
import Taxes from "../pages/InvoiceManagement/Taxes/index";
import SalesReport from "../pages/InvoiceManagement/Report/SalesReport/index";
import ExpensesReport from "../pages/InvoiceManagement/Report/ExpensesReport/index";
import Invoice from "../pages/InvoiceManagement/Invoice/index";
import PaymentSummary from "../pages/InvoiceManagement/Report/PaymentSummary";
import Users from "../pages/InvoiceManagement/Users";
import ProductList from "../pages/InvoiceManagement/ProductList";
import Payments from "../pages/InvoiceManagement/Payments";

import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import ForgotPassword from "../pages/Authentication/ForgotPassword";
import Register from "../pages/Authentication/Register";
import UserProfile from "../pages/Authentication/UserProfile";


interface RouteObject {
  path: string;
  component: any;
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/index", component: <Dashboard /> },
  { path: "/dashboard", component: <Dashboard /> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  { path: "*", component: <Navigate to="/dashboard" /> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  { path: "*", component: <Navigate to="/dashboard" /> },

  { path: "/invoice", component: <Invoice /> },
  { path: "/invoice-add", component: <AddInvoice /> },
  { path: "/invoice-add/:id", component: <AddInvoice /> },
  { path: "/payment-summary", component: <PaymentSummary /> },
  { path: "/invoice-details", component: <InvoiceDetails /> },
  { path: "/product-add", component: <AddProduct /> },
  { path: "/transaction-new", component: <NewTransaction /> },
  { path: "/transaction-list", component: <TransactionList /> },
  { path: "/taxes", component: <Taxes /> },
  { path: "/sale-report", component: <SalesReport /> },
  { path: "/expenses-report", component: <ExpensesReport /> },
  { path: "/user", component: <Users /> },
  { path: "/product-list", component: <ProductList /> },
  { path: "/payments", component: <Payments /> },



    //   Bootstrap UI
    //  Alerts
    { path: "/ui-alerts", component: <Alerts /> },

    //  Badges
    { path: "/ui-badges", component: <Badges /> },

    //  Buttons
    { path: "/ui-buttons", component: <Button /> },

    //  Colors
    { path: "/ui-colors", component: <Colors /> },

    //  Cards
    { path: "/ui-cards", component: <Cards /> },

    //  Carousel
    { path: "/ui-carousel", component: <Carousel /> },

    //  Dropdowns
    { path: "/ui-dropdowns", component: <DropDown /> },

    //  Grid
    { path: "/ui-grid", component: <Grid /> },

    //  Images
    { path: "/ui-images", component: <Images /> },

    //  Tabs
    { path: "/ui-tabs", component: <Tabs /> },

    //  Accordion & Collapse
    { path: "/ui-accordions", component: <AccordianCollapse /> },

    //  Modals
    { path: "/ui-modals", component: <Modals /> },

    //  Offcanvas
    { path: "/ui-offcanvas", component: <Offcanvas /> },

    //  Placeholder
    { path: "/ui-placeholders", component: <PlaceHolder /> },

    //  Progress
    { path: "/ui-progress", component: <Progress /> },

    //  Notifications
    { path: "/ui-notifications", component: <Notifications /> },

    //  Media Object
    { path: "/ui-media", component: <Media /> },

    //  Embeded Video
    { path: "/ui-embed-video", component: <Video /> },

    //  Typography
    { path: "/ui-typography", component: <Typography /> },

    //  Lists   
    { path: "/ui-lists", component: <Lists /> },


    //  General
    { path: "/ui-general", component: <General /> },


    //  Utilities
    { path: "/ui-utilities", component: <Utilities /> },

    // Advance UI

    // Scrollbar
    { path: "/advance-ui-scrollbar", component: <ScrollBar /> },

    // Swiper Slider
    { path: "/advance-ui-swiper", component: <SwiperSlider /> },

    // Ratings
    { path: "/advance-ui-ratings", component: <Ratings /> },

    // Highlight
    { path: "/advance-ui-highlight", component: <HightLights /> },

    // Forms

    // Basic Elements
    { path: "/forms-elements", component: <BasicForm /> },

    // Form Select
    { path: "/forms-select", component: <FormSelect /> },

    // Checkboxes & Radios
    { path: "/forms-checkboxs-radios", component: <FormCheckboxRadio /> },

    // Pickers
    { path: "/forms-pickers", component: <FormPickers /> },

    // Input Masks
    { path: "/forms-masks", component: <FormInputMask /> },

    // Advanced
    { path: "/forms-advanced", component: <FormAdvanced /> },

    // { path: "/forms-range-sliders", component: <RangeSliders /> },

    

    // Validation
    { path: "/forms-validation", component: <FormValidation /> },

    // Wizard
    { path: "/forms-wizard", component: <FormWizard /> },

    // Editors
    { path: "/forms-editors", component: <EditorForm /> },

    // File Uploads
    { path: "/forms-file-uploads", component: <FileUpload /> },

    // Form Layouts
    { path: "/forms-layouts", component: <FormLayout /> },

    // Basic Tables
    { path: "/tables-basic", component: <BasicTables /> },

    // React Tables
    { path: "/tables-react", component: <ReactTable /> },

    // Remix Icon
    { path: "/icons-remix", component: <RemixIcons /> },

    // Boxicons Icon
    { path: "/icons-boxicons", component: <BoxIcons /> },

    // Material Design Icon
    { path: "/icons-materialdesign", component: <MaterialDesign /> },

    // Bootstrap Icon
    { path: "/icons-bootstrap", component: <BootstrapIcon /> },

    // Google
    // { path: "/maps-google", component: <GoogleMap /> },

    // ApexCharts

    // apex charts
  { path: "/charts-apex-area", component: <AreaChart /> },
  { path: "/charts-apex-bar", component: <BarChart /> },
  { path: "/charts-apex-boxplot", component: <BoxPlot /> },
  { path: "/charts-apex-bubble", component: <BubbleChart /> },
  { path: "/charts-apex-candlestick", component: <Candlestick /> },
  { path: "/charts-apex-column", component: <ColumnChart /> },
  { path: "/charts-apex-heatmap", component: <HeatMap /> },
  { path: "/charts-apex-line", component: <Linechart /> },
  { path: "/charts-apex-mixed", component: <MixedChart /> },
  { path: "/charts-apex-pie", component: <PieChart /> },
  { path: "/charts-apex-polar", component: <PolarChart /> },
  { path: "/charts-apex-radar", component: <RadarChart /> },
  { path: "/charts-apex-radialbar", component: <RadialbarChart /> },
  { path: "/charts-apex-scatter", component: <ScatterChart /> },
  { path: "/charts-apex-timeline", component: <TimelineChart /> },
  { path: "/charts-apex-treemap", component: <TreemapChart /> },

   //  Profile
   { path: "/user-profile", component: <UserProfile/>},

];

const publicRoutes: Array<RouteObject> = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  // { path: "/forgot-password", component: <ForgotPassword /> },
  // { path: "/register", component: <Register /> },
  
  // { path: "/auth-signin",  component: <Signin /> },
  // { path: "/auth-signup",  component: <Signup /> },
  // { path: "/auth-pass-reset",  component: <PasswordReset /> },
  // { path: "/auth-lockscreen",  component: <Lockscreen /> },

];

export { authProtectedRoutes, publicRoutes}