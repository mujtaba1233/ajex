import PrismCode from "../../../../Common/Prisam";

// Popovers
const popoversCode =
`
<!-- Popovers -->
<div className="hstack flex-wrap gap-2">
    <OverlayTrigger trigger="click" placement="top" overlay={<Popover id="popover-positioned-top"> <Popover.Header as="h3">"Popover top"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
        <Button variant="light">Popover on top</Button>
    </OverlayTrigger>

    <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="popover-positioned-right"> <Popover.Header as="h3">"Popover right"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
        <Button variant="light">Popover on right</Button>
    </OverlayTrigger>

    <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover id="popover-positioned-bottom"> <Popover.Header as="h3">"Popover bottom"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
        <Button variant="light">Popover on bottom</Button>
    </OverlayTrigger>

    <OverlayTrigger trigger="click" placement="left" overlay={<Popover id="popover-positioned-left"> <Popover.Header as="h3">"Popover left"</Popover.Header> <Popover.Body> Vivamus sagittis lacus vel augue laoreet rutrum faucibus. </Popover.Body> </Popover>}>
        <Button variant="light">Popover on left</Button>
    </OverlayTrigger>

    <OverlayTrigger trigger="click" placement="right" overlay={<Popover id="popover-positioned-right"> <Popover.Header as="h3">"Dismissible popover   "</Popover.Header> <Popover.Body> And here's some amazing content. It's very engaging. Right?" </Popover.Body> </Popover>}>
        <Button variant="success">Dismissible popover</Button>
    </OverlayTrigger>
</div>
`;

const PopoversExample = () => (
    <PrismCode
        code={popoversCode}
        language={("js")}
        plugins={["line-numbers"]}
    />
);



export { PopoversExample };