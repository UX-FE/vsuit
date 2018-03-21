let code = {}

code.baseRowCol = `
    <Row>
        <Col span="24"></Col>
    </Row>
    <br/>
    <Row>
        <Col span="12"></Col>
        <Col span="12"></Col>
    </Row>
    <br/>
    <Row>
        <Col span="8"></Col>
        <Col span="8"></Col>
        <Col span="8"></Col>
    </Row>
    <br/>
    <Row>
        <Col span="6"></Col>
        <Col span="6"></Col>
        <Col span="6"></Col>
        <Col span="6"></Col>
    </Row>
    <br/>
    <Row>
        <Col span="10"></Col>
        <Col span="14"></Col>
    </Row>
`

code.gutterRowCol = `
    <Row :gutter="16">
        <Col span="6"><div>6</div></Col>
        <Col span="6"><div>6</div></Col>
        <Col span="6"><div>6</div></Col>
        <Col span="6"><div>6</div></Col>
    </Row>
`

export default code
