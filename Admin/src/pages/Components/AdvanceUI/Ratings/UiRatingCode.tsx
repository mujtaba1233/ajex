import PrismCode from "../../../../Common/Prisam";

// Basic Rater	

const basicRaterCode =
    `
<Rating size={25} />
`;

const BasicRaterExample = () => (
    <PrismCode
        code={basicRaterCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Rater with Step
const raterWithStepCode =
    `
    <Rating
        size={25}
        initialValue={3}
        transition
        onClick={function noRefCheck() { }}
  />
`;

const RaterWithStepExample = () => (
    <PrismCode
        code={raterWithStepCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Custom Messages
const customMsgCode =
    `
    <Rating
        size={25}
        fillColorArray={[
          '#f14f45',
          '#f16c45',
          '#f18845',
          '#f1b345',
          '#f1d045'
        ]}
        transition
        onClick={function noRefCheck() { }}
  />
`;

const CustomMsgExample = () => (
    <PrismCode
        code={customMsgCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Example with unlimited number of stars. readOnly option is set to true.
const readOnlyRaterCode =
    `
    <Rating
        size={25}
        showTooltip
        onClick={function noRefCheck() { }}
  />
`;

const ReadOnlyRaterExample = () => (
    <PrismCode
        code={readOnlyRaterCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// On Hover Event
const onHoverCode =
    `
    <Rating
        size={25}
        showTooltip
        tooltipArray={[
          'Terrible',
          'Bad',
          'Average',
          'Great',
          'Prefect'
        ]}
        onClick={function noRefCheck() { }}
  />
`;

const OnHoverExample = () => (
    <PrismCode
        code={onHoverCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


// Clear/Reset Rater	
const reasetRaterCode =
    `
    <Rating
        size={25}
        initialValue={2}
        readonly
        onClick={function noRefCheck() { }}
  />
`;

const ReasetRaterExample = () => (
    <PrismCode
        code={reasetRaterCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// fraction Rate	
const fractionRate =
    `
    <Rating
        size={25}
        allowFraction
        showTooltip
        tooltipArray={[
          'Terrible',
          'Terrible+',
          'Bad',
          'Bad+',
          'Average',
          'Average+',
          'Great',
          'Great+',
          'Awesome',
          'Awesome+'
        ]}
        transition
        onClick={function noRefCheck() { }}
  />
`;

const FractionRate = () => (
    <PrismCode
        code={fractionRate}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Disable Hover	
const disableHover =
    `
    <Rating size={25} onClick={function noRefCheck() { }} />
`;

const DisableHover = () => (
    <PrismCode
        code={disableHover}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// Disable Hover	
const disableFillHover =
    `
    <Rating
       disableFillHover
       size={25}
       onClick={function noRefCheck() { }}
     />
`;

const DisableFillHover = () => (
    <PrismCode
        code={disableFillHover}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// RTLSupport	
const rTLSupport =
    `
    <Rating
       disableFillHover
       size={25}
       onClick={function noRefCheck() { }}
     />
`;

const RTLSupport = () => (
    <PrismCode
        code={rTLSupport}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// OnPointerEnter	
const onPointerEnter =
    `
    <Rating
        size={25}
        onClick={function noRefCheck() { }}
        onPointerEnter={function noRefCheck() { }}
      />
`;

const OnPointerEnter = () => (
    <PrismCode
        code={onPointerEnter}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// OnPointerLeave	
const onPointerLeave =
    `
    <Rating
        size={25}
        onClick={function noRefCheck() { }}
        onPointerLeave={function noRefCheck() { }}
  />
`;

const OnPointerLeave = () => (
    <PrismCode
        code={onPointerLeave}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// OnPointerMove	
const onPointerMove =
    `
    <Rating
        size={25}
        onClick={function noRefCheck() { }}
        onPointerMove={function noRefCheck() { }}
  />
`;

const OnPointerMove = () => (
    <PrismCode
        code={onPointerMove}
        language={("js")}
        plugins={["line-numbers"]}
    />
);

// ResetRating	
const resetRating =
    `
    <Rating
       size={25}
       initialValue={0}
       onClick={function noRefCheck() { }}
     />
     <Button 
            onClick={function noRefCheck() { }} 
            style={{ marginLeft: 10 }}> 
        reset</Button>
`;

const ResetRating = () => (
    <PrismCode
        code={resetRating}
        language={("js")}
        plugins={["line-numbers"]}
    />
);


export {
    BasicRaterExample, RaterWithStepExample, CustomMsgExample, ReadOnlyRaterExample, OnHoverExample, ReasetRaterExample, FractionRate, DisableHover,
    DisableFillHover, RTLSupport, OnPointerEnter, OnPointerLeave, OnPointerMove, ResetRating
};